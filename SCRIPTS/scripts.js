//fetch header so it appears on index page when the page instantly loads
function loadHeader(){
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.log('Error loading header:', error));
}    

function loadFooter(){
    fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.log('Error loading footer:', error));
}    

/*function fadeIn(){
    window.addEventListener('DOMContentLoaded', (event) => {
        // Add fade-in class to body for the fade-in effect
        document.body.classList.add('fade-in');
    });
}*/

//makes the colour of the navigation item a bubble once clicked on it
function changeColourOfNavigationLink() {
    //selects all the navigation links and stores each link in the NodeList
    const navLinks = document.querySelectorAll('.nav-topics li a');

    //makes sure thatit stays after the new page has been loaded up
    window.addEventListener('DOMContentLoaded', () => {
        const activeLink = localStorage.getItem('activeLink');
        if (activeLink) {
            document.querySelector(`.nav-topics li a[href="${activeLink}"]`).classList.add('active');
        }
    });

    //loop through each link and attach a 'click' event - triggers when clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // remove active link - so that only the links that are clicked are coloured in 
            navLinks.forEach(link => link.classList.remove('active'));
            //add active class to the clicked link so it stays coloured in
            this.classList.add('active');
        });
    });

}

