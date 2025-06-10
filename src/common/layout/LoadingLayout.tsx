import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH } from "@/enum/path";
import { useIsFetching } from "@tanstack/react-query";
import useLogin from "@/hook/useLogin";
import LoadingSpinner from "../LoadingSpinner";

// 즉시 import (초기 로딩에 꼭 필요한 화면)
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import RoutineMain from "@/pages/RoutineMain";

// lazy import (필요할 때 로딩)
const AddRoutine = lazy(() => import("@/pages/AddRoutine"));
const Category = lazy(() => import("@/pages/Category"));
const CheckRoutine = lazy(() => import("@/pages/CheckRoutine"));
const RoutineDetail = lazy(() => import("@/pages/RoutineDetail"));
const RoutineEdit = lazy(() => import("@/pages/RoutineEdit"));
const RoutineFinish = lazy(() => import("@/pages/RoutineFinish"));
const RoutinePlay = lazy(() => import("@/pages/RoutinePlay"));
const Error = lazy(() => import("@/pages/Error"));

export default function LoadingLayout() {
  const isFetching = useIsFetching();
  const { loginState } = useLogin();

  return (
    <BrowserRouter>
      {loginState === true && <Login />}
      {isFetching > 0 && <LoadingSpinner />}
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path={PATH.home} element={<Home />} />
          <Route path={PATH.login} element={<Login />} />
          <Route path={PATH.addRoutine} element={<AddRoutine />} />
          <Route path={PATH.routineMain} element={<RoutineMain />} />
          <Route path={PATH.routineDetail} element={<RoutineDetail />} />
          <Route path={PATH.routinePlay} element={<RoutinePlay />} />
          <Route path={PATH.routineFinish} element={<RoutineFinish />} />
          <Route path={PATH.checkRoutine} element={<CheckRoutine />} />
          <Route path={PATH.routineEdit} element={<RoutineEdit />} />
          <Route path={PATH.category} element={<Category />} />
          <Route path={PATH.error} element={<Error />} />
          <Route path="*" element={<RoutineMain />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
