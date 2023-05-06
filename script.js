const form = document.querySelector('form');
const form2 = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // TODO: Add code to authenticate user
    console.log(email, password);
});
form2.addEventListener('submit', (event) => {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the input values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const studentId = document.getElementById('student_id').value;

    // Do something with the input values (e.g. send them to the server)
    console.log(`Name: ${name}\nPhone Number: ${phone}\nEmail Address: ${email}\nStudent ID Code: ${studentId}`);

    // Clear the form inputs
    form.reset();
});