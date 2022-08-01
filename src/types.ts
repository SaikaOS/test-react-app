export type PostType = {
    id?: number;
    title: string;
    body: string;
}

export type UserType = {
    id?: number;
    name: string;
    company: CompanyType;
}

export type CompanyType = {
    name: string;
}

export type PhotoType = {
    id?: number;
    albumId? : number;
    thumbnailUrl: string;
}