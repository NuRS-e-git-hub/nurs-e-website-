import { ContentPageLayout } from "@/components/ContentPageLayout";

const Security = () => (
  <ContentPageLayout
    title="Security Overview"
    breadcrumbs={[{ label: "Trust & Compliance", href: "/trust/security" }, { label: "Security Overview" }]}
  >
    <section>
      <p className="text-muted-foreground leading-relaxed mb-4">
        NuRS-e applies security best practices to protect its platform, including:
      </p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Access controls</li>
        <li>Monitoring systems</li>
        <li>Data protection measures</li>
      </ul>
    </section>
  </ContentPageLayout>
);

export default Security;
