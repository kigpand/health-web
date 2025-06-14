import ModalPortal from "@/ModalPortal";
import { RecordType } from "@/types/RecordType";
import { Button } from "ji-design-system";
import { useMemo } from "react";

type Props = {
  count: number;
  record: RecordType[];
  handleCloseModal: () => void;
};

type RoutineCountProps = {
  category: string;
  count: number;
};

export default function CheckRoutineModal({
  count,
  record,
  handleCloseModal,
}: Props) {
  const routine = useMemo(() => {
    const result: RoutineCountProps[] = [];
    for (const filterItem of record) {
      const find = result.find((item) => item.category === filterItem.category);
      if (find) {
        find.count += 1;
      } else {
        result.push({ category: filterItem.category, count: 1 });
      }
    }
    return result;
  }, [record]);

  return (
    <ModalPortal
      component={
        <article className="p-6 bg-white rounded-xl flex flex-col gap-2">
          <label className="font-bold mb-5">
            총 {count}일간 진행한 카테고리별 운동 횟수는
          </label>
          {routine.map((item, i) => {
            return (
              <div key={i} className="w-full flex justify-between">
                <div>{item.category}: </div>
                <div>{item.count}회</div>
              </div>
            );
          })}
          <Button
            style={{ marginTop: "20px" }}
            size="MD"
            func="primary"
            label="확인"
            onClick={handleCloseModal}
          />
        </article>
      }
      handleCloseModal={handleCloseModal}
    />
  );
}
