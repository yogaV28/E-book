const form = document.getElementById('upload-form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const genreInput = document.getElementById('genre');
const pdfInput = document.getElementById('pdf');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    // Send form data to server via AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/upload-book');
    xhr.onload = () => {
        if (xhr.status === 200) {
            alert('Book uploaded successfully!');
            form.reset();
        } else {
            alert('Error uploading book!');
        }
    };
    xhr.send(formData);
});