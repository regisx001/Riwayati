
import { serializeNonPOJO } from '$lib/Utils/utils';
import type { Handle } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.pb = new PocketBase("http://127.0.0.1:8090");

    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

    try {
        event.locals.pb.authStore.isValid && await event.locals.pb.collection('users').authRefresh();
    } catch (_) {
        event.locals.pb.authStore.clear();
    }

    if (event.locals.pb.authStore.isValid) {
        event.locals.user = serializeNonPOJO(event.locals.pb.authStore.model);
    } else {
        event.locals.user = undefined;
    }

    const response = await resolve(event);

    response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie());

    return response;
}