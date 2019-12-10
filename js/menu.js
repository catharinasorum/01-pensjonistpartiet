const menu = document.querySelector('#menu');

const innholdssider = [
    { navn: 'Aktuelt', url:'./aktuelt.html'},
    { navn: 'Partiprogram', url:'./partiprogram.html'},
    { navn: 'Politikk', url:'./politikk.html'}
];

for(const innholdsside of innholdssider) {
    const valgtside = document.location.href;
    const sjekk = valgtside.search(innholdsside.url);

    let klasse = '';

    if(sjekk > 0) {
        klasse = 'active';
    }

    menu.innerHTML += `
        <a class='${klasse}' href='${innholdsside.url}'>${innholdsside.navn}</a>
    `;
}