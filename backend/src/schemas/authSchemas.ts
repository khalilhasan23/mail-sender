import { JSONSchemaType } from 'ajv';

interface RegisterBody {
    username: string;
    email: string;
    password: string;
}

interface LoginBody {
    email: string;
    password: string;
}

const registerSchema: JSONSchemaType<RegisterBody> = {
    type: 'object',
    properties: {
        username: { type: 'string', minLength: 3 },
        email: { type: 'string' },
        password: { type: 'string', minLength: 6 },
    },
    required: ['username', 'email', 'password'],
    additionalProperties: false,
};

const loginSchema: JSONSchemaType<LoginBody> = {
    type: 'object',
    properties: {
        email: { type: 'string' },
        password: { type: 'string', minLength: 6 },
    },
    required: ['email', 'password'],
    additionalProperties: false,
};

export { registerSchema, loginSchema };
