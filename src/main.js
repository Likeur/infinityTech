import './style.css'
// firebase configs
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDPLp_YW-G7m6Jg9ATkJCEWSANc7hGvPt0',
	authDomain: 'infinitytech-20c7f.firebaseapp.com',
	projectId: 'infinitytech-20c7f',
	storageBucket: 'infinitytech-20c7f.firebasestorage.app',
	messagingSenderId: '651608228239',
	appId: '1:651608228239:web:f571aed233721ff9b94bfa',
	measurementId: 'G-XGJ0DN6HQW',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const mainHeader = document.querySelector('#header')
const menuBtn = document.querySelector('#menu-btn')

menuBtn.addEventListener('click', () => {
	mainHeader.dataset.state =
		mainHeader.dataset.state === 'active' ? 'closed' : 'active'
})

const html = document.documentElement
const toggleButton = document.getElementById('toggleButton')
const sunIcon = document.getElementById('sunIcon')
const moonIcon = document.getElementById('moonIcon')

// Vérifier si le mode sombre est déjà activé (par exemple, dans localStorage)
const isDarkMode = localStorage.getItem('darkMode') === 'true'

// Gerer le switch entre les icones
if (isDarkMode) {
	html.classList.add('dark')
	sunIcon.style.display = 'block'
	moonIcon.style.display = 'none'
} else {
	sunIcon.style.display = 'none'
	moonIcon.style.display = 'block'
}

// Ajouter un event au bouton qui vas switcher entre les 2 modes
toggleButton.addEventListener('click', () => {
	html.classList.toggle('dark')

	// Enregistrer le mode dans localStorage
	localStorage.setItem('darkMode', html.classList.contains('dark'))

	// Afficher/masquer les icônes
	if (html.classList.contains('dark')) {
		sunIcon.style.display = 'block'
		moonIcon.style.display = 'none'
	} else {
		sunIcon.style.display = 'none'
		moonIcon.style.display = 'block'
	}
})

// Sélectionner le header
const header = document.querySelector('header')

// Ajouter un gestionnaire d'événements pour détecter le scroll
window.addEventListener('scroll', () => {
	const scrollValue = window.scrollY // Position verticale du scroll
	const threshold = 50 // Valeur seuil

	if (scrollValue > threshold) {
		header.classList.add(
			'bg-zinc-300/30',
			'shadow-lg',
			'lg:mt-6',
			'lg:rounded-full',
			'backdrop-blur-3xl',
			'lg:border-b',
			'lg:dark:border-white/10',
			'lg:border-zinc-950/10',
			'lg:w-[70vw]'
		)
		header.classList.remove(
			'lg:bg-transparent',
			'lg:w-[75vw]',
			'lg:border-none',
			'lg:backdrop-blur-none',
			'bg-white/80',
			'shadow-none'
		)
	} else {
		header.classList.add(
			'bg-white/80',
			'lg:bg-transparent',
			'lg:w-[75vw]',
			'lg:border-none',
			'lg:backdrop-blur-none',
			'shadow-none'
		)
		header.classList.remove(
			'bg-zinc-300/30',
			'shadow-lg',
			'lg:mt-6',
			'lg:rounded-full',
			'backdrop-blur-2xl',
			'lg:border-b',
			'lg:dark:border-white/40',
			'lg:border-zinc-950/40',
			'lg:w-[70vw]'
		)
	}
})

/************* Article display management ******************/
document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelectorAll('.tab-btn')
	const articles = document.querySelectorAll('.article-category')
	const select = document.getElementById('Tab') // Sélecteur du menu déroulant

	if (!tabs.length || !articles.length || !select) return

	// Fonction pour afficher les articles en fonction de la catégorie
	function renderArticles(category) {
		articles.forEach((article) => {
			if (category === 'all' || article.dataset.category === category) {
				article.classList.remove('hidden')
			} else {
				article.classList.add('hidden')
			}
		})
	}

	// Par défaut, afficher tous les articles
	renderArticles('all')

	// Gestion des clics sur les onglets
	tabs.forEach((tab) => {
		tab.addEventListener('click', () => {
			// Retirer la classe active de tous les onglets
			tabs.forEach((t) =>
				t.classList.remove('text-blue-600', 'border-b-2', 'border-blue-600')
			)

			// Ajouter la classe active à l'onglet cliqué
			tab.classList.remove('text-zinc-500', 'border-transparent')
			tab.classList.add('text-blue-600', 'border-b-2', 'border-blue-600')

			// Récupérer la catégorie de l'onglet cliqué
			const category = tab.getAttribute('data-category') || 'all'

			// Synchroniser la valeur du sélecteur avec la catégorie
			select.value = category

			// Afficher les articles correspondants
			renderArticles(category)
		})
	})

	// Gestion du changement de sélection dans le `select`
	select.addEventListener('change', (event) => {
		const category = event.target.value

		// Mettre à jour la classe active des onglets
		tabs.forEach((tab) => {
			tab.classList.toggle(
				'text-blue-600',
				tab.getAttribute('data-category') === category
			)
			tab.classList.toggle(
				'border-b-2',
				tab.getAttribute('data-category') === category
			)
			tab.classList.toggle(
				'border-blue-600',
				tab.getAttribute('data-category') === category
			)
		})

		// Afficher les articles correspondants
		renderArticles(category)
	})
})
/******************** End Articles display management ***********************/

// Gestion affichage de l'image dans edit-profil-info.html
document
	.getElementById('profileImage')
	.addEventListener('change', function (event) {
		const file = event.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onload = function (e) {
				document.getElementById('previewImage').src = e.target.result
			}
			reader.readAsDataURL(file)
		}
	})

document
	.getElementById('profileImage')
	.addEventListener('change', function (event) {
		const file = event.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onload = function (e) {
				document.getElementById('previewImage').src = e.target.result
			}
			reader.readAsDataURL(file)
		}
	})

//Form Wave animation
document.addEventListener('DOMContentLoaded', () => {
	const formControls = document.querySelectorAll('.form-control')

	formControls.forEach((control) => {
		const label = control.querySelector('label')
		const input = control.querySelector('input, textarea')

		if (label && input) {
			const originalText = label.innerText // Stocke le texte original

			// Transformer le label en une série de <span>
			label.innerHTML = originalText
				.split('')
				.map(
					(letter, index) =>
						`<span style="--delay:${index * 60}ms">${letter}</span>`
				)
				.join('')

			const spans = label.querySelectorAll('span')

			input.addEventListener('focus', () => {
				spans.forEach((span, index) => {
					span.style.transitionDelay = `${index * 60}ms`
					span.style.transform = 'translateY(-100%)'
					span.style.fontSize = '14px'
					span.style.color = '#155dfc'
				})
			})

			input.addEventListener('blur', () => {
				if (input.value === '') {
					spans.forEach((span, index) => {
						span.style.transitionDelay = `${index * 60}ms`
						span.style.transform = 'translateY(0)'
						span.style.fontSize = '16px'
						span.style.color = '#9f9fa9'
					})
				}
			})
		}
	})
})
