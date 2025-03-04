var numerUno, numerDos;
var seleccion;
var opciones = document.getElementsByName("op");

function validar(){
    numerUno = document.getElementById("numU").value;
    numerDos = document.getElementById("numD").value;  
    seleccion = false;
    
    if(numerUno === "")
    {
        Swal.fire({
            title: '¡Error!',
            text: 'primer casilla Vacia.',
            icon: 'error',
            confirmButtonText: '¡Aceptar!'
            });
    }
    else if (numerDos === "")
    {
        Swal.fire({
            title: '¡Error!',
            text: ' segunda casilla Vacia.',
            icon: 'error',
            confirmButtonText: '¡Aceptar!'
            });
    }
    else if(!/^\d+$/.test(numerUno || numerDos))
        {
            Swal.fire({
                title: '¡Error!',
                text: 'como vas a hacer operaciones con letras?.',
                icon: 'error',
                confirmButtonText: '¡Aceptar!'
                });
            event.preventDefault();
        }
    else
    {
        operaciones()
    }

}
function operaciones()
{
    var opU = parseInt(numerUno);
    var opD = parseInt(numerDos);
    var res,resultado,i;
    i = 0;
    while(i<opciones.length) {   
        if(opciones[i].checked) {
            seleccion = true;
                switch (i)
                {
                    case 0:
                        res = opU+opD;
                        resultado= document.getElementById("resultado");
                        resultado.value = "El resultado es: " + res;
                        resultado.style.display = 'block';
                        break;
                    case 1:
                        res = opU-opD;
                        resultado= document.getElementById("resultado");
                        resultado.value = "El resultado es: " + res;
                        resultado.style.display = 'block';

                        break;
                    case 2:
                        res = opU*opD;
                        resultado= document.getElementById("resultado");
                        resultado.value = "El resultado es: " + res;
                        resultado.style.display = 'block';

                        break;
                    case 3:
                            if(opD === 0)
                            {
                                Swal.fire({
                                    title: '¡Error!',
                                    text: 'operacion indefinida',
                                    icon: 'error',
                                    confirmButtonText: '¡Aceptar!'
                                    });
                                    resultado= document.getElementById("resultado");
                                    resultado.value = "";
                            }
                            else
                            {
                                res = opU/opD;
                                resultado= document.getElementById("resultado");
                                resultado.value = "El resultado es: " + res;
                                resultado.style.display = 'block';

                            }
                        break;
                }
                break;
            }
            i++;
            }
        if(!seleccion){
            Swal.fire({
                title: '¡Error!',
                text: 'Seleccione alguna operacion',
                icon: 'error',
                confirmButtonText: '¡Aceptar!'
                });
    return false;
    }
    

}
 
function limpiar ()
{
    document.getElementById("numU").value = "";
    document.getElementById("numD").value = "";

    let radios = document.getElementsByName("op");
            for (let i = 0; i < radios.length; i++) {
                radios[i].checked = false;
            }

    let resultado = document.getElementById("resultado");
    resultado.value = "";
    resultado.style.display = 'none';
}