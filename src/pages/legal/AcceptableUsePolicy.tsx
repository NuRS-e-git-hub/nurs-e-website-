import { ContentPageLayout } from "@/components/ContentPageLayout";

const AcceptableUsePolicy = () => (
  <ContentPageLayout
    title="Acceptable Use Policy"
    breadcrumbs={[{ label: "Legal", href: "/legal/terms-of-service" }, { label: "Acceptable Use Policy" }]}
  >
    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Overview</h2>
      <p className="text-muted-foreground leading-relaxed">
        This policy defines acceptable and prohibited uses of the platform.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Prohibited Activities</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">Users may not:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Attempt unauthorized access</li>
        <li>Interfere with system integrity or performance</li>
        <li>Use the platform for illegal purposes</li>
        <li>Upload or distribute malicious software</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Enforcement</h2>
      <p className="text-muted-foreground leading-relaxed">
        Violations may result in suspension or termination of services.
      </p>
    </section>
  </ContentPageLayout>
);

export default AcceptableUsePolicy;
