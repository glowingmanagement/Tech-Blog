const createForm = $("#create-form");
const updateForm = $("#update-form");
const deletePost = $("#deletePost");

const validate = (title, content) => {
  // See if values contain text
  newTitle = title.replace(/\s/g, "");
  newContent = content.replace(/\s/g, "");

  if (newTitle && newContent) {
    return true;
  } else {
    return false;
  }
};

const handleCreate = async (event) => {
  event.preventDefault();
  const title = $("#title").val();
  const content = $("#content").val();

  const isValid = validate(title, content);

  if (isValid) {
    const payload = { title, content };

    const response = await fetch("/api/blog/", {
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
      renderError("blog-error", "Failed to create post. Try again.");
    }
  } else {
    renderError("blog-error", "Please fill in all fields");
  }
};

const handleDelete = async (event) => {
  const postId = $(event.target).data("id");

  try {
    const response = await fetch(`/api/blog/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.success) {
      window.location.reload();
    }
  } catch (error) {
    console.log(error.message);
  }
};

createForm.submit(handleCreate);
// deletePost.click(handleDelete);
$("#accordion").on("click", "a.btn-danger", handleDelete);
