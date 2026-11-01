
const paginaViajes = document.querySelector('#paginaViajes');
console.log(paginaViajes);

// con este id, y estoy cogiendo la imagen donde luego querré meter
//  la información de src y el alt //
// que eso sirve para que se pueda visualizar en la pagina o sea en el html viajes js //

// hago un array con las fotos del banner (su caja) // cada imagen por separado, cada imagen
//  en su caja, dentro de la caja del array de Banner.

const arrayBanner = [

//imagen: '../assets/banner/1.jpg',             parte en que defino:   qué foto es
 // titulo: "banner 1",                         parte en que defino:   cómo se llama
 // descripcion: "Descripcion de este banner",  parte en que defino:   su texto
 // alt: 'el alt de este viaje',                parte en que defino:   lo que dice si la foto
 //                                                                    no carga

           
        {imagen: '../assets/banner/1.jpg',
           titulo: "banner 1",
           descripcion: "Un sol bajo que se pone detrás de montañas oscuras, con el agua en calma y dos boyas",
           alt: 'Atardecer sobre el agua en calma, con el sol entre montañas oscuras',
           },

        {imagen: '../assets/banner/2.jpg',
           titulo: "banner 2",
           descripcion: "Muchos globos aerostáticos de colores sobre un cielo azul con nubes grandes",
           alt: 'Globos aerostáticos de colores en un cielo azul con grandes nubes blancas',
           },

        {imagen: '../assets/banner/3.jpg',
           titulo: "banner 3",
           descripcion: "Cielo con estelas de aviones, nubes grises y un resplandor naranja abajo",
           alt: 'Cielo de atardecer con estelas de aviones y un resplandor naranja',
           },

        {imagen: '../assets/banner/4.jpg',
           titulo: "banner 4",
           descripcion: "Globos sobre un campo de trigo dorado, con un árbol al fondo",
           alt: 'Globos aerostáticos sobre un campo de trigo dorado bajo un cielo azul',
          },
          
        {imagen: '../assets/banner/5.jpg',
           titulo: "banner 5",
           descripcion: "La luna llena asomando entre nubes oscuras con reflejos anaranjados",
           alt: 'Luna llena entre nubes oscuras con reflejos anaranjados',
           },

        {imagen: '../assets/banner/6.jpg',
           titulo: "banner 6",
           descripcion: "Montañas nevadas y glaciares bajo un cielo azul muy intenso",
           alt: 'Panorámica de montañas nevadas y glaciares bajo un cielo azul',
           },

        {imagen: '../assets/banner/7.jpg',
           titulo: "banner 7",
           descripcion: "Una bandada enorme de pájaros a contraluz sobre un atardecer naranja y un mar de nubes",
           alt: 'Bandada de pájaros a contraluz en un atardecer naranja sobre las nubes',
           },

        {imagen: '../assets/banner/8.jpg',
           titulo: "banner 8",
           descripcion: "Brotes blancos y peludos sobre una rama oscura, con fondo negro (parecen yemas de sauce)",
           alt: 'Brotes blancos y peludos sobre una rama oscura y fondo negro',
          },
]

// hacer un array del cuerpo de los viajes //


const arrayViajes = []

// hago array de los destinos con sus fotos //

const arrayDestinos = [

//imagen: '../assets/viajes/viajes-7.jpg',      parte en que defino:  qué foto es
 // titulo: "viaje 7",                          parte en que defino:  cómo se llama
 // descripcion: "Descripcion de este viaje",   parte en que defino:  su texto
 // alt: 'el alt de este viaje',                parte en que defino:  lo que dice si la foto
 //                                                                   no carga

   
        {imagen: '../assets/viajes/viajes-1.jpg',
           titulo: "viaje 1",
           descripcion: "Descripcion de este viaje",
           alt: 'el alt de este viaje',
           },

        {imagen: '../assets/viajes/viajes-2.jpg',
           titulo: "viaje 2",
           descripcion: "Descripcion de este viaje",
           alt: 'el alt de este viaje',
           },

        {imagen: '../assets/viajes/viajes-3.jpg',
           titulo: "viaje 3",
           descripcion: "Descripcion de este viaje",
           alt: 'el alt de este viaje',
           },

        {imagen: '../assets/viajes/viajes-4.jpg',
           titulo: "viaje 4",
           descripcion: "Descripcion de este viaje",
           alt: 'el alt de este viaje',
           },

        {imagen: '../assets/viajes/viajes-5.jpg',
           titulo: "viaje 5",
           descripcion: "Descripcion de este viaje",
           alt: 'el alt de este viaje',
           },

        {imagen: '../assets/viajes/viajes-6.jpg',
           titulo: "viaje 6",
           descripcion: "Descripcion de este viaje",
           alt: 'el alt de este viaje',
           },

        {imagen: '../assets/viajes/viajes-7.jpg',
           titulo: "viaje 7",
           descripcion: "Descripcion de este viaje",
           alt: 'el alt de este viaje',
         },
]

// funcion para pintar la cabecera //

function pintarBanner(){
 // defino la función para pintar el banner encabezado //

// ahora capturo la imagen que está dentro del header que tiene el ide paginaViajes
// en el html //

// meto la url del src y el alt aqui... miarlo//

function pintarBanner() {
  const imagen = document.querySelector('paginaViajes');  // 1. la img del header
  const posicion = Math.floor(Math.random() *8);          // 2. al azar, de 0 a la última
  const caja = arrayBanner[imagen];                          // 3. la caja de esa posición
  posicion.setAttribute('alt', caja.imagen);         // 4. la ruta de la foto
  ___.setAttribute('alt', caja.___);                      // 5. el texto alternativo
}

pintarBanner();                                           // llamar a la función



}