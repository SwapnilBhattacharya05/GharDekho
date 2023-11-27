import nodemailer from "nodemailer";
import Mailgen from "mailgen";


export const sendEmail = async (req, res) => {
    const { userEmail } = req.body;
    try {
        const config = {
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        }

        const transporter = nodemailer.createTransport(config);

        const MailGenerator = new Mailgen({
            theme: "default",
            product: {
                name: "GharDekho",
                link: 'http://localhost:3000/',
                logo: "https://firebasestorage.googleapis.com/v0/b/ghardekho-bd550.appspot.com/o/brand-logo.jpg?alt=media&token=e901988f-af26-4c21-9253-487c4e0b0453",
            }
        });

        const response = {
            body: {
                name: "Subscriber",
                intro: [`Thank you for subscribing to the GharDekho Real Estate Newsletter! We are delighted to have you on board, and we look forward to keeping you informed about the latest trends, market updates, and exclusive property listings.`,

                    `Here at GharDekho, we understand the importance of staying ahead in the dynamic real estate market. Our newsletter is crafted to provide you with valuable insights, expert advice, and exciting opportunities that will enhance your real estate journey.`,

                    `What you can expect from our newsletter:`,

                    `Market Insights: Stay informed about current market trends, emerging opportunities, and potential challenges in the real estate landscape.`,

                    `Expert Advice: Benefit from the knowledge and expertise of our seasoned real estate professionals who will share tips and tricks to help you make informed decisions.`,

                    `Exclusive Listings: Get access to exclusive property listings before they hit the market.Be the first to know about the hottest deals in town.`,

                    `Community Updates: Learn more about the neighborhoods we serve, including local events, amenities, and community highlights.`,

                    `To ensure that you receive our newsletters without any interruption, please add ghardekho23@gmail.com to your email contacts.If you ever wish to update your preferences or unsubscribe, you can easily do so by clicking the relevant links at the bottom of our emails.`,

                    `Once again, welcome to the GharDekho Real Estate community! If you have any questions, feedback, or specific topics you'd like us to cover in our newsletter, feel free to reach out to us at ghardekho23@gmail.com.`],
                outro: ["Thank you for trusting us to be your real estate partner.", `We're excited to embark on this journey with you!`],
                signature: 'Regards'
            }
        }

        const mail = MailGenerator.generate(response);

        const message = {
            from: process.env.EMAIL,
            to: userEmail,
            subject: "Welcome to GharDekho Newsletter",
            html: mail
        }

        await transporter.sendMail(message);
        res.status(200).json({ success: true, msg: "Email sent Successfully" });
    } catch (error) {
        console.error('Error occurred while sending email', error);
        res.status(500).send('Failed to send email');
    }
};