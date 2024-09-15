import request from 'supertest';
import app from '../src/app';
import User from '../src/models/User';

describe('Auth API', () => {
    it('should register a new user', async () => {
        const res = await request(app)
        .post('/api/auth/register')
        .send({
            username: 'kawa',
            email: 'test@kawa.de',
            password: '123',
        });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('token');

        const user = await User.findOne({ email: 'test@kawa.de' });
        expect(user).toBeTruthy();
        expect(user!.username).toBe('kawa');
    });
});
