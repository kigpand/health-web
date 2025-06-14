import { HeaderWrapper } from "@/common/layout/HeaderWrapper";
import { PATH } from "@/enum/path";
import { useNavigate } from "react-router-dom";

export default function RoutineFinish() {
  const nav = useNavigate();
  return (
    <section className="page_layout">
      <HeaderWrapper>운동 끝!</HeaderWrapper>
      <div className="grow flex items-center justify-center">
        <button
          className="w-[150px] h-[70px] outline-none border-none bg-secondary text-lg rounded-xl"
          onClick={() => nav(PATH.routineMain)}
        >
          처음으로
        </button>
      </div>
      <footer className="bg-secondary w-full fixed bottom-0 py-5 text-center font-bold">
        고생하셨습니다!
      </footer>
    </section>
  );
}
