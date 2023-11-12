export interface IUser {
    id: number;
    first_name: string;
    last_name?: string;
    email: string;
    image_path?: string;
    phone_number?: string;
    description?: string;
    role_id: number;
    created_at: Date;
    updated_at?: Date;
    deleted_at?: Date;
}