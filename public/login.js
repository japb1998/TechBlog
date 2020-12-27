
const submitBtn = $('#submitBtn');
const userInput = $('#inputEmail');
const pass = $('#inputPassword')

function login(){
   
const userData = {
    name: userInput.val().trim(),
    password: pass.val().trim()
}

if(!userInput.val()){
    alert('Incorrect email or password, please try again')
}
if(!pass.val()){
    alert('Incorrect email or password, please try again')
}
console.log(userData);
    $.ajax({
        type: "POST",
        url:'/api/users/login',
        data: userData
      })
};


submitBtn.on('click',(e)=>{
    e.preventDefault();
    login();
})