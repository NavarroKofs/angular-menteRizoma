export interface IntBbc {
    "items": {
        "feed": {
            "category": {
                "@label": string
            },
            "title": string,
            "summary": string,
            "link": {
                "@href": string,
                "media:content": {
                    "@url": string
                }
            },
            "dc.subject": string
        }
    },
    "rss": {
        "item": {
            "title": string,
            "enclosure": string,
            "link": string,
            "description": string,
        }
    }
}
