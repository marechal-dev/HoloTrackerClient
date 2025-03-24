import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'

import { type MessageSchema, MESSAGES } from './locales/i18n';

const i18n = createI18n<[MessageSchema], 'en-US' | 'pt-BR'>({
	locale: 'en-US',
	fallbackLocale: 'pt-BR',
	messages: MESSAGES,
})

const app = createApp(App)

app.use(createPinia())
app.use(i18n);
app.use(PrimeVue, {
	options: {
		cssLayer: {
			name: 'primevue',
			order: 'theme, base, primevue'
		}
	}
})
app.use(router)

app.mount('#app')
