// import { EmailTemplate } from "../../../components/emails/email-template";
// import { Resend } from "resend";
// import * as React from "react";

// const resend = new Resend(process.env.RESEND_API_KEY);
// // Replace with your actual Resend audience ID
// const AUDIENCE_ID = "dc21cfed-fc0f-49fd-8e67-d9b8bdcfe91e";

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const {
//       name,
//       email,
//       formType,
//       projectType,
//       platformType,
//       projectDetails,
//       marketingConsent, // Get marketing consent from form data
//     } = body;

//     if (!name || !email || !formType) {
//       return Response.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     const firstName = name.split(" ")[0];
//     const lastName = name.split(" ").slice(1).join(" ") || "";

//     // Determine the sender and subject based on form type
//     const fromAddress =
//       formType === "structure"
//         ? "Form + Function <daniel@madeleydesignstudio.org>"
//         : "Digital Dino <daniel@madeleydesignstudio.org>";

//     const subject =
//       formType === "structure"
//         ? "Your Structure Project Inquiry"
//         : "Your Digital Platform Inquiry";

//     // Send confirmation email to the client
//     const { data, error } = await resend.emails.send({
//       from: fromAddress,
//       to: [email],
//       subject: subject,
//       react: EmailTemplate({
//         firstName,
//         formType,
//         projectType,
//         platformType,
//         projectDetails,
//       }) as React.ReactElement,
//     });

//     if (error) {
//       return Response.json({ error: error.message }, { status: 500 });
//     }

//     // If user consented to marketing, add them to Resend audience
//     if (marketingConsent) {
//       try {
//         await resend.contacts.create({
//           email: email,
//           firstName: firstName,
//           lastName: lastName,
//           unsubscribed: false,
//           audienceId: AUDIENCE_ID,
//           // You can add custom fields if needed
//           // tags: [formType === "structure" ? "structures" : "digital"],
//         });
//         console.log(`Added ${email} to Resend audience`);
//       } catch (audienceError) {
//         // Log but don't fail the request if audience addition fails
//         console.error("Error adding contact to audience:", audienceError);
//       }
//     }

//     // Department-specific notification email
//     const departmentEmail = "daniel@madeleydesignstudio.org";

//     // Send notification to the specific department
//     await resend.emails.send({
//       from: fromAddress,
//       to: [departmentEmail],
//       subject: `New Inquiry: ${name}`,
//       text: `
// New ${formType === "structure" ? "structure" : "digital platform"} inquiry:

// Name: ${name}
// Email: ${email}
// ${formType === "structure" ? "Project Type" : "Platform Type"}: ${formType === "structure" ? projectType : platformType}
// Project Details: ${projectDetails}
// Marketing consent: ${marketingConsent ? "Yes" : "No"}
//       `,
//     });

//     // Send notification to Daniel (parent company)
//     await resend.emails.send({
//       from: fromAddress,
//       to: ["daniel@madeleydesignstudio.org"],
//       subject: `New ${formType === "structure" ? "Structure" : "Digital Platform"} Inquiry: ${name}`,
//       text: `
// A new inquiry has been received by ${formType === "structure" ? "Form + Function" : "Digital Dino"}:

// Name: ${name}
// Email: ${email}
// ${formType === "structure" ? "Project Type" : "Platform Type"}: ${formType === "structure" ? projectType : platformType}
// Project Details: ${projectDetails}
// Marketing consent: ${marketingConsent ? "Yes" : "No"}

// This is an automated notification from the contact form on madeleydesignstudio.org
//       `,
//     });

//     return Response.json({ data });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return Response.json(
//       { error: "An error occurred while sending the email" },
//       { status: 500 }
//     );
//   }
// }
