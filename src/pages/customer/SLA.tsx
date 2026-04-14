import { ContentPageLayout } from "@/components/ContentPageLayout";

const SLA = () => (
  <ContentPageLayout
    title="Service Level Agreement (SLA)"
    breadcrumbs={[{ label: "Customer", href: "/customer/sla" }, { label: "Service Level Agreement" }]}
  >
    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Availability</h2>
      <p className="text-muted-foreground leading-relaxed">
        Provided on a commercially reasonable efforts basis.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Maintenance</h2>
      <p className="text-muted-foreground leading-relaxed">
        Scheduled maintenance windows apply.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Incident Management</h2>
      <p className="text-muted-foreground leading-relaxed">
        Incidents handled based on severity.
      </p>
    </section>
  </ContentPageLayout>
);

export default SLA;
