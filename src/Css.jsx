import React from 'react';
import styles from './App.module.css';
// Corrected the import statement

export default function Css() { // Corrected the function name casing for convention
  return (
    <div>
      <h1 className={styles.helloWorld}>Hello World with style color</h1> {/* Used the specific class name */}
    </div>
  );
}
