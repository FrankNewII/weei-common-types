import { ILinkedProfile, IProfile } from './profile';
import { IPost } from './posts';

export enum ESupportedMessageTypes {
    Post = 'Post',
    Profile = 'Profile',
    Audio = 'Audio',
    Video = 'video',
    Image = 'Image',
    Selling = 'Sell',
    BuyingRequest = 'BuyRequest',
    SellOrder = 'SellOrder',
    Discussion = 'Discussion',
    Gift = 'Gift',
    MoneyRequest = 'MoneyRequest',
    MoneyArrived = 'MoneyArrived'
}

export interface ISellRequest {
    price: number;
    availableTo: number;
    post: IPost;
    status: 'open' | 'approved' | 'refused';
}

export interface IMessageBasic {
    text?: string;
    to: IProfile | string;
    type?: ESupportedMessageTypes;
    content?: IPost | ILinkedProfile | ISellRequest | string;
}

export interface IMessage extends IMessageBasic {
    _id: string;
    timestamp: number;
    from: IProfile | string;
    seen: boolean;
}

export interface IConversation extends IMessageBasic {
    _id: string;
    participants: IProfile[]
    lastMessage: IMessage;
}
