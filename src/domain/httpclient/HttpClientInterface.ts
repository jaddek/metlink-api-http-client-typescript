export interface HttpClientInterface {
    get(path: string): Promise<any>
}
