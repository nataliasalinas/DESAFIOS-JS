

const nombre1 = "maria";
const nombre2 = "delfina";
const nombre3 = "josefina";

let nombreDinamico = prompt("Cual es tu nombre?");

nombreDinamico = nombreDinamico.toLowerCase()

if (nombreDinamico === nombre1 || nombreDinamico === nombre2 || nombreDinamico === nombre3 ) {
    console.log(`Hola ${nombreDinamico}`)

    let edad = prompt(`Y que edad tenes ${nombreDinamico}?`)

    if(edad < 18){
        alert(`${nombreDinamico} sos menor de edad, vuelve cuando tengas 18!`)
    } else if(edad == 18){
        console.log(`${nombreDinamico} tienes la edad justa para estar aca!`)
    } else if(edad > 18){
        console.log(`${nombreDinamico} bienvenido, puedes entrar aqui`)
    }

} else{
    alert(`Disculpa ${nombreDinamico} no te tenemos en la lista`)

    let nombre = prompt("Repite tu nombre..")

    alert(`${nombre} te agregaremos a lista en otra oportunidad`)


}