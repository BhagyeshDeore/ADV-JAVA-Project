package com.project.utils;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintStream;
import java.io.StringWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

import javax.tools.Diagnostic;
import javax.tools.DiagnosticCollector;
import javax.tools.JavaCompiler;
import javax.tools.JavaFileObject;
import javax.tools.StandardJavaFileManager;
import javax.tools.ToolProvider;

public class CodeExecutor {
    
    
    
    public static String executeJavaCodeUsingShell(String code, String input) {
        try {
            // Capture standard output
            OutputStream outputStream = new ByteArrayOutputStream();
            PrintStream printStream = new PrintStream(outputStream);
            PrintStream oldOut = System.out;
            System.setOut(printStream);

            // Write the provided code to a temporary file
            String tempFileName = "TempSolution.java";
            try (FileWriter fileWriter = new FileWriter(tempFileName)) {
                fileWriter.write(code);
            }

            // Get a Java compiler
            JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();
            // Get a diagnostic collector to capture compilation diagnostics
            DiagnosticCollector<JavaFileObject> diagnosticCollector = new DiagnosticCollector<>();

            // Get a file manager for the compiler
            StandardJavaFileManager fileManager = compiler.getStandardFileManager(diagnosticCollector, null, null);

            // Create a compilation task
            Iterable<? extends JavaFileObject> compilationUnits = fileManager.getJavaFileObjectsFromStrings(Arrays.asList(tempFileName));
            
            //adding classpath 
            List<String> options = new ArrayList<String>();
            
            options.add("-source");
	        options.add("11");
	        options.add("-target");
	        options.add("11");
            
                    
            
            JavaCompiler.CompilationTask task = compiler.getTask(null, fileManager, diagnosticCollector, options , null, compilationUnits);

            // Perform the compilation
            boolean compilationSuccess = task.call();

            // If compilation fails, get the compilation error messages
            if (!compilationSuccess) {
                List<String> errorMessages = new ArrayList<>();
                for (Diagnostic<? extends JavaFileObject> diagnostic : diagnosticCollector.getDiagnostics()) {
                    StringWriter writer = new StringWriter();
                    writer.append("Compilation error: ");
                    writer.append(diagnostic.getMessage(null)).append(" at line ").append(String.valueOf(diagnostic.getLineNumber()));
                    errorMessages.add(writer.toString());
                }
                return String.join("\n", errorMessages);
            }

            ///////////////////////////////////////////
            String output = executeJavaProgram(input, 5000);
            ///////////////////////////////////////////
           return output;
        } catch (Exception e) {
            // If any exception occurs during code execution, return the error message
            e.printStackTrace();
        	return "Exception occurred: " + e.getMessage();
            
        }
    }
    public static String executeJavaProgram(String input, long timeLimitMillis) {
        try {
            // Command to execute the Java program
            String javaCommand = "java -cp . Solution";

            // Create ProcessBuilder instance with the command
            ProcessBuilder processBuilder = new ProcessBuilder();
            processBuilder.command("bash", "-c", javaCommand);

            // Start the process
            Process process = processBuilder.start();

            // Write input to the process
            if (input != null) {
                process.getOutputStream().write(input.getBytes());
                process.getOutputStream().flush();
            }
            //System.out.print("printing input to the java program"+input);
            // Read output from the process
            StringBuilder output = new StringBuilder();
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;

            // Read error output from the process
            StringBuilder errorOutput = new StringBuilder();
            BufferedReader errorReader = new BufferedReader(new InputStreamReader(process.getErrorStream()));

         // Create a separate thread to monitor time limit
            Thread timeLimitThread = new Thread(() -> {
                try {
                    Thread.sleep(timeLimitMillis); // Corrected line
                    if (process.isAlive()) {
                        process.destroy(); // Terminate the process if time limit is exceeded
                    }
                } catch (InterruptedException e) {
                    // Do nothing if interrupted
                }
            });

            timeLimitThread.start();

            // Wait for the process to complete
            int exitCode;
            try {
                exitCode = process.waitFor();
            } catch (InterruptedException e) {
                exitCode = -1; // Indicate an error condition
            }

            // Interrupt the time limit thread if it's not already interrupted
            if (timeLimitThread.isAlive()) {
                timeLimitThread.interrupt();
            }
            
            
//            // Check if the time limit thread interrupted the main thread, indicating time limit exceeded
//            if (process.isAlive() && timeLimitThread.isInterrupted()) {
//                return "Time limit exceeded";
//            }
            
            // Read output from the process
            while ((line = reader.readLine()) != null) {
                output.append(line).append("\n");
            }

            // Read error output from the process
            while ((line = errorReader.readLine()) != null) {
                errorOutput.append(line).append("\n");
            }
            
            if (exitCode != 0) {
            	if(exitCode == 143 )
            		return "Time limit exceeded";
                return "Exited with error code " + exitCode + "\nError Output: " + errorOutput.toString();
            }

            return output.toString();
        } catch (IOException e) {
            return "Exception occurred: " + e.getMessage();
        }
    }

    }
