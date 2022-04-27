export interface IOwner {
    alias: string;
    wallet: string;
}

export interface IProfile extends IOwner {
    avatar: string;
    followers: number;
    likes: number;
    totalSold: number;
    sold: number;
    notes?: string;
}