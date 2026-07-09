import { BrowserRouter } from "react-router";
import { DemoModalProvider } from "./context/DemoModalContext";
import AppRoutes from "./AppRoutes";

export default function App() {
  return (
    <DemoModalProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </DemoModalProvider>
  );
}
