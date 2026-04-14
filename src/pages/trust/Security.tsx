import { ContentPageLayout } from "@/components/ContentPageLayout";

const Security = () => (
  <ContentPageLayout
    title="Security Overview"
    breadcrumbs={[{ label: "Trust & Compliance", href: "/trust/security" }, { label: "Security Overview" }]}
  >
    <section>
      <p className="text-muted-foreground leading-relaxed mb-2">NuRS-e implements:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Access control</li>
        <li>Monitoring</li>
        <li>Incident response</li>
      </ul>
    </section>
  </ContentPageLayout>
);

export default Security;
