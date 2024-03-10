document.addEventListener("DOMContentLoaded", function () {
    // Set current year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    // Add dynamic effect to navigation headings
    const navHeadings = document.querySelectorAll('nav a');

    navHeadings.forEach(heading => {
        heading.addEventListener('mouseover', function () {
            this.style.color = '#FF5733'; // Change color on hover
        });

        heading.addEventListener('mouseout', function () {
            this.style.color = ''; // Reset color on mouseout
        });
    });
});