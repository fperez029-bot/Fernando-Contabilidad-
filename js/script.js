/* =========================
   TARJETAS PRINCIPALES
   ========================= */

const programas = [

    {
        titulo: "Gestión Contable Integral",
        descripcion: "Organización y control de la información contable de empresas.",
        imagen: "img/imagen1.jpg",
        categoria: "proyectos"
    },

    {
        titulo: "Asesoría Fiscal y Tributaria",
        descripcion: "Orientación para el correcto cumplimiento de obligaciones fiscales.",
        imagen: "img/imagen2.jpg",
        categoria: "proyectos"
    },

    {
        titulo: "Cálculo y Declaración de Impuestos",
        descripcion: "Apoyo en el cálculo y presentación de declaraciones fiscales.",
        imagen: "img/imagen3.jpg",
        categoria: "proyectos"
    },

    {
        titulo: "Finanzas Personales y Pymes",
        descripcion: "Herramientas para mejorar la administración financiera.",
        imagen: "img/imagen4.jpg",
        categoria: "proyectos"
    },

    {
        titulo: "Auditoría e Inversiones",
        descripcion: "Análisis financiero para tomar mejores decisiones de inversión.",
        imagen: "img/imagen5.jpg",
        categoria: "unete"
    },

    {
        titulo: "Estrategia de Pagos y Nómina",
        descripcion: "Organización eficiente de pagos y obligaciones laborales.",
        imagen: "img/imagen6.jpg",
        categoria: "unete"
    },

    {
        titulo: "Consultoría de Negocios",
        descripcion: "Estrategias financieras para mejorar el funcionamiento empresarial.",
        imagen: "img/imagen7.jpg",
        categoria: "unete"
    },

    {
        titulo: "Planeación Financiera Avanzada",
        descripcion: "Planeación y análisis para alcanzar objetivos financieros.",
        imagen: "img/imagen8.jpg",
        categoria: "unete"
    }

];


/* =========================
   CREAR TARJETA
   ========================= */

function crearTarjeta(programa) {

    const tarjeta = document.createElement("div");

    tarjeta.classList.add("proyecto-card");

    tarjeta.innerHTML = `

        <img
            src="${programa.imagen}"
            alt="${programa.titulo}"
        >

        <div class="proyecto-card-content">

            <h3>${programa.titulo}</h3>

            <p>
                ${programa.descripcion}
            </p>

        </div>

    `;

    return tarjeta;
}


/* =========================
   MOSTRAR TARJETAS
   ========================= */

function renderizarProgramas(filtro = "todos") {

    const container =
        document.getElementById("programa-container");

    container.innerHTML = "";


    const programasFiltrados =
        filtro === "todos"
            ? programas
            : programas.filter(
                programa => programa.categoria === filtro
            );


    programasFiltrados.forEach(programa => {

        const tarjeta = crearTarjeta(programa);

        container.appendChild(tarjeta);

    });
}


/* =========================
   FILTROS
   ========================= */

document.addEventListener("DOMContentLoaded", function () {

    renderizarProgramas();


    const botonesFiltro =
        document.querySelectorAll(".filtro-btn");


    botonesFiltro.forEach(boton => {

        boton.addEventListener("click", function () {

            botonesFiltro.forEach(btn => {

                btn.classList.remove("active");

            });


            this.classList.add("active");


            const filtro =
                this.getAttribute("data-filter");


            renderizarProgramas(filtro);

        });

    });

});


/* =========================
   BOTÓN VOLVER ARRIBA
   ========================= */

const scrollTopBtn =
    document.getElementById("scrollTopBtn");


window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        scrollTopBtn.style.display = "block";

    } else {

        scrollTopBtn.style.display = "none";

    }

});


scrollTopBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});