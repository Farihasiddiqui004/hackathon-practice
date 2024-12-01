
const firebaseConfig = {
    apiKey: "AIzaSyCgkv36lm2z84j7VkJ1f1HBhoFKTw1grJQ",
    authDomain: "fir-project-1f34e.firebaseapp.com",
    projectId: "fir-project-1f34e",
    storageBucket: "fir-project-1f34e.firebasestorage.app",
    messagingSenderId: "80758509770",
    appId: "1:80758509770:web:dde625c66806260767e433",
    measurementId: "G-17FRFKYJZG"
  };
  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

console.log(db);

const submitFormToDb = () => {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const role = document.getElementById('role').value


    db.collection("contact")
    .add({
      name,
      email,
      password,
      role,
      date: new Date()
    })
    .then((docRef) => {
      console.log("Form Submitted: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });

};