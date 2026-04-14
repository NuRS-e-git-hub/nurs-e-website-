import { ContentPageLayout } from "@/components/ContentPageLayout";

const DataProcessingAgreement = () => (
  <ContentPageLayout
    title="Data Processing Agreement"
    breadcrumbs={[{ label: "Legal", href: "/legal/terms-of-service" }, { label: "Data Processing Agreement" }]}
  >
    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">1. Roles</h2>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li><strong>Customer:</strong> Data Controller</li>
        <li><strong>NuRS-e:</strong> Data Processor</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">2. Processing Instructions</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">
        NuRS-e processes data only on documented instructions.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-2">Customer is responsible for:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Purpose of processing</li>
        <li>Legal compliance</li>
        <li>Patient Data governance</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">3. Subprocessors</h2>
      <p className="text-muted-foreground leading-relaxed">
        NuRS-e may use subprocessors under appropriate safeguards.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">4. Security Measures</h2>
      <p className="text-muted-foreground leading-relaxed mb-2">Includes:</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Access controls</li>
        <li>Monitoring</li>
        <li>Encryption where appropriate</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">5. Data Breach Notification</h2>
      <p className="text-muted-foreground leading-relaxed">
        NuRS-e will notify without undue delay after confirmation.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">6. Audit Rights</h2>
      <p className="text-muted-foreground leading-relaxed">
        Customer may request reasonable compliance information.
      </p>
    </section>
  </ContentPageLayout>
);

export default DataProcessingAgreement;
