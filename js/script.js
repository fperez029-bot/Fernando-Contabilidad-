// DATOS PARA FILTRAR
const dwfernando = [
    // proyectos //
    {
        id: 1,
        name: "Gestión Contable Integral",
        image: "img/imagen1.jpg",
        genero: "proyectos",
        description: "Buscamos ayudar a quien no sabe, pero también enseñar a quienes están interesados en hacerlo ellos mismos."
    },
    {
        id: 2,
        name: "Asesoría Fiscal y Tributaria",
        image: "img/imagen2.jpg",
        genero: "proyectos",
        description: "Buscamos ayudar a quien no sabe, pero también enseñar a quienes están interesados en hacerlo ellos mismos."
    },
    {
        id: 3,
        name: "Cálculo y Declaración de Impuestos",
        image: "img/imagen3.jpg",
        genero: "proyectos",
        description: "Buscamos ayudar a quien no sabe, pero también enseñar a quienes están interesados en hacerlo ellos mismos."
    },
    {
        id: 4,
        name: "Finanzas Personales y Pymes",
        image: "img/imagen4.jpg",
        genero: "proyectos",
        description: "Buscamos ayudar a quien no sabe, pero también enseñar a quienes están interesados en hacerlo ellos mismos."
    },

    // unete //
    {
        id: 5,
        name: "Auditoría e Inversiones",
        image: "img/imagen5.jpg",
        genero: "unete",
        description: "Buscamos ayudar a quien no sabe, pero también enseñar a quienes están interesados en hacerlo ellos mismos."
    },
    {
        id: 6,
        name: "Estrategia de Pagos y Nómina",
        image: "img/imagen6.jpg",
        genero: "unete",
        description: "Buscamos ayudar a quien no sabe, pero también enseñar a quienes están interesados en hacerlo ellos mismos."
    },
    {
        id: 7,
        name: "Consultoría de Negocios",
        image: "img/imagen7.jpg",
        genero: "unete",
        description: "Buscamos ayudar a quien no sabe, pero también enseñar a quienes están interesados en hacerlo ellos mismos."
    },
    {
        id: 8,
        name: "Planeación Financiera Avanzada",
        image: "img/imagen8.jpg",
        genero: "unete",
        description: "Buscamos ayudar a quien no sabe, pero también enseñar a quienes están interesados en hacerlo ellos mismos."
    }
];

// Obtener contenedores y botones
const dwfernandoContainer = document.getElementById("programa-container");
const filterButtons = document.querySelectorAll(".filter-btn");

// Función para renderizar las tarjetas
function renderDw(genero) {
    let dwfernandoToRender = [];
    if (genero === "all" || genero === "todos") {
        dwfernandoToRender = dwfernando;
    } else {
        dwfernandoToRender = dwfernando.filter(item => item.genero === genero);
    }

    dwfernandoContainer.innerHTML = "";

    dwfernandoToRender.forEach(item => {
        const card = document.createElement("figure");
        card.classList.add("proyecto-card");
        card.setAttribute("data-gender", item.genero);

        card.innerHTML = `
            <div class="img-container">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <figcaption>${item.name}</figcaption>
            <div class="card-description">
                <p>${item.description}</p>
            </div>
        `;
        dwfernandoContainer.appendChild(card);
    });
}

// Event Listeners para filtrar
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        const categoria = button.getAttribute("data-category");
        renderDw(categoria);
    });
});

// Carga inicial al iniciar la página
renderDw("all");