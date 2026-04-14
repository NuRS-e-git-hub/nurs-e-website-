import { ContentPageLayout } from "@/components/ContentPageLayout";

const TermsOfService = () => (
  <ContentPageLayout
    title="Terms of Service"
    breadcrumbs={[{ label: "Legal", href: "/legal/terms-of-service" }, { label: "Terms of Service" }]}
  >
    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Introduction</h2>
      <p className="text-muted-foreground leading-relaxed">
        These Terms of Service ("Terms") govern the use of the NuRS-e platform and services. By accessing or using the platform, you agree to be bound by these Terms.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Service Description</h2>
      <p className="text-muted-foreground leading-relaxed">
        NuRS-e provides digital communication and automation services via a secure online platform.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Account Registration</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">Users must:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Provide accurate and complete information</li>
        <li>Maintain the confidentiality of their credentials</li>
        <li>Be responsible for all activity under their account</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Acceptable Use</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">Users agree to:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Use the platform only for lawful purposes</li>
        <li>Comply with all applicable laws and regulations</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Pricing & Payment</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">Services are provided on:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Subscription basis</li>
        <li>Usage-based pricing where applicable</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed mt-2">
        Payments must be made in accordance with agreed billing terms.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Data Protection</h2>
      <p className="text-muted-foreground leading-relaxed">
        NuRS-e processes personal data in accordance with applicable data protection laws and its Privacy Policy.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Termination</h2>
      <p className="text-muted-foreground leading-relaxed">
        Users may cancel their subscription at any time via their account. NuRS-e reserves the right to suspend or terminate access in case of violation of these Terms.
      </p>
    </section>
  </ContentPageLayout>
);

export default TermsOfService;
