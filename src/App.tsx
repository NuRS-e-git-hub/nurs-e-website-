import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Legal pages
import TermsOfService from "./pages/legal/TermsOfService";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import DataProcessingAgreement from "./pages/legal/DataProcessingAgreement";
import AcceptableUsePolicy from "./pages/legal/AcceptableUsePolicy";
import PricingBilling from "./pages/legal/PricingBilling";
import CancellationPolicy from "./pages/legal/CancellationPolicy";
import CookiePolicy from "./pages/legal/CookiePolicy";

// Customer pages
import SLA from "./pages/customer/SLA";
import SupportPolicy from "./pages/customer/SupportPolicy";
import OnboardingGuide from "./pages/customer/OnboardingGuide";

// Trust & Compliance pages
import Security from "./pages/trust/Security";
import ComplianceFramework from "./pages/trust/ComplianceFramework";
import Infrastructure from "./pages/trust/Infrastructure";
import PrivacyDataProtection from "./pages/trust/PrivacyDataProtection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Legal */}
          <Route path="/legal/terms-of-service" element={<TermsOfService />} />
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/data-processing-agreement" element={<DataProcessingAgreement />} />
          <Route path="/legal/acceptable-use-policy" element={<AcceptableUsePolicy />} />
          <Route path="/legal/pricing-billing" element={<PricingBilling />} />
          <Route path="/legal/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/legal/cookie-policy" element={<CookiePolicy />} />

          {/* Customer */}
          <Route path="/customer/sla" element={<SLA />} />
          <Route path="/customer/support-policy" element={<SupportPolicy />} />
          <Route path="/customer/onboarding-guide" element={<OnboardingGuide />} />

          {/* Trust & Compliance */}
          <Route path="/trust/security" element={<Security />} />
          <Route path="/trust/compliance-framework" element={<ComplianceFramework />} />
          <Route path="/trust/infrastructure" element={<Infrastructure />} />
          <Route path="/trust/privacy-data-protection" element={<PrivacyDataProtection />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
