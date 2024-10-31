// Diccionario de productos con palabras clave y sus URLs
const productPages = {
  "fresas": ["fresa fresca", "fresas", "venta de fresas", "fresa"],
  "huevos de gallina": ["huevos de gallina", "huevo", "huevos", "gallina", "gallinas", "huevos gallina"],
  "cuy vivo": ["cuy vivo", "cuy", "venta de cuy"],
  "paquetes de verduras": ["paquetes de verduras", "verduras", "verdura", "paquete verduras"],
  "libro de reclamaciones": ["libro de reclamaciones", "reclamaciones", "libro reclamaciones", "reclamo"]
};

// URLs asociadas a cada clave principal
const pageURLs = {
  "fresas": "Fresas.html",
  "huevos de gallina": "HuevosdeGallina.html",
  "cuy vivo": "Cuyvivo.html",
  "paquetes de verduras": "Verduras.html",
  "libro de reclamaciones": "Reclamaciones.html"
};

// Función para normalizar términos
function normalize(term) {
  return term.replace(/\s+/g, '').toLowerCase();
}

// Función para mostrar sugerencias
function showSuggestions() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
  const normalizedSearchTerm = normalize(searchTerm);
  const suggestionsBox = document.getElementById('suggestions');
  suggestionsBox.innerHTML = ''; // Limpiar sugerencias previas

  if (searchTerm) {
    let suggestionsFound = false;

    // Buscar términos que coincidan en el diccionario
    for (let product in productPages) {
      productPages[product].forEach(term => {
        if (normalize(term).includes(normalizedSearchTerm)) {
          const suggestionItem = document.createElement('div');
          suggestionItem.classList.add('suggestion-item');
          suggestionItem.innerText = term;
          suggestionItem.onclick = function () {
            document.getElementById('searchInput').value = term;
            suggestionsBox.style.display = 'none';
          };
          suggestionsBox.appendChild(suggestionItem);
          suggestionsFound = true;
        }
      });
    }

    suggestionsBox.style.display = suggestionsFound ? 'block' : 'none';
  } else {
    suggestionsBox.style.display = 'none';
  }
}

// Función de búsqueda
function searchProduct() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
  const normalizedSearchTerm = normalize(searchTerm);
  let found = false;

  // Limpiar el campo de búsqueda al inicio para evitar que se quede el texto
  document.getElementById('searchInput').value = '';

  // Recorre cada clave principal en el diccionario de productos
  for (let product in productPages) {
    if (productPages[product].some(term => normalize(term) === normalizedSearchTerm)) {
      // Si se encuentra el término, redirige a la URL correspondiente
      if (pageURLs[product]) {
        window.location.href = pageURLs[product];
        found = true;
        break;
      }
    }
  }

  if (!found) {
    alert("Llenar el campo de búsqueda");
  }

  return false;
}
