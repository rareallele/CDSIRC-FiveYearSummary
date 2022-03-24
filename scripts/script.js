function setIframe() {
  let selection = document.getElementById("fig_select").value;
  document.getElementById("figure-display").src = selection
  buttons = document.querySelector('#buttonBlock')
  switch(selection) {
    case 'Figures/subplot_all.html':
      buttons.style.display = 'flex';
      document.querySelector('.container').style.paddingTop = '85%';
      break;
    default:
      buttons.style.display = 'none';
      document.querySelector('.container').style.paddingTop = '65%';
  }
}

function subButtonSetIframe(clickedButton) {
    var subButtons = document.querySelectorAll("button.sub-button");
    subButtons.forEach(function(button) {
      button.classList.remove('activeButton')
    });
    clickedButton.classList.add('activeButton');
    document.getElementById("figure-display").src = clickedButton.value;
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
