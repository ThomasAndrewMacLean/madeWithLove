(() => {
  document.addEventListener("DOMContentLoaded", () => {
    // add footer
    const footer = document.createElement("footer");
    footer.classList.add("made-with-love-footer");
    footer.innerHTML = `<p>Made with <span class="heart">&hearts;</span> by <a target="_blank" href="thomasmaclean.be">Thomas Maclean</a></p>`;

    document.body.appendChild(footer);

    // add styling to footer

    const heart = footer.querySelector(".heart");
    heart.style.color = "red";
    // heart.style.fontSize = "1.5rem";

    const link = footer.querySelector("a");
    link.style.color = "black";
    footer.style.fontFamily = "monospace";
    footer.style.textAlign = "center";

    footer.style.position = "absolute";
    footer.style.bottom = "0";
    footer.style.width = "100%";
  });
})();
