import { RoutineListType } from "@/types/Routine";
import RoutineDeleteModal from "@components/modal/RoutineDeleteModal";
import { useState } from "react";
import styled from "styled-components";

type Props = {
  routine: RoutineListType[];
};

export default function RoutineEditContainer({ routine }: Props) {
  const [deleteRoutine, setDeleteRoutine] = useState<RoutineListType | null>(
    null
  );

  return (
    <ContainerWrapper>
      <RoutineListWrapper>
        {routine.map((item) => {
          return (
            <RoutineList key={item._id}>
              <Title>{item.title}</Title>
              <Delete onClick={() => setDeleteRoutine(item)}>삭제</Delete>
              <Edit>편집</Edit>
            </RoutineList>
          );
        })}
      </RoutineListWrapper>
      {deleteRoutine && (
        <RoutineDeleteModal
          routine={deleteRoutine}
          handleCloseModal={() => setDeleteRoutine(null)}
        />
      )}
    </ContainerWrapper>
  );
}

const ContainerWrapper = styled.ul`
  flex-grow: 1;
  padding: 24px;
`;

const RoutineListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RoutineList = styled.li`
  display: flex;
  gap: 5px;
  padding: 10px 0px;
`;

const Title = styled.div`
  font-weight: bold;
  padding: 8px;
  background-color: white;
  flex-grow: 1;
`;

const Delete = styled.div`
  background-color: red;
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
`;

const Edit = styled.div`
  background-color: #79d9ff;
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
`;
