export interface IPaginationResponse<T> {
    data: T[];
    Total: number;
    current_page: number;
    per_page: number;
    total: number;
}