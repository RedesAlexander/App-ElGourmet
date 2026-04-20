import './TermsAndConditions.css';

function TermsAndConditions() {
  return (
    <section className="legal-section">
      <div className="container">
        <div className="legal-content">
          <h1>Terms and Conditions</h1>

          <div className="legal-text">
            <h2>1. Website Owner Identification</h2>
            <p>
              <strong>LOUIS ALEXANDER ROYAL GROUP LLC</strong> (hereinafter referred to as "the Company"), 
              with its registered address at 1209 Mountain Rd PI NE STE R, Albuquerque, NM 87110, is the 
              owner of this website (hereinafter referred to as the “Website” or “Site,” interchangeably).
            </p>
            <p>
              By browsing our website, you agree that its use is governed by the terms and conditions 
              described below. <strong>If you do not agree, please do not access, browse, or use the Website.</strong>
            </p>
            <p>
              SUPER-MARKET-GOURMET reserves the right to modify the presentation, configuration, and 
              content of the Website at any time.
            </p>

            <h2>2. Use of the Site</h2>
            <p>
              You may use the information available on the <strong>NOCCIOLA.ES</strong> website solely for 
              personal purposes. Any commercial use (such as reproduction) requires prior written 
              authorization and a signed agreement.
            </p>
            
            <p><strong>Strictly prohibited actions:</strong></p>
            <ul>
              <li>Misleading others or offending public morality.</li>
              <li>Infringing intellectual property rights or similar rights.</li>
              <li>Uploading content containing viruses or programs that may damage the Site or users.</li>
              <li>Transmitting or uploading illegal content that violates data protection laws.</li>
              <li>Distributing unsolicited advertising or emails (Spam).</li>
            </ul>

            <h2>3. Intellectual and Industrial Property Rights</h2>
            <p>
              All logos, trademarks, and trade names displayed on the Website are the property of 
              <strong> NOCCIOLA.ES</strong>. 
            </p>
            <p>
              Articles, information, and other materials are protected by industrial and intellectual property laws. 
              You may not modify, copy, reproduce, or use any document from the Site without prior written 
              consent.
            </p>

            <h2>4. Links to Third-Party Websites</h2>
            <p>
              The Website may contain links to third-party sites. <strong>NOCCIOLA.ES</strong> is not 
              responsible for the content found on such sites. Use of these links is solely at the user's 
              risk.
            </p>

            <h2>5. Liability and Security</h2>
            <p>
              We aim to ensure that information is accurate and up to date. However, the content does not 
              constitute a contractual relationship, and the Company shall not be liable for any loss or 
              damage related to the use of this information.
            </p>
            <p className="highlight-box">
              <strong>Security:</strong> We use SSL (Secure Sockets Layer) software to protect your 
              information during transmission, ensuring a highly secure data transfer protocol.
            </p>

            <h2>6. Dispute Resolution</h2>
            <p>
              For disputes arising from the use of this Website, <strong>Spanish legislation</strong> will 
              apply. The Courts and Tribunals of Spain will have jurisdiction, provided that applicable 
              regulations allow the parties to submit to a specific jurisdiction.
            </p>

            <footer className="legal-footer">
              <p>Last updated: 28/03/2026</p>
              <p>Copyright © LOUIS ALEXANDER ROYAL GROUP LLC. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsAndConditions;