


const firstName = prompt('Inserici il nome');
const lastName = prompt('Inserici il cognome');
const favoriteColor = prompt('Inserici colore preferito');

const output =
`
<strong> ${firstName} ${lastName} ${favoriteColor} 22 </strong>
`;

console.log(output);

document.getElementById('credenziali').innerHTML = output;