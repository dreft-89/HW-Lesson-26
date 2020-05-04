
const deleteLocalStorage = () => localStorage.removeItem("Name");
const deleteButton = document
  .getElementById("reset")
  .addEventListener("click", deleteLocalStorage);
const userName = prompt('Enter your name') || '';
const name = document.getElementById(  "user-name");

if (userName && userName.length > 2) {
    localStorage.setItem('Name', userName);
    name.innerText = userName
} else {
    name.innerText = 'guest';
  }

readMoreF = () => {
  const readMore = document.getElementById("more");
  const dot = document.getElementById("dots");
  const btn = document.getElementById("btntext")

  if (dot.style.display === "none") {
    dot.style.display = "inline";
    btn.innerHTML = "Read more";
    readMore.style.display = "none";
  } else {
    dot.style.display = "none";
    btn.innerHTML = "Read less";
    readMore.style.display = "inline";
  }
};
