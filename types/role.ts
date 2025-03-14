export interface Responsibility {
    id: number;
    name: string;
    role_id: number;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
}

export interface Role {
    id: number;
    name: string;
    company_id: number;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
    employees_count: string;
    responsibilities: Responsibility[] | undefined;
}

export interface CreateRole {
    name: string;
    company_id: string;
    updated_at: string;
    created_at: string;
    id: number;
}