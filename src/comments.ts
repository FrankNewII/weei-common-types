import { IBasicLinkedProfile } from './users';

export interface IBaseComment {
    text: string;
    form: IBasicLinkedProfile;
}

export interface IComment extends IBaseComment {
    id: number;
    likes: string;
    timestamp: number;
}
