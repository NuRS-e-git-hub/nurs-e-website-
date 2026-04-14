import { ContentPageLayout } from "@/components/ContentPageLayout";

const Infrastructure = () => (
  <ContentPageLayout
    title="Infrastructure & Hosting"
    breadcrumbs={[{ label: "Trust & Compliance", href: "/trust/security" }, { label: "Infrastructure & Hosting" }]}
  >
    <section>
      <p className="text-muted-foreground leading-relaxed mb-4">
        NuRS-e uses modern hosting infrastructure designed for:
      </p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Reliability</li>
        <li>Scalability</li>
        <li>Security</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed mt-4">
        Maintenance is performed regularly to ensure system performance.
      </p>
    </section>
  </ContentPageLayout>
);

export default Infrastructure;
