import { IBasicLinkedProfile } from './profile';
import { IPost } from './posts';
export interface IBaseComment {
    text: string;
    post: IPost | string;
}
export interface IComment extends IBaseComment {
    _id: number;
    from: IBasicLinkedProfile;
    likes: number;
    timestamp: number;
}
