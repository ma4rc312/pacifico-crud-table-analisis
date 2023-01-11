import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: () => import('../views/About.vue')
		},

		{
			path : '/lista-analisis',
			component: () => import('../components/analisis/ListaAnalysis.vue')
		},

		{
			path: '/crear',
			component: () => import('../components/analisis/crearAnalysis.vue')
		},

		{
			path: '/editAnalisis/:id_analysis', 
			component: () => import('../components/analisis/EditarAnalisis.vue')
		},

		{
			path: '/listar-centrospoblados',
			component: () => import('../components/centros_poblados/Lista.vue')
		}
	],
})

export default router