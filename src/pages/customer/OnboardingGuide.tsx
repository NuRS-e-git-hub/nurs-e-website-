import { ContentPageLayout } from "@/components/ContentPageLayout";

const OnboardingGuide = () => (
  <ContentPageLayout
    title="Onboarding Guide"
    breadcrumbs={[{ label: "Customer", href: "/customer/sla" }, { label: "Onboarding Guide" }]}
  >
    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Getting Started</h2>
      <p className="text-muted-foreground leading-relaxed">
        After registration, users receive access to the platform.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Account Setup</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">Users should:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Configure account settings</li>
        <li>Add team members if applicable</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">First Use</h2>
      <p className="text-muted-foreground leading-relaxed">
        Users can begin using core features immediately after setup.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Best Practices</h2>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Keep credentials secure</li>
        <li>Follow usage guidelines</li>
        <li>Contact support if needed</li>
      </ul>
    </section>
  </ContentPageLayout>
);

export default OnboardingGuide;
