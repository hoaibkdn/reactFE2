/** @format */
import InputText from './InputText';

const LoginForm = () => {
  return (
    <form>
      <InputText label='username' />
      <InputText label='password' />
    </form>
  );
};

export default LoginForm;

// Homework
// 1. onChange InputText
// 2. onSubmit: ref: username + password
// 3. validation: pressing onSubmit
// - empty: error: username/password is not empty
// - email: email is not correct
