import { ContentPageLayout } from "@/components/ContentPageLayout";

const TermsOfService = () => (
  <ContentPageLayout
    title="Terms of Service"
    breadcrumbs={[{ label: "Legal", href: "/legal/terms-of-service" }, { label: "Terms of Service" }]}
  >
    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">1. Introduction</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">
        These Terms of Service ("Terms") constitute a legally binding agreement between you ("Customer", "you") and NuRS-e ("Company", "we", "us").
      </p>
      <p className="text-muted-foreground leading-relaxed mb-2">
        By accessing or using the Services, you agree to be bound by these Terms.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        If you are entering into these Terms on behalf of an organization, you represent that you have authority to bind that entity.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">2. Services</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">
        NuRS-e provides digital communication, automation, and related services via a secure hosted platform ("Services").
      </p>
      <p className="text-muted-foreground leading-relaxed">
        We may modify or discontinue features at our discretion, provided such changes do not materially reduce core functionality without reasonable notice.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">3. Account Registration & Security</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">You agree to:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-2">
        <li>Provide accurate and complete information</li>
        <li>Maintain confidentiality of credentials</li>
        <li>Notify us of unauthorized access</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        You are responsible for all activities under your account.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">4. Acceptable Use</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">You shall not:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-2">
        <li>Attempt unauthorized access</li>
        <li>Interfere with system integrity or performance</li>
        <li>Use the Services unlawfully</li>
        <li>Transmit malicious software</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        We may investigate violations and take appropriate action.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">5. Fees and Payment</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">
        Services are provided on a subscription and/or usage basis.
      </p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-2">
        <li>Fees must be paid within agreed terms</li>
        <li>Late payments may result in suspension</li>
        <li>Fees are non-refundable unless required by law</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        We may update pricing with reasonable notice.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">6. Intellectual Property</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">
        All rights in the Services remain with NuRS-e.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-2">
        Customer retains ownership of all data submitted to the platform.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        NuRS-e is granted a limited, non-exclusive license to process data solely for the purpose of providing the Services.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">7. Data Protection & Data Ownership</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        NuRS-e processes personal data in accordance with applicable data protection laws, including GDPR, and in line with the Privacy Policy and Data Processing Agreement.
      </p>

      <h3 className="text-lg font-semibold mb-2 text-foreground">Patient Data Ownership</h3>
      <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
        <li>All data that directly or indirectly relates to identifiable patients ("Patient Data") remains at all times the sole property of the Customer</li>
        <li>The Customer retains full ownership, control, and responsibility for such data</li>
        <li>The Customer is solely responsible for compliance with applicable healthcare, confidentiality, and data protection laws</li>
      </ul>

      <p className="text-muted-foreground leading-relaxed mb-2">NuRS-e:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
        <li>Acts strictly as a data processor</li>
        <li>Does not acquire ownership rights over Patient Data</li>
        <li>Processes data only to deliver the Services</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2 text-foreground">Use of Anonymized Data</h3>
      <p className="text-muted-foreground leading-relaxed mb-2">
        NuRS-e may collect and retain anonymized and aggregated data, provided that:
      </p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-2">
        <li>It cannot be used to identify individuals</li>
        <li>It is irreversibly anonymized</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed mb-2">Such data may be used for:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-2">
        <li>Research and statistical analysis</li>
        <li>Product improvement</li>
        <li>Internal reporting and benchmarking</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        NuRS-e will never attempt to re-identify anonymized data.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">8. Confidentiality</h2>
      <p className="text-muted-foreground leading-relaxed">
        Both parties agree to protect confidential information and use it solely for the purpose of the agreement.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">9. Warranties Disclaimer</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">
        The Services are provided "as is" and "as available".
      </p>
      <p className="text-muted-foreground leading-relaxed mb-2">To the maximum extent permitted by law:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>No warranties are given</li>
        <li>No guarantee of uninterrupted or error-free service</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">10. Limitation of Liability</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">To the maximum extent permitted by law:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>NuRS-e is not liable for indirect or consequential damages</li>
        <li>Total liability is limited to fees paid in the previous 12 months</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">11. Indemnification</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">Customer agrees to indemnify NuRS-e against claims arising from:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Use of the Services</li>
        <li>Violation of these Terms</li>
        <li>Infringement of third-party rights</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">12. Termination</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">Customer may terminate at any time.</p>
      <p className="text-muted-foreground leading-relaxed mb-2">NuRS-e may suspend or terminate:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>For breach</li>
        <li>For non-payment</li>
        <li>To comply with legal obligations</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">13. Governing Law</h2>
      <p className="text-muted-foreground leading-relaxed">
        These Terms are governed by the laws of the Netherlands.
      </p>
    </section>
  </ContentPageLayout>
);

export default TermsOfService;
