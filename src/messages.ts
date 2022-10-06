import { IBasicLinkedProfile, ILinkedProfile } from './profile';
import { IPost } from './posts';

export enum ESupportedMessageTypes {
    Post = 'post',
    Profile = 'profile',
    Text = 'text',
    Audio = 'audio',
    Video = 'video',
    Image = 'img',
    Selling = 'selling',
    BuyingRequest = 'buyRequest',
    SellOrder = 'sellOrder',
    Discussion = 'discussion',
    Gift = 'gift',
    MoneyRequest = 'moneyRequest',
    MoneyArrived = 'moneyArrived'
}

export interface IBaseContent {
    text?: string;
}

export interface IText extends IBaseContent {
    text: string;
}

export interface ISelling extends IBaseContent {
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

export interface IAudio extends IBaseContent {
    src: string;
    notes?: INote[];
}

export interface IImage extends IAudio {
    coords?: [number, number];
    zoom?: number;
}

export interface IVideo extends IImage {}

export interface IGift extends IBaseContent {
    type: any;
}

export interface IMoneyRequest extends IBaseContent {
    amount: number;
}

export interface IMoneyArrived extends IBaseContent {
    amount: number;
}

export interface IMessageBasic {
    type: ESupportedMessageTypes;
    content: IPost | ILinkedProfile | IText | IAudio | IVideo | IImage | ISelling | IBuyRequest | ISellOrder | IDiscussion | IGift | IMoneyRequest | IMoneyArrived;
}

export interface IMessage extends IMessageBasic {
    _id: string;
    timestamp: number;
    from: IBasicLinkedProfile;
    seen: boolean;
}
