let parcial_1=0, parcial_2=0, parcial_3=0, promedio_1=0, promedio_2=0, promedio_3=0;

function calcular_notas(){
    parcial_1=parseFloat(document.getElementById("Input_1_1").value);
    parcial_2=parseFloat(document.getElementById("Input_1_2").value);
    parcial_3=parseFloat(document.getElementById("Input_1_3").value);
    
    promedio_1= Math.round(((parcial_1+parcial_2+parcial_3)/3)*10)/10;

    parcial_1=parseFloat(document.getElementById("Input_2_1").value);
    parcial_2=parseFloat(document.getElementById("Input_2_2").value);
    parcial_3=parseFloat(document.getElementById("Input_2_3").value);

    promedio_2= Math.round(((parcial_1+parcial_2+parcial_3)/3)*10)/10;

    parcial_1=parseFloat(document.getElementById("Input_3_1").value);
    parcial_2=parseFloat(document.getElementById("Input_3_2").value);
    parcial_3=parseFloat(document.getElementById("Input_3_3").value);

    promedio_3= Math.round(((parcial_1+parcial_2+parcial_3)/3)*10)/10;

    let element_mod = document.querySelector("#promedios > span");
    
    if (promedio_1>promedio_2 && promedio_1>promedio_3){
        if(promedio_2>promedio_3){
            element_mod.innerHTML = "El estudiante 1 tiene el mejor promedio: "+promedio_1+
            "<br>"+"El estudiante 2 tiene el promedio: "+promedio_2+"<br>"+
            "El estudiante 3 tiene el menor promedio: "+promedio_3;
        }
        else{
            element_mod.innerHTML = "El estudiante 1 tiene el mejor promedio: "+promedio_1+
            "<br>"+"El estudiante 3 tiene el promedio: "+promedio_3+"<br>"+
            "El estudiante 2 tiene el menor promedio: "+promedio_2;
        }
    }
    else if(promedio_2>promedio_1 && promedio_2>promedio_3) {
        if(promedio_1>promedio_3){
            element_mod.innerHTML = "El estudiante 2 tiene el mejor promedio: "+promedio_2+
            "<br>"+"El estudiante 1 tiene el promedio: "+promedio_1+"<br>"+
            "El estudiante 3 tiene el menor promedio: "+promedio_3;
        }
        else{
            element_mod.innerHTML = "El estudiante 2 tiene el mejor promedio: "+promedio_2+
            "<br>"+"El estudiante 3 tiene el promedio: "+promedio_3+"<br>"+
            "El estudiante 1 tiene el menor promedio: "+promedio_1;
        }
    }
    else{
        if(promedio_1>promedio_2){
            element_mod.innerHTML = "El estudiante 3 tiene el mejor promedio: "+promedio_3+
            "<br>"+"El estudiante 1 tiene el promedio: "+promedio_1+"<br>"+
            "El estudiante 2 tiene el menor promedio: "+promedio_2;
        }
        else{
            element_mod.innerHTML = "El estudiante 3 tiene el mejor promedio: "+promedio_3+
            "<br>"+"El estudiante 2 tiene el promedio: "+promedio_2+"<br>"+
            "El estudiante 1 tiene el menor promedio: "+promedio_1;
        }
    }
    form_1.reset();
    form_2.reset();
    form_3.reset();
}