const showMenu = document.querySelector('.fa-bars'); // hamburger menu
const closeMenu = document.querySelector('.fa-times'); // X to close dropdown menu
const dropdownMenu = document.querySelector('.hamburger-menu'); // dropdown menu

// adds class active to display the dropdown menu
showMenu.addEventListener('click', 
    function() {
        dropdownMenu.classList.add('active');
    }
);

// removes class active to hide the dropdown menu
closeMenu.addEventListener('click', 
    function() {
        dropdownMenu.classList.remove('active');
    }
);
