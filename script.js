// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const checkBox = document.getElementById('check');
    const sidebar = document.querySelector('.sidebar_menu');
    const menuLinks = document.querySelectorAll('.sidebar_menu .menu a');

    // Close sidebar on ESC key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            checkBox.checked = false;
        }
    });

    // Close sidebar on clicking outside
    document.addEventListener('click', (e) => {
        if (
            checkBox.checked &&
            !sidebar.contains(e.target) &&
            !document.querySelector('#one label').contains(e.target)
        ) {
            checkBox.checked = false;
        }
    });

    // Close sidebar when a menu link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            checkBox.checked = false;
        });
    });
});
