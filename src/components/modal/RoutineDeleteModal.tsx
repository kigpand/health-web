import ModalPortal from "@/ModalPortal";
import Button from "@/common/button/Button";
import { useRoutineDelete } from "@/hook/quires/routine";
import { RoutineListType } from "@/types/Routine";
import styled from "styled-components";

type Props = {
  routine: RoutineListType;
  handleCloseModal: () => void;
};

export default function RoutineDeleteModal({
  routine,
  handleCloseModal,
}: Props) {
  const { deleteRoutine } = useRoutineDelete();

  function handleDeleteButton(id: number) {
    deleteRoutine(id);
    handleCloseModal();
  }

  return (
    <ModalPortal
      component={
        <ModalContainer>
          <Title>{routine.title} 루틴을 삭제하시겠습니까?</Title>
          <ButtonWrapper>
            <Button
              width="100%"
              type="primary"
              text="예"
              handleClick={() => handleDeleteButton(routine.id)}
            />
            <Button
              width="100%"
              type="secondary"
              text="아니오"
              handleClick={handleCloseModal}
            />
          </ButtonWrapper>
        </ModalContainer>
      }
      handleCloseModal={handleCloseModal}
    />
  );
}

const ModalContainer = styled.article`
  padding: 24px;
  background-color: white;
  border-radius: 12px;
`;

const Title = styled.header`
  font-weight: bold;
  margin-bottom: 30px;
  font-size: 18px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
