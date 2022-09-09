import { IPost } from './posts';

export interface ILike {
    likes: number;
    timestamp: number;
    post: IPost;
}

