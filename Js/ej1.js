const precio=1700;
let saldo=null, n_aciento=null;
function calcular_saldo(){
    saldo=parseInt(document.getElementById("Input_saldo").value);
    if (saldo>0 && saldo>=2*precio){
        n_aciento=Math.round(saldo/precio);
        alert("Puedes comprar hasta: "+n_aciento+" Pasajes");
        calculador.reset();
    }
    else if(saldo>0 && saldo<2*precio && saldo>=precio){
        alert(" Puedes adquirir hasta: 1 Pasaje.\n¡Considera recargar tu tarjeta!");
        calculador.reset();
    }
    else{
        alert("No tienes suficiente saldo,\n¡Te invitamos a que recargues tu tarjeta!");
        calculador.reset();
    }
};

