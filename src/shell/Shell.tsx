import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../common/Layout";
import Fallback from "./Fallback";
import { StyledUserNotifyToastContainer } from "../common/components/Toast/styles";
import "../i18n/i18nConfig";
import { lazyWithPreload } from "../helpers/lazy";
import { routes } from "../routes";
import { theme } from "./theme/theme";

const Home = lazyWithPreload(
  () => import(/* webpackChunkName: 'LandingModule' */ "../modules/Home/Home")
);

const Page404 = lazyWithPreload(
  () =>
    import(/* webpackChunkName: 'LandingModule' */ "../modules/Page404/Page404")
);

const Shell = () => {
  return (
    <>
      <Layout theme={theme}>
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.page404} element={<Page404 />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <StyledUserNotifyToastContainer
            containerId={"user__notify"}
            toastClassName={"toast"}
          />
        </Suspense>
      </Layout>
    </>
  );
};

export default Shell;
