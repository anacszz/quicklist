document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const input = event.target.item.value;

  event.target.item.value = "";

  const newcard = document.createElement("div");
  newcard.classList.add("card");
  newcard.innerHTML = `
            <label for="items">
              <input class="checkbox" type="checkbox" name="items" />
              <span id="span-text">${input}</span>
            </label>
       
            <button class="trash-button" type="button">
              <img src="assets/trash.svg" alt="icone de lixeira" />
            </button>
          `;
  document.getElementById("container-card").appendChild(newcard);

  const trashButton = newcard.querySelector(".trash-button");

  trashButton.addEventListener("click", () => {
    newcard.remove();

    const warningContainer = document.querySelector(".warning-container");

    warningContainer.style.display = "flex";

    setTimeout(() => {
      warningContainer.style.display = "none";
    }, 1000);

    document.querySelector(".delete-button").addEventListener("click", () => {
      warningContainer.style.display = "none";
    });
  });
});