const signupForm = $("#signup-form");
const loginForm = $("#login-form");

const handleSignup = (event) => {
  event.preventDefault();
  console.log("Signup Pressed");
};

const handleLogin = (event) => {
  event.preventDefault();
  console.log("Login Pressed");
};

signupForm.submit(handleSignup);
loginForm.submit(handleLogin);
