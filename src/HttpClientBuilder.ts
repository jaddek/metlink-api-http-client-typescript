import HttpClient from "./HttpClient";
import {HeadersDictInterface, HostInterface} from "./Contracts";
import {HeadersDirector} from "./HeadersDirector";

export class HttpClientBuilder
{
    public static build(token: string):HttpClient {
        const [host, headers]: [HostInterface, HeadersDictInterface] = HeadersDirector.build(token);

        return new HttpClient(host, headers);
    }
}