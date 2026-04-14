import { ContentPageLayout } from "@/components/ContentPageLayout";

const PrivacyDataProtection = () => (
  <ContentPageLayout
    title="Privacy & Data Protection"
    breadcrumbs={[{ label: "Trust & Compliance", href: "/trust/security" }, { label: "Privacy & Data Protection" }]}
  >
    <section>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Data lifecycle management</li>
        <li>User rights protection</li>
        <li>Strong safeguards</li>
      </ul>
    </section>
  </ContentPageLayout>
);

export default PrivacyDataProtection;
