import { TWallet } from './users';

export interface IBaseComment {
    text?: string;
    ownerId: TWallet;
}

export interface IComment extends IBaseComment {
    likes: string;
    timestamp: number;
}
