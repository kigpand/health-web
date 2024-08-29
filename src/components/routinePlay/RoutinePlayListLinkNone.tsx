import AddLinkModal from "@components/modal/AddLinkModal";
import { useState } from "react";
import styled from "styled-components";

export default function RoutinePlayListLinkNone() {
  const [addLinkModal, setAddLinkModal] = useState<boolean>(false);
  return (
    <>
      {addLinkModal && (
        <AddLinkModal handleCloseModal={() => setAddLinkModal(false)} />
      )}
      <NoneLink onClick={() => setAddLinkModal(true)}>
        제공된 영상 링크가 없습니다.
        <br />
        링크를 추가하시겠습니까?
      </NoneLink>
    </>
  );
}

const NoneLink = styled.div`
  margin: 15px 0px 10px 0px;
  line-height: 20px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: red;
  cursor: pointer;
  text-decoration: underline;
`;
