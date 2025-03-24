import enUS from './en-US.json';
import ptBR from './pt-BR.json';

export type MessageSchema = typeof enUS;

export type SupportedLocale = 'en-US' | 'pt-BR';

export const MESSAGES = {
	'en-US': enUS,
	'pt-BR': ptBR,
};
