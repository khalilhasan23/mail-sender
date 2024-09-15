import { Request } from 'express';

interface UserPayload {
    id: string;
}

export interface AuthenticatedRequest extends Request {
    user?: UserPayload;
}
