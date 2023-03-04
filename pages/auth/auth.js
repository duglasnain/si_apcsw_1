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

if(window.localStorage.getItem('client') !== null){
   const client = JSON.parse(window.localStorage.getItem('client'));
   const username = document.querySelector('#username');
   const password = document.querySelector('#password');
   
   username.value = client.username;
   password.value = client.password;
}

function wrongInput(obj){
   obj.style['background-color'] = 'rgb(231, 104, 104)';
}

function resetInput(obj){
   obj.style.border = 'none';
   obj.style['background-color'] = 'rgb(206, 230, 168)';
}

function login(){
   const username = document.querySelector('#username');
   const password = document.querySelector('#password');
   
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
      if(fuser && fpass)
         window.location = '../home.html'
      else if(fuser) wrongInput(fpass);
      else if(fpass) wrongInput(fuser);
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