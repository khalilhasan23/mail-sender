import request from 'supertest';
import app from '../src/app';
import UserForEmailSender from '../src/models/UserForEmailSender';

describe('Auth API', () => {
    it('should register a new user', async () => {
        const res = await request(app)
        .post('/api/auth/register')
        .send({
            appPasword: 'kawa',
            email: 'test@kawa.de',
            password: '123',
        });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('token');

        const user = await UserForEmailSender.findOne({ email: 'test@kawa.de' });
        expect(user).toBeTruthy();
        expect(user!.appPassword).toBe('kawa');
    });
});
