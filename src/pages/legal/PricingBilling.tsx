import { ContentPageLayout } from "@/components/ContentPageLayout";

const PricingBilling = () => (
  <ContentPageLayout
    title="Pricing & Billing"
    breadcrumbs={[{ label: "Legal", href: "/legal/terms-of-service" }, { label: "Pricing & Billing" }]}
  >
    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Pricing Model</h2>
      <p className="text-muted-foreground leading-relaxed">
        Subscription and/or usage-based.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Payment Methods</h2>
      <p className="text-muted-foreground leading-relaxed">
        Payment via invoice or card.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Late Payments</h2>
      <p className="text-muted-foreground leading-relaxed">
        Late payments may lead to suspension.
      </p>
    </section>
  </ContentPageLayout>
);

export default PricingBilling;
