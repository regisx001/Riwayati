import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";



export const load: PageServerLoad = async ({ locals }) => {
    return {
        user: locals.user
    }
}


export const actions: Actions = {
    updateProfile: async ({ locals, request }) => {
        let data = await request.formData();
        const userAvatar = data.get('avatar');

        // @ts-ignore
        if (userAvatar.size === 0) {
            data.delete('avatar');
        }

        try {
            await locals.pb.collection('users').update(locals?.user?.id, data);
        } catch (error) {
            console.log("Error" + error)
        }
        throw redirect(300, "/dashboard")
    }
};