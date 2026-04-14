import { ContentPageLayout } from "@/components/ContentPageLayout";

const SupportPolicy = () => (
  <ContentPageLayout
    title="Support Policy"
    breadcrumbs={[{ label: "Customer", href: "/customer/sla" }, { label: "Support Policy" }]}
  >
    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Support Channels</h2>
      <p className="text-muted-foreground leading-relaxed">
        Email and portal support.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Response Times</h2>
      <p className="text-muted-foreground leading-relaxed">
        Priority-based response times.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Escalation</h2>
      <p className="text-muted-foreground leading-relaxed">
        Escalation for critical issues.
      </p>
    </section>
  </ContentPageLayout>
);

export default SupportPolicy;
