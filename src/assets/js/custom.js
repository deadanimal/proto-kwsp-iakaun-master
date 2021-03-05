window.onscroll = function () { scrollEvent() };
function scrollEvent() {
    var y = window.scrollY;
    if (y > 0) {
        document.getElementById("animated-nav").className = "scrolled";
    } else {
        document.getElementById("animated-nav").className = "";
    }

}