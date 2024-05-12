import ModalPortal from "@/ModalPortal";
import Button from "@/common/button/Button";
import { useState } from "react";
import styled from "styled-components";

type Props = {
  handleCloseModal: () => void;
};

export default function TimerSetModal({ handleCloseModal }: Props) {
  const [timer, setTimer] = useState<number>(0);

  function handleStart() {
    console.log(timer);
  }

  return (
    <ModalPortal
      component={
        <ModalBody>
          <label>타이머를 설정해주세요</label>
          <InputWrapper
            type="number"
            maxLength={1000}
            onChange={(e) => setTimer(Number(e.target.value))}
          />
          <ButtonWrapper>
            <Button
              width="100%"
              type="primary"
              text="시작"
              handleClick={handleStart}
            />
            <Button
              width="100%"
              type="secondary"
              text="취소"
              handleClick={handleCloseModal}
            />
          </ButtonWrapper>
        </ModalBody>
      }
      handleCloseModal={handleCloseModal}
    />
  );
}

const ModalBody = styled.article`
  width: 300px;
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  label {
    font-weight: bold;
  }
`;

const InputWrapper = styled.input`
  height: 30px;
  border: 1px solid lightgray;
  outline: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
