
const logins = [
   {
      username: 'valeria123',
      password: 'password'
   },
   {
      username: 'chris69',
      password: 'password'
   },
   {
      username: 'dvd123',
      password: 'password'
   }
]

if(window.localStorage.getItem('username') !== null){
   const usernameSt = window.localStorage.getItem('username');
   const passwordSt = window.localStorage.getItem('password');
   const username = document.querySelector('#username');
   const password = document.querySelector('#password');
   
   username.value = usernameSt;
   password.value = passwordSt;
}

function wrongInput(obj){
   console.log('here')
   obj.style.border = 'none';
   obj.style.backgroundColor = 'red';
}

function focusin(e){
   e.target.style.backgroundColor = '#BFACE2'
}

function login(){
   const username = document.querySelector('#username');
   const password = document.querySelector('#password');
   
   username.addEventListener('focusin', focusin);
   password.addEventListener('focusin', focusin);

   if(username.value === "" && password.value === ""){
      wrongInput(username); wrongInput(password);
   }
   else if(username.value === "") wrongInput(username);
   else if(password.value === "") wrongInput(password);
   else{
      let fuser = 0, fpass = 0;
      logins.forEach(log => {
         if(username.value == log.username && password.value == log.password){
            fuser = 1; fpass = 1;
         }
         else if(username.value === log.username) fuser = 1;
         else if(password.value === log.password) fpass = 1;
      });
      console.log(fuser, fpass);
      if(fuser && fpass){
         window.localStorage.setItem('username', username.value);
         window.localStorage.setItem('password', password.value);
         window.location = '../home.html';
      }
         
      else if(fuser) wrongInput(password);
      else if(!fuser){
         wrongInput(username);
         wrongInput(password);
      }
   }
}

function showPass(){
   const container = document.querySelector('#password');
   if(container){
      if(container.type == "password")
         container.type = 'text';
      else container.type = 'password';
   }else alert("not found");
}