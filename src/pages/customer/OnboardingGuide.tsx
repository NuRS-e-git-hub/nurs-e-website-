import { ContentPageLayout } from "@/components/ContentPageLayout";

const OnboardingGuide = () => (
  <ContentPageLayout
    title="Onboarding Guide"
    breadcrumbs={[{ label: "Customer", href: "/customer/sla" }, { label: "Onboarding Guide" }]}
  >
    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Account Setup</h2>
      <p className="text-muted-foreground leading-relaxed">
        Account setup.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Initial Configuration</h2>
      <p className="text-muted-foreground leading-relaxed">
        Initial configuration.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Best Practices</h2>
      <p className="text-muted-foreground leading-relaxed">
        Best practices.
      </p>
    </section>
  </ContentPageLayout>
);

export default OnboardingGuide;
