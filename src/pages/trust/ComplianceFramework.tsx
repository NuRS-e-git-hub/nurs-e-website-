import { ContentPageLayout } from "@/components/ContentPageLayout";

const ComplianceFramework = () => (
  <ContentPageLayout
    title="Compliance Framework"
    breadcrumbs={[{ label: "Trust & Compliance", href: "/trust/security" }, { label: "Compliance Framework" }]}
  >
    <section>
      <p className="text-muted-foreground leading-relaxed mb-4">
        NuRS-e operates in alignment with applicable regulations, including:
      </p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Data protection laws (e.g. GDPR)</li>
        <li>Contractual data processing obligations</li>
      </ul>
    </section>
  </ContentPageLayout>
);

export default ComplianceFramework;
