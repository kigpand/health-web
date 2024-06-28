import Button from "@/common/button/Button";
import { PATH } from "@/enum/path";
import { useAddRecord } from "@/hook/quires/record";
import { useWorkerTimer } from "@/hook/useWorkerTimer";
import { RoutineListType } from "@/types/Routine";
import PlayTimerModal from "@components/modal/PlayTimerModal";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
    <ButtonWrapper>
      {routineDetail.routine[currentRoutine].set !== count && (
        <Button
          width="100%"
          type="primary"
          text="완료했습니다"
          handleClick={() => handleTimer(true)}
        />
      )}
      {routineDetail.routine[currentRoutine].set === count &&
        routineDetail.routine[routineDetail.routine.length - 1] !==
          routineDetail.routine[currentRoutine] && (
          <Button
            width="100%"
            type="skyblue"
            text="다음 루틴"
            handleClick={onNextButton}
          />
        )}
      {routineDetail.routine[currentRoutine].set === count &&
        routineDetail.routine[routineDetail.routine.length - 1] ===
          routineDetail.routine[currentRoutine] && (
          <Button
            width="100%"
            type="secondary"
            text="운동 끝!"
            handleClick={handleFinisihButton}
          />
        )}
      {onTimer && (
        <PlayTimerModal time={time} handleCloseModal={handleNextSet} />
      )}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 30px;
`;
