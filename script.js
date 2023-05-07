const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // TODO: Add code to authenticate user
    console.log(email, password);
});