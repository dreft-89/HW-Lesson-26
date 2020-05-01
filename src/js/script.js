const deleteLocalStorage = () => localStorage.removeItem("Name");
const deleteButton = document
  .getElementById("reset")
  .addEventListener("click", deleteLocalStorage);
const userName = prompt('Enter your name');
const name = document.getElementById(  "user-name");

if (userName.length > 2) {
    localStorage.setItem('Name', userName);
    name.innerText = localStorage.getItem("Name")
} else {
    name.innerText = 'guest';
}
