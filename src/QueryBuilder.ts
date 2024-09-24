import {TripCancellationQueryInterface} from "./Contracts";

export class QueryBuilder {
    public static buildQuery(query: TripCancellationQueryInterface | null): URLSearchParams {
        const params = new URLSearchParams();

        if (query) {
            for (const key of Object.keys(query)) {
                const value = (query as any)[key];

                if (value == null) {
                    continue;
                }

                params.append(key.replace("_",""), value);
            }
        }

        return params;
    }
}