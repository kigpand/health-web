import { RoutineDataType } from "@/types/Routine";
import { useState } from "react";
import TwoButtonModal from "./TwoButtonModal";
import { InputField } from "@components/components/common/InputField";

type Props = {
  handleEditRoutine: (routineData: RoutineDataType) => void;
  handleClose: () => void;
};

export default function RoutineEditModalAdd({
  handleEditRoutine,
  handleClose,
}: Props) {
  const [title, setTitle] = useState<string>("");
  const [set, setSet] = useState<number>(0);
  const [kg, setKg] = useState<number>(0);
  const [link, setLink] = useState<string>("");

  function addRoutineItem(routineData: RoutineDataType) {
    if (routineData.title === "" || routineData.set === 0) {
      return;
    }
    handleEditRoutine(routineData);
    handleClose();
  }

  return (
    <TwoButtonModal
      component={
        <div className="flex flex-col gap-5">
          <label className="mb-2 font-bold">루틴 추가</label>
          <InputField
            type="text"
            label="루틴 명"
            placeholder="루틴 명"
            error={title === "" ? "루틴 명을 적어주세요" : ""}
            onChange={(e) => setTitle(e.target.value)}
          />
          <InputField
            type="number"
            label="무게"
            placeholder="무게"
            onChange={(e) => setKg(Number(e.target.value))}
          />
          <InputField
            type="number"
            label="세트"
            placeholder="세트"
            error={set === 0 ? "세트 수는 0회 이상 이어야 합니다." : ""}
            onChange={(e) => setSet(Number(e.target.value))}
          />
          <InputField
            type="text"
            label="링크"
            placeholder="링크"
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
      }
      primaryText="등록"
      primaryEvent={() => addRoutineItem({ title, set, kg, link })}
      secondaryText="취소"
      secondaryEvent={handleClose}
      handleCloseModal={handleClose}
    />
  );
}
