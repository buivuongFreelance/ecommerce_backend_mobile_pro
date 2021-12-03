import nodemailer from 'nodemailer';
import helper from 'micro-helper';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: helper.EMAIL,
    pass: helper.EMAIL_PASS,
  },
});

export default transporter;
