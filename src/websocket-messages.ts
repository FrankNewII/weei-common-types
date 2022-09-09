import { WebsocketUser } from './users';

export enum ESupportedClientMessageTypes {
    Statistic = 'statistic',
    RequestSharing = 'requestSharing',
    StopObserving = 'stopObserving',
    StopSharing = 'stopSharing',
    Message = 'message',
    Connected = 'connected',
    Offer = 'offer',
    RenegotiationOffer = 'renegotiationOffer',
    Answer = 'answer',
    RenegotiationAnswer = 'renegotiationAnswer',
    Candidate = 'candidate',
    Me = 'me'
}

export enum ESupportedServerMessageTypes {
    Statistic = 'statistic',
    Command = 'command',
    Leave = 'leave',
    ConnectedList = 'connectedList',
    Connected = 'connected',
    Message = 'message',
    Offer = 'offer',
    RenegotiationOffer = 'renegotiationOffer',
    Answer = 'answer',
    RenegotiationAnswer = 'renegotiationAnswer',
    Candidate = 'candidate',
    Me = 'me'
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



export interface IWebSocketMessage<MessageType = string, DataType = any> {
    type: MessageType,
    user: WebsocketUser,
    data: DataType;
}
