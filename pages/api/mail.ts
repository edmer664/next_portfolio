import type { NextApiRequest, NextApiResponse } from 'next'
import { useRouter } from 'next/router';

export default function handler(req:NextApiRequest, res:NextApiResponse) {
  const Email = require('../../helpers/smtp');
  const { name,email, subject, message } = req.body;
  const formattedMessage = `
    <h3>Message from ${name}</h3>
    <h3>Name: ${name}</h3>
    <p>Email: ${email}</p>
    <p>Subject: ${subject}</p>
    <p>Message:<br/> ${message}</p>

    <small>This message was sent from the contact form at your website.</small>
  `;
  console.log(formattedMessage);
  const mailOptions = {
    Host: 'smtp.gmail.com',
    From:  email,
    To: 'edmerpizarra@gmail.com',
    Subject: subject,
    Body: formattedMessage,
    Username: process.env.EMAIL_USER,
    Password: process.env.EMAIL_PASSWORD
  }
  Email.Email.send(mailOptions).then(
    (message:any) => {
     console.log(message);
      // redirect to thank you page
      res.json({
        message: 'Email sent successfully'
      });
     
      

    }
  ).catch(
    (error:any) => {
      console.log(error);
      res.status(500).json({ error: 'Email could not be sent' })
    }

  );


}
