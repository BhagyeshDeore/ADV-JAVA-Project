import React from 'react';

function JavaCodeOutput({ output }) {
  return (
    <div>
      <h6>Java Code Output</h6>
      {output ? (
        <pre style={{ backgroundColor: '#f2f2f2', padding: '10px', borderRadius: '5px', whiteSpace: 'pre-wrap' }}>{output}</pre>
      ) : (
        <p>No output available</p>
      )}
    </div>
  );
}

export default JavaCodeOutput;
