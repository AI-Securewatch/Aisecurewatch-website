import { Routes, Route, Navigate } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import WhyWeExist from "./pages/WhyWeExist";
import Leadership from "./pages/Leadership";
import SeanChihwendu from "./pages/founders/SeanChihwendu";
import NathanObiekwe from "./pages/founders/NathanObiekwe";
import Careers from "./pages/Careers";
import Resources from "./pages/Resources";
import TheMissingIamLayer from "./pages/resources/TheMissingIamLayer";
import Whitepapers from "./pages/resources/Whitepapers";
import Rfcs from "./pages/resources/Rfcs";
import CaseStudies from "./pages/resources/CaseStudies";
import Faq from "./pages/resources/Faq";
import Glossary from "./pages/resources/Glossary";
import Research from "./pages/resources/Research";
import Manifesto from "./pages/Manifesto";
import Demo from "./pages/Demo";
import InsurancePortal from "./pages/InsurancePortal";
import Contact from "./pages/Contact";
import Platform from "./pages/Platform";
import ProductsOverview from "./pages/products/Overview";
import RuntimeAuthority from "./pages/products/RuntimeAuthority";
import AuthorityGraph from "./pages/products/AuthorityGraph";
import RuntimePolicies from "./pages/products/RuntimePolicies";
import EvidencePortal from "./pages/products/EvidencePortal";
import AuthorizationReceipts from "./pages/products/AuthorizationReceipts";
// "Developers" pages reuse a few of the same product names (AuthorityGraph,
// RuntimePolicies, AuthorizationReceipts) for a technical/API-level angle on
// the same concept the marketing product page covers -- aliased on import so
// both can live in this one route table without colliding.
import DevOverview from "./pages/developers/Overview";
import GettingStarted from "./pages/developers/GettingStarted";
import Architecture from "./pages/developers/Architecture";
import RuntimeApi from "./pages/developers/RuntimeApi";
import DevAuthentication from "./pages/developers/Authentication";
import DevAuthorityGraph from "./pages/developers/AuthorityGraph";
import DevRuntimePolicies from "./pages/developers/RuntimePolicies";
import DevAuthorizationReceipts from "./pages/developers/AuthorizationReceipts";
import EvidenceVerification from "./pages/developers/EvidenceVerification";
import Sdks from "./pages/developers/Sdks";
import Webhooks from "./pages/developers/Webhooks";
import DevIntegrationExamples from "./pages/developers/IntegrationExamples";
import IntegrationGuides from "./pages/developers/IntegrationGuides";
import DevAgentRegistration from "./pages/developers/AgentRegistration";
import ApiReference from "./pages/developers/ApiReference";
import SolutionsOverview from "./pages/solutions/Overview";
import FinancialServices from "./pages/solutions/FinancialServices";
import Procurement from "./pages/solutions/Procurement";
import Healthcare from "./pages/solutions/Healthcare";
import Manufacturing from "./pages/solutions/Manufacturing";
import PublicSector from "./pages/solutions/PublicSector";
import EnterpriseIt from "./pages/solutions/EnterpriseIt";
import LegalAndContracts from "./pages/solutions/LegalAndContracts";
import NotFound from "./pages/NotFound";

// Shared between the client entry (App.tsx, wrapped in BrowserRouter) and the
// server prerender entry (entry-server.tsx, wrapped in StaticRouter), so the
// route table only lives in one place.
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/why-we-exist" element={<Layout><WhyWeExist /></Layout>} />
      <Route path="/leadership" element={<Layout><Leadership /></Layout>} />
      <Route path="/leadership/sean-chihwendu" element={<Layout><SeanChihwendu /></Layout>} />
      <Route path="/leadership/nathan-obiekwe" element={<Layout><NathanObiekwe /></Layout>} />
      <Route path="/careers" element={<Layout><Careers /></Layout>} />
      <Route path="/resources" element={<Layout><Resources /></Layout>} />
      <Route path="/resources/the-missing-iam-layer-for-ai-authority" element={<Layout><TheMissingIamLayer /></Layout>} />
      <Route path="/resources/whitepapers" element={<Layout><Whitepapers /></Layout>} />
      <Route path="/resources/rfcs" element={<Layout><Rfcs /></Layout>} />
      <Route path="/resources/case-studies" element={<Layout><CaseStudies /></Layout>} />
      <Route path="/resources/faq" element={<Layout><Faq /></Layout>} />
      <Route path="/resources/glossary" element={<Layout><Glossary /></Layout>} />
      <Route path="/resources/research" element={<Layout><Research /></Layout>} />
      <Route path="/manifesto" element={<Layout><Manifesto /></Layout>} />
      <Route path="/demo" element={<Layout><Demo /></Layout>} />
      {/* Superseded by /products/runtime-policies -- kept as a redirect so no
          existing external link or bookmark to /policy-engine breaks. */}
      <Route path="/policy-engine" element={<Navigate to="/products/runtime-policies" replace />} />
      <Route path="/platform" element={<Layout><Platform /></Layout>} />
      <Route path="/products" element={<Layout><ProductsOverview /></Layout>} />
      <Route path="/products/runtime-authority" element={<Layout><RuntimeAuthority /></Layout>} />
      <Route path="/products/authority-graph" element={<Layout><AuthorityGraph /></Layout>} />
      <Route path="/products/runtime-policies" element={<Layout><RuntimePolicies /></Layout>} />
      <Route path="/products/evidence-portal" element={<Layout><EvidencePortal /></Layout>} />
      <Route path="/products/authorization-receipts" element={<Layout><AuthorizationReceipts /></Layout>} />
      <Route path="/insurance-portal" element={<Layout><InsurancePortal /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />

      {/* Developers -- old /docs/* URLs redirect to their /developers/*
          successors so no existing bookmark or external link breaks. */}
      <Route path="/docs" element={<Navigate to="/developers" replace />} />
      <Route path="/docs/sdk" element={<Navigate to="/developers/sdks" replace />} />
      <Route path="/docs/integration-examples" element={<Navigate to="/developers/integration-examples" replace />} />
      <Route path="/docs/authentication" element={<Navigate to="/developers/authentication" replace />} />
      <Route path="/docs/agent-registration" element={<Navigate to="/developers/agent-registration" replace />} />

      <Route path="/developers" element={<Layout><DevOverview /></Layout>} />
      <Route path="/developers/getting-started" element={<Layout><GettingStarted /></Layout>} />
      <Route path="/developers/architecture" element={<Layout><Architecture /></Layout>} />
      <Route path="/developers/runtime-api" element={<Layout><RuntimeApi /></Layout>} />
      <Route path="/developers/authentication" element={<Layout><DevAuthentication /></Layout>} />
      <Route path="/developers/authority-graph" element={<Layout><DevAuthorityGraph /></Layout>} />
      <Route path="/developers/runtime-policies" element={<Layout><DevRuntimePolicies /></Layout>} />
      <Route path="/developers/authorization-receipts" element={<Layout><DevAuthorizationReceipts /></Layout>} />
      <Route path="/developers/evidence-verification" element={<Layout><EvidenceVerification /></Layout>} />
      <Route path="/developers/sdks" element={<Layout><Sdks /></Layout>} />
      <Route path="/developers/webhooks" element={<Layout><Webhooks /></Layout>} />
      <Route path="/developers/integration-examples" element={<Layout><DevIntegrationExamples /></Layout>} />
      <Route path="/developers/integration-guides" element={<Layout><IntegrationGuides /></Layout>} />
      <Route path="/developers/agent-registration" element={<Layout><DevAgentRegistration /></Layout>} />
      <Route path="/developers/api-reference" element={<Layout><ApiReference /></Layout>} />

      <Route path="/solutions" element={<Layout><SolutionsOverview /></Layout>} />
      <Route path="/solutions/financial-services" element={<Layout><FinancialServices /></Layout>} />
      <Route path="/solutions/procurement" element={<Layout><Procurement /></Layout>} />
      <Route path="/solutions/healthcare" element={<Layout><Healthcare /></Layout>} />
      <Route path="/solutions/manufacturing" element={<Layout><Manufacturing /></Layout>} />
      <Route path="/solutions/public-sector" element={<Layout><PublicSector /></Layout>} />
      <Route path="/solutions/enterprise-it" element={<Layout><EnterpriseIt /></Layout>} />
      <Route path="/solutions/legal-and-contracts" element={<Layout><LegalAndContracts /></Layout>} />

      <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>
  );
}
