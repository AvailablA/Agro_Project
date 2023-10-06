import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js';

    
    
    const firebaseConfig = {
        apiKey: "AIzaSyAg6FETq0TlRj2r-NQjf6ZTloz7vfMK8G4",
        authDomain: "agro-bad69.firebaseapp.com",
        databaseURL: "https://agro-bad69-default-rtdb.firebaseio.com",
        projectId: "agro-bad69",
        storageBucket: "agro-bad69.appspot.com",
        messagingSenderId: "306956304903",
        appId: "1:306956304903:web:2e5c1e9be26216028ea0a2",
        measurementId: "G-DRK6Q7Q0QB"
    };

    // Intialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
       
    window.RegisterForm= function(e)
    {
        e.preventDefault();
        const name = document.getElementById('name').value 
        const email = document.getElementById('email').value
        const num = document.getElementById('num').value
        const pass = document.getElementById('pass').value
        // const checkBox = document.getElementById('checkbox').value
        
        console.log("name : " + name);
        console.log("email : "+email);
        console.log("number : "+num);
        console.log("password : "+pass);

        // Store user data in the Realtime Database
        const userData = {
            name: name,
            email: email,
            mobileNumber: num,
            password: pass
        };
        createUserWithEmailAndPassword(auth, userData.email, userData.password)
        .then(function(sucess){
            alert("Register Sucessful !")
        })
        .catch(function(err){
            alert("Error " + err);
        })
        console.log(userData);
    }   


