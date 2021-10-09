
// smooth scroll
const btn = document.querySelectorAll('menu__link');
const fineMove = function(h) {
    let i = h || 0;
    (i < 200) ? setTimeout(function() {
        window.scrollTo(0, i);
        fineMove(i + 10);
    }, 10): false;
    console.log("smooth scroll worked");
}
btn.addEventListener('click', fineMove());





//scroller
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
