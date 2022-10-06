import { IPost } from './posts';
import { IProfile } from './profile';
export interface ILike {
    from: IProfile;
    timestamp: number;
    post: IPost;
}
