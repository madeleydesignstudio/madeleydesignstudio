import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  formType: "structure" | "digital";
  projectType?: string;
  platformType?: string;
  projectDetails?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  formType,
  projectType,
  platformType,
  projectDetails,
}) => {
  const companyName =
    formType === "structure" ? "Form + Function" : "Digital Dino";
  const projectTypeLabel =
    formType === "structure" ? "Project Type" : "Platform Type";
  const projectTypeValue =
    formType === "structure" ? projectType : platformType;

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#333",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          color: "#111",
          borderBottom: "1px solid #eee",
          paddingBottom: "10px",
        }}
      >
        Thank you for contacting {companyName}!
      </h1>

      <p>Hello {firstName},</p>

      <p>
        We have received your inquiry and our team will review your request
        shortly. Here is a summary of what you shared with us:
      </p>

      <div
        style={{
          background: "#f9f9f9",
          padding: "15px",
          borderRadius: "4px",
          margin: "20px 0",
        }}
      >
        <p>
          <strong>{projectTypeLabel}:</strong> {projectTypeValue}
        </p>
        <p>
          <strong>Project Details:</strong>
        </p>
        <p style={{ whiteSpace: "pre-line" }}>{projectDetails}</p>
      </div>

      <p>
        We will get back to you as soon as possible. Typically, we respond
        within 1-2 business days.
      </p>

      <p>
        Best Regards,
        <br />
        The {companyName} Team
        <br />
        <em>A division of madeleydesignstudio</em>
      </p>
    </div>
  );
};
