import { RecordType } from "@/types/RecordType";
import CheckRoutineListModal from "@components/modal/CheckRoutineListModal";
import { useState } from "react";
import styled from "styled-components";

type Props = {
  record: RecordType;
};

export default function CheckRoutineBodyList({ record }: Props) {
  const [isDetail, setIsDetail] = useState<boolean>(false);
  return (
    <>
      {isDetail && (
        <CheckRoutineListModal
          record={record}
          handleCloseModal={() => setIsDetail(false)}
        />
      )}
      <ListStyled onClick={() => setIsDetail(true)}>{record.title}</ListStyled>
    </>
  );
}

const ListStyled = styled.li`
  width: 100%;
  padding: 16px 0px;
  font-weight: bold;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
