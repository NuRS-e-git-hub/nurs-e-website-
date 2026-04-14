import { ContentPageLayout } from "@/components/ContentPageLayout";

const CookiePolicy = () => (
  <ContentPageLayout
    title="Cookie Policy"
    breadcrumbs={[{ label: "Legal", href: "/legal/terms-of-service" }, { label: "Cookie Policy" }]}
  >
    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">What Are Cookies</h2>
      <p className="text-muted-foreground leading-relaxed">
        Cookies are small text files stored on your device.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Types of Cookies</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">We may use:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Essential cookies</li>
        <li>Analytics cookies</li>
        <li>Functional cookies</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Managing Cookies</h2>
      <p className="text-muted-foreground leading-relaxed">
        Users can manage or disable cookies through browser settings.
      </p>
    </section>
  </ContentPageLayout>
);

export default CookiePolicy;
