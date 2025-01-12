import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: Bun.env.NODEMAILER_GMAIL,
    pass: Bun.env.NODEMAILER_GMAIL_APP_PASSWORD,
  },
});
