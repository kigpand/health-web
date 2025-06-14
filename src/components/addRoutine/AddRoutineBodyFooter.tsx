import { PATH } from "@/enum/path";
import { Button } from "ji-design-system";
import { useNavigate } from "react-router-dom";

type Props = {
  handleAddRoutine: () => void;
};

export default function AddRoutineBodyFooter({ handleAddRoutine }: Props) {
  const nav = useNavigate();

  return (
    <footer className="flex justify-center gap-3">
      <Button
        label="등록"
        func="primary"
        size="MD"
        onClick={handleAddRoutine}
      />
      <Button
        label="취소"
        func="secondary"
        size="MD"
        onClick={() => nav(PATH.routineMain)}
      />
    </footer>
  );
}
