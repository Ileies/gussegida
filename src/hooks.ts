import { deLocalizeUrl } from '$lib/messages';

export const reroute = (request: { url: string }) => deLocalizeUrl(request.url).pathname;
