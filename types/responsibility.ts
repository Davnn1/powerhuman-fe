export interface Responsibility {
    id: number;
    name: string;
    role_id: number;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
}

export interface CreateResponsibility {
    name: string;
    role_id: string;
    updated_at: string;
    created_at: string;
    id: number;
}