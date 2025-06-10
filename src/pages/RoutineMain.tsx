import RoutineMainBody from "@components/routineMain/RoutineMainBody";
import RoutineMainFooter from "@components/routineMain/RoutineMainFooter";
import HomeButtonHeader from "@/common/layout/HomeButtonHeader";
import { useCategory } from "@/hook/quires/category";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/enum/path";

const RoutineMain = () => {
  const { category } = useCategory();
  const nav = useNavigate();

  if (category && category.length === 0) {
    return (
      <section className="page_layout">
        <h1 className="text-2xl font-bold text-white">카테고리가 없습니다.</h1>
        <button
          className="bg-white border-none outline-none px-6 py-4 rounded-xl"
          onClick={() => nav(PATH.category)}
        >
          카테고리 등록하러가기
        </button>
      </section>
    );
  }

  return (
    <section className="page_layout">
      <HomeButtonHeader title="오늘의 운동은?" />
      {category && <RoutineMainBody category={category} />}
      <RoutineMainFooter />
    </section>
  );
};

export default RoutineMain;
