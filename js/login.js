document.getElementById('btn-submit').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    const userPasword = document.getElementById('user-password');
    const password = userPasword.value;
    if(email == 'masom24@gmail.com' && password == 'Masum2324'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid User');
    }
});
