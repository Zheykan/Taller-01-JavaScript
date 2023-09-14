const ejecutivo=2000;
const normal=1000;
let puntos=null;
function calcular_puntos(){
    puntos=parseInt(document.getElementById("Input_puntos").value);
    if (puntos>=0){
        if (puntos<normal){
            alert("Tu tiquete es de clase ¡Economica!");
            categorizador.reset();
        }
        else if(puntos>=normal && puntos<ejecutivo){
            alert("Tu tiquete es de clase ¡Normal!");
            categorizador.reset();
        }
        else{
            alert("Tu tiquete es de clase ¡Ejecutiva!");
            categorizador.reset();
        }
    }
    else{
        alert("¡No puedes ingresar letras o numeros negativos!");
        categorizador.reset();
    }
};

