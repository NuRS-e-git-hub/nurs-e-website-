import { ContentPageLayout } from "@/components/ContentPageLayout";

const DataProcessingAgreement = () => (
  <ContentPageLayout
    title="Data Processing Agreement"
    breadcrumbs={[{ label: "Legal", href: "/legal/terms-of-service" }, { label: "Data Processing Agreement" }]}
  >
    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Scope</h2>
      <p className="text-muted-foreground leading-relaxed">
        This agreement governs the processing of personal data by NuRS-e on behalf of customers.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Roles</h2>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li><strong>Customer:</strong> Data Controller</li>
        <li><strong>NuRS-e:</strong> Data Processor</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Security Measures</h2>
      <p className="text-muted-foreground leading-relaxed">
        NuRS-e implements appropriate technical and organizational measures to protect data.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-foreground">Data Breach Notification</h2>
      <p className="text-muted-foreground leading-relaxed">
        NuRS-e will notify customers without undue delay after becoming aware of a confirmed data breach.
      </p>
    </section>
  </ContentPageLayout>
);

export default DataProcessingAgreement;
