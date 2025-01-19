import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        // Configurer le transporteur Nodemailer
        const transporter = nodemailer.createTransport({
            service: "Gmail", // Ou un autre service
            auth: {
                user: process.env.EMAIL_USER, // Adresse email de l'envoyeur
                pass: process.env.EMAIL_PASS, // Mot de passe ou clé d'application
            },
        });

        // Définir le contenu de l'email
        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER, // Adresse email du destinataire
            subject: subject,
            text: message,
        };

        // Envoyer l'email
        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ success: false, error: "Failed to send email" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
