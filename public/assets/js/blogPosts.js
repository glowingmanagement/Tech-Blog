const createForm = $("#create-form");

const handleCreate = (event) => {
  event.preventDefault();
  const title = $("#title").val();
  const content = $("#content").val();

  console.log(title + content);
};

createForm.submit(handleCreate);
