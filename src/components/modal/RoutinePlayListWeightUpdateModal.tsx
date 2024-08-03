import ModalPortal from "@/ModalPortal";
import Button from "@/common/button/Button";
import Input from "@/common/input/Input";
import { useState } from "react";
import styled from "styled-components";

type Props = {
  handleCloseModal: () => void;
};

export default function RoutinePlayListWeightUpdateModal({
  handleCloseModal,
}: Props) {
  const [kg, setKg] = useState<number>(0);

  function handleUpdateWeightButton() {
    console.log(kg);
  }

  return (
    <ModalPortal
      component={
        <UpdateModalWrapper>
          <Title>변경할 무게를 입력하세요.</Title>
          <Input
            type="number"
            width="100%"
            placeholder="무게"
            handleChange={(e) => setKg(Number(e.target.value))}
          />
          <ButtonWrapper>
            <Button
              width="100%"
              type="skyblue"
              text="등록"
              handleClick={handleUpdateWeightButton}
            />
            <Button
              width="100%"
              type="secondary"
              text="취소"
              handleClick={handleCloseModal}
            />
          </ButtonWrapper>
        </UpdateModalWrapper>
      }
      handleCloseModal={handleCloseModal}
    />
  );
}

const UpdateModalWrapper = styled.article`
  width: 300px;
  padding: 24px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Title = styled.header`
  font-size: 18px;
  font-weight: bold;
`;

const ButtonWrapper = styled.footer`
  margin-top: 10px;
  display: flex;
  gap: 8px;
`;
