const buyButton = document.querySelector(".buy-button");
const nameInput = document.getElementById("name");
const usernameInput = document.querySelector("#username");
const commentInput = document.querySelector("#comment");
const sendButton = document.querySelector(".comment-button");
const div = document.querySelector(".comment-form");
buyButton.addEventListener("click", function (event) {
  event.preventDefault();
  const name = nameInput.value;
  if (name.length <= 0) {
    alert("Моля въведете име");
  } else {
    alert("Здравейте " + name + ", благодарим ви за поръчката!");
  }
});
sendButton.addEventListener("click", function (event) {
  event.preventDefault();
  const username = usernameInput.value;
  const comment = commentInput.value;
  if (username.length <= 0 && comment.length <= 0) {
    alert("Въведете полетата");
  } else {
    const par1 = document.createElement("p");
    const par2 = document.createElement("p");
    const container = document.createElement("div");
    container.classList.add("review");
    par1.textContent = username;
    par2.textContent = comment;
    container.appendChild(par1);
    container.appendChild(par2);

    div.insertAdjacentElement("afterend", container);
    usernameInput.value = "";
    commentInput.value = "";
  }
});
