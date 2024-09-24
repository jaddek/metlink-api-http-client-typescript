import MetlinkHttpClient from "./MetlinkHttpClient";
import {HeadersDictInterface, HostInterface, MetlinkHttpClientInterface} from "./Contracts";
import {HeadersDirector} from "./HeadersDirector";
import {AxiosAdapter} from "./domain/httpclient/AxiosAdapter";
import axios from "axios";
import {ResponseDataDecorator} from "./ResponseDataDecorator";
import AxiosInstance = Axios.AxiosInstance;

export class MetlinkHttpClientBuilder {

    public static buildWithAxios(
        token: string,
        options: object = {},
        configureFn?: (axios: AxiosInstance) => void
    ): MetlinkHttpClientInterface {
        const [host, headers]: [HostInterface, HeadersDictInterface] = HeadersDirector.build(token);
        const config = {
            baseURL: host.getUrl(),
            headers: headers
        };

        const axiosInstance = axios.create({...options, ...config});

        if (configureFn) {
            configureFn(axiosInstance);
        }

        return new MetlinkHttpClient(new AxiosAdapter(axiosInstance));
    }

    public static buildWithAxiosUsingResponseDataDecorator(
        token: string,
        options: object = {},
        configureFn?: (axios: AxiosInstance) => void
    ): MetlinkHttpClientInterface {

        const [host, headers]: [HostInterface, HeadersDictInterface] = HeadersDirector.build(token);
        const config = {
            baseURL: host.getUrl(),
            headers: headers
        };

        const axiosInstance = axios.create({...options, ...config});

        if (configureFn) {
            configureFn(axiosInstance);
        }

        return new ResponseDataDecorator(new MetlinkHttpClient(new AxiosAdapter(axiosInstance)));
    }
}
