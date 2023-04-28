import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";



export const load: PageServerLoad = async ({ locals }) => {
    if (!locals.user) {
        throw redirect(300, "/login")
    }
    return {
        user: locals.user,
    }
}

export const actions: Actions = {
    updateProfile: async ({ locals, request }) => {
        const data = await request.formData()

        // @ts-ignore
        if (data.get("avatar").size === 0) {
            data.delete("avatar")
        }

        // @ts-ignore
        if (data.get("cover").size === 0) {
            data.delete("cover")
        }

        try {
            await locals.pb.collection('users').update(locals?.user?.id, data);
        } catch (error) {
            console.log("Error" + error)
        }

        throw redirect(300, "/dashboard/profile")
    }
};