import MetlinkHttpClient from "./MetlinkHttpClient";
import {HeadersDictInterface, HostInterface} from "./Contracts";
import {HeadersDirector} from "./HeadersDirector";
import {AxiosAdapter} from "./domain/httpclient/AxiosAdapter";
import axios from "axios";
import {ResponseDecorator} from "./ResponseDecorator";

export class MetlinkHttpClientBuilder {
    public static buildWithAxios(token: string): MetlinkHttpClient {
        const [host, headers]: [HostInterface, HeadersDictInterface] = HeadersDirector.build(token);
        const axiosInstance = axios.create({
            baseURL: host.getUrl(),
            headers: headers
        });

        return new MetlinkHttpClient(new AxiosAdapter(axiosInstance));
    }

    public static buildWithAxiosAndDecorate(token: string): ResponseDecorator {
        const [host, headers]: [HostInterface, HeadersDictInterface] = HeadersDirector.build(token);
        const axiosInstance = axios.create({
            baseURL: host.getUrl(),
            headers: headers
        });

        return new ResponseDecorator(new MetlinkHttpClient(new AxiosAdapter(axiosInstance)));
    }
}