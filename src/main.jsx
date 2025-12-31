import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {LoaderFive } from './components/ui/loader'

// Lazy load all page components
const Home = lazy(() => import('./pages/Home/Home'));
const AboutPage = lazy(() => import("./pages/About/AboutUs"));
const WhyUs = lazy(() => import("./pages/WhyUs/WhyUs"));
const CompanyOverView = lazy(() => import("./pages/CompanyOverview/CompanyOverView"));
const KpoServices = lazy(() => import("./pages/services/KpoServices"));
const RpoServices = lazy(() => import("./pages/services/RpoServices"));
const BpoServices = lazy(() => import("./pages/services/BpoServices"));
const CrmServices = lazy(() => import("./pages/services/CrmServices"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const ServiceDetail = lazy(() => import("./pages/services/ServiceDetail"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));

// Loading component
const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
    fontSize: '1.2rem',
    color: '#666'
  }}>
   <LoaderFive text="Evren Research..." />;
  </div>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={
        <Suspense fallback={<PageLoader />}>
          <Home />
        </Suspense>
      } />
      <Route path="/about" element={
        <Suspense fallback={<PageLoader />}>
          <AboutPage />
        </Suspense>
      } />
      <Route path="/rpo-services" element={
        <Suspense fallback={<PageLoader />}>
          <RpoServices />
        </Suspense>
      } />
      <Route path="/kpo-services" element={
        <Suspense fallback={<PageLoader />}>
          <KpoServices />
        </Suspense>
      } />
      <Route path="/bpo-services" element={
        <Suspense fallback={<PageLoader />}>
          <BpoServices />
        </Suspense>
      } />
      <Route path="/crm-services" element={
        <Suspense fallback={<PageLoader />}>
          <CrmServices />
        </Suspense>
      } />
      <Route path="/kpo-services/:serviceId" element={
        <Suspense fallback={<PageLoader />}>
          <ServiceDetail />
        </Suspense>
      } />
      <Route path="/rpo-services/:serviceId" element={
        <Suspense fallback={<PageLoader />}>
          <ServiceDetail />
        </Suspense>
      } />
      <Route path="/bpo-services/:serviceId" element={
        <Suspense fallback={<PageLoader />}>
          <ServiceDetail />
        </Suspense>
      } />
      <Route path="/crm-services/:serviceId" element={
        <Suspense fallback={<PageLoader />}>
          <ServiceDetail />
        </Suspense>
      } />
      <Route path="/why-us" element={
        <Suspense fallback={<PageLoader />}>
          <WhyUs />
        </Suspense>
      } />
      <Route path="/privacy-policy" element={
        <Suspense fallback={<PageLoader />}>
          <PrivacyPolicy />
        </Suspense>
      } />
      <Route path="/company-overview" element={
        <Suspense fallback={<PageLoader />}>
          <CompanyOverView />
        </Suspense>
      } />
      <Route path="/contact" element={
        <Suspense fallback={<PageLoader />}>
          <Contact />
        </Suspense>
      } />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);