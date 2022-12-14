import { Message } from "./message";

export interface Request {
    type: 'request';
    id: string;
    receiver: any;
    metadata: Record<string, any>;
    method: string;
    parameters: any[];
}

export function isRequest(message: Message): message is Request {
    return message.type === 'request';
}
