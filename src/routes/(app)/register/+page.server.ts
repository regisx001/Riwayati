import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
}






export const actions: Actions = {
    register: async ({ request, locals }) => {
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

        if (body?.password !== body?.passwordConfirm) {
            return fail(400, {
                passwordConfirm: "not match"
            })
        }
        console.log(body)
        try {
            // @ts-ignore
            await locals.pb.collection('users').create(body)
            // @ts-ignore
            await locals.pb.collection("users").requestVerification(body.email)
            // @ts-ignore
            await locals.pb.collection("users").requestVerification(body?.email)
        } catch (err) {
            console.log('Error: ', err);
        }
        throw redirect(300, "/login")
    }
};