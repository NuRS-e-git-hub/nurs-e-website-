import { ContentPageLayout } from "@/components/ContentPageLayout";

const CancellationPolicy = () => (
  <ContentPageLayout
    title="Cancellation Policy"
    breadcrumbs={[{ label: "Legal", href: "/legal/terms-of-service" }, { label: "Cancellation Policy" }]}
  >
    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Customer Cancellation</h2>
      <p className="text-muted-foreground leading-relaxed">
        Customers may cancel their subscription through their account dashboard.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Termination by NuRS-e</h2>
      <p className="text-muted-foreground leading-relaxed">
        NuRS-e may suspend or terminate accounts that violate applicable terms or policies.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Data Handling</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">Upon termination:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Customers may request export of their data</li>
        <li>Data may be deleted after a defined retention period</li>
      </ul>
    </section>
  </ContentPageLayout>
);

export default CancellationPolicy;
