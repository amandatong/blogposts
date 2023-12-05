export interface BlogPost {
    "id": number,
    "date": string,
    "date_gmt": string,
    "status": string,
    "type": string,
    "link": string,
    "title": {
        "rendered": string,
    },
    "author": number,
    "featured_media": string,
    [key: string]: any,
}