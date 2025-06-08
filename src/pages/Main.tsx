import MainBody from "@components/main/MainBody";
import MainFooter from "@components/main/MainFooter";
import HomeButtonHeader from "@/common/layout/HomeButtonHeader";
import { useCategory } from "@/hook/quires/category";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/enum/path";

const Main = () => {
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
      {category && <MainBody category={category} />}
      <MainFooter />
    </section>
  );
};

export default Main;
