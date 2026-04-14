import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface ContentPageLayoutProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  children: React.ReactNode;
}

export const ContentPageLayout = ({ title, breadcrumbs, children }: ContentPageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            NuRS-e
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/legal/terms-of-service" className="hover:text-foreground transition-colors">Legal</Link>
            <Link to="/customer/sla" className="hover:text-foreground transition-colors">Customer</Link>
            <Link to="/trust/security" className="hover:text-foreground transition-colors">Trust & Compliance</Link>
          </nav>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Home
          </Link>
        </div>
      </header>

      <div className="bg-gradient-to-b from-muted/30 to-background border-b border-border/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5" />
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-foreground transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-foreground font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {title}
        </h1>
        <div className="prose prose-slate max-w-none space-y-8 text-foreground">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};
