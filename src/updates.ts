import { ILike } from './likes';
import { IComment } from './comments';
import { IMessage } from './messages';
import { IDiscussion } from './discussion';
import { IProfile } from './profile';

export interface IUpdate {
    _id: string;
    of?: IProfile | string;
    likes?: ILike[];
    comments?: IComment[];
    messages?: IMessage[];
    discussions?: IDiscussion[];
}
