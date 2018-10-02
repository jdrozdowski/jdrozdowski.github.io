// Hide menu when click on an menu link

let menu_checkbox = document.getElementById("menu-checkbox");
let menu_elements = document.getElementById("menu-list").getElementsByTagName("li");

for (let i = 0, len = menu_elements.length; i < len; i++ ) {
  menu_elements[i].onclick = function() {
      menu_checkbox.checked = false;
  }
}