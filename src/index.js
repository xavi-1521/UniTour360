import Chart from 'chart.js/auto';
import emailjs from '@emailjs/browser';
import 'flowbite'

const $ = (element) => {
    return document.querySelector(element)
}

const title = $('#title-banner')
const menuOpen = $('#menu-open')
const menuClose = $('#menu-close')
const menuOptions = $('#menu-options')

menuOpen.addEventListener('click', () => {
    menuOptions.style.display = "block";
    menuClose.style.display = "block";
    menuOpen.style.display = "none";
    if (title) title.style.display = "none";
})

menuClose.addEventListener('click', () => {
    menuOptions.style.display = "none";
    menuClose.style.display = "none";
    menuOpen.style.display = "block";
    if (title) title.style.display = "block";
})

const sendEmail = (e) => {
  e.preventDefault()

  const name = $('#name')
  const email = $('#email')
  const optionEmail = $('#option-email')
  const descriptionEmail = $('#description-email')

  emailjs.init("wbVsVe1T1Vmuf4fxh");
  emailjs.send("service_zanwl9a","template_bnuyu32",{
    name: name.value,
    email: email.value,
    optionEmail: optionEmail.value,
    message: descriptionEmail.value
  }).catch(e => {
    console.log(e)
  }).then(e => {
    alert('Correo enviado correctamente!')
  })

  name.value = ""
  email.value = ""
  optionEmail.value = ""
  descriptionEmail.value = ""
}

const btnEmail = $('#send-email')
if (btnEmail) btnEmail.addEventListener('submit', sendEmail)

const ctxChart1 = $('#chart-1')
const ctxChart2 = $('#chart-2')
const ctxChart3 = $('#chart-3')
const ctxChart4 = $('#chart-4')
const ctxChart5 = $('#chart-5')
const ctxChart6 = $('#chart-6')

if (ctxChart1) {
  new Chart(ctxChart1, {
    type: 'polarArea',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

if (ctxChart2) {
  new Chart(ctxChart2, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

if (ctxChart3) {
  new Chart(ctxChart3, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

if (ctxChart4) {
  new Chart(ctxChart4, {
    type: 'radar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

if (ctxChart5) {
  new Chart(ctxChart5, {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

if (ctxChart6) {
  new Chart(ctxChart6, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
