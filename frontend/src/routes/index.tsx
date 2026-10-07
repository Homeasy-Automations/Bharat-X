import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import AboutPage from "../pages/AboutPage";
import AdminPage from "../pages/AdminPage";
import CareersPage from "../pages/CareersPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ImpactPage from "../pages/ImpactPage";
import IndustriesPage from "../pages/IndustriesPage";
import HowWeBuildPage from "../pages/HowWeBuildPage";
import InnovationPage from "../pages/InnovationPage";
import LeadershipPage from "../pages/LeadershipPage";
import NotFoundPage from "../pages/NotFoundPage";
import PrivacyPage from "../pages/PrivacyPage";
import ServicesPage from "../pages/ServicesPage";
import TermsPage from "../pages/TermsPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Layout renders <Outlet> via children — see Layout usage in App.tsx */}
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="how-we-build" element={<HowWeBuildPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="businesses" element={<ServicesPage />} />
        <Route path="companies" element={<Navigate to="/services" replace />} />
        <Route path="companies/:slug" element={<Navigate to="/services" replace />} />
        <Route path="bharatx-labs" element={<Navigate to="/services" replace />} />
        <Route path="ecosystem" element={<Navigate to="/services" replace />} />
        <Route path="industries" element={<IndustriesPage />} />
        <Route path="innovation" element={<InnovationPage />} />
        <Route path="impact" element={<ImpactPage />} />
        <Route path="leadership" element={<LeadershipPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
