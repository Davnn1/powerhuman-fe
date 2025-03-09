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
