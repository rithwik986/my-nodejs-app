document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");

  if (card) {
    // Create a status element to show client-side JS execution
    const statusText = document.createElement("p");
    statusText.style.fontSize = "0.85rem";
    statusText.style.color = "#94a3b8";
    statusText.style.marginTop = "1.25rem";

    const loadTime = new Date().toLocaleTimeString();
    statusText.textContent = `app.js loaded successfully at ${loadTime}`;

    card.appendChild(statusText);
  }

  console.log("AWS CodeCommit deployment: app.js initialized.");
});
