const traducciones = {
  es: {
    nombre: "Álvaro Gómez",
    perfil_titulo: "Perfil Profesional",
    perfil_texto: "Egresado de la carrera de Ingeniería en Sistemas, proactivo, meticuloso y hábil en desarrollo de  software y mantenimiento de equipo de cómputo. Lenguajes de programación con  los cuales dispongo de amplio conocimiento son: PHP, Visual Basic, Python, C,  C++ C#, Java, JavaScript y lenguaje de etiquetas (HTML), MySQL, Laravel cuento con  conocimiento en redes informáticas, cámaras de circuito cerrado. ",
    titulo: "  Ingeniero en Sistemas / Desarrolador y soporte técnico general",
    experiencia: "Experiencia ",
    exp1: "Programador web",
    exp2:" ◉ SB realtors (Enero 2023 a Abril 2023)",
    ex1: "Desarrollé soluciones web con enfoque en rendimiento y seguridad.",
    exp3: "Ing. En Soporte TI",
    exp4:"◉ Grupo Vidanta (Abril 2023 a Septiembre 2024)",
    ex2: "Diagnóstico y solución de incidencias técnicas, En un entorno de hotelería y restaurantes.",
    exp5: "Auxiliar de Sistemas",
    exp6: "◉ Universidad/Colegio Vizcaya de las Americas (2021 - 2022)",
    ex3:"Realicé Soporte tecnico general, reparación y mantenimiento a equipo de CCV, gestión de las redes de la institución.",
    edu:"Educación",
    title: "Licenciatura en Ingeniería en Sistemas - Tecnológico Superior Mario Molina Pasquel y Henríquez",
    skills: "Habilidades",
    res: "Resolución de problemas",
    tra: "Trabajo bajo presión",
    ges: "Gestión de redes",
    sop: "Soporte Técnico General",
    cont:"Contacto Directo"

  },
  en: {
    nombre: "Álvaro Gomez",
    perfil_titulo: "Professional Profile",
    perfil_texto: "A graduate of Systems Engineering, I am proactive, meticulous, and skilled in software development and computer equipment maintenance. My programming languages ​​of extensive knowledge include PHP, Visual Basic, Python, C, C++, C#, Java, JavaScript, and HTML markup language, MySQL, and Laravel. I also have extensive experience in computer networks and closed-circuit cameras.",
    titulo: "  Systems Engineer / Developer and General Technical Support",
    experiencia: " Experience ",
    exp1:"Web Programmer",
    exp2: "◉ SB realtors (January 2023 To April 2023)",
    ex1: "I developed web solutions with a focus on performance and security.",
    exp3: "TI Engineer",
    exp4:"◉ Grupo Vidanta (April 2023 To September 2024)",
    exp5:"Assistant in Systems",
    ex2: "Diagnosis and resolution of technical incidents, in a hotel and restaurant environment.",
    exp6: "◉ Vizcaya University/College of the Americas (2021 - 2022)",
    ex3:"I provided general technical support, repair and maintenance to CCV equipment, and managed the institution's networks.",
    edu:"Education",
    title:"Bachelor's Degree in Systems Engineering - Mario Molina Pasquel y Henríquez Higher Technological Institute",
    skills: "Skills",
    res:"Troubleshooting",
    tra:"Work under pressure",
    ges: "Network Management",
    sop:"General Technical Support",
    cont:"Direct Contact"
  }
  
};
let idiomaActual = "es";

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("botonIdioma");

  boton.addEventListener("click", () => {
    idiomaActual = idiomaActual === "es" ? "en" : "es";
    traducirContenido(idiomaActual);
    boton.textContent = idiomaActual === "es" ? "🌐 English" : "🌐 Español";
  });

  // Traduce inicialmente si quieres cargarlo dinámicamente
  traducirContenido(idiomaActual);
});

function traducirContenido(idioma) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const clave = el.getAttribute("data-i18n");
    const texto = traducciones[idioma][clave];
    if (texto) el.textContent = texto;
  });
}