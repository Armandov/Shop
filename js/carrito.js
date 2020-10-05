var carrito= {

  hPdt : null, 
  hItems : null, 
  items : {},
  productos : {
    ids1: {
      nombre : "Acer",
      descripcion : "Lorem ipsum dolor sit.",
      img :  './img/acer.jpg',
      precio : 11000
    },
    ids2: {
      nombre : "Hewlett-Packard",
      descripcion : "Lorem ipsum dolor sit.",
      img :  './img/hp.jpg',
      precio : 12000
    },
    ids3: {
      nombre : "Dell",
      descripcion : "Lorem ipsum dolor sit.",
      img : "./img/dell.jpg",
      precio : 14000
    },
    ids4: {
      nombre : "MacBook",
      descripcion : "Lorem ipsum dolor sit. ",
      img : "./img/apple.jpg",
      precio : 15000
    }
  },

 
  guardar : function () {
    localStorage.setItem("carrito", JSON.stringify(carrito.items));
  },

  load : function () {
    carrito.items = localStorage.getItem("carrito");
    if (carrito.items == null) { carrito.items = {}; }
    else { carrito.items = JSON.parse(carrito.items); }
  },
  

  eliminar : function () {
    if (confirm("Vaciar carrito?")) {
      carrito.items = {};
      localStorage.removeItem("carrito");
      carrito.list();
    }
  },


  iniciar : function () {
   
    carrito.hPdt = document.getElementById("carrito-productos");
    carrito.hItems = document.getElementById("carrito-items");
    

    carrito.hPdt.innerHTML = "";
    let p, item, lista;
    for (let ids in carrito.productos) {
  
      p = carrito.productos[ids];
      item = document.createElement("div");
      item.classList.add("p-item");
      carrito.hPdt.appendChild(item);
     
      lista = document.createElement("img");
      lista.src = p.img;
      lista.classList.add("p-img");
      item.appendChild(lista);

      lista = document.createElement("div");
      lista.innerHTML = p.nombre;
      lista.classList.add("p-nombre");
      item.appendChild(lista);
    
      lista = document.createElement("div");
      lista.innerHTML = "$" + p.precio;
      lista.classList.add("p-precio");
      item.appendChild(lista);
           
      lista = document.createElement("div");
      lista.innerHTML = p.descripcion;
      lista.classList.add("p-descripcion");
      item.appendChild(lista);
   
      lista = document.createElement("input");
      lista.type = "button";
      lista.value = "Añadir al carrito";
      lista.classList.add("p-add");
      lista.onclick = carrito.add;
      lista.dataset.ids = ids;
      item.appendChild(lista);
    }
    
    
    carrito.load();
    
    
    carrito.list();
  },
  
    list : function () {
      carrito.hItems.innerHTML = "";
    let item, lista, pdt;
    let empty = true;
    for (let key in carrito.items) {
      if(carrito.items.hasOwnProperty(key)) { empty = false; break; }
    }
  
    if (empty) {
      item = document.createElement("div");
      item.innerHTML = "<img src=\"./img/carrito.png\">";
      carrito.hItems.appendChild(item);
    }
    
    else {
      let p, total = 0, subtotal = 0;
      for (let ids in carrito.items) {
        
        p = carrito.productos[ids];
        item = document.createElement("div");
        item.classList.add("c-item");
        carrito.hItems.appendChild(item);

        
        lista = document.createElement("div");
        lista.innerHTML = p.nombre;
        lista.classList.add("c-nombre");
        item.appendChild(lista);

        lista = document.createElement("input");
        lista.type = "button";
        lista.value = "X";
        lista.dataset.ids = ids;
        lista.classList.add("c-del");
        lista.addEventListener("click", carrito.remove);
        item.appendChild(lista);

        lista = document.createElement("input");
        lista.type = "number";
        lista.value = carrito.items[ids];
        lista.dataset.ids = ids;
        lista.classList.add("c-qty");
        lista.addEventListener("change", carrito.change);
        item.appendChild(lista);
        
        subtotal = carrito.items[ids] * p.precio;
        total += subtotal;
      }

      item = document.createElement("input");
      item.type = "button";
      item.value = "Vaciar Carrito";
      item.addEventListener("click", carrito.eliminar);
      item.classList.add("c-vaciar");
      carrito.hItems.appendChild(item);

      item = document.createElement("input");
      item.type = "button";
      item.value = "Comprar - " + "$" + total;
      item.addEventListener("click", carrito.comprar);
      item.classList.add("c-comprar");
      carrito.hItems.appendChild(item);
    }
  },

  add : function () {
    if (carrito.items[this.dataset.ids] == undefined) {
      carrito.items[this.dataset.ids] = 1;
    } else {
      carrito.items[this.dataset.ids]++;
    }
    carrito.guardar();
    carrito.list();
  },

   change : function () {
    if (this.value == 0) {
      delete carrito.items[this.dataset.ids];
    } else {
      carrito.items[this.dataset.ids] = this.value;
    }
    carrito.guardar();
    carrito.list();
  },
  
  remove : function () {
    delete carrito.items[this.dataset.ids];
    carrito.guardar();
    carrito.list();
  },
  
  comprar : function () {
    
       
 document.write("listo")
    
 
  }
};
window.addEventListener("DOMContentLoaded", carrito.iniciar);