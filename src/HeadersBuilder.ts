import {HeadersDictInterface} from "./Contracts";

export class HeadersBuilder {
    private readonly API_KEYWORD: string = "x-api-key";
    private headers: HeadersDictInterface = {};

    public newHeaders() {
        this.headers = {};

        return this;
    }

    public addHeaders(headers: HeadersDictInterface) {
        this.headers = {...this.headers, ...headers};

        return this;
    }

    public addToken(token: string, key: string = this.API_KEYWORD) {
        this.headers[key] = token;

        return this;
    }

    public addHeaderAcceptJson() {
        this.headers["accept"] = "application/json";

        return this;
    }

    public getHeaders(): HeadersDictInterface {
        return this.headers;
    }
}
