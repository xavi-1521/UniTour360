
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAh9iVj8RB0ZrRHuQIyE2OaNvmmAqpliks",
  authDomain: "unitour-1584f.firebaseapp.com",
  projectId: "unitour-1584f",
  storageBucket: "unitour-1584f.appspot.com",
  messagingSenderId: "626728284071",
  appId: "1:626728284071:web:77f54bd991e428037dd082"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const opinionColection = collection(db, 'opinion');

function sendOpinion () {
  const form = {
    stars: 2,
    description: 'prueba de formulario',
    name: 'Pepito',
    enable: true
  };

  addDoc(opinionColection, form)
  .then(docRef => {
    console.log("Dato guardado con ID: ", docRef.id);
  })
  .catch(error => {
    console.error("Error al guardar el dato: ", error);
  });
}
