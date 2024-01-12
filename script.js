function validateForm(){
    var username=document.getElementById('username').ariaValueMax;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    errorMessage.innerHTML='';
    if(username==='' || password==='' || email==='')
    {
        errorMessage.innerHTML="All fileds are required";
        return;
    }
    alert('Form submitted successfully!');
}