import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {

    }
}

export const actions: Actions = {
    login: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData())

        if (!body?.email) {
            return fail(400, {
                email: "required"
            })
        }

        if (!body?.password) {
            return fail(400, {
                password: "required"
            })
        }
        try {
            // @ts-ignore
            await locals.pb.collection('users').authWithPassword(body.email, body.password);
            if (!locals.pb?.authStore?.model?.verified) {
                locals.pb.authStore.clear();
                return fail(400, {
                    notVerified: true
                })
            }
        } catch (err) {
            console.log('Error: ', err);
            return fail(400, {
                credentials: "credentials"
            })
        }
        throw redirect(300, '/')
    }
};