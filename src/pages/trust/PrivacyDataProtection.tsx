import { ContentPageLayout } from "@/components/ContentPageLayout";

const PrivacyDataProtection = () => (
  <ContentPageLayout
    title="Privacy & Data Protection"
    breadcrumbs={[{ label: "Trust & Compliance", href: "/trust/security" }, { label: "Privacy & Data Protection" }]}
  >
    <section>
      <p className="text-muted-foreground leading-relaxed mb-4">
        NuRS-e ensures:
      </p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Lawful processing of personal data</li>
        <li>Protection of user rights</li>
        <li>Implementation of appropriate safeguards</li>
      </ul>
    </section>
  </ContentPageLayout>
);

export default PrivacyDataProtection;
