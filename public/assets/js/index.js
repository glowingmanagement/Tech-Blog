const signupForm = $("#signup-form");
const loginForm = $("#login-form");
const logoutBtn = $("#logout-btn");

const renderError = (id, message) => {
  const errorDiv = $(`#${id}`);
  errorDiv.empty();
  errorDiv.append(`<div class="mb-3 text-center text-danger error-text">
      ${message}
    </div>`);
};
const handleSignup = async (event) => {
  event.preventDefault();
  const email = $("#email").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirmPassword").val();
  const firstName = $("#firstName").val();
  const lastName = $("#lastName").val();
  const userName = $("#userName").val();

  if (
    firstName &&
    lastName &&
    email &&
    password &&
    confirmPassword &&
    userName
  ) {
    if (password === confirmPassword) {
      try {
        const payload = { email, password, firstName, lastName, userName };

        const response = await fetch("/auth/signup", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (data.success) {
          window.location.assign("/login");
        } else {
          renderError("signup-error", "Failed to create account. Try again.");
        }
      } catch (error) {
        renderError("signup-error", "Failed to create account. Try again.");
      }
    } else {
      renderError("signup-error", "Passwords do not match. Try again.");
    }
  } else {
    renderError("signup-error", "Please complete all required fields.");
  }
};

const handleLogin = async (event) => {
  event.preventDefault();
  const email = $("#email").val();
  const password = $("#password").val();

  if (email && password) {
    try {
      const payload = {
        email,
        password,
      };

      const response = await fetch("/auth/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        window.location.assign("/dashboard");
      } else {
        renderError("login-error", "Failed to login. Try again.");
      }
    } catch (error) {
      renderError("login-error", "Failed to login. Try again.");
    }
  } else {
    renderError("login-error", "Please complete all required fields.");
  }
};

const handleLogout = async () => {
  try {
    const response = await fetch("/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      window.location.assign("/");
    }
  } catch (error) {
    console.log("Failed to logout");
  }
};

signupForm.submit(handleSignup);
loginForm.submit(handleLogin);
logoutBtn.click(handleLogout);
