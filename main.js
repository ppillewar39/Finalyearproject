function submitForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      window.location.href = "file:///C:/Users/ASUS/Desktop/webserver/sucessful%20login.html";
    } else {
      alert("Invalid username or password.");
    }
  }
  
  const firebaseConfig = {
    apiKey: "AIzaSyAw9CMifKVfUOYaKwMeSih4KSIXt-YRfrE",
    authDomain: "swg-de5cd.firebaseapp.com",
    databaseURL: "https://swg-de5cd-default-rtdb.firebaseio.com",
    projectId: "swg-de5cd",
    storageBucket: "swg-de5cd.appspot.com",
    messagingSenderId: "441958902982",
    appId: "1:441958902982:web:9f4bf29fefbac2d4b1bbc7",
    measurementId: "G-0KRCFY83BZ"
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  function submitForm(e){
    e.preventDefault();
  }

    var name = getInputVal('name');
    var last_name = getInputVal('last_name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var unit = getInputVal('unit');
    var area = getInputVal('area');
  
    saveMessage(name, last_name, email, phone, unit, area);
  
    document.querySelector('.alert').style.display = 'block';
  
    setTimeout(function(){
       document.querySelector('.alert').style.display = 'none';
     },3000);
  
     document.getElementById('contactForm').reset();
  
     function getInputVal(id){
       return document.getElementById(id).value;
     }
       function saveMessage(name, last_name, email, phone, unit, area){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      last_name:last_name,
      email:email,
      phone:phone,
      unit:unit,
      area:area
    });
  }
  