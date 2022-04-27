import { IOwner } from './user';

export enum ESupportedContentTypes {
    Video = 'video',
    Image = 'img',
    Text = 'text',
    Audio = 'audio',
}

export interface IContent {
    type: ESupportedContentTypes.Video | ESupportedContentTypes.Image | ESupportedContentTypes.Text | ESupportedContentTypes.Audio;
    src: string;
}

export interface IPostBasic {
    costs: number;
    title: string;
    description?: string;
    hashtags: string[];
    content: IContent;
}

export interface IPost extends IPostBasic {
    created: number;
    id: number;
    likes: number;
    sizes: string[];
    owner: IOwner;
}

export enum ESupportedClientMessageTypes {
    Statistic = 'statistic',
    RequestSharing = 'requestSharing',
    StopObserving = 'stopObserving',
    StopSharing = 'stopSharing',
    Message = 'message',
    Connected = 'connected'
}

export enum ESupportedServerMessageTypes {
    Statistic = 'statistic',
    Command = 'command',
    Leave = 'leave',
    ConnectedList = 'connectedList',
    Connected = 'connected',
    Message = 'message'
}

export enum ENumStatistics {
    events = 'e',
    method = 'm',
    routing = 'r',
    params = 'p',
    error = 'er',
    config = 'c'
}

export type StatisticType = [
        ENumStatistics.events | ENumStatistics.method | ENumStatistics.params | ENumStatistics.routing | ENumStatistics.error | ENumStatistics.config,
        string | number,
    ...any
];

export interface User {
    id: string
    name: string
}

export interface IWebSocketMessage<MessageType = string, DataType = StatisticType> {
    type: MessageType,
    user: User,
    data: DataType;
}
export interface IOwner {
    alias: string;
    wallet: string;
}

export interface IProfile extends IOwner {
    avatar: string;
    followers: number;
    likes: number;
    totalSold: number;
    sold: number;
    notes?: string;
}