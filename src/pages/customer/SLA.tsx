import { ContentPageLayout } from "@/components/ContentPageLayout";

const SLA = () => (
  <ContentPageLayout
    title="Service Level Agreement (SLA)"
    breadcrumbs={[{ label: "Customer", href: "/customer/sla" }, { label: "Service Level Agreement" }]}
  >
    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Availability</h2>
      <p className="text-muted-foreground leading-relaxed">
        NuRS-e aims to provide high availability of its services.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Maintenance</h2>
      <p className="text-muted-foreground leading-relaxed">
        Scheduled maintenance may occur during predefined windows.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Incident Management</h2>
      <p className="text-muted-foreground leading-relaxed">
        NuRS-e monitors systems and responds to incidents impacting availability.
      </p>
    </section>
  </ContentPageLayout>
);

export default SLA;
