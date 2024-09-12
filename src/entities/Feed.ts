/**
 *     "id": 1,
 *     "feed_publisher_name": "Council",
 *     "feed_publisher_url": "http://some_link.domain",
 *     "feed_lang": "en",
 *     "feed_start_date": "20440821",
 *     "feed_end_date": "20440921",
 *     "feed_version": "Some version"
 */
export class Feed extends Entity {
    private readonly _id: number;
    private readonly _feedPublisherName: string;
    private readonly _feedPublisherUrl: string;
    private readonly _feedLang: string;
    private readonly _feedStartDate: string;
    private readonly _feedEndDate: string;
    private readonly _feedVersion: string;

    constructor(
        id: number,
        feedPublisherName: string,
        feedPublisherUrl: string,
        feedLang: string,
        feedStartDate: string,
        feedEndDate: string,
        feedVersion: string
    ) {
        super();
        this._id = id;
        this._feedPublisherName = feedPublisherName;
        this._feedPublisherUrl = feedPublisherUrl;
        this._feedLang = feedLang;
        this._feedStartDate = feedStartDate;
        this._feedEndDate = feedEndDate;
        this._feedVersion = feedVersion;
    }

    get id(): number {
        return this._id;
    }

    get feedPublisherName(): string {
        return this._feedPublisherName;
    }

    get feedPublisherUrl(): string {
        return this._feedPublisherUrl;
    }

    get feedLang(): string {
        return this._feedLang;
    }

    get feedStartDate(): string {
        return this._feedStartDate;
    }

    get feedEndDate(): string {
        return this._feedEndDate;
    }

    get feedVersion(): string {
        return this._feedVersion;
    }
}