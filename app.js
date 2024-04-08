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
    // Adjust header content positioning for smaller screens
    function adjustHeader() {
        const headerContent = document.querySelector('.header-content');
        const h1Height = document.querySelector('.header-content h1').offsetHeight;
        const nav = document.querySelector('nav');
        const h2 = document.querySelector('.header-content h2');

        if (window.innerWidth <= 600) {
            // Stack h2 between h1 and nav bar
            headerContent.style.flexDirection = 'column';
            h2.style.position = 'static'; // Reset h2 position
            headerContent.insertBefore(h2, nav);
            nav.style.marginTop = '40px'; // Add space between nav and h2
            nav.style.padding = '20px'; // Add padding to nav
        } else {
            // Ensure h2 is centered horizontally
            headerContent.style.flexDirection = 'row';
            h2.style.position = 'absolute'; // Position h2 absolutely
            h2.style.top = '50%'; // Move h2 to the vertical center
            h2.style.left = '50%'; // Move h2 to the horizontal center
            h2.style.transform = 'translate(-50%, -50%)'; // Center h2 properly
            nav.style.marginTop = '20px'; // Adjust margin top of nav
            nav.style.padding = '20px'; // Add padding to nav
        }
    }

    // Call adjustHeader function initially and on window resize
    adjustHeader();
    window.addEventListener('resize', adjustHeader);
});