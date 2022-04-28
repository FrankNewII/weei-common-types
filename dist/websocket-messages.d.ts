import { WebsocketUser } from './users';
export declare enum ESupportedClientMessageTypes {
    Statistic = "statistic",
    RequestSharing = "requestSharing",
    StopObserving = "stopObserving",
    StopSharing = "stopSharing",
    Message = "message",
    Connected = "connected",
    Offer = "offer",
    Answer = "answer",
    Candidate = "candidate"
}
export declare enum ESupportedServerMessageTypes {
    Statistic = "statistic",
    Command = "command",
    Leave = "leave",
    ConnectedList = "connectedList",
    Connected = "connected",
    Message = "message",
    Offer = "offer",
    Answer = "answer",
    Candidate = "candidate"
}
export declare enum ENumStatistics {
    events = "e",
    method = "m",
    routing = "r",
    params = "p",
    error = "er",
    config = "c"
}
export declare type StatisticType = [
    ENumStatistics.events | ENumStatistics.method | ENumStatistics.params | ENumStatistics.routing | ENumStatistics.error | ENumStatistics.config,
    string | number,
    ...any
];
export interface IWebSocketMessage<MessageType = string, DataType = StatisticType> {
    type: MessageType;
    user: WebsocketUser;
    data: DataType;
}
