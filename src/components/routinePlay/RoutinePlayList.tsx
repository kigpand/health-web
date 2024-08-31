import { RoutineListType } from "@/types/Routine";
import { useState } from "react";
import styled from "styled-components";
import RoutinePlayListButton from "./RoutinePlayListButtons";
import RoutinePlayListWeightUpdate from "./RoutinePlayListWeightUpdate";
import RoutinePlayListLink from "./RoutinePlayListLink";

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
  const [count, setCount] = useState<number>(0);

  return (
    <PlayListWrapper>
      <Title>
        이번 운동은
        <br /> {routineDetail.routine[currentRoutine].title}입니다.
      </Title>
      <RoutinePlayListWeightUpdate
        currentRoutine={currentRoutine}
        routineDetail={routineDetail}
      />
      <Item>
        <label>세트:</label> {routineDetail.routine[currentRoutine].set}set
      </Item>
      <Count>
        {count === routineDetail.routine[currentRoutine].set
          ? "완료하였습니다. 다음 루틴을 진행해주세요!"
          : `현재 ${count}세트 진행했습니다.`}
        <br />총 {routineDetail.routine[currentRoutine].set - count}세트
        남았습니다.
      </Count>
      <RoutinePlayListLink
        currentRoutine={routineDetail.routine[currentRoutine]}
      />
      <RoutinePlayListButton
        count={count}
        timer={timer}
        routineDetail={routineDetail}
        currentRoutine={currentRoutine}
        handleNextRoutine={handleNextRoutine}
        handleCount={(num: number) => setCount(num)}
      />
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
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 35px;
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

const Count = styled.div`
  text-align: center;
  line-height: 20px;
  margin-top: 20px;
  font-size: 14px;
  font-weight: bold;
`;
