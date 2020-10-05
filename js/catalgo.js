function guardarDatos() {
    var descripcion = document.getElementById("descripcion").value;
    var precio = document.getElementById("precio").value;
     localStorage.setItem(descripcion,precio);
    document.getElementById("descripcion").value = "";
    document.getElementById("precio").value = "";
            
    actualizarData();
    }
    
    function recuperarDatos() {
    
    var descripcion = document.getElementById("descripcion").value;
    var precio = document.getElementById("precio").value;
    localStorage.getItem(nombre,descripcion,precio);
    document.getElementById("descripcion").value = localStorage.getItem(precio);
        
    }
    
    function eliminarDatos() {
    var descripcion = document.getElementById("descripcion").value;
    localStorage.removeItem(descripcion);
    actualizarData();
    }
    
    function eliminarTodo() {
    localStorage.clear();
    actualizarData();
    }
    
    function actualizarData() {
    var pares = "";
    if (localStorage.length === 0) {
        pares += '<li class="list-group-item">Sin Productos</li>';
    } else {
        for (var i = 0; i <= localStorage.length - 1; i++) {
            var key = localStorage.key(i);
            pares += '<li class="list-group-item"><span class="badge badge-info">' + localStorage.getItem(key) + '</span>' + key +'</li>';
        }
    }
    document.getElementById('catalago').innerHTML = pares;
    }
    