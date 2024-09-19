import MetlinkHttpClient from "./MetlinkHttpClient";
import {HeadersDictInterface, HostInterface} from "./Contracts";
import {HeadersDirector} from "./HeadersDirector";
import {AxiosAdapter} from "./domain/httpclient/AxiosAdapter";
import axios from "axios";
import {ResponseDataDecorator} from "./ResponseDataDecorator";

export class MetlinkHttpClientBuilder {

    public static buildWithAxios(token: string, options: object = {}): MetlinkHttpClient {
        const [host, headers]: [HostInterface, HeadersDictInterface] = HeadersDirector.build(token);
        const config = {
            baseURL: host.getUrl(),
            headers: headers
        };

        const axiosInstance = axios.create({...options, ...config});

        return new MetlinkHttpClient(new AxiosAdapter(axiosInstance));
    }

    public static buildWithAxiosAndDecorate(token: string, options: object = {}): ResponseDataDecorator {

        const [host, headers]: [HostInterface, HeadersDictInterface] = HeadersDirector.build(token);
        const config = {
            baseURL: host.getUrl(),
            headers: headers
        };

        const axiosInstance = axios.create({...options, ...config});

        return new ResponseDataDecorator(new MetlinkHttpClient(new AxiosAdapter(axiosInstance)));
    }
}
