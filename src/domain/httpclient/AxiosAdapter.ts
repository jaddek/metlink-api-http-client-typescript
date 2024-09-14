import {HttpClientInterface} from "./HttpClientInterface";
import AxiosInstance = Axios.AxiosInstance;
import IPromise = Axios.IPromise;

export class AxiosAdapter implements HttpClientInterface {
    private readonly axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    public async get(path: string): Promise<IPromise<any>> {
        return this.axios.get(path);
    }
}