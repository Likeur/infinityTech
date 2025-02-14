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

// Gerer le switch entre les icones
if (isDarkMode) {
  html.classList.add('dark');
  sunIcon.style.display = 'block';
  moonIcon.style.display = 'none';
} else {
  sunIcon.style.display = 'none';
  moonIcon.style.display = 'block';
}

// Ajouter un event au bouton qui vas switcher entre les 2 modes
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



// Sélectionner le header
const header = document.querySelector('header');

// Ajouter un gestionnaire d'événements pour détecter le scroll
window.addEventListener('scroll', () => {
  const scrollValue = window.scrollY; // Position verticale du scroll
  const threshold = 50; // Valeur seuil

  if (scrollValue > threshold) {
    header.classList.add('bg-zinc-300/30', 'shadow-lg', 'lg:mt-6', 'lg:rounded-full', 'backdrop-blur-2xl', 'lg:border-b', 'lg:dark:border-white/40', 'lg:border-zinc-950/40', 'lg:w-[70vw]');
    header.classList.remove('lg:bg-transparent','lg:w-[75vw]','lg:border-none', 'lg:backdrop-blur-none', 'bg-white/80', 'shadow-none');
  } else {
    header.classList.add('bg-white/80', 'lg:bg-transparent', 'lg:w-[75vw]', 'lg:border-none', 'lg:backdrop-blur-none', 'shadow-none');
    header.classList.remove('bg-zinc-300/30', 'shadow-lg', 'lg:mt-6', 'lg:rounded-full', 'backdrop-blur-2xl', 'lg:border-b', 'lg:dark:border-white/40', 'lg:border-zinc-950/40', 'lg:w-[70vw]');
  }
});