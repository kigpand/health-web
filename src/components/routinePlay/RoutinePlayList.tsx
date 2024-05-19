import Button from "@/common/button/Button";
import { PATH } from "@/enum/path";
import { RoutineListType } from "@/types/Routine";
import PlayTimerModal from "@components/modal/PlayTimerModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type Props = {
  currentRoutine: number;
  routineDetail: RoutineListType;
  timer: number;
  handleNextRoutine: () => void;
};

export default function RoutinePlayList({
  currentRoutine,
  routineDetail,
  timer,
  handleNextRoutine,
}: Props) {
  const [isTimer, setIsTimer] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const nav = useNavigate();

  function handleNextSet() {
    setCount(count + 1);
    setIsTimer(false);
  }

  function onNextButton() {
    setCount(0);
    handleNextRoutine();
  }

  return (
    <PlayListWrapper>
      <Title>
        이번 운동은 {routineDetail.routine[currentRoutine].title}입니다.
      </Title>
      <Item>
        <label>무게:</label> {routineDetail.routine[currentRoutine].kg}kg
      </Item>
      <Item>
        <label>세트:</label> {routineDetail.routine[currentRoutine].set}set
      </Item>
      <Count>
        {count === routineDetail.routine[currentRoutine].set
          ? "완료하였습니다. 다음 루틴을 진행해주세요!"
          : `현재 ${count}회 진행했습니다.`}
      </Count>
      <ButtonWrapper>
        {routineDetail.routine[currentRoutine].set !== count && (
          <Button
            width="100%"
            type="primary"
            text="완료했습니다"
            handleClick={() => setIsTimer(true)}
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
              handleClick={() => nav(PATH.routineFinish)}
            />
          )}
      </ButtonWrapper>
      {isTimer && (
        <PlayTimerModal timer={timer} handleCloseModal={handleNextSet} />
      )}
    </PlayListWrapper>
  );
}

const PlayListWrapper = styled.article`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Item = styled.div`
  width: 100px;
  display: flex;
  gap: 8px;
  font-size: 20px;

  label {
    font-weight: bold;
  }
`;

const Count = styled.div``;

const ButtonWrapper = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 30px;
`;
