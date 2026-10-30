// ==========================================
// FERNANDO CONTABILIDAD
// SISTEMA DE TARJETAS Y FILTROS
// ==========================================


// ------------------------------------------
// 1. INFORMACIÓN DE LAS TARJETAS
// ------------------------------------------

const programas = [

    {
        id: 1,
        imagen: "img/imagen1.jpg",
        titulo: "Gestión Contable Integral",
        categoria: "proyectos",
        descripcion:
            "Aprende los fundamentos de la contabilidad y conoce las herramientas necesarias para llevar un mejor control financiero."
    },

    {
        id: 2,
        imagen: "img/imagen2.jpg",
        titulo: "Asesoría Fiscal y Tributaria",
        categoria: "proyectos",
        descripcion:
            "Conoce los principales conceptos fiscales y aprende a comprender mejor tus obligaciones tributarias."
    },

    {
        id: 3,
        imagen: "img/imagen3.jpg",
        titulo: "Cálculo y Declaración de Impuestos",
        categoria: "proyectos",
        descripcion:
            "Aprende los conceptos básicos relacionados con el cálculo y la declaración de impuestos."
    },

    {
        id: 4,
        imagen: "img/imagen4.jpg",
        titulo: "Finanzas Personales y Pymes",
        categoria: "proyectos",
        descripcion:
            "Aprende a administrar mejor tu dinero y conoce herramientas financieras útiles para personas y pequeños negocios."
    },

    {
        id: 5,
        imagen: "img/imagen5.jpg",
        titulo: "Auditoría e Inversiones",
        categoria: "unete",
        descripcion:
            "Conoce los fundamentos de la auditoría y descubre conceptos básicos relacionados con las inversiones."
    },

    {
        id: 6,
        imagen: "img/imagen6.jpg",
        titulo: "Estrategia de Pagos y Nómina",
        categoria: "unete",
        descripcion:
            "Conoce herramientas para organizar pagos, nóminas y diferentes responsabilidades financieras."
    },

    {
        id: 7,
        imagen: "img/imagen7.jpg",
        titulo: "Consultoría de Negocios",
        categoria: "unete",
        descripcion:
            "Aprende conceptos fundamentales para analizar negocios y tomar mejores decisiones financieras."
    },

    {
        id: 8,
        imagen: "img/imagen8.jpg",
        titulo: "Planeación Financiera Avanzada",
        categoria: "unete",
        descripcion:
            "Conoce estrategias de planeación financiera para organizar recursos y establecer objetivos a largo plazo."
    }

];


// ------------------------------------------
// 2. OBTENER ELEMENTOS DEL HTML
// ------------------------------------------

const container =
    document.getElementById("programa-container");

const filterButtons =
    document.querySelectorAll(".filter-btn");


// ------------------------------------------
// 3. FUNCIÓN PARA CREAR UNA TARJETA
// ------------------------------------------

function crearTarjeta(programa) {

    const tarjeta = document.createElement("figure");

    tarjeta.classList.add("proyecto-card");

    tarjeta.innerHTML = `

        <div class="img-container">

            <img
                src="${programa.imagen}"
                alt="${programa.titulo}"
                loading="lazy"
            >

        </div>


        <figcaption>
            ${programa.titulo}
        </figcaption>


        <div class="card-description">

            <p>
                ${programa.descripcion}
            </p>

        </div>

    `;


    return tarjeta;
}


// ------------------------------------------
// 4. RENDERIZAR TARJETAS
// ------------------------------------------

function renderizarProgramas(categoria = "all") {

    // Limpiar las tarjetas anteriores
    container.innerHTML = "";


    // Filtrar
    const programasFiltrados =
        categoria === "all"
            ? programas
            : programas.filter(
                programa =>
                    programa.categoria === categoria
            );


    // Crear cada tarjeta
    programasFiltrados.forEach(programa => {

        const tarjeta =
            crearTarjeta(programa);

        container.appendChild(tarjeta);

    });


    // Si no hay resultados
    if (programasFiltrados.length === 0) {

        container.innerHTML = `
            <p class="no-results">
                No hay cursos disponibles en esta categoría.
            </p>
        `;

    }

}


// ------------------------------------------
// 5. BOTONES DE FILTRO
// ------------------------------------------

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Obtener categoría
        const categoria =
            button.dataset.category;


        // Quitar "active" de todos
        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        // Activar botón seleccionado
        button.classList.add("active");


        // Renderizar tarjetas
        renderizarProgramas(categoria);

    });

});


// ------------------------------------------
// 6. MOSTRAR TODAS AL CARGAR LA PÁGINA
// ------------------------------------------

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderizarProgramas("all");

    }
);


// ------------------------------------------
// 7. VOLVER ARRIBA
// ------------------------------------------

function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}