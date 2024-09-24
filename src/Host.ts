import { HostInterface } from './Contracts'

export class Host implements HostInterface {
    private readonly _host: string = 'https://api.opendata.metlink.org.nz'
    private readonly _version: string = '/v1'

    get host(): string {
        return this._host
    }

    get version(): string {
        return this._version
    }

    getUrl(): string {
        return this._host + this._version
    }
}
