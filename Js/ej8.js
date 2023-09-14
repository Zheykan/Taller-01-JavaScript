let n1=0, n2=0, n3=0, caracter="";

function calcular_maximo(){
    n1=parseFloat(document.getElementById("Input_max_1").value);
    n2=parseFloat(document.getElementById("Input_max_2").value);
    n3=parseFloat(document.getElementById("Input_max_3").value);
    let element_mod = document.querySelector("#maximo > span");
    
    if (n1>n2 && n1>n3){
        element_mod.style.color="green";
        element_mod.innerHTML = n1;
    }
    else if (n2>n1 && n2>n3){
        element_mod.style.color="green";
        element_mod.innerHTML = n2;
    }
    else{
        element_mod.style.color="green";
        element_mod.innerHTML = n3;
    }
    n_maximo.reset();
}

function calcular_minimo(){
    n1=parseFloat(document.getElementById("Input_min_1").value);
    n2=parseFloat(document.getElementById("Input_min_2").value);
    n3=parseFloat(document.getElementById("Input_min_3").value);
    let element_mod = document.querySelector("#minimo > span");
    
    if (n1<n2 && n1<n3){
        element_mod.style.color="green";
        element_mod.innerHTML = n1;
    }
    else if (n2<n1 && n2<n3){
        element_mod.style.color="green";
        element_mod.innerHTML = n2;
    }
    else{
        element_mod.style.color="green";
        element_mod.innerHTML = n3;
    }
    n_minimo.reset();
}

function calcular_promedio(){
    n1=parseFloat(document.getElementById("Input_pm_1").value);
    n2=parseFloat(document.getElementById("Input_pm_2").value);
    n3=parseFloat(document.getElementById("Input_pm_3").value);
    let element_mod = document.querySelector("#promedio > span");
    let promedio= Math.round(((n1+n2+n3)/3)*10)/10;
    element_mod.style.color="green";
    element_mod.innerHTML = promedio;
    n_promedio.reset();
}

function consultar_letra(){
    caracter=document.getElementById("Input_letra").value;
    let element_mod = document.querySelector("#letra > span");
    if (caracter==caracter.toUpperCase()){
        element_mod.style.color="green";
        element_mod.innerHTML = "EL CARACTER ES UNA MAYUSCULA";
    }
    else {
        element_mod.style.color="green";
        element_mod.innerHTML = "el caracter es una minuscula";
    }
    letra_cons.reset();
}

function consultar_caracter(){
    caracter=parseFloat(document.getElementById("Input_caracter").value);
    let element_mod = document.querySelector("#caracter > span");
    if(caracter%2==0){
        element_mod.style.color="green";
        element_mod.innerHTML = "3l C4r4ct3r 3s NUM3R0";
    }
    else{
        element_mod.style.color="blue";
        element_mod.innerHTML = "El caracter es una letra";
    }
    
}