import { PATH } from "@/enum/path";
import { useRoutineDetail } from "@/hook/quires/routine";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import RoutinePlayList from "./RoutinePlayList";
import { Button } from "ji-design-system";
import { HeaderWrapper } from "@/common/layout/HeaderWrapper";

type Props = {
  id: string;
  timer: number;
};

export default function RoutinePlayContainer({ id, timer }: Props) {
  const nav = useNavigate();
  const [isStart, setIsStart] = useState<boolean>(false);
  const { routineDetail } = useRoutineDetail(id);
  const [currentRoutine, setCurrentRoutine] = useState<number>(0);

  const handleNextRoutine = useCallback(() => {
    setCurrentRoutine(currentRoutine + 1);
  }, [currentRoutine]);

  function handleCloseExercise() {
    setCurrentRoutine(0);
    nav(PATH.routineMain);
  }

  return (
    <section className="page_layout">
      <HeaderWrapper>{isStart ? routineDetail?.title : "Play!"}</HeaderWrapper>
      {isStart && routineDetail ? (
        <RoutinePlayList
          currentRoutine={currentRoutine}
          routineDetail={routineDetail}
          timer={timer}
          handleNextRoutine={handleNextRoutine}
        />
      ) : (
        <article className="grow flex flex-col items-center justify-center gap-[60px]">
          <p className="text-2xl font-bold text-white">
            선택한 루틴은
            <span className="text-red-500"> {routineDetail?.title}</span>입니다.
          </p>
          <div className="flex flex-col gap-2 w-[150px]">
            <Button
              style={{ width: "100%" }}
              func="primary"
              label="시작!"
              size="MD"
              onClick={() => setIsStart(true)}
            />
            <Button
              style={{ width: "100%" }}
              func="secondary"
              label="뒤로가기"
              size="MD"
              onClick={() => nav(PATH.routineMain)}
            />
          </div>
        </article>
      )}
      <footer
        className="bg-secondary font-bold text-lg py-4 flex items-center justify-center"
        onClick={handleCloseExercise}
      >
        운동 종료
      </footer>
    </section>
  );
}
