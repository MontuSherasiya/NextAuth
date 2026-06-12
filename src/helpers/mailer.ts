import { Resend } from 'resend';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({
    email,
    emailType,
    userId,
}: any) => {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);

        if (emailType === 'VERIFY') {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiry: Date.now() + 3600000,
            });
        } else if (emailType === 'RESET') {
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiry: Date.now() + 3600000,
            });
        }

        const link =
            emailType === 'VERIFY'
                ? `${process.env.DOMAIN}/verifyemail?token=${hashedToken}`
                : `${process.env.DOMAIN}/reset-password?token=${hashedToken}`;

        const response = await resend.emails.send({
            from: process.env.EMAIL_FROM!,
            to: email,
            subject:
                emailType === 'VERIFY'
                    ? 'Verify Your Email'
                    : 'Reset Your Password',
            html: `
        <p>
          Click <a href="${link}">here</a> to
          ${emailType === 'VERIFY'
                    ? 'verify your email'
                    : 'reset your password'}.
        </p>
        <p>${link}</p>`,
        });

        return response;
    } catch (error: any) {
        throw new Error(`Failed to send email: ${error.message}`);
    }
};