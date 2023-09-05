
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const $ = (element) => {
  return document.querySelector(element)
}

const shuffleArray = (array) => {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

const opinions = []
let starSelect = 5;

const OPTIONS = {
  1: 'Insuficiente',
  2: 'Aceptable',
  3: 'Normal',
  4: 'Bueno',
  5: 'Excelente'
}

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

const opinionCollection = collection(db, 'opinion');

function sendOpinion () {
  const form = {
    stars: starSelect,
    name: $('#name-form').value,
    description: $('#description-form').value,
    createdAt: Date.now()
  };

  addDoc(opinionCollection, form)
  .then(docRef => {
    console.log("Dato guardado con ID: ", docRef.id);
  })
  .catch(error => {
    console.error("Error al guardar el dato: ", error);
  });
}

function updateComments() {
  console.log({ opinions })

  const comments = [
    $('#comment-1'),
    $('#comment-2'),
    $('#comment-3')
  ]

  const shuffleOpinions = shuffleArray(opinions)
  comments.forEach((comment, i) => {
    if (!shuffleOpinions[i]) return
    console.log(shuffleOpinions[i])

    comment.innerHTML = `
      <div class="flex flex-col justify-center items-center">
        <div>
        </div>
        <h3 class="font-extrabold">${shuffleOpinions[i].name}</h3>
        <p class="mt-3 text-center">${shuffleOpinions[i].description}</p>
      </div>
    `
  })
}

getDocs(opinionCollection)
  .then(querySnapshot => {
    querySnapshot.forEach(doc => {
      opinions.push(doc.data())
      updateComments()
    });
  })
  .catch(error => {
    console.error("Error al obtener los datos:", error);
  });

const form = $('#sendform-opinion')
form.addEventListener('submit', (e) => {
  e.preventDefault()

  var close = document.getElementById('cerrar-modalComentarios');
  close.click()

  sendOpinion()
})

const stars = document.querySelectorAll('.star-select');
stars.forEach(star => {
  const title = $('#start-label-select')
  title.innerHTML =  OPTIONS[starSelect]

    star.addEventListener('click', () => {
        const selectedValue = parseInt(star.getAttribute('data-value'));

        starSelect = selectedValue;
        title.innerHTML =  OPTIONS[selectedValue]

        stars.forEach((s, index) => {
            if (index < selectedValue) {
                s.classList.remove('text-gray-300')
                s.classList.add('text-yellow-300')
            } else {
              s.classList.add('text-gray-300')
              s.classList.remove('text-yellow-300')
            }
        });
    });
});
