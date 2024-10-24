    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.nav-active');

    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            menuItems.forEach(i => i.parentElement.classList.remove('active'));
            item.parentElement.classList.add('active');
        }
    });

function activeStoreNav() {
    document.getElementById('activeStore').classList.add("actived");
};
