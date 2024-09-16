import api from './api';
//todo update this file to fit your app for example change the the urls 
export const sendMail = async (text: string, toEmail:string, subject:string, token: string) => {
  const response = await api.post('/sendMail', { text, toEmail, subject}, {
    headers: {
      'x-auth-token': token
    }
  });
  return response.data;
};
