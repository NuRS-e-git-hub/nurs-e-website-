import { ContentPageLayout } from "@/components/ContentPageLayout";

const AcceptableUsePolicy = () => (
  <ContentPageLayout
    title="Acceptable Use Policy"
    breadcrumbs={[{ label: "Legal", href: "/legal/terms-of-service" }, { label: "Acceptable Use Policy" }]}
  >
    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Prohibited Activities</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">Users may not:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Attempt unauthorized access</li>
        <li>Disrupt systems</li>
        <li>Use services illegally</li>
        <li>Distribute malware</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Enforcement</h2>
      <p className="text-muted-foreground leading-relaxed">
        Violations may lead to termination.
      </p>
    </section>
  </ContentPageLayout>
);

export default AcceptableUsePolicy;
