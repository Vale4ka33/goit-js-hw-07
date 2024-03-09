const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailValue = event.target.elements.email.value;
    const passwordValue = event.target.elements.password.value;
    if (emailValue === '' || passwordValue === '') {
        alert('All form fields must be filled in');
    } else {
        const objForm = {
        email: emailValue,
        password: passwordValue,
        }
        console.log(objForm);
        event.target.reset();
    }
})
