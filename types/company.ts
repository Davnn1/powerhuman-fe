export interface User {
    id: number
    name: string
    email: string
    email_verified_at: string | null
    current_team_id: number | null
    profile_photo_path: string | null
    created_at: string
    updated_at: string
    two_factor_confirmed_at: string | null
    profile_photo_url: string
    pivot: {
        company_id: number
        user_id: number
    }
}

export interface Company {
    id: number
    name: string
    logo: string | null
    deleted_at: string | null
    created_at: string
    updated_at: string
    users: User[]
}

export interface CompanyFetchResult {
    current_page: number
    data: Company[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: PaginationLink[]
    next_page_url: string | null
    path: string
    per_page: number
    prev_page_url: string | null
    to: number
    total: number
}
