import { WebsocketUser } from './users';
export interface IRtcSocketMessage<MessageType = string, DataType = any> {
    type: MessageType;
    user: WebsocketUser;
    data: DataType;
}
