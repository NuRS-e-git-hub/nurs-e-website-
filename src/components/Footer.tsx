import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-12 bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              NuRS-e
            </h3>
            <p className="text-sm text-muted-foreground">Nurture Response Safe and Export</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/legal/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/legal/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal/data-processing-agreement" className="hover:text-foreground transition-colors">Data Processing Agreement</Link></li>
              <li><Link to="/legal/acceptable-use-policy" className="hover:text-foreground transition-colors">Acceptable Use Policy</Link></li>
              <li><Link to="/legal/pricing-billing" className="hover:text-foreground transition-colors">Pricing & Billing</Link></li>
              <li><Link to="/legal/cancellation-policy" className="hover:text-foreground transition-colors">Cancellation Policy</Link></li>
              <li><Link to="/legal/cookie-policy" className="hover:text-foreground transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Customer</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/customer/sla" className="hover:text-foreground transition-colors">Service Level Agreement</Link></li>
              <li><Link to="/customer/support-policy" className="hover:text-foreground transition-colors">Support Policy</Link></li>
              <li><Link to="/customer/onboarding-guide" className="hover:text-foreground transition-colors">Onboarding Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Trust & Compliance</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/trust/security" className="hover:text-foreground transition-colors">Security Overview</Link></li>
              <li><Link to="/trust/compliance-framework" className="hover:text-foreground transition-colors">Compliance Framework</Link></li>
              <li><Link to="/trust/infrastructure" className="hover:text-foreground transition-colors">Infrastructure & Hosting</Link></li>
              <li><Link to="/trust/privacy-data-protection" className="hover:text-foreground transition-colors">Privacy & Data Protection</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground border-t border-border/30 pt-6">
          <span>Een onderdeel van de Clear Mind Holding groep</span>
        </div>

        <div className="text-xs text-muted-foreground text-center pt-4">
          <p>© {new Date().getFullYear()} NuRS-e. Making Every Conversation Count.</p>
        </div>
      </div>
    </footer>
  );
};
