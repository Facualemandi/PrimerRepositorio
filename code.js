const $send = document.querySelector('.send');
const $email = document.querySelector('.email');

function validarEmail(e){
    e.preventDefault()
     if($email.value == ""){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.valido').style.display = 'none';
       }
      if($email.value){
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.valido').style.display = 'block';
       }
       
    
   
}

$send.addEventListener('click', validarEmail)



