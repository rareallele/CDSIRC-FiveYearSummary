function setIframe(clickedButton) {
    document.getElementById("figure-display").src = clickedButton.value;
    const allButtons = document.querySelectorAll("button.button");
    allButtons.forEach(function(button) {
      button.classList.remove('activeButton')
    });
    clickedButton.classList.add('activeButton');
}


function openPanel() {
    var panel = document.getElementById("panel");
    var acc = document.getElementsByClassName("accordion")[0]
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    acc.classList.toggle("active");
    /* Toggle between hiding and showing the active panel */
    if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
}
