import { RoutineDataType } from "@/types/Routine";
import { useState } from "react";
import TwoButtonModal from "./TwoButtonModal";
import { InputField } from "@components/components/common/InputField";

type Props = {
  routineData: RoutineDataType;
  updateRoutineItem: (title: string, routineData: RoutineDataType) => void;
  handleClose: () => void;
};

export default function RoutineEditModalUpdate({
  routineData,
  updateRoutineItem,
  handleClose,
}: Props) {
  const [routine, setRoutine] = useState<RoutineDataType>(routineData);

  function handleUpdateRoutineItem() {
    if (routine.title === "" || routine.set === 0) {
      return;
    }
    updateRoutineItem(routineData.title, routine);
    handleClose();
  }

  return (
    <TwoButtonModal
      component={
        <div className="flex flex-col gap-5">
          <label className="text-xl font-bold mb-2">루틴을 수정하세요</label>
          <InputField
            type="text"
            label="루틴 명"
            placeholder="루틴 명"
            defaultValue={routine.title}
            error={routine.title === "" ? "루틴 명을 입력해주세요." : ""}
            onChange={(e) => setRoutine({ ...routine, title: e.target.value })}
          />
          <InputField
            type="number"
            label="세트"
            placeholder="세트"
            defaultValue={routine.set}
            error={routine.set === 0 ? "세트 수는 0회 이상이어야 합니다." : ""}
            onChange={(e) =>
              setRoutine({ ...routine, set: Number(e.target.value) })
            }
          />
          <InputField
            type="number"
            label="무게"
            placeholder="무게"
            defaultValue={routine.kg}
            onChange={(e) =>
              setRoutine({ ...routine, kg: Number(e.target.value) })
            }
          />
          <InputField
            type="text"
            label="링크"
            placeholder="링크"
            defaultValue={routine.link ?? ""}
            onChange={(e) => setRoutine({ ...routine, link: e.target.value })}
          />
        </div>
      }
      primaryText="등록"
      primaryEvent={handleUpdateRoutineItem}
      secondaryText="취소"
      secondaryEvent={handleClose}
      handleCloseModal={handleClose}
    />
  );
}
