import { Request, Response } from 'express';
import { AuthenticatedRequest } from '../types/express';
import UserForEmailSender from '../models/UserForEmailSender';
import nodemailer from 'nodemailer';



interface EmailOptions {
    to: string;
    subject: string;
    text?: string;
    html?: string;
}

const htmlTamplet = (text: string) => `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
            <h2 style="color: #4CAF50;">Hello, recipient</h2>
            <p>I hope this email finds you well.</p>
            <p>${text}</p>
            <p>Best regards,</p>
            <p>Your Name</p>
            <hr>
            <footer style="font-size: 12px; color: #888;">
            <p>This email was sent from a <strong>Nodemailer</strong> test application.</p>
            </footer>
        </div>
    `

const sendMail = async (req: AuthenticatedRequest, res: Response) => {
    const userEmail = await UserForEmailSender.findOne({ _id: req.user?.id });
    const { text, toEmail, subject } = req.body;

    
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail', 
            auth: {
                user: userEmail?.email,
                pass: userEmail?.appPassword
            },
        });
        
        const sendEmail = async () => {
            try {
                const info = await transporter.sendMail({
                from: userEmail?.email, 
                to: toEmail, 
                subject: subject,
                html: htmlTamplet(text),
                });
        
                console.log(`Email sent: ${info.messageId}`);
            } catch (error) {
                console.error(`Error sending email: ${error}`);
            }
        };

        await sendEmail()

        res.status(201).json({ message: 'Email sended' });
    } catch (err) {
        console.log(err);
        
        res.status(500).json({ message: 'Server error' });
    }
};

export {sendMail}