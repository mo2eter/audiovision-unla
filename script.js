const materiasPorAnio = {
"PRIMER AÑO": [
  { nombre: "Tecnología de la Imagen", correlativas: [] },
  { nombre: "Elementos de Audio", correlativas: [] },
  { nombre: "Taller de Lectura y Escritura profesional", correlativas: [] },
  { nombre: "Educación Auditiva", correlativas: [] },
  { nombre: "Electrónica de las Comunicaciones", correlativas: [] },
  { nombre: "Lenguaje Audiovisual 1", correlativas: [] },
  { nombre: "Registro de Sonido en Audiovisuales", correlativas: [] },
  { nombre: "Montaje 1", correlativas: [] },
  { nombre: "Fotografía e Iluminación en Audiovisuales", correlativas: [] },
  { nombre: "Inglés I", correlativas: [] }
],
"SEGUNDO AÑO": [
  { nombre: "Lenguaje Audiovisual 2", correlativas: ["Lenguaje Audiovisual 1", "Fotografía e Iluminación en Audiovisuales"] },
  { nombre: "Audición y Análisis Musical", correlativas: ["Taller de Lectura y Escritura profesional", "Educación Auditiva"] },
  { nombre: "Taller de Edición de Sonido", correlativas: ["Elementos de Audio", "Registro de Sonido en Audiovisuales"] },
  { nombre: "Taller de Montaje", correlativas: ["Lenguaje Audiovisual 1", "Montaje 1"] },
  { nombre: "Realización Integral Audiovisual 1", correlativas: ["Lenguaje Audiovisual 2", "Taller de Edición de Sonido", "Taller de Montaje"] },
  { nombre: "Arte y Sociedad", correlativas: ["Audición y Análisis Musical"] },
  { nombre: "Guión", correlativas: ["Lenguaje Audiovisual 2"] },
  { nombre: "Taller de Composición Sonora", correlativas: ["Audición y Análisis Musical", "Taller de Edición de Sonido"] },
  { nombre: "Seminario de Pensamiento Nacional y Latinoamericano", correlativas: [] },
  { nombre: "Seminario de Justicia y Derechos Humanos", correlativas: [] }
],
"TERCER AÑO": [
  { nombre: "Banda Sonora", correlativas: ["Taller de Composición Sonora"] },
  { nombre: "Géneros Estilos Audiovisuales", correlativas: ["Arte y Sociedad"] },
  { nombre: "Taller de Experimentación Audiovisual", correlativas: ["Lenguaje Audiovisual 2", "Taller de Composición Sonora"] },
  { nombre: "Realización Integral Audiovisual 2", correlativas: ["Realización Integral Audiovisual 1", "Guión"] },
  { nombre: "Ética Profesional", correlativas: ["Taller de Lectura y Escritura profesional"] }
],
"CICLO DE FORMACIÓN ORIENTADA": [
  { nombre: "Gestión de proyectos Audiovisuales", correlativas: ["Realización Integral Audiovisual 2"] },
  { nombre: "Estética", correlativas: ["Arte y Sociedad"] },
  { nombre: "Comunicación Audiovisual", correlativas: ["Taller de Lectura y Escritura profesional"] },
  { nombre: "Tecnología de Postproducción 1", correlativas: ["Tecnología de la Imagen", "Electrónica de las Comunicaciones"] },
  { nombre: "Imagen, Tipografía e Identidad Cultural", correlativas: ["Taller de Lectura y Escritura profesional"] }
],
"CUARTO AÑO": [
  { nombre: "Semiótica", correlativas: ["Taller de Lectura y Escritura profesional"] },
  { nombre: "Inglés II", correlativas: ["Inglés I"] },
  { nombre: "Metodología de Investigación", correlativas: ["Taller de Lectura y Escritura profesional"] },
  { nombre: "Optativa 1", correlativas: [] },
  { nombre: "Edición y Corrección Digital de Imagen", correlativas: ["Tecnología de la Imagen", "Fotografía e Iluminación en Audiovisuales", "Taller de Montaje"] },
  { nombre: "Tecnología de Postproducción 2", correlativas: ["Tecnología de Postproducción 1"] },
  { nombre: "Montaje 2", correlativas: ["Montaje 1"] },
  { nombre: "Animación 3D 1", correlativas: ["Edición y Corrección Digital de Imagen"] },
  { nombre: "Composición Digital", correlativas: ["Edición y Corrección Digital de Imagen"] },
  { nombre: "Tecnología de Postproducción 3", correlativas: ["Tecnología de Postproducción 2"] }
],
"QUINTO AÑO": [
  { nombre: "Taller de Trabajo Final Integrador Mención Postproducción de Imagen", correlativas: ["Géneros Estilos Audiovisuales", "Gestión de proyectos Audiovisuales", "Estética", "Imagen, Tipografía e Identidad Cultural", "Semiótica"] },
  { nombre: "Animación 3D 2", correlativas: ["Animación 3D 1", "Composición Digital"] },
  { nombre: "Taller de Postproducción de Imagen", correlativas: ["Animación 3D 1", "Composición Digital"] },
  { nombre: "Práctica Preprofesional Mención Postproducción de Imagen", correlativas: ["Realización Integral Audiovisual 2"] },
  { nombre: "Optativa 2", correlativas: [] },
  { nombre: "Optativa 3", correlativas: [] }
 ]
};

// Materias tecnicatura (ejemplo, ajustá según plan)
const tecnicaturaAnios = ["PRIMER AÑO", "SEGUNDO AÑO", "TERCER AÑO"]; 
const licenciaturaAnios = Object.keys(materiasPorAnio).filter(anio => !tecnicaturaAnios.includes(anio));

function renderProgreso() {
  const totalTecnico = tecnicaturaAnios.reduce((acc, anio) => acc + materiasPorAnio[anio].length, 0);
  const aprobadasTecnico = Array.from(aprobadas).filter(m => tecnicaturaAnios.some(anio => materiasPorAnio[anio].some(mat => mat.nombre === m))).length;

  const totalLic = licenciaturaAnios.reduce((acc, anio) => acc + materiasPorAnio[anio].length, 0);
  const aprobadasLic = Array.from(aprobadas).filter(m => licenciaturaAnios.some(anio => materiasPorAnio[anio].some(mat => mat.nombre === m))).length;

  const porcentajeTecnico = Math.round((aprobadasTecnico / totalTecnico) * 100);
  const porcentajeLic = Math.round((aprobadasLic / totalLic) * 100);

  // Actualizo barras y texto
  const barraTecnico = document.getElementById("barra-tecnico");
  const textoTecnico = document.getElementById("texto-tecnico");
  barraTecnico.style.width = porcentajeTecnico + "%";
  textoTecnico.textContent = `Técnico en Audiovisión: ${porcentajeTecnico}% aprobado`;

  const barraLic = document.getElementById("barra-licenciatura");
  const textoLic = document.getElementById("texto-licenciatura");
  barraLic.style.width = porcentajeLic + "%";
  textoLic.textContent = `Licenciatura: ${porcentajeLic}% aprobado`;
}

function renderMateriasSeparadas() {
  const contenedorTecnico = document.getElementById("tecnica-columns");
  const contenedorLic = document.getElementById("licenciatura-columns");
  contenedorTecnico.innerHTML = "";
  contenedorLic.innerHTML = "";

  tecnicaturaAnios.forEach(anio => {
    const columna = document.createElement("div");
    columna.className = "columna";
    const titulo = document.createElement("h2");
    titulo.textContent = anio;
    columna.appendChild(titulo);

    materiasPorAnio[anio].forEach(m => {
      const div = document.createElement("div");
      div.className = "materia";
      div.innerText = m.nombre;

      // aquí va la lógica para marcar estados, agregar eventos, etc
      // similar a lo que ya tienes: cursada, aprobada, habilitada, deshabilitada...

      columna.appendChild(div);
    });

    contenedorTecnico.appendChild(columna);
  });

  licenciaturaAnios.forEach(anio => {
    const columna = document.createElement("div");
    columna.className = "columna";
    const titulo = document.createElement("h2");
    titulo.textContent = anio;
    columna.appendChild(titulo);

    materiasPorAnio[anio].forEach(m => {
      const div = document.createElement("div");
      div.className = "materia";
      div.innerText = m.nombre;

      // aquí lógica para marcar estados, eventos, etc

      columna.appendChild(div);
    });

    contenedorLic.appendChild(columna);
  });
}

function renderTodo() {
  renderMateriasSeparadas();
  renderProgreso();
}

// llamás renderTodo() en vez de renderMaterias()
renderTodo();
