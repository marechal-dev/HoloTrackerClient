import { LOCAL_STORAGE_KEYS } from "@/constants/browser-constants";
import type { MessageSchema, SupportedLocale } from "@/locales/i18n";
import { useLocalStorage } from "@vueuse/core";
import { useI18n } from "vue-i18n";

export function useTranslation() {
	const { t } = useI18n<{
		message: MessageSchema
	}>();

	const prefferedLang = useLocalStorage<SupportedLocale>(
		LOCAL_STORAGE_KEYS.PrefferedLang,
		'en-US'
	);

	return {
		prefferedLang,
		t,
	}
}
