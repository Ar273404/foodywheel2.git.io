// Get modal elements
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');

// Get open modal button
const openModalBtn = document.getElementById('openModalBtn');
const open = document.getElementById('open');


// Get close modal button
const closeModalBtn = document.getElementById('closeModalBtn');
const closeSignupModalBtn = document.getElementById('closeSignupModalBtn');

// Get sign-up link
const signupLink = document.getElementById('signupLink');
const loginLink = document.getElementById('loginLink');

// Listen for open click
openModalBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});
open.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Listen for close click
closeModalBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

closeSignupModalBtn.addEventListener('click', () => {
    signupModal.style.display = 'none';
});

signupLink.addEventListener('click', () => {
    loginModal.style.display = 'none';
    signupModal.style.display = 'block';
});

loginLink.addEventListener('click', () => {
    signupModal.style.display = 'none';
    loginModal.style.display = 'block';
});

// Listen for outside click
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    } else if (e.target === signupModal) {
        signupModal.style.display = 'none';
    }
});

// Prevent form submission
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your login logic here
    // For this example, let's just close the modal
    loginModal.style.display = 'none';
});

document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    // For this example, let's just close the modal
});