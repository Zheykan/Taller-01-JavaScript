let variable_1=null, variable_2=null, variable_3=null;
function invertir_variable(){
    variable_1=parseFloat(document.getElementById("Input_variable_1").value);
    variable_2=parseFloat(document.getElementById("Input_variable_2").value);
    variable_3=parseFloat(document.getElementById("Input_variable_3").value);
    let element_mod = document.querySelector(".col-5 > p");
    if (variable_2>variable_1 && variable_2>variable_3){
        variable_2=[variable_1, variable_1=variable_2][0];
        variable_2=[variable_3, variable_3=variable_2][0];
        element_mod.innerHTML = "Ahora"+"<br>"+"la variable 1 es: "+variable_1+
        "<br>"+"La variable 2 es: "+variable_2+"<br>"+"La variable 3 es: "+variable_3;
    }
    else{
        element_mod.innerHTML = "La variable 1 es: "+variable_1+"<br>"+
        "La variable 2 es: "+variable_2+"<br>"+"La variable 3 es: "+variable_3;
    }
    inversor.reset();
}