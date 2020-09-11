const addMenuItemButton = document.querySelector("#submit_new_menu");
const ul = document.querySelector(".nav");

function createButton(type) {
  // create Button for each li element whether edit or delete button
  let button;

  if (type === "delete") {
    button = document.createElement("button");
    button.classList.add("delete-button");
    button.innerHTML = "Delete";
  } else if (type === "edit") {
    button = document.createElement("button");
    button.classList.add("edit-button");
    button.innerHTML = "Edit";
  } else {
    console.error("You have entered wrong button type.");
  }
  return button;
}

function createLi(content) {
  // create Li element with appending buttons and content (menu item name)
  const li = document.createElement("li");

  const editButton = createButton("edit");
  const deleteButton = createButton("delete");
  li.innerHTML = content;

  li.appendChild(editButton);
  li.appendChild(deleteButton);

  return li;
}

addMenuItemButton.addEventListener("click", () => {
  const newMenuItemNameInput = document.querySelector("#new_menu");
  const newMenuItemName = newMenuItemNameInput.value;

  const li = createLi(newMenuItemName);
  ul.appendChild(li);

  newMenuItemNameInput.value = "";
}); // end addEventListener addMenuItemButton


