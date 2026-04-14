import { ContentPageLayout } from "@/components/ContentPageLayout";

const SupportPolicy = () => (
  <ContentPageLayout
    title="Support Policy"
    breadcrumbs={[{ label: "Customer", href: "/customer/sla" }, { label: "Support Policy" }]}
  >
    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Support Channels</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">Support is available via:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Email</li>
        <li>Customer portal</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Response Times</h2>
      <p className="text-muted-foreground leading-relaxed">
        Response times depend on issue severity.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Escalation</h2>
      <p className="text-muted-foreground leading-relaxed">
        Critical issues may be escalated internally to ensure timely resolution.
      </p>
    </section>
  </ContentPageLayout>
);

export default SupportPolicy;
