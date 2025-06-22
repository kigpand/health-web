import { PATH } from "@/enum/path";
import { useRoutineDetail } from "@/hook/quires/routine";
import TimerSetModal from "@components/modal/TimerSetModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RoutineDetailContainerUl from "./RoutineDetailContainerUl";
import { HeaderWrapper } from "@/common/layout/HeaderWrapper";

export default function RoutineDetailContainer({ id }: { id: string }) {
  const { routineDetail } = useRoutineDetail(id);
  const [isTimer, setIsTimer] = useState<boolean>(false);
  const nav = useNavigate();

  return (
    <section className="page_layout flex-col items-center">
      <HeaderWrapper>{routineDetail?.title}</HeaderWrapper>
      <RoutineDetailContainerUl routineDetail={routineDetail} />
      <button
        className="bg-[#00b7ff] text-white font-bold rounded-xl p-2 text-center w-[90%] mb-2 cursor-pointer"
        onClick={() => setIsTimer(true)}
      >
        start!!
      </button>
      <footer
        className="w-[90%] p-2 rounded-xl mb-2 bg-white flex items-center justify-center font-bold"
        onClick={() => nav(PATH.routineMain)}
      >
        이전으로
      </footer>
      {isTimer && (
        <TimerSetModal id={id} handleCloseModal={() => setIsTimer(false)} />
      )}
    </section>
  );
}
