import FooterWrapper from "@/common/layout/FooterWrapper";
import { RecordType } from "@/types/RecordType";
import CheckRoutineModal from "@components/modal/CheckRoutineModal";
import { Button } from "ji-design-system";
import { useState } from "react";

type Props = {
  count: number;
  record: RecordType[];
};

export default function CheckRoutineFooter(props: Props) {
  const [isCheckRoutine, setIsCheckRoutine] = useState<boolean>(false);
  return (
    <FooterWrapper className="p-4">
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
    </FooterWrapper>
  );
}
