
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";
import { useScrollBlur } from "@/hooks/useScrollBlur";
import Index from "./pages/Index";
import StockMarkets from "./pages/StockMarkets";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppWithScrollBlur = () => {
  useScrollBlur();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/stock-markets" element={<StockMarkets />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ThemeToggle />
        <AppWithScrollBlur />
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
