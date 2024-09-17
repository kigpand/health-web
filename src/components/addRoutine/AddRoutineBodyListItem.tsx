import { RoutineDataType } from "@/types/Routine";
import BodyListItemDetail from "@components/modal/BodyListItemDetail";
import { useState } from "react";
import styled from "styled-components";

export default function AddRoutineBodyListItem(props: RoutineDataType) {
  const [isDetail, setIsDetail] = useState<boolean>(false);

  return (
    <>
      {isDetail && (
        <BodyListItemDetail
          {...props}
          handleCloseModal={() => setIsDetail(false)}
        />
      )}
      <BodyListItemWrapper onClick={() => setIsDetail(true)}>
        {props.title}
      </BodyListItemWrapper>
    </>
  );
}

const BodyListItemWrapper = styled.li`
  padding: 12px 8px;
  border-radius: 4px;
  text-align: center;
  font-weight: bold;
  background-color: white;
  cursor: pointer;
`;
