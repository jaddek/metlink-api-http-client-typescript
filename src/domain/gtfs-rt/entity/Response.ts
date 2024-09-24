import Header from './Header'
import { ResponseDTO } from '../../../Contracts'

export class Response<V> implements ResponseDTO {
    private readonly _header: Header
    private readonly _entity: V[]

    constructor(header: Header, entity: V[]) {
        this._header = header
        this._entity = entity
    }

    get header(): Header {
        return this._header
    }

    get entity(): V[] {
        return this._entity
    }

    isCollection(): boolean {
        return false
    }
}
