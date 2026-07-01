export interface ApiResponse<T>{
    success: Boolean;

    message: string;

    data: T;
}