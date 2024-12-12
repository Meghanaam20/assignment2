$(document).ready(function() {

    // Smooth Scroll to sections when clicked on the resume or bio-data link
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        // Get the target section's ID from the href attribute
        var target = $(this).attr("href");
        
        // Animate scrolling to that section
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });

    // Dark Mode Toggle Button (could be a button added to the page)
    $('#darkModeToggle').click(function() {
        $('body').toggleClass('dark-mode');
    });

    // Toggle visibility of the Resume Section
    $('#toggleResume').click(function() {
        $('.resume').toggle();  // This will show/hide the resume section
    });
    
    // Toggle visibility of the Bio-data Section
    $('#toggleBio').click(function() {
        $('.bio-data').toggle();  // This will show/hide the bio-data section
    });

});