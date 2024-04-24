import { headerToken } from "@/app/api/auth/headerToken"
import { baseUrl } from "@/utils/constants";


// Get all task by workspace id
export const getAllWorkSpace = async () => {
    const header = await headerToken();
    const res = await fetch(
        `${baseUrl}/api/todo/v1/workspaces`,
        {
            headers: header,
        }
    )
    const data = await res.json();
    return data;
}