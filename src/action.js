"use server";
import { Resend } from "resend";
import TemplateDefaultEmail from "./components/email/TemplateDefaultEmail";
import TemplateEmailContact from "./components/email/TemplateEmailContact";

const EMAIL_ENTREPRISE = "v.dag@viallydaggroup.com";
const Key_RESEND = process.env.RESEND_API_KEY;

export const sendMail = async ({
  to,
  subject,
  from = EMAIL_ENTREPRISE,
  template,
  datas,
}) => {
  const resend = new Resend(Key_RESEND);
  let templateReact = null;

  switch (template) {
    case "email-contact":
      templateReact = <TemplateEmailContact datas={datas} />;
      break;

    case "email-default":
      templateReact = <TemplateDefaultEmail datas={datas} />;
      break;

    default:
      break;
  }
  const data = await resend.emails.send({
    from,
    to,
    subject: subject,
    react: templateReact,
  });
  return data;
};
