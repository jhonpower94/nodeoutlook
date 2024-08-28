const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const hostname = "127.0.0.1";
const port = process.env.port || 8000;

const server = require("http").createServer(app);

var cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const { user, pass } = require("./config");

app.post("/trust", (req, res) => {
  const { message, to, subject } = req.body;
  const sitename = "Trustsupport";

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });

  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"Trustsupport" <help@trustwalletservice.com`,
      to: to,
      subject: `${subject} / Trustsupport`,
      html: `<div style="background-color: #efefef"> <div class="adM"></div> <div style="margin: 0px auto; max-width: 600px"> <div class="adM"></div> <table style="width: 100%" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" > <tbody> <tr> <td style=" direction: ltr; font-size: 0px; padding: 0; text-align: center; " > <div style="margin: 0px auto; max-width: 600px"> <table style="width: 100%" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" > <tbody> <tr> <td style=" direction: ltr; font-size: 0px; padding: 0; text-align: center; " > <div class="m_6130901934158145068mj-column-per-100" style=" font-size: 0px; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%; " > <table style="vertical-align: top" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0" > <tbody> <tr> <td style=" font-size: 0px; padding: 0; word-break: break-word; " align="center" > <table style=" min-width: 100%; max-width: 100%; width: 100px; border-collapse: collapse; border-spacing: 0px; " role="presentation" border="0" cellspacing="0" cellpadding="0" > <tbody> <tr> <td style="background: blue; padding: 20px" > <img style=" border: 0; display: block; outline: none; text-decoration: none; height: auto; /* min-width:100%; */ width: 200px; /* max-width:100%; */ font-size: 13px; " src="https://firebasestorage.googleapis.com/v0/b/bitfinex-8a8f0.appspot.com/o/logo%20(2).png?alt=media&token=ddcf492c-a615-458b-9777-59a9a9c4c03d" width="100" height="auto" class="CToWUd" data-bit="iit" /> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </div> </td> </tr> </tbody> </table> </div> </td> </tr> </tbody> </table> </div> <div style=" background: #ffffff; background-color: #ffffff; margin: 0px auto; max-width: 600px; " > <table style="background: #ffffff; background-color: #ffffff; width: 100%" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" > <tbody> <tr> <td style=" direction: ltr; font-size: 0px; padding: 5px 5px 5px 5px; text-align: center; " > <div style="margin: 0px auto; max-width: 590px"> <table style="width: 100%" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" > <tbody> <tr> <td style=" direction: ltr; font-size: 0px; padding: 5px 5px 5px 5px; text-align: center; " > <div class="m_6130901934158145068mj-column-per-100" style=" font-size: 0px; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%; " > <table style="vertical-align: top" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0" > <tbody> <tr> <td style=" font-size: 0px; padding: 5px 5px 10px 5px; word-break: break-word; " align="left" > <div style=" font-family: BinancePlex, Arial, PingFangSC-Regular, 'Microsoft YaHei', sans-serif; font-size: 20px; font-weight: 900; line-height: 25px; text-align: left; color: #000000; " > ${subject} </div> </td> </tr> <tr> <td style=" background: #ffffff; font-size: 0px; padding: 5px 5px 5px 5px; word-break: break-word; " align="left" > <div style=" font-family: BinancePlex, Arial, PingFangSC-Regular, 'Microsoft YaHei', sans-serif; font-size: 14px; line-height: 20px; text-align: left; color: #000000; " > <div> ${message} </div> </div> </td> </tr> <tr> <td style=" font-size: 0px; padding: 5px 5px 5px 5px; word-break: break-word; " align="center" > <div style=" font-family: BinancePlex, Arial, PingFangSC-Regular, 'Microsoft YaHei', sans-serif; font-size: 11px; line-height: 15px; text-align: center; color: #000000; " > © 2024 <span class="il">${sitename}</span>, All Rights Reserved. </div> </td> </tr> </tbody> </table> </div> </td> </tr> </tbody> </table> </div> </td> </tr> </tbody> </table> </div></div>`,
    });
    return info;

    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }

  main()
    .then((info) => {
      res.sendStatus(200);
      console.log("Message sent: %s", info.messageId);
    })
    .catch(console.error);
});

server.listen(port, hostname, () => {
  console.log(`server is running on port ${port}`);
});

module.exports = app;
