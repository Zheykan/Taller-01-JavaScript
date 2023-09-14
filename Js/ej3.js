let number=null;
function mayor_menor(){
    number=parseFloat(prompt('Aqui puedes escribir el numero: '));
    let comprobar=number;
    if(comprobar!=0){
        if (comprobar>0){
            if(comprobar%2==0){
                alert(number+" es mayor a 0 y par");
            }
            else {
                alert(number+" es mayor a 0 e impar");
            }
            
        }
        else{
            if(comprobar%2==0){
                alert(number+" es menor a 0 y par");
            }
            else {
                alert(number+" es menor a 0 e impar");
            }
        }
    }
    else{
        alert("No puedes ingresar el 0 o texto");
    }
    
}