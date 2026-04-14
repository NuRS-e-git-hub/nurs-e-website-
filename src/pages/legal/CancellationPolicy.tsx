import { ContentPageLayout } from "@/components/ContentPageLayout";

const CancellationPolicy = () => (
  <ContentPageLayout
    title="Cancellation Policy"
    breadcrumbs={[{ label: "Legal", href: "/legal/terms-of-service" }, { label: "Cancellation Policy" }]}
  >
    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Customer Cancellation</h2>
      <p className="text-muted-foreground leading-relaxed">
        Cancellation via dashboard.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Termination by NuRS-e</h2>
      <p className="text-muted-foreground leading-relaxed">
        Termination for violations possible.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Data Handling</h2>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Data export available</li>
        <li>Data deletion follows retention policy</li>
      </ul>
    </section>
  </ContentPageLayout>
);

export default CancellationPolicy;
