export declare type TWallet = string;
export interface IBasicProfile {
    alias: string;
    wallet: TWallet;
}
export interface IProfile extends IBasicProfile {
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
export interface WebsocketUser {
    id: string;
    name: string;
}
