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

export interface TeamFetchResult {
    current_page: number;
    data: Team[];
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