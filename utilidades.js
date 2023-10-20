function crearTablaProyectos() {
  var proyectos = [
      { nombre: 'Hamburguer Food', imagen: 'recursos/imagenes/frondEnd1.webp' },
      { nombre: 'Batt Ball', imagen: 'recursos/imagenes/frondEnd2.jpg' },
      { nombre: 'Cuda Portfolio', imagen: 'recursos/imagenes/frondEnd3.jpg' },
      { nombre: 'Dream Theme', imagen: 'recursos/imagenes/frondEnd4.jpg' },
      { nombre: 'Facebook Login', imagen: 'recursos/imagenes/frontEnd5.jpg' },
      { nombre: 'Fashion Ecommerce', imagen: 'recursos/imagenes/frontEnd6.jpg' }
  ];

  var tabla = document.querySelector('table');
  var fila;

  proyectos.forEach((proyecto, index) => {
      if (index % 3 === 0) {
          fila = tabla.insertRow();
      }

      var celda = fila.insertCell();
      var imagen = new Image();
      imagen.src = proyecto.imagen;
      imagen.width = 330;
      imagen.height = 200;
      celda.appendChild(imagen);
      celda.innerHTML += `<div>${proyecto.nombre} <button>Codigo Fuente</button><button>Vista Previa</button></div>`;
  });
}

function inicializarTabla() {
  crearTablaProyectos();
}
