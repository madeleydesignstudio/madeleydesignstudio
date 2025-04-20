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
        ? "Form + Function <daniel@madeleydesignstudio.org>"
        : "Digital Dino <daniel@madeleydesignstudio.org>";

    const subject =
      formType === "structure"
        ? "Your Structure Project Inquiry"
        : "Your Digital Platform Inquiry";

    // Send confirmation email to the client
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

    // Department-specific notification email
    const departmentEmail =
      formType === "structure"
        ? "daniel@madeleydesignstudio.org"
        : "daniel@madeleydesignstudio.org";

    // Send notification to the specific department
    await resend.emails.send({
      from: fromAddress,
      to: [departmentEmail],
      subject: `New Inquiry: ${name}`,
      text: `
New ${formType === "structure" ? "structure" : "digital platform"} inquiry:

Name: ${name}
Email: ${email}
${formType === "structure" ? "Project Type" : "Platform Type"}: ${formType === "structure" ? projectType : platformType}
Project Details: ${projectDetails}
      `,
    });

    // Send notification to Daniel (parent company)
    await resend.emails.send({
      from: fromAddress,
      to: ["daniel@madeleydesignstudio.org"],
      subject: `New ${formType === "structure" ? "Structure" : "Digital Platform"} Inquiry: ${name}`,
      text: `
A new inquiry has been received by ${formType === "structure" ? "Form + Function" : "Digital Dino"}:

Name: ${name}
Email: ${email}
${formType === "structure" ? "Project Type" : "Platform Type"}: ${formType === "structure" ? projectType : platformType}
Project Details: ${projectDetails}

This is an automated notification from the contact form on madeleydesignstudio.org
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
