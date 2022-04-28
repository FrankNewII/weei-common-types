export interface IBasicProfile {
    alias: string;
    wallet: string;
}

export interface IProfile extends IBasicProfile {
    avatar: string;
    followers: number;
    likes: number;
    totalSold: number;
    sold: number;
    notes?: string;
}

export interface WebsocketUser {
    id: string
    name: string
}