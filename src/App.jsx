import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './Layout';
import { PRODUCTION_BASE } from './siteConfig';

const Home = lazy(() => import('./pages/Home'));
const Foundations = lazy(() => import('./pages/Foundations'));
const Motion = lazy(() => import('./pages/Motion'));
const ComponentsIndex = lazy(() => import('./pages/ComponentsIndex'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Monitoring = lazy(() => import('./pages/Monitoring'));
const Cctv = lazy(() => import('./pages/Cctv'));
const DataViz = lazy(() => import('./pages/DataViz'));
const LayoutGuide = lazy(() => import('./pages/LayoutGuide'));

const ButtonPage = lazy(() => import('./pages/components/ButtonPage'));
const BadgePage = lazy(() => import('./pages/components/BadgePage'));
const InputPage = lazy(() => import('./pages/components/InputPage'));
const CardPage = lazy(() => import('./pages/components/CardPage'));
const KpiPage = lazy(() => import('./pages/components/KpiPage'));
const FilterBarPage = lazy(() => import('./pages/components/FilterBarPage'));
const TablePage = lazy(() => import('./pages/components/TablePage'));
const ToastPage = lazy(() => import('./pages/components/ToastPage'));
const EmptyStatePage = lazy(() => import('./pages/components/EmptyStatePage'));
const ModalPage = lazy(() => import('./pages/components/ModalPage'));
const CheckboxRadioPage = lazy(() => import('./pages/components/CheckboxRadioPage'));
const TogglePage = lazy(() => import('./pages/components/TogglePage'));
const TextareaPage = lazy(() => import('./pages/components/TextareaPage'));
const TooltipPage = lazy(() => import('./pages/components/TooltipPage'));
const TabsPage = lazy(() => import('./pages/components/TabsPage'));
const PaginationPage = lazy(() => import('./pages/components/PaginationPage'));
const ProgressPage = lazy(() => import('./pages/components/ProgressPage'));
const BreadcrumbPage = lazy(() => import('./pages/components/BreadcrumbPage'));
const AvatarPage = lazy(() => import('./pages/components/AvatarPage'));
const DropdownPage = lazy(() => import('./pages/components/DropdownPage'));
const SkeletonPage = lazy(() => import('./pages/components/SkeletonPage'));

const productionBaseSegment = PRODUCTION_BASE.replace(/^\//, '').replace(/\/$/, '');
const escapedProductionBaseSegment = productionBaseSegment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function LegacyDevBaseRedirect() {
  const location = useLocation();
  const nextPath = productionBaseSegment
    ? location.pathname.replace(new RegExp(`^/${escapedProductionBaseSegment}`), '') || '/'
    : location.pathname || '/';

  return <Navigate to={`${nextPath}${location.search}${location.hash}`} replace />;
}

function RouteFallback() {
  return (
    <div className="hl-section">
      <div className="hl-panel hl-flex hl-items-center hl-justify-between">
        <span className="hl-text-secondary">Loading page...</span>
        <span className="hl-badge hl-badge--info">Lazy route</span>
      </div>
    </div>
  );
}

function renderLazy(Component) {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Component />
    </Suspense>
  );
}

export default function App() {
  const useLegacyDevRedirect =
    import.meta.env.DEV && import.meta.env.BASE_URL === '/' && productionBaseSegment;

  return (
    <Routes>
      {useLegacyDevRedirect && (
        <Route path={`${productionBaseSegment}/*`} element={<LegacyDevBaseRedirect />} />
      )}
      <Route element={<Layout />}>
        <Route index element={renderLazy(Home)} />
        <Route path="foundations" element={renderLazy(Foundations)} />
        <Route path="motion" element={renderLazy(Motion)} />
        <Route path="components" element={renderLazy(ComponentsIndex)} />
        <Route path="components/button" element={renderLazy(ButtonPage)} />
        <Route path="components/badge" element={renderLazy(BadgePage)} />
        <Route path="components/input" element={renderLazy(InputPage)} />
        <Route path="components/card" element={renderLazy(CardPage)} />
        <Route path="components/kpi" element={renderLazy(KpiPage)} />
        <Route path="components/filter-bar" element={renderLazy(FilterBarPage)} />
        <Route path="components/table" element={renderLazy(TablePage)} />
        <Route path="components/toast" element={renderLazy(ToastPage)} />
        <Route path="components/empty-state" element={renderLazy(EmptyStatePage)} />
        <Route path="components/modal" element={renderLazy(ModalPage)} />
        <Route path="components/checkbox-radio" element={renderLazy(CheckboxRadioPage)} />
        <Route path="components/toggle" element={renderLazy(TogglePage)} />
        <Route path="components/textarea" element={renderLazy(TextareaPage)} />
        <Route path="components/tooltip" element={renderLazy(TooltipPage)} />
        <Route path="components/tabs" element={renderLazy(TabsPage)} />
        <Route path="components/pagination" element={renderLazy(PaginationPage)} />
        <Route path="components/progress" element={renderLazy(ProgressPage)} />
        <Route path="components/breadcrumb" element={renderLazy(BreadcrumbPage)} />
        <Route path="components/avatar" element={renderLazy(AvatarPage)} />
        <Route path="components/dropdown" element={renderLazy(DropdownPage)} />
        <Route path="components/skeleton" element={renderLazy(SkeletonPage)} />
        <Route path="guide/layout" element={renderLazy(LayoutGuide)} />
        <Route path="guide/data-visualization" element={renderLazy(DataViz)} />
        <Route path="dashboard" element={renderLazy(Dashboard)} />
        <Route path="monitoring" element={renderLazy(Monitoring)} />
        <Route path="cctv" element={renderLazy(Cctv)} />
      </Route>
    </Routes>
  );
}
