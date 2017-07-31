
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function(){
  $('.gallery-hide').hide();
  $('.Insta-link').hide();
    $(".see-more").click(function(){
        $(".Insta-link").fadeIn(3000);
        $(".gallery-hide").fadeIn(3000);
        $(".see-more").fadeOut(100);
    });
});
