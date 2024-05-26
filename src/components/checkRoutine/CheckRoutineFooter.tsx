import { FooterWrapper } from "@/styles/PageStyle";
import styled from "styled-components";

export default function CheckRoutineFooter() {
  return (
    <CheckFooter>
      <button>분석하기</button>
    </CheckFooter>
  );
}

const CheckFooter = styled(FooterWrapper)`
  padding: 16px;

  button {
    background-color: #2cc3ff;
    padding: 14px;
    border: none;
    outline: none;
    color: white;
    border-radius: 12px;
  }
`;
