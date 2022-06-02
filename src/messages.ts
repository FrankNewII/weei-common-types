import { IBasicProfile, ILinkedProfile } from './users';
import { IPost } from './posts';

export enum ESupportedMessageTypes {
    Post = 'post',
    Profile = 'text',
    Text = 'text',
    Audio = 'audio',
    Video = 'video',
    Image = 'img',
    Selling = 'selling',
    BuyingRequest = 'buyRequest',
    SellOrder = 'sellOrder',
    Discussion = 'discussion'
}

export interface IText {
    text: string;
}

export interface ISelling {
    text?: string;
    price: string;
}

export interface IBuyRequest extends ISelling {}

export interface ISellOrder extends ISelling {
    timestamp: number;
}

export interface IDiscussion {
    [key: string]: any;
}

export interface INote {
    time: number;
    note: string;
}

export interface IAudio {
    text?: string;
    src: string;
    notes?: INote[];
}

export interface IImage extends IAudio {
    coords?: [number, number];
    zoom?: number;
}

export interface IVideo extends IImage {}

export interface IMessageBasic {
    type: ESupportedMessageTypes;
    content: IPost | ILinkedProfile | IText | IAudio | IVideo | IImage | ISelling | IBuyRequest | ISellOrder | IDiscussion;
}

export interface IMessage extends IMessageBasic {
    timestamp: number;
    from: IBasicProfile[];
}
