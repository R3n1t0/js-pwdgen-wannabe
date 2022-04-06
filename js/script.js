


const firstName = prompt('Inserici il nome');
const lastName = prompt('Inserici il cognome');
const favoriteColor = prompt('Inserici colore preferito');
const year = 22

const psw = firstName+lastName+favoriteColor+year


console.log(psw);

document.getElementById('credenziali').innerHTML = psw;