import MetlinkHttpClient from "../../src/MetlinkHttpClient";
import {AxiosAdapter} from "../../src/domain/httpclient/AxiosAdapter";
import {ResponseDataDecorator} from "../../src/ResponseDataDecorator";
import {MetlinkHttpClientInterface} from "../../src/Contracts";

export class ClientBuilder {
    public static getHttpClient(client: Axios.AxiosInstance): MetlinkHttpClientInterface {
        const adapter: AxiosAdapter = new AxiosAdapter(client);

        return new MetlinkHttpClient(adapter);
    }

    public static getHttpClientWithResponseDataDecorator(client: Axios.AxiosInstance): MetlinkHttpClientInterface {
        const adapter: AxiosAdapter = new AxiosAdapter(client);

        return new ResponseDataDecorator(new MetlinkHttpClient(adapter));
    }
}