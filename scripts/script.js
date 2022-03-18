function setIframe(clickedButton) {
    document.getElementById("figure-display").src = clickedButton.value;

    const subButtons = document.querySelectorAll("button.sub-button");

    switch (clickedButton.id) {
      case 'b1':
        clickedButton.classList.add('activeButton');      
        subButtons.forEach(function(button) {
          button.classList.remove('activeButton')
        });
        document.querySelector('button.sub-button').classList.add('activeButton');
        document.getElementById('b2').classList.remove('activeButton');
        break;

      case 'b2':
        subButtons.forEach(function(button) {
          button.classList.remove('activeButton')
        });
        document.getElementById('b1').classList.remove('activeButton');
    };

    clickedButton.classList.add('activeButton');
}

function subButtonSetIframe(clickedButton) {
    const subButtons = document.querySelectorAll("button.sub-button");
    subButtons.forEach(function(button) {
      button.classList.remove('activeButton')
    });
    clickedButton.classList.add('activeButton');
    document.getElementById("figure-display").src = clickedButton.value;
    document.getElementById("b1").classList.add('activeButton');
    document.getElementById("b2").classList.remove('activeButton');
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
