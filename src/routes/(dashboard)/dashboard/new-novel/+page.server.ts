import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "../$types";


export const load: PageServerLoad = async ({ locals }) => {
    if (!locals.user) {
        throw redirect(300, "/login")
    }

    return {}
}

export const actions: Actions = {
    createNovel: async ({ locals, request }) => {
        const formData = await request.formData()

        // @ts-ignore
        if (formData.get("image").size === 0) {
            formData.delete("image")
        }

        if (!formData.get("title")) {
            return fail(400, {
                title: "Please Enter a title it's required !"
            })
        }

        formData.append("creator", locals.user.id)
        try {
            await locals.pb.collection("novels").create(formData)
        } catch (error) {
            console.log("ERROR : " + error)
        }

        return { success: true };
    }
};