const form = document.querySelector('form');
form2.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const studentId = document.getElementById('student_id').value;
    const password = document.getElementById('password').value;


    console.log(`Name: ${name}\nPhone Number: ${phone}\nEmail Address: ${email}\nStudent ID Code: ${studentId}\nPassword: ${password}`);


    form.reset();
});