import type {Employee} from "~/types/employee";

export interface Meta {
    code: number
    status: string
    message: string
}

export interface ApiResponse<T> {
    meta: Meta
    result: T
}

export interface PaginationLink {
    url: string | null
    label: string
    active: boolean
}

export interface Pagination<T> {
    current_page: number;
    data: T;
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