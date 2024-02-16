package com.project.utils;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileWriter;
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
    public static String executeJavaCode(String code, String input) {
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
            options.add("-classpath");
            String currentDir = new File(".").getAbsolutePath();
            
            System.out.println("current directory :"+currentDir);
            options.add(currentDir);           
            
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


            // Load and execute the compiled code using the default class loader
            Class<?> loadedClass = Class.forName("Solution");
            loadedClass.getMethod("main", String[].class).invoke(null, (Object) new String[]{input});

            // Capture the output
            String output = outputStream.toString();

            // Restore the standard output
            System.setOut(oldOut);

            return output;
        } catch (Exception e) {
            // If any exception occurs during code execution, return the error message
            e.printStackTrace();
        	return "Exception occurred: " + e.getMessage();
            
        }
    }
}
