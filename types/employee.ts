export interface Employee {
    id: number;
    name: string;
    email: string;
    gender: string;
    age: number;
    phone: string;
    photo: string | undefined;
    team_id: number;
    role_id: number;
    is_verified: boolean;
    verified_at: string | null;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
    role: Role | undefined;
}
export interface Role {
    id: number;
    name: string;
    company_id: number;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
}

export interface EmployeeFetchResult {
    current_page: number;
    data: Employee[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}