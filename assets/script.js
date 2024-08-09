alert()
for ( let i = 0; i <=10; i++){
console.log(i);

}
const frutas = ["Manzana","Uva","Pera","Naranja"];
for( let i =0;i < frutas.length; i++){
console.log(frutas[i]);

}
for (let i =0; i <=10; i +=2) {
    console.log(1);
}
const equipo1 = ["Maria","Maria","Paty","Nirvana"];
let lista= "";
 
for (let i = 0; i <equipo1.length; i++) { 
    lista += `<li>${equipo1[i]}</li>`;
}
document.getElementById("integrantes").innerHTML = ´<ul>$(lista)</ul>´ ;
document.getElementById("lider").innerText = equipo1[2];
