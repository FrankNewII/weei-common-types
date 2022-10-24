import { IProfile } from './profile';

export interface IDiscussion {
    _id: string;
    timestamp: number;
    topic?: string;
    from: IProfile | string;
    seen: boolean;
}
