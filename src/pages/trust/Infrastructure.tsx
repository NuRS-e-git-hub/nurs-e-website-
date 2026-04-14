import { ContentPageLayout } from "@/components/ContentPageLayout";

const Infrastructure = () => (
  <ContentPageLayout
    title="Infrastructure & Hosting"
    breadcrumbs={[{ label: "Trust & Compliance", href: "/trust/security" }, { label: "Infrastructure & Hosting" }]}
  >
    <section>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Secure cloud infrastructure</li>
        <li>Scalable architecture</li>
        <li>Regular maintenance</li>
      </ul>
    </section>
  </ContentPageLayout>
);

export default Infrastructure;
