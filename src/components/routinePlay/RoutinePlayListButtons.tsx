import { PATH } from "@/enum/path";
import { useAddRecord } from "@/hook/quires/record";
import { useWorkerTimer } from "@/hook/useWorkerTimer";
import { RoutineListType } from "@/types/Routine";
import PlayTimerModal from "@components/modal/PlayTimerModal";
import { Button } from "ji-design-system";
import { useNavigate } from "react-router-dom";

type Props = {
  count: number;
  timer: number;
  currentRoutine: number;
  routineDetail: RoutineListType;
  handleCount: (num: number) => void;
  handleNextRoutine: () => void;
};

export default function RoutinePlayListButton({
  count,
  timer,
  currentRoutine,
  routineDetail,
  handleCount,
  handleNextRoutine,
}: Props) {
  const nav = useNavigate();
  const { time, onTimer, handleTimer } = useWorkerTimer(timer);
  const { addRecord } = useAddRecord();

  function handleNextSet() {
    handleCount(count + 1);
    handleTimer(false);
  }

  function onNextButton() {
    handleCount(0);
    handleNextRoutine();
  }

  function handleFinisihButton() {
    addRecord({
      id: routineDetail.id,
      title: routineDetail.title,
      category: routineDetail.category,
    });
    nav(PATH.routineFinish);
  }

  return (
    <div className="w-[150px] flex flex-col gap-2 mt-7">
      {routineDetail.routine[currentRoutine].set !== count && (
        <Button
          size="LG"
          func="primary"
          label="완료했습니다"
          onClick={() => handleTimer(true)}
        />
      )}
      {routineDetail.routine[currentRoutine].set === count &&
        routineDetail.routine[routineDetail.routine.length - 1] !==
          routineDetail.routine[currentRoutine] && (
          <Button
            size="LG"
            func="tertiary"
            label="다음 루틴"
            onClick={onNextButton}
          />
        )}
      {routineDetail.routine[currentRoutine].set === count &&
        routineDetail.routine[routineDetail.routine.length - 1] ===
          routineDetail.routine[currentRoutine] && (
          <Button
            size="LG"
            func="secondary"
            label="운동 끝!"
            onClick={handleFinisihButton}
          />
        )}
      {onTimer && (
        <PlayTimerModal time={time} handleCloseModal={handleNextSet} />
      )}
    </div>
  );
}
