let number=null;
function mayor_menor(){
    number=parseFloat(prompt('Aqui puedes escribir el numero: '));
    let comprobar=number;
    if(comprobar!=0){
        comprobar=number
        if (comprobar>0){
            alert(number+" es mayor a 0");
        }
        else{
            alert(number+" es menor a 0")
        }
    }
    else{
        alert("No puedes ingresar el 0 o texto");
    }
    
}