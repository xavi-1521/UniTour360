import emailjs from '@emailjs/browser';

const $ = (element) => {
  return document.querySelector(element)
}

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
