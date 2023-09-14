let variable_1=null, variable_2=null;
function invertir_variable(){
    variable_1=parseFloat(document.getElementById("Input_variable_1").value);
    variable_2=parseFloat(document.getElementById("Input_variable_2").value);
    let element_mod = document.querySelector(".col-5 > p");
    if (variable_1>variable_2){
        variable_2=[variable_1, variable_1=variable_2][0];
        element_mod.innerHTML = "<br>"+"La variable 1 es: "+variable_1+"<br>"+"y"+"<br>"+"la variable 2 es: "+variable_2;
    }
    else{
        element_mod.innerHTML = "<br>"+"La variable 1 es: "+variable_1+"<br>"+"y"+"<br>"+"la variable 2 es: "+variable_2;
    }
    inversor.reset();
}