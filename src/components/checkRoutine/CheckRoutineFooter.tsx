import { FooterWrapper } from "@/styles/PageStyle";
import { RecordType } from "@/types/RecordType";
import CheckRoutineModal from "@components/modal/CheckRoutineModal";
import { Button } from "ji-design-system";
import { useState } from "react";
import styled from "styled-components";

type Props = {
  count: number;
  record: RecordType[];
};

export default function CheckRoutineFooter(props: Props) {
  const [isCheckRoutine, setIsCheckRoutine] = useState<boolean>(false);
  return (
    <CheckFooter>
      <Button
        style={{ padding: "10px 20px" }}
        label="분석하기"
        func="primary"
        size="MD"
        onClick={() => setIsCheckRoutine(true)}
      />
      {isCheckRoutine && (
        <CheckRoutineModal
          {...props}
          handleCloseModal={() => setIsCheckRoutine(false)}
        />
      )}
    </CheckFooter>
  );
}

const CheckFooter = styled(FooterWrapper)`
  padding: 16px;
`;
