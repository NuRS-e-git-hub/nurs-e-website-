import { ContentPageLayout } from "@/components/ContentPageLayout";

const PrivacyPolicy = () => (
  <ContentPageLayout
    title="Privacy Policy"
    breadcrumbs={[{ label: "Legal", href: "/legal/terms-of-service" }, { label: "Privacy Policy" }]}
  >
    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">1. Scope</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">
        NuRS-e processes personal data strictly on behalf of Customers, who act as data controllers.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Customers remain fully responsible for lawful data collection and usage, including Patient Data.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">2. Data Collected</h2>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Account data</li>
        <li>Usage data</li>
        <li>Technical logs</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">3. Legal Basis</h2>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Contract performance</li>
        <li>Legal obligations</li>
        <li>Legitimate interests</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">4. User Rights</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">Users have the right to:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Access</li>
        <li>Rectification</li>
        <li>Erasure</li>
        <li>Restriction</li>
        <li>Portability</li>
        <li>Objection</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">5. Security</h2>
      <p className="text-muted-foreground leading-relaxed">
        Appropriate technical and organizational measures are implemented.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">6. Retention</h2>
      <p className="text-muted-foreground leading-relaxed">
        Data is retained only as necessary.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">7. International Transfers</h2>
      <p className="text-muted-foreground leading-relaxed">
        Safeguards are applied where required.
      </p>
    </section>
  </ContentPageLayout>
);

export default PrivacyPolicy;
