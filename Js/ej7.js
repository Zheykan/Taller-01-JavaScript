const base=350, comision=15, bono=40, impuesto=0.25;

let nombre=null, apellido=null, n_vehiculos=0, salario_n=0, salario_b=0, dedudcido=0;

function calcular_salario(){
    nombre=document.getElementById("Input_nombre").value;
    apellido=document.getElementById("Input_apellido").value;
    n_vehiculos=parseInt(document.getElementById("Input_vehiculos").value);
    let element_mod = document.querySelector("#salario > span");
    
    if(n_vehiculos>=15){
        salario_b= base+(n_vehiculos*comision)+40;
        dedudcido=salario_b*impuesto;
        salario_n=salario_b-dedudcido;
        element_mod.style.color="green";
        element_mod.innerHTML = "Vendedor: "+nombre+" "+apellido+"<br>"+"Salario bruto: "+salario_b+"<br>"+"Impuesto: "+dedudcido+"<br>"+"Salario neto: "+salario_n;
    }
    else if(n_vehiculos>0 && n_vehiculos<15){
        salario_b= base+(n_vehiculos*comision);
        dedudcido=salario_b*impuesto;
        salario_n=salario_b-dedudcido;
        element_mod.style.color= "#cc8b00";
        element_mod.innerHTML = "Vendedor: "+nombre+" "+apellido+"<br>"+"Salario bruto: "+salario_b+"<br>"+"Impuesto: "+dedudcido+"<br>"+"Salario neto: "+salario_n;
    }
    else{
        salario_b= base;
        element_mod.style.color="#840606";
        dedudcido=salario_b*impuesto;
        salario_n=salario_b-dedudcido;
        element_mod.innerHTML = "Vendedor: "+nombre+" "+apellido+"<br>"+"Salario bruto: "+salario_b+"<br>"+"Impuesto: "+dedudcido+"<br>"+"Salario neto: "+salario_n+"<br>"+"¡EL VENDEDOR NO HA REALIZADO NINGUNA VENTA!";
    }
    calculador_salario.reset();
}