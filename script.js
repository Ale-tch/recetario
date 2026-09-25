const recetario = [
    {
        nombre: "Tacos al Pastor",
        categoria: "Cena",
        tiempo: "45 min",
        dificultad: "Media",
        imagen: "https://picsum.photos/300/200?random=1",
        descripcion: "Clásicos tacos mexicanos con cerdo marinado, piña y cilantro.",
        instrucciones: "1. Marinar la carne. 2. Cocinar en sartén o trompo. 3. Servir en tortillas con piña."
    },
    {
        nombre: "Hotcakes con Frutos Rojos",
        categoria: "Desayuno",
        tiempo: "15 min",
        dificultad: "Fácil",
        imagen: "https://picsum.photos/300/200?random=2",
        descripcion: "Esponjosos hotcakes perfectos para empezar el día con energía.",
        instrucciones: "1. Mezclar harina, leche y huevo. 2. Cocinar en sartén con mantequilla. 3. Decorar con fruta."
    },
    {
        nombre: "Chilaquiles Verdes",
        categoria: "Desayuno",
        tiempo: "25 min",
        dificultad: "Media",
        imagen: "https://picsum.photos/300/200?random=3",
        descripcion: "Totopos bañados en salsa verde, con crema, queso y cebolla.",
        instrucciones: "1. Hervir tomates y chiles. 2. Licuar y freír la salsa. 3. Bañar los totopos y servir."
    },
    {
        nombre: "Brownie de Chocolate",
        categoria: "Postre",
        tiempo: "40 min",
        dificultad: "Fácil",
        imagen: "https://picsum.photos/300/200?random=4",
        descripcion: "Postre denso y chocolatoso con una cubierta crujiente.",
        instrucciones: "1. Derretir chocolate y mantequilla. 2. Mezclar azúcar, huevos y harina. 3. Hornear a 180°C."
    },
    {
        nombre: "Hamburguesa Clásica",
        categoria: "Cena",
        tiempo: "30 min",
        dificultad: "Fácil",
        imagen: "https://picsum.photos/300/200?random=5",
        descripcion: "Carne de res jugosa con queso derretido, lechuga y tomate.",
        instrucciones: "1. Sazonar la carne. 2. Cocinar a la plancha. 3. Armar con el pan tostado y vegetales."
    },
    {
        nombre: "Ensalada César",
        categoria: "Cena",
        tiempo: "15 min",
        dificultad: "Fácil",
        imagen: "https://picsum.photos/300/200?random=6",
        descripcion: "Lechuga romana crujiente con aderezo clásico, crutones y queso parmesano.",
        instrucciones: "1. Lavar lechuga. 2. Mezclar con aderezo César. 3. Espolvorear crutones y queso."
    },
    {
        nombre: "Huevos Rancheros",
        categoria: "Desayuno",
        tiempo: "20 min",
        dificultad: "Fácil",
        imagen: "https://picsum.photos/300/200?random=7",
        descripcion: "Huevos fritos sobre tortillas de maíz, bañados en salsa roja.",
        instrucciones: "1. Freír las tortillas. 2. Hacer huevos estrellados. 3. Servir sobre las tortillas y bañar en salsa."
    },
    {
        nombre: "Tiramisú",
        categoria: "Postre",
        tiempo: "60 min",
        dificultad: "Media",
        imagen: "https://picsum.photos/300/200?random=8",
        descripcion: "Postre italiano frío con capas de café, queso mascarpone y cacao.",
        instrucciones: "1. Remojar soletas en café. 2. Alternar capas con crema de mascarpone. 3. Refrigerar y espolvorear cacao."
    },
    {
        nombre: "Pizza Margarita",
        categoria: "Cena",
        tiempo: "50 min",
        dificultad: "Media",
        imagen: "https://picsum.photos/300/200?random=9",
        descripcion: "Masa delgada con salsa de tomate natural, mozzarella fresca y albahaca.",
        instrucciones: "1. Estirar la masa. 2. Untar salsa de tomate y poner queso. 3. Hornear y decorar con albahaca."
    },
    {
        nombre: "Avena con Manzana y Canela",
        categoria: "Desayuno",
        tiempo: "10 min",
        dificultad: "Fácil",
        imagen: "https://picsum.photos/300/200?random=10",
        descripcion: "Desayuno reconfortante y saludable para mañanas frías.",
        instrucciones: "1. Hervir leche y avena. 2. Agregar manzana en cubos. 3. Endulzar y espolvorear canela."
    },
    {
        nombre: "Cheesecake de Fresa",
        categoria: "Postre",
        tiempo: "4 horas",
        dificultad: "Difícil",
        imagen: "https://picsum.photos/300/200?random=11",
        descripcion: "Tarta de queso cremosa con base de galleta y mermelada de fresa.",
        instrucciones: "1. Hacer base de galleta. 2. Batir queso crema con azúcar y huevos. 3. Hornear, enfriar y decorar."
    },
    {
        nombre: "Sándwich de Pavo",
        categoria: "Desayuno",
        tiempo: "5 min",
        dificultad: "Fácil",
        imagen: "https://picsum.photos/300/200?random=12",
        descripcion: "Rápido y ligero, ideal para llevar al trabajo o la escuela.",
        instrucciones: "1. Untar mayonesa en el pan. 2. Colocar rebanadas de pavo, queso y lechuga. 3. Cerrar y cortar."
    },
    {
        nombre: "Lasaña de Carne",
        categoria: "Cena",
        tiempo: "90 min",
        dificultad: "Media",
        imagen: "https://picsum.photos/300/200?random=13",
        descripcion: "Capas de pasta, salsa boloñesa, bechamel y mucho queso gratinado.",
        instrucciones: "1. Preparar salsa de carne. 2. Alternar capas de pasta, carne y queso. 3. Hornear hasta dorar."
    },
    {
        nombre: "Helado de Vainilla Casero",
        categoria: "Postre",
        tiempo: "5 horas",
        dificultad: "Media",
        imagen: "https://picsum.photos/300/200?random=14",
        descripcion: "Helado cremoso hecho sin máquina, solo con 3 ingredientes.",
        instrucciones: "1. Montar crema para batir. 2. Mezclar con leche condensada y vainilla. 3. Congelar."
    },
    {
        nombre: "Pan Francés",
        categoria: "Desayuno",
        tiempo: "15 min",
        dificultad: "Fácil",
        imagen: "https://picsum.photos/300/200?random=15",
        descripcion: "Pan de molde remojado en mezcla de huevo y leche, frito a la perfección.",
        instrucciones: "1. Mezclar huevo, leche y canela. 2. Remojar el pan. 3. Dorar en sartén con mantequilla."
    },
    {
        nombre: "Sushi Roll Básico",
        categoria: "Cena",
        tiempo: "60 min",
        dificultad: "Difícil",
        imagen: "https://picsum.photos/300/200?random=16",
        descripcion: "Rollo de arroz y alga nori relleno de surimi, aguacate y pepino.",
        instrucciones: "1. Cocer arroz de sushi. 2. Extender sobre alga nori. 3. Rellenar, enrollar y cortar."
    },
    {
        nombre: "Galletas con Chispas",
        categoria: "Postre",
        tiempo: "30 min",
        dificultad: "Fácil",
        imagen: "https://picsum.photos/300/200?random=17",
        descripcion: "Suaves por dentro y crujientes por fuera, repletas de chocolate.",
        instrucciones: "1. Mezclar mantequilla y azúcares. 2. Añadir huevo, harina y chispas. 3. Hornear a 180°C."
    },
    {
        nombre: "Omelette de Champiñones",
        categoria: "Desayuno",
        tiempo: "15 min",
        dificultad: "Fácil",
        imagen: "https://picsum.photos/300/200?random=18",
        descripcion: "Huevos batidos rellenos de champiñones salteados y queso.",
        instrucciones: "1. Saltear champiñones. 2. Verter huevo batido en la sartén. 3. Añadir queso, rellenar y doblar."
    },
    {
        nombre: "Alitas BBQ",
        categoria: "Cena",
        tiempo: "45 min",
        dificultad: "Media",
        imagen: "https://picsum.photos/300/200?random=19",
        descripcion: "Alitas de pollo horneadas y bañadas en salsa barbacoa agridulce.",
        instrucciones: "1. Sazonar alitas y hornear. 2. Calentar salsa BBQ. 3. Bañar las alitas listas en la salsa."
    },
    {
        nombre: "Flan Napolitano",
        categoria: "Postre",
        tiempo: "80 min",
        dificultad: "Media",
        imagen: "https://picsum.photos/300/200?random=20",
        descripcion: "Postre tradicional con textura suave y caramelo líquido.",
        instrucciones: "1. Hacer caramelo en el molde. 2. Licuar leches, huevos y vainilla. 3. Hornear a baño maría."
    }
];

const contenedor = document.getElementById('grid-recetas');
const buscador = document.getElementById('buscador');
const botonesFiltro = document.querySelectorAll('.btn-filtro');
const modal = document.getElementById('modal-receta');
const btnCerrar = document.getElementById('btn-cerrar');

function mostrarRecetas(recetasParaMostrar) {
    contenedor.innerHTML = '';
    
    if (recetasParaMostrar.length === 0) {
        contenedor.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">No se encontraron recetas con esa búsqueda.</p>';
        return;
    }

    recetasParaMostrar.forEach(receta => {
        const tarjeta = document.createElement('article');
        tarjeta.className = 'tarjeta';
        
        tarjeta.innerHTML = `
            <img src="${receta.imagen}" alt="${receta.nombre}">
            <div class="info">
                <span class="tag">${receta.categoria}</span>
                <h3>${receta.nombre}</h3>
                <p>⏱ ${receta.tiempo} | 👨‍🍳 ${receta.dificultad}</p>
                <p style="font-size: 0.9rem; color: #666; height: 40px; overflow: hidden;">${receta.descripcion}</p>
                <button onclick="abrirDetalles('${receta.nombre}')" style="margin-top: 10px; width: 100%; padding: 8px; border: none; background: #ff6b6b; color: white; border-radius: 8px; cursor: pointer;">Ver receta</button>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    });
}

buscador.addEventListener('input', (e) => {
    const texto = e.target.value.toLowerCase();
    const resultados = recetario.filter(receta => 
        receta.nombre.toLowerCase().includes(texto) || 
        receta.descripcion.toLowerCase().includes(texto)
    );
    mostrarRecetas(resultados);
});

botonesFiltro.forEach(boton => {
    boton.addEventListener('click', (e) => {
        botonesFiltro.forEach(b => b.style.opacity = "0.7");
        e.target.style.opacity = "1";

        const categoria = e.target.dataset.categoria;
        
        if (categoria === 'Todas') {
            mostrarRecetas(recetario);
        } else {
            const filtradas = recetario.filter(r => r.categoria === categoria);
            mostrarRecetas(filtradas);
        }
    });
});

window.abrirDetalles = function(nombreReceta) {
    const receta = recetario.find(r => r.nombre === nombreReceta);
    
    if(receta) {
        document.getElementById('modal-img').src = receta.imagen;
        document.getElementById('modal-titulo').innerText = receta.nombre;
        document.getElementById('modal-tiempo').innerText = `⏳ ${receta.tiempo}`;
        document.getElementById('modal-dificultad').innerText = `👨‍🍳 ${receta.dificultad}`;
        document.getElementById('modal-descripcion').innerText = receta.descripcion;
        document.getElementById('modal-instrucciones').innerText = receta.instrucciones;
        
        modal.classList.add('mostrar');
    }
};

btnCerrar.addEventListener('click', () => {
    modal.classList.remove('mostrar');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('mostrar');
    }
});

mostrarRecetas(recetario);