import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import EnrollmentForm from "./pages/EnrollmentForm";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/sobre" element={<Layout><About /></Layout>} />
          <Route path="/cursos" element={<Layout><Courses /></Layout>} />
          <Route path="/servicos" element={<Layout><Services /></Layout>} />
          <Route path="/contacto" element={<Layout><Contact /></Layout>} />
          <Route path="/inscricao" element={<Layout><EnrollmentForm /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
