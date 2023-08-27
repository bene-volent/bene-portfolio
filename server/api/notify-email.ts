import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {

  try {

    const {name,email,message} = getQuery(event)
    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['benevolent733@gmail.com'],
      subject: "New Connection",
      html: `<body><p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p></body>`,
    });

    return data;
  } catch (error) {
    return { error };
  }
}
);
