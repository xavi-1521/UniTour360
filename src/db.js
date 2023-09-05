
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
  const comments = [
    $('#comment-1'),
    $('#comment-2'),
    $('#comment-3')
  ]

  const shuffleOpinions = shuffleArray(opinions)
  comments.forEach((comment, i) => {
    if (!shuffleOpinions[i]) return
    const date = new Date(shuffleOpinions[i].createdAt);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    const starActive = `
      <svg data-value="2" class="text-yellow-300 w-9 h-9 star-select" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
      </svg>
    `

    const starDesactive = `
      <svg data-value="2" class="text-gray-300 w-9 h-9 star-select" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
      </svg>
    `

    comment.innerHTML = `
      <div class="flex py-3 flex-col justify-center items-center">
        <div class="flex">
          ${starActive.repeat(shuffleOpinions[i].stars)}
          ${starDesactive.repeat(5 - shuffleOpinions[i].stars)}
        </div>

        <h3 class="font-extrabold mt-10">${shuffleOpinions[i].name}</h3>
        <p class="mt-5 text-center">${shuffleOpinions[i].description}</p>
        <footer class="mt-2 text-sm text-slate-400">${formattedDate}</footer>
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
