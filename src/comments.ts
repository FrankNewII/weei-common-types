import { IBasicLinkedProfile, TWallet } from './users';

export interface IBaseComment {
    text: string;
    ownerId: TWallet;
    postId: number;
}

export interface IComment extends IBaseComment {
    from: IBasicLinkedProfile;
    id: number;
    likes: number;
    timestamp: number;
}
