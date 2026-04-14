import { ContentPageLayout } from "@/components/ContentPageLayout";

const PrivacyPolicy = () => (
  <ContentPageLayout
    title="Privacy Policy"
    breadcrumbs={[{ label: "Legal", href: "/legal/terms-of-service" }, { label: "Privacy Policy" }]}
  >
    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Introduction</h2>
      <p className="text-muted-foreground leading-relaxed">
        This Privacy Policy explains how NuRS-e collects, uses, and protects personal data.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Data We Collect</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">We may collect:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Account information</li>
        <li>Usage data</li>
        <li>Technical and log data</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Use of Data</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">We use data to:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Provide and improve services</li>
        <li>Ensure platform security</li>
        <li>Comply with legal obligations</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">User Rights</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">Users have the right to:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Access their data</li>
        <li>Request correction</li>
        <li>Request deletion</li>
        <li>Object to processing where applicable</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Data Retention</h2>
      <p className="text-muted-foreground leading-relaxed">
        Data is retained only as long as necessary for service delivery or legal obligations.
      </p>
    </section>
  </ContentPageLayout>
);

export default PrivacyPolicy;
