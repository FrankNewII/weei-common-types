export type TSupportedContentTypes = 'video' | 'img' | 'text' | 'audio';

export interface IContent {
    type: TSupportedContentTypes;
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

export type TSupportedStatisticTypes = 'events' | 'method' | 'routing' | 'params' | 'error' | 'config';

export type PrependedTuple<I, T extends unknown[]> = [I, ...T];
export type AppendTuple<I, T extends unknown[]> = [...T, I];

export type StatisticType = [
    TSupportedStatisticTypes,
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