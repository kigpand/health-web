import ModalPortal from "@/ModalPortal";
import { RecordType } from "@/types/RecordType";
import { useMemo } from "react";
import styled from "styled-components";

type Props = {
  count: number;
  record: RecordType[];
  handleCloseModal: () => void;
};

type RoutineCountProps = {
  category: string;
  count: number;
};

export default function CheckRoutineModal({
  count,
  record,
  handleCloseModal,
}: Props) {
  const routine = useMemo(() => {
    const result: RoutineCountProps[] = [];
    for (const filterItem of record) {
      const find = result.find((item) => item.category === filterItem.category);
      if (find) {
        find.count += 1;
      } else {
        result.push({ category: filterItem.category, count: 1 });
      }
    }
    return result;
  }, [record]);

  return (
    <ModalPortal
      component={
        <RoutineModal>
          <Title>총 {count}일간 진행한 카테고리별 운동 횟수는</Title>
          {routine.map((item, i) => {
            return (
              <ModalBody key={i}>
                <div>{item.category}: </div>
                <div>{item.count}회</div>
              </ModalBody>
            );
          })}
          <Button onClick={handleCloseModal}>확인</Button>
        </RoutineModal>
      }
      handleCloseModal={handleCloseModal}
    />
  );
}

const RoutineModal = styled.article`
  padding: 24px;
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;

const ModalBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 8px;
  font-size: 12px;
  background-color: skyblue;
  border-radius: 8px;
  color: white;
  border: none;
  outline: none;
`;
