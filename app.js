document.addEventListener("DOMContentLoaded", function () {
    // Set current year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    // Add dynamic effect to navigation headings
    const navHeadings = document.querySelectorAll('nav a');

    navHeadings.forEach(heading => {
        heading.addEventListener('mouseover', function () {
            this.style.color = '#9290C3'; // Change color on hover
        });

        heading.addEventListener('mouseout', function () {
            this.style.color = ''; // Reset color on mouseout
        });
    });

    //Adjust content for screen size
    if (window.innerWidth <= 600) {
        // Get the height of the h1 element
        const h1Height = document.querySelector('.header-content h1').offsetHeight;
        const h2Height = document.querySelector('.header-content h2').offsetHeight;
        
        // Get the height of the navigation bar
        const navHeight = document.querySelector('nav').offsetHeight;
        
        // Calculate the total height needed for the header content
        const totalHeight = h1Height + h2Height + navHeight;

        // Set the height of the .header-content dynamically
        document.querySelector('.header-content').style.height = totalHeight + 'px';
    }
});