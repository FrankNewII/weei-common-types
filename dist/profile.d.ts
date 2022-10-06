export declare type TWallet = string;
export interface IBasicProfile {
    alias: string;
    wallet: TWallet;
}
export interface IProfile extends IBasicProfile {
    _id: string;
    avatar: string;
    followers: number;
    likes: number;
    totalSold: number;
    sold: number;
    notes?: string;
}
export interface ILinkedProfile extends IProfile {
    link: string;
}
export interface IBasicLinkedProfile extends IBasicProfile {
    link: string;
    avatar: string;
}
export interface WebsocketUser {
    id: string;
    name: string;
}
