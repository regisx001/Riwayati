import { serializeNonPOJO } from "$lib/Utils/utils";
import type { PageServerLoad } from "./$types";



export const load: PageServerLoad = async ({ locals, params }) => {
    const id = String(params.id)
    let IsCreator = false

    try {
        const novel = await locals.pb.collection("novels").getOne(id, {
            expand: "creator"
        })
        if (locals.user.id === novel.creator) {
            IsCreator = true
        }
        return {
            novel: serializeNonPOJO(novel),
            IsCreator,
        }
    } catch (error) {
        console.log("ERROR : " + error)
    }
}