
import { serializeNonPOJO } from "$lib/Utils/utils";
import type { PageServerLoad } from "../$types";


export const load: PageServerLoad = async ({ locals, url }) => {
    const page = Number(url.searchParams.get("page")) || 1
    try {
        let novels = await locals.pb.collection("novels").getList(page, 50, {
            filter: `creator='${locals.user.id}'`
        })
        return {
            novels: serializeNonPOJO(novels)
        }
    } catch (error) {
        console.log("ERROR : " + error)
    }

    return {}
}