import { WebsocketUser } from './profile';

export interface IRtcSocketMessage<MessageType = string, DataType = any> {
    type: MessageType,
    user: WebsocketUser,
    data: DataType;
}
