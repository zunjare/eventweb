document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`Thank you for registering, ${name}! We will contact you at ${email}.`);
    document.getElementById('registrationForm').reset();
});
