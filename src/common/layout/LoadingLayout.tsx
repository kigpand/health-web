import { PATH } from "@/enum/path";
import { useIsFetching } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddRoutine from "@/pages/AddRoutine";
import Category from "@/pages/Category";
import CheckRoutine from "@/pages/CheckRoutine";
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Main from "@/pages/Main";
import RoutineDetail from "@/pages/RoutineDetail";
import RoutineEdit from "@/pages/RoutineEdit";
import RoutineFinish from "@/pages/RoutineFinish";
import RoutinePlay from "@/pages/RoutinePlay";
import LoadingSpinner from "../LoadingSpinner";

export default function LoadingLayout() {
  const isFetching = useIsFetching();

  return (
    <BrowserRouter>
      {isFetching > 0 && <LoadingSpinner />}
      <Routes>
        <Route path={PATH.home} element={<Home />} />
        <Route path={PATH.login} element={<Login />} />
        <Route path={PATH.addRoutine} element={<AddRoutine />} />
        <Route path={PATH.routineMain} element={<Main />} />
        <Route path={PATH.routineDetail} element={<RoutineDetail />} />
        <Route path={PATH.routinePlay} element={<RoutinePlay />} />
        <Route path={PATH.routineFinish} element={<RoutineFinish />} />
        <Route path={PATH.checkRoutine} element={<CheckRoutine />} />
        <Route path={PATH.routineEdit} element={<RoutineEdit />} />
        <Route path={PATH.category} element={<Category />} />
        <Route path={PATH.error} element={<Error />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
