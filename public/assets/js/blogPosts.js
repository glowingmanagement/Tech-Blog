const createForm = $("#create-form");
const updateForm = $("#update-form");
const deletePost = $("#deletePost");
const viewPost = $("#homePosts");
const postComment = $("#postComment");

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

const handleUpdate = async (event) => {
  event.preventDefault();
  const postId = $(event.target).data("id");
  const title = $(`#updateTitle${postId}`).val();
  const content = $(`#updateContent${postId}`).val();

  const payload = { title, content };

  try {
    const response = await fetch(`/api/blog/${postId}`, {
      method: "PUT",
      body: JSON.stringify(payload),
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

const handleView = (event) => {
  const postId = $(event.target).data("id");

  window.location.assign(`/post/${postId}`);
};

const handlePostComment = async (event) => {
  event.preventDefault();
  const content = $("#commentContent").val();
  const postId = $(event.target).data("id");
  const isContent = content.replace(/\s/g, "");
  const payload = { content, postId };

  if (isContent) {
    try {
      const response = await fetch(`/api/comments/`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (data.success) {
        window.location.reload();
      }
    } catch {
      renderError("comment-error", "Failed to post comment. Please try again");
    }
  } else {
    renderError("comment-error", "Please enter some text to post");
  }
};

createForm.submit(handleCreate);
// deletePost.click(handleDelete);
$("#accordion").on("click", "a.btn-danger", handleDelete);
$("#accordion").on("click", "button.update", handleUpdate);
viewPost.on("click", "button.btn", handleView);
postComment.submit(handlePostComment);
