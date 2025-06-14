import AddRoutineBodyListItem from "./AddRoutineBodyListItem";
import { RoutineDataType } from "@/types/Routine";

type Props = {
  exercise: RoutineDataType[];
};

export default function AddRoutineBodyList({ exercise }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-bold">등록한 운동</label>
      <ul className="mt-[10px] flex flex-col gap-2">
        {exercise.map((item) => {
          return <AddRoutineBodyListItem key={item.title} {...item} />;
        })}
      </ul>
    </div>
  );
}
