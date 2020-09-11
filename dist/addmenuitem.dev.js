"use strict";

var addMenuItemButton = document.querySelector("#submit_new_menu");
var ul = document.querySelector(".nav");

function createButton(type) {
  // create Button for each li element whether edit or delete button
  var button;

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
  var li = document.createElement("li");
  var editButton = createButton("edit");
  var deleteButton = createButton("delete");
  li.innerHTML = content;
  li.appendChild(editButton);
  li.appendChild(deleteButton);
  return li;
}

addMenuItemButton.addEventListener("click", function () {
  var newMenuItemNameInput = document.querySelector("#new_menu");
  var newMenuItemName = newMenuItemNameInput.value;
  var li = createLi(newMenuItemName);
  ul.appendChild(li);
  newMenuItemNameInput.value = "";
}); // end addEventListener addMenuItemButton