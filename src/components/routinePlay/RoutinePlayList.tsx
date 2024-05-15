import Button from "@/common/button/Button";
import { RoutineDataType } from "@/types/Routine";
import PlayTimerModal from "@components/modal/PlayTimerModal";
import { useState } from "react";
import styled from "styled-components";

type Props = {
  currentRoutine: RoutineDataType;
  timer: number;
};

export default function RoutinePlayList({ currentRoutine, timer }: Props) {
  const [isTimer, setIsTimer] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  function handleNextSet() {
    setCount(count + 1);
    setIsTimer(false);
  }

  return (
    <PlayListWrapper>
      <Title>이번 운동은 {currentRoutine.title}입니다.</Title>
      <Item>
        <label>무게:</label> {currentRoutine.kg}kg
      </Item>
      <Item>
        <label>세트:</label> {currentRoutine.set}set
      </Item>
      <Count>현재 {count}회 진행했습니다.</Count>
      <ButtonWrapper>
        <Button
          width="100%"
          type="primary"
          text="완료했습니다"
          handleClick={() => setIsTimer(true)}
        />
        <Button
          width="100%"
          type="skyblue"
          text="다음 루틴"
          handleClick={() => console.log("11")}
        />
        <Button
          width="100%"
          type="secondary"
          text="운동 끝!"
          handleClick={() => console.log("11")}
        />
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
