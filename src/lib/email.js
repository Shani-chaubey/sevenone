import nodemailer from "nodemailer";

export async function sendLeadEmail(leadData) {
  try {
    // Get SMTP configuration from environment variables
    const smtpHost = process.env.EMAIL_HOST;
    const smtpPort = parseInt(process.env.EMAIL_PORT);
    const smtpUser = process.env.EMAIL_USER;
    const smtpPassword = process.env.EMAIL_PASS;
    const smtpFrom = process.env.EMAIL_FROM_ADDRESS || smtpUser;
    const smtpTo = process.env.EMAIL_To || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPassword) {
      return { success: false, error: "SMTP configuration is missing" };
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    // Email content
    const propertyTypeLabels = {
      "2 BHK": "2 BHK",
      "3 BHK": "3 BHK",
      "4 BHK": "4 BHK",
      "RETAIL SHOP": "Retail Shops",
      "STUDIO APARTMENT": "Studio Apartment",
      "OFFICE SPACE": "Office Space",
      OTHER: "Others",
    };

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #1a1f3a;
              background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
              padding: 20px;
            }
            .email-wrapper {
              max-width: 650px;
              margin: 0 auto;
              background: #ffffff;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            }
            .email-header {
              background: linear-gradient(135deg, #ff9900 0%, #ff6600 100%);
              padding: 40px 30px;
              text-align: center;
              position: relative;
              overflow: hidden;
            }
            .email-header::before {
              content: '';
              position: absolute;
              top: -50%;
              right: -50%;
              width: 200%;
              height: 200%;
              background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
              animation: pulse 3s ease-in-out infinite;
            }
            @keyframes pulse {
              0%, 100% { transform: scale(1); opacity: 0.5; }
              50% { transform: scale(1.1); opacity: 0.8; }
            }
            .email-header h1 {
              color: #ffffff;
              font-size: 28px;
              font-weight: 700;
              margin-bottom: 8px;
              position: relative;
              z-index: 1;
              text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            }
            .email-header p {
              color: rgba(255, 255, 255, 0.95);
              font-size: 14px;
              position: relative;
              z-index: 1;
            }
            .email-content {
              padding: 40px 30px;
              background: #ffffff;
            }
            .lead-badge {
              display: inline-block;
              background: linear-gradient(135deg, #ff9900 0%, #ff6600 100%);
              color: #ffffff;
              padding: 8px 20px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 30px;
              box-shadow: 0 4px 12px rgba(255, 153, 0, 0.3);
            }
            .info-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 20px;
              margin-bottom: 30px;
            }
            .info-card {
              background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
              border: 1px solid #e9ecef;
              border-radius: 12px;
              padding: 20px;
              transition: all 0.3s ease;
              position: relative;
              overflow: hidden;
            }
            .info-card::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 4px;
              height: 100%;
              background: linear-gradient(135deg, #ff9900 0%, #ff6600 100%);
            }
            .info-card:hover {
              transform: translateY(-2px);
              box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
              border-color: #ff9900;
            }
            .info-label {
              font-size: 11px;
              font-weight: 600;
              color: #6c757d;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin-bottom: 8px;
              display: flex;
              align-items: center;
              gap: 8px;
            }
            .info-label::before {
              content: '●';
              color: #ff9900;
              font-size: 8px;
            }
            .info-value {
              font-size: 16px;
              font-weight: 600;
              color: #1a1f3a;
              word-break: break-word;
            }
            .info-value.email {
              color: #ff9900;
            }
            .info-value.phone {
              color: #28a745;
            }
            .property-type-badge {
              display: inline-block;
              background: linear-gradient(135deg, rgba(255, 153, 0, 0.1) 0%, rgba(255, 102, 0, 0.1) 100%);
              color: #ff9900;
              padding: 6px 16px;
              border-radius: 8px;
              font-size: 14px;
              font-weight: 600;
              border: 1px solid rgba(255, 153, 0, 0.3);
            }
            .consent-badge {
              display: inline-flex;
              align-items: center;
              gap: 6px;
              padding: 6px 16px;
              border-radius: 8px;
              font-size: 14px;
              font-weight: 600;
            }
            .consent-badge.yes {
              background: rgba(40, 167, 69, 0.1);
              color: #28a745;
            }
            .consent-badge.no {
              background: rgba(220, 53, 69, 0.1);
              color: #dc3545;
            }
            .consent-badge::before {
              content: '✓';
              font-size: 16px;
            }
            .consent-badge.no::before {
              content: '✗';
            }
            .timestamp {
              background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
              color: #ffffff;
              padding: 20px;
              border-radius: 12px;
              text-align: center;
              margin-top: 20px;
            }
            .timestamp-label {
              font-size: 11px;
              text-transform: uppercase;
              letter-spacing: 1px;
              opacity: 0.8;
              margin-bottom: 8px;
            }
            .timestamp-value {
              font-size: 16px;
              font-weight: 600;
            }
            .email-footer {
              background: #f8f9fa;
              padding: 30px;
              text-align: center;
              border-top: 1px solid #e9ecef;
            }
            .email-footer p {
              color: #6c757d;
              font-size: 12px;
              margin: 0;
            }
            .divider {
              height: 1px;
              background: linear-gradient(90deg, transparent 0%, #e9ecef 50%, transparent 100%);
              margin: 30px 0;
            }
            @media only screen and (max-width: 600px) {
              .email-wrapper {
                border-radius: 0;
              }
              .email-header,
              .email-content {
                padding: 30px 20px;
              }
              .info-grid {
                gap: 15px;
              }
            }
          </style>
        </head>
        <body>
          <div class="email-wrapper">
            <div class="email-header">
              <h1>🎉 New Lead Received</h1>
              <p>You have a new inquiry from a potential client</p>
            </div>
            <div class="email-content">
              <div class="lead-badge">Lead Information</div>
              
              <div class="info-grid">
                <div class="info-card">
                  <div class="info-label">Full Name</div>
                  <div class="info-value">${leadData.name}</div>
                </div>
                
                <div class="info-card">
                  <div class="info-label">Email Address</div>
                  <div class="info-value email">${
                    leadData.email || "Not provided"
                  }</div>
                </div>
                
                <div class="info-card">
                  <div class="info-label">Phone Number</div>
                  <div class="info-value phone">${leadData.phone}</div>
                </div>
                
                <div class="info-card">
                  <div class="info-label">Property Type</div>
                  <div class="info-value">
                    <span class="property-type-badge">${
                      propertyTypeLabels[leadData.propertyType] ||
                      leadData.propertyType
                    }</span>
                  </div>
                </div>
                
                
              </div>
              
              <div class="divider"></div>
              
              <div class="timestamp">
                <div class="timestamp-label">Submitted At</div>
                <div class="timestamp-value">${new Date().toLocaleString(
                  "en-IN",
                  {
                    timeZone: "Asia/Kolkata",
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )}</div>
              </div>
            </div>
            
            <div class="email-footer">
              <p>This is an automated notification from 9 Square Yard</p>
              <p style="margin-top: 8px; opacity: 0.7;">Please respond to this lead as soon as possible</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const textContent = `
New Lead Received

Name: ${leadData.name}
Email: ${leadData.email || "Not provided"}
Phone: ${leadData.phone}
Property Type: ${
      propertyTypeLabels[leadData.propertyType] || leadData.propertyType
    }
Consent: ${leadData.consent ? "Yes" : "No"}
Submitted At: ${new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    })}
    `;

    // Send email
    const info = await transporter.sendMail({
      from: smtpFrom,
      to: smtpTo,
      subject: `New Lead: ${leadData.name} - ${
        propertyTypeLabels[leadData.propertyType] || leadData.propertyType
      }`,
      text: textContent,
      html: htmlContent,
    });

    return { success: true, messageId: info.messageId };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
