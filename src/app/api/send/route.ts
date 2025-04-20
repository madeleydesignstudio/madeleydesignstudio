import { EmailTemplate } from "../../../components/emails/email-template";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, formType, projectType, platformType, projectDetails } =
      body;

    if (!name || !email || !formType) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const firstName = name.split(" ")[0];

    // Determine the sender and subject based on form type
    const fromAddress =
      formType === "structure"
        ? "Form + Function <structures@madeleydesignstudio.org>"
        : "Digital Dino <digital@madeleydesignstudio.org>";

    const subject =
      formType === "structure"
        ? "Your Structure Project Inquiry"
        : "Your Digital Platform Inquiry";

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [email],
      subject: subject,
      react: EmailTemplate({
        firstName,
        formType,
        projectType,
        platformType,
        projectDetails,
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    // Also send a notification to the company
    await resend.emails.send({
      from: fromAddress,
      to:
        formType === "structure"
          ? "structures@madeleydesignstudio.org"
          : "digital@madeleydesignstudio.org",
      subject: `New Inquiry: ${name}`,
      text: `
New ${formType === "structure" ? "structure" : "digital platform"} inquiry:

Name: ${name}
Email: ${email}
${formType === "structure" ? "Project Type" : "Platform Type"}: ${formType === "structure" ? projectType : platformType}
Project Details: ${projectDetails}
      `,
    });

    return Response.json({ data });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json(
      { error: "An error occurred while sending the email" },
      { status: 500 }
    );
  }
}
