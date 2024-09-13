let lax = "i love lacrosse"

console.log(lax)

const form = document.querySelector('#form')
const submitbutton = document.querySelector('#submit')
form.addEventListener('submit', (e) => {submitbutton.disabled = true
e.preventDefault()
window.location.href = window.location.origin + '/success.html'})
