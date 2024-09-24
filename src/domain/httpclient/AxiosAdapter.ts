import { HttpClientInterface } from './HttpClientInterface'
import AxiosInstance = Axios.AxiosInstance
import IPromise = Axios.IPromise
import AxiosXHR = Axios.AxiosXHR

export class AxiosAdapter implements HttpClientInterface {
    private readonly axios: AxiosInstance

    constructor(axios: AxiosInstance) {
        this.axios = axios
    }

    public async get(path: string): Promise<IPromise<AxiosXHR<unknown>>> {
        return this.axios.get(path)
    }
}
