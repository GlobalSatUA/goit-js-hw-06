const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
event.preventDefault(); 
const formItems = event.currentTarget.elements; 
const emailInput = formItems.email; 
const passwordInput = formItems.password; 


if (emailInput.value === '' || passwordInput.value === '') {
alert('All fields are required!'); 
} 
else {
const formData = {
email: emailInput.value,
password: passwordInput.value
};
console.log(formData); 
loginForm.reset(); 
}
});
