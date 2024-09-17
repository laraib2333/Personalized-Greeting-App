function getGreeting(){
    let name = prompt("Enter Your name");
    let age = prompt("Enter Your age");
      
    if(age >= 18){
        document.getElementById('greetings').innerHTML = `Welcome ${name} You are eligible to participate`;
    } else {
        document.getElementById('greetings').innerHTML = `Sorry ${name} You are too young to join`;
    } 
  }