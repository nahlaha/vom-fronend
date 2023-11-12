import type { IPaginationResponse, IRestResponse, IUser, IUserForm } from "@/core";

interface IRequestArg {
    url: string;
    method: "get" | "post" | "put" | "delete";
    body?: {} | null;
    formData?: FormData | null;
    token?: string | null
}

async function _request<T>(req: IRequestArg): Promise<IRestResponse<T>> {
    const url = `${import.meta.env.VITE_BASE_URL}/api/v1/${req.url}`
    let headers: { [key: string]: string } = {
        "accept": "application/json, text/plain, */*"
    }
    if (req.token) {
        headers['authorization'] = `Bearer ${req.token}`
    }
    const result = await fetch(url, {
        method: req.method,
        mode: "cors",
        headers,
        body: req.formData ?? JSON.stringify(req.body),
    })
    return result.json()
}

//user requests

export const getAllUsers = (): Promise<IRestResponse<IPaginationResponse<IUser>>> =>
    _request({ url: "users", method: "get" })

export const createUser = (userForm: FormData): Promise<IRestResponse<IUser>> =>
    _request({ url: "users", method: "post", formData: userForm })

export const updateUser = (id: number, userForm: FormData): Promise<IRestResponse<boolean>> =>
    _request({ url: `users/${id}`, method: "put", formData: userForm })


export const deleteUser = (id: number): Promise<IRestResponse<boolean>> =>
    _request({ url: `users/${id}`, method: "delete" })


