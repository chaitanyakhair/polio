import React from 'react';

const LoginForm = () => {
  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" style={styles.input} />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f0f0f0',
    margin: '50px auto',
    padding: '30px',
    borderRadius: '5px',
    width: '400px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '12px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.2em',
  },
};

export default LoginForm;
