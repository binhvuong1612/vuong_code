
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("myBtn").style.display = "block";
        document.getElementById("header_information").style.display = "none";
        document.getElementById("header_menu").style.position = "fixed";
    } else {
        document.getElementById("myBtn").style.display = "none";
        document.getElementById("header_information").style.display = "block";
        document.getElementById("header_menu").style.position = "relative";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
