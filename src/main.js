import './style.css';

const mainHeader = document.querySelector("#header");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", () => {
  mainHeader.dataset.state = mainHeader.dataset.state === "active" ? "closed" : "active";
})


const html = document.documentElement;
const toggleButton = document.getElementById('toggleButton');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');

// Vérifier si le mode sombre est déjà activé (par exemple, dans localStorage)
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
  html.classList.add('dark');
  sunIcon.style.display = 'block';
  moonIcon.style.display = 'none';
} else {
  sunIcon.style.display = 'none';
  moonIcon.style.display = 'block';
}

toggleButton.addEventListener('click', () => {
  html.classList.toggle('dark');

  // Enregistrer le mode dans localStorage
  localStorage.setItem('darkMode', html.classList.contains('dark'));

   // Afficher/masquer les icônes
   if (html.classList.contains('dark')) {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  } else {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  }
});