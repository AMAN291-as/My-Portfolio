let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='  + id + ']').classList.add('active');
            });

        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


};


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-image, .services-container, .portfolio-box, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });

const strings = ['Coder |', 'Developer |','Programmer |'];
let currentIndex = 0;
let currentCharIndex = 0;
let currentString = '';
let isDeleting = false;
const typeSpeed = 100;
const backSpeed = 100;
const backDelay = 1000;

function typeText() {
    const element = document.querySelector('.multiple-text');
    
    if (!element) return; // Exit if the element is not found
    
    if (isDeleting) {
        currentString = strings[currentIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        if (currentString === '') {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % strings.length;
            setTimeout(typeText, 500); // Small pause before typing the next string
        } else {
            setTimeout(typeText, backSpeed);
        }
    } else {
        currentString = strings[currentIndex].substring(0, currentCharIndex + 1);
        currentCharIndex++;
        if (currentString === strings[currentIndex]) {
            isDeleting = true;
            setTimeout(typeText, backDelay);
        } else {
            setTimeout(typeText, typeSpeed);
        }
    }
    
    element.textContent = currentString;
}

document.addEventListener('DOMContentLoaded', function () {
    typeText();
});



const readMoreBtn = document.getElementById('readMoreBtn');
const moreText = document.getElementById('moreText');

// Add click event listener to the button
readMoreBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    
    // Toggle the visibility of the text
    if (moreText.classList.contains('show')) {
        moreText.classList.remove('show');
        readMoreBtn.textContent = 'Read More';
    } else {
        moreText.classList.add('show');
        readMoreBtn.textContent = 'Read Less';
    }
});



function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form input values
    const fullName = document.getElementById('fullName').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const mobile = document.getElementById('mobile').value;
    const emailSubject = document.getElementById('emailSubject').value;
    const message = document.getElementById('message').value;

    // Simple validation (optional)
    if (fullName && emailAddress && mobile && emailSubject && message) {
        // Display success message in a popup
        alert('Message sent successfully!');

        // Clear the form (optional)
        document.querySelector('form').reset();
    }
}

