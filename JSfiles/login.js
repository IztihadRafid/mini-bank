//step:1 submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    
    //step2: get email address in email field
    const emailField =document.getElementById('user-email')
    const email = emailField.value;
    
    
    //step2: get password address in pass field
    const passwordField =document.getElementById('user-password')
    const password = passwordField.value;
    if(email ==='iztihadrafid@gmail.com' && password==='rfd10'){
        window.location.href ="bankInside.html"
    }
    else {
        alert("invalid")
    }
})