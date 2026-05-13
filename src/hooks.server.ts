import type { Handle } from '@sveltejs/kit';
import { runWithLocale, cookieName } from '$lib/messages';

const handleLocale: Handle = ({ event, resolve }) => {
	const locale = event.cookies.get(cookieName) ?? 'de';
	event.locals.locale = locale;
	return runWithLocale(locale, () =>
		resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%lang%', locale)
		})
	);
};

export const handle: Handle = handleLocale;
