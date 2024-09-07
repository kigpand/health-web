import { PATH } from "@/enum/path";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TwoButtonModal from "./TwoButtonModal";

type Props = {
  id: string;
  handleCloseModal: () => void;
};

export default function TimerSetModal({ id, handleCloseModal }: Props) {
  const nav = useNavigate();
  const [timer, setTimer] = useState<number>(0);

  function handleStart() {
    if (timer <= 0) return alert("타이머는 0초 이상 설정해주세요");
    nav(`${PATH.routinePlay}?id=${id}&timer=${timer}`);
  }

  return (
    <TwoButtonModal
      component={
        <TimerWrapper>
          <label>타이머를 설정해주세요</label>
          <InputWrapper
            type="number"
            maxLength={1000}
            onChange={(e) => setTimer(Number(e.target.value))}
          />
        </TimerWrapper>
      }
      primaryText="시작"
      primaryEvent={handleStart}
      secondaryText="취소"
      secondaryEvent={handleCloseModal}
      handleCloseModal={handleCloseModal}
    />
  );
}

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  label {
    font-weight: bold;
  }
`;

const InputWrapper = styled.input`
  height: 30px;
  border: 1px solid lightgray;
  outline: none;
`;
