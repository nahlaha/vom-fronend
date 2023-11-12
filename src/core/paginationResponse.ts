export interface IPaginationResponse<T> {
    data: T[];
    current_page: number;
    per_page: number;
    total: number;
}