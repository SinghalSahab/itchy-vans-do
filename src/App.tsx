import { Authenticated, GitHubBanner, Refine, WelcomePage } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";
import {Home , Login , Register , ForgotPassword} from "./pages"

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
 
import {  dataProvider, liveProvider , authProvider } from "./provider/Index";
import Layout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      
      <RefineKbarProvider>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider}
                liveProvider={liveProvider}
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "iHVY8R-5JcUhT-cMctFT",
                  liveMode: "auto",
                }}
              >
                <Routes>
                  <Route path="/register" index element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="forgot-password" element={<ForgotPassword />} />
                  <Route element={<Authenticated  key="authenticated-layout" fallback={<CatchAllNavigate to="/login" />}>
                  <Layout> 
                    <Outlet />
                  </Layout>
                  </Authenticated>}>
                  
                  <Route index element={<Home />} />
                  </Route>
                </Routes>
                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
            </DevtoolsProvider>
          </AntdApp>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
