import { ContentPageLayout } from "@/components/ContentPageLayout";

const PricingBilling = () => (
  <ContentPageLayout
    title="Pricing & Billing"
    breadcrumbs={[{ label: "Legal", href: "/legal/terms-of-service" }, { label: "Pricing & Billing" }]}
  >
    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Pricing Model</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">Services may be offered:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>As subscriptions</li>
        <li>Based on usage</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Payment Methods</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">Payments may be made via:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Credit card</li>
        <li>Invoice (where applicable)</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Billing Terms</h2>
      <p className="text-muted-foreground leading-relaxed">
        Invoices must be paid within agreed terms.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Late Payments</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">Late payments may result in:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Suspension of services</li>
        <li>Additional fees where applicable</li>
      </ul>
    </section>
  </ContentPageLayout>
);

export default PricingBilling;
