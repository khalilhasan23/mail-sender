import Ajv, { JSONSchemaType } from 'ajv';
import { Request, Response, NextFunction } from 'express';

const ajv = new Ajv();

const validate = <T>(schema: JSONSchemaType<T>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const validate = ajv.compile(schema);
        const valid = validate(req.body);

        if (!valid) {
          return res.status(400).json({ message: 'Validation failed', errors: validate.errors });
        }

        next();
    };
};

export default validate;
