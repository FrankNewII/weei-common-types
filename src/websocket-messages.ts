import { WebsocketUser } from './profile';

export enum EWebsocketMessageTypes {
    Command = 'command',
    Leave = 'leave',
    Enter = 'enter',
    ConnectedList = 'connectedList',
    Message = 'message',
    Connected = 'connected',
    Offer = 'offer',
    RenegotiationOffer = 'renegotiationOffer',
    Answer = 'answer',
    RenegotiationAnswer = 'renegotiationAnswer',
    Candidate = 'candidate',
    Me = 'me',
    IAm = 'iAm'
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
