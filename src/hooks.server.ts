import type { Handle } from '@sveltejs/kit';
import { runWithLocale, cookieName, getTextDirection } from '$lib/messages';

const validLocales = ['de', 'en', 'ar', 'tr'];

const handleLocale: Handle = ({ event, resolve }) => {
	const raw = event.cookies.get(cookieName) ?? 'de';
	const locale = validLocales.includes(raw) ? raw : 'de';
	event.locals.locale = locale;
	return runWithLocale(locale, () =>
		resolve(event, {
			transformPageChunk: ({ html }) =>
				html.replace('%lang%', locale).replace('%dir%', getTextDirection(locale))
		})
	);
};

export const handle: Handle = handleLocale;
