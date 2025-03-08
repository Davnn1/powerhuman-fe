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