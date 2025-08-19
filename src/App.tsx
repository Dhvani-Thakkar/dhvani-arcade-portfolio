import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CursorTrail from "./components/CursorTrail";

const queryClient = new QueryClient();

// Create routes with proper base path handling
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Index />,
    },
    // Add all other routes here
    // {
    //   path: "/about",
    //   element: <About />,
    // },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL, // Automatically uses Vite's base config
  }
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouterProvider router={router} />
        <CursorTrail />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;