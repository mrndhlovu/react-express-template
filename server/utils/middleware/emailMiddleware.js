const { S_GRID_API_KEY, SENDER_EMAIL } = require("../config");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(S_GRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: SENDER_EMAIL,
    subject: "Welcome",
    text: `Welcome ${name}. Hope you enjoy using the app.`,
  });
};

const sendInvitationEmail = (email, name, sender, redirectLink) => {
  sgMail.send({
    to: email,
    from: "kandhlovuie@gmail.com",
    subject: `${name}, you have been invited by ${sender} to access their board`,
    text: `${name}, click on this link: \n ${redirectLink}\n to accept the invitation or ignore the message if you do not accept the invitation!`,
  });
};

module.exports = { sendWelcomeEmail, sendInvitationEmail };
