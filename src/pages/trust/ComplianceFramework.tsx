import { ContentPageLayout } from "@/components/ContentPageLayout";

const ComplianceFramework = () => (
  <ContentPageLayout
    title="Compliance Framework"
    breadcrumbs={[{ label: "Trust & Compliance", href: "/trust/security" }, { label: "Compliance Framework" }]}
  >
    <section>
      <p className="text-muted-foreground leading-relaxed mb-2">Aligned with:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>GDPR</li>
        <li>Contractual obligations</li>
      </ul>
    </section>
  </ContentPageLayout>
);

export default ComplianceFramework;
