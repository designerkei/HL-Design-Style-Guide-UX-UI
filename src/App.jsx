import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Foundations from './pages/Foundations';
import Motion from './pages/Motion';
import ComponentsIndex from './pages/ComponentsIndex';
import Dashboard from './pages/Dashboard';
import Monitoring from './pages/Monitoring';
import Cctv from './pages/Cctv';
import DataViz from './pages/DataViz';
import LayoutGuide from './pages/LayoutGuide';

// Component detail pages
import ButtonPage from './pages/components/ButtonPage';
import BadgePage from './pages/components/BadgePage';
import InputPage from './pages/components/InputPage';
import CardPage from './pages/components/CardPage';
import KpiPage from './pages/components/KpiPage';
import FilterBarPage from './pages/components/FilterBarPage';
import TablePage from './pages/components/TablePage';
import ToastPage from './pages/components/ToastPage';
import EmptyStatePage from './pages/components/EmptyStatePage';
import ModalPage from './pages/components/ModalPage';
import CheckboxRadioPage from './pages/components/CheckboxRadioPage';
import TogglePage from './pages/components/TogglePage';
import TextareaPage from './pages/components/TextareaPage';
import TooltipPage from './pages/components/TooltipPage';
import TabsPage from './pages/components/TabsPage';
import PaginationPage from './pages/components/PaginationPage';
import ProgressPage from './pages/components/ProgressPage';
import BreadcrumbPage from './pages/components/BreadcrumbPage';
import AvatarPage from './pages/components/AvatarPage';
import DropdownPage from './pages/components/DropdownPage';
import SkeletonPage from './pages/components/SkeletonPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="foundations" element={<Foundations />} />
        <Route path="motion" element={<Motion />} />
        <Route path="components" element={<ComponentsIndex />} />
        <Route path="components/button" element={<ButtonPage />} />
        <Route path="components/badge" element={<BadgePage />} />
        <Route path="components/input" element={<InputPage />} />
        <Route path="components/card" element={<CardPage />} />
        <Route path="components/kpi" element={<KpiPage />} />
        <Route path="components/filter-bar" element={<FilterBarPage />} />
        <Route path="components/table" element={<TablePage />} />
        <Route path="components/toast" element={<ToastPage />} />
        <Route path="components/empty-state" element={<EmptyStatePage />} />
        <Route path="components/modal" element={<ModalPage />} />
        <Route path="components/checkbox-radio" element={<CheckboxRadioPage />} />
        <Route path="components/toggle" element={<TogglePage />} />
        <Route path="components/textarea" element={<TextareaPage />} />
        <Route path="components/tooltip" element={<TooltipPage />} />
        <Route path="components/tabs" element={<TabsPage />} />
        <Route path="components/pagination" element={<PaginationPage />} />
        <Route path="components/progress" element={<ProgressPage />} />
        <Route path="components/breadcrumb" element={<BreadcrumbPage />} />
        <Route path="components/avatar" element={<AvatarPage />} />
        <Route path="components/dropdown" element={<DropdownPage />} />
        <Route path="components/skeleton" element={<SkeletonPage />} />
        <Route path="guide/layout" element={<LayoutGuide />} />
        <Route path="guide/data-visualization" element={<DataViz />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="monitoring" element={<Monitoring />} />
        <Route path="cctv" element={<Cctv />} />
      </Route>
    </Routes>
  );
}
