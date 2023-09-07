import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

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
    Swal.fire({
      title: 'Error!',
      text: 'A ocurrido un error al enviar tu correo',
      icon: 'error',
      confirmButtonText: 'Lo intentare más tarde'
    })
  }).then(e => {
    Swal.fire({
      title: 'Correo Recibido',
      text: 'Pronto revisaremos tu correo!',
      icon: 'success',
      confirmButtonText: 'Genial'
    })
  })

  name.value = ""
  email.value = ""
  optionEmail.value = ""
  descriptionEmail.value = ""
}

const btnEmail = $('#send-email')
if (btnEmail) btnEmail.addEventListener('submit', sendEmail)
