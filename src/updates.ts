import { ILike } from './likes';
import { IComment } from './comments';
import { IMessage } from './messages';

export interface IUpdate {
    likes: ILike[];
    comments: IComment[];
    message: IMessage[];
}
