import {HeadersDictInterface, HostInterface} from "./Contracts";
import {Host} from "./Host";
import {HeadersBuilder} from "./Headers";

export class HeadersDirector {
    public static build(token: string): [HostInterface, HeadersDictInterface] {
        return [
            new Host(),
            (new HeadersBuilder())
                .newHeaders()
                .addToken(token)
                .addHeaderAcceptJson()
                .getHeaders()
        ];
    }
}

