$(document).ready(function () {
// Toggle each section
    $(".toggle-header").click(
        function () 
        {
        var targetId = $(this).data("target");

        $(".toggle-content").not("#" + targetId).slideUp(300);
        // Toggle the clicked section
        $("#" + targetId).slideToggle(300);
    });

    // Toggle first section on start
    $(".toggle-header:first").click();


    $(".col-lg-6[id$='-o']").mouseenter(function () {
        var correspondingId = $(this).attr("id").replace("-o", "-i");
        $("#" + correspondingId).slideDown(200);
    });

    $(".col-lg-6[id$='-o']").mouseleave(function () {
        var correspondingId = $(this).attr("id").replace("-o", "-i");
        $("#" + correspondingId).slideUp(200);
    });

    $(".toggle-header").click(function () {
        var targetId = $(this).data("target");
    
        $("html, body").animate({
            scrollTop: $("#" + targetId).offset().top
        }, 500); // Adjust the animation duration as needed
    });
});



