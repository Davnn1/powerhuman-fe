export interface Team {
    id: number;
    name: string;
    icon: string;
    company_id: number;
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
}

export interface Employee {
    id: number;
    name: string;
    email: string;
    gender: string;
    age: number;
    phone: string;
    photo: string | null;
    team_id: number;
    role_id: number;
    is_verified: boolean;
    verified_at: string | null;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
    team: Team | undefined;
    role: Role | undefined;
}

export interface CreateEmployeePayload {
    name: string;
    email: string;
    gender: 'MALE' | 'FEMALE' | undefined;
    age: number;
    phone: string;
    photo?: File | null;
    team_id: number;
    role_id: number;
}

export interface CreateEmployeeResponse {
    name: string;
    email: string;
    gender: 'MALE' | 'FEMALE';
    age: string;
    phone: string;
    photo: string;
    team_id: string;
    role_id: string;
    updated_at: string;
    created_at: string;
    id: number;
}