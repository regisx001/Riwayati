import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { profileSchema } from "$lib/Utils/schemas";



export const load: PageServerLoad = async ({ locals }) => {
    return {
        user: locals.user,
    }
}

export const actions: Actions = {
    updateProfile: async ({ locals, request }) => {
        const data = Object.fromEntries(await request.formData())

        try {
            const form = profileSchema.safeParse(data)
            if (form.success) {
                try {
                    console.log("Success")
                    await locals.pb.collection('users').update(locals?.user?.id, data);
                } catch (error) {
                    console.log("Error" + error)
                }
            }

        } catch (error) {
            // @ts-ignore
            console.log(error.flatten())
        }
    }
};