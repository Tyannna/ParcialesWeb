
// FUNCION PARA AGREGAR UNA FILA
   
   function addRow() {
      
    var nClase = document.getElementById("nueva-clase").value;
    var nPorcentaje = 0;
    
    var table = document.getElementsByTagName("table")[0];

    var newRow = table.insertRow(1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    
    cell1.innerHTML = nClase;
    cell2.innerHTML = nPorcentaje;
    cell3.innerHTML = '<td><span value="edit" class="edit" style="color: blue" onclick="editRow(this)">Editar</span></td>';
    
    }
// FUNCION PARA EDITAR LAS FILAS DE LA TABLA

    var editandose=false;

    function editRow(nodo){
    
        if (editandose == false) {
    
            editandose = "true";
    
            var nodoHead = nodo.parentNode; 
            var nodoBody = nodoHead.parentNode; 
            var nodoModificar = nodoBody.getElementsByTagName('td'); 
            
            
            var Gustos = nodoModificar[0].textContent; 
            var Porcentaje = nodoModificar[1].textContent;
            var Editar = nodoModificar[2].textContent; 
            
            var NUEVO = '<td><input type="text" name="Gustos" id="Gustos" value='+Gustos+' size="4"></td>'+
            '<td><input type="text" name="Porcentaje" id="Porcentaje" value="'+Porcentaje+'" size="4"></td>'+ 
            '<td><p style="color:#7777a6"> En edición </p></td>';
    
            nodoBody.innerHTML = NUEVO; 

            var nodoContain = document.getElementById("containn");
            nodoContain.innerHTML = '<p style="text-align: left"class="text">Pulse aceptar para guardar los cambios o cancelar para anularlos </p>'+
            '<button type="submit" class="btn btn-success" onclick = "validar()">Aceptar</button>&nbsp&nbsp' +
            '<button type="button" class="btn btn-danger" onclick = "cancelar()">Cancelar</button>'+'<br>'+
            '<a href="https://sites.google.com/view/dweb1-uis/contenido" target=".blank">Ir al site de P web</a>';
    
            }
     

        else {
            alert ('Solo se puede editar una línea. Recargue la página para poder editar otra');
            }
    }
    
    function cancelar(){
        window.location.reload();
      }


      function getID(id){ 
        return document.getElementById(id).value;
      }

      function validar(){
        const str = 'Resivido2.html?nombre='; 
        var enlace = str.concat(getID("Nombre"),'&email=',getID("Email"),'&telefono=',getID("Telefono"),'&gusto=',getID("Gustos"),'&porc=',getID("Porcentaje"));
        window.location.href = enlace;
      }
  






