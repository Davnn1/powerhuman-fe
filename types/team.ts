export interface Team {
    id: number;
    name: string;
    icon: string;
    company_id: number;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
    employees_count: string;
}

export interface CreateTeam {
    name: string;
    icon: string | null;
    company_id: string;
    updated_at: string;
    created_at: string;
    id: number;
}