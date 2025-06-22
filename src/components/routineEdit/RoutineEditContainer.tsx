import { RoutineListType } from "@/types/Routine";
import RoutineEditDeleteButton from "./button/RoutineEditDeleteButton";
import RoutineEditButton from "./button/RoutineEditButton";

type Props = {
  routine: RoutineListType[];
};

export default function RoutineEditContainer({ routine }: Props) {
  return (
    <div className="grow p-6">
      <ul className="flex flex-col gap-2">
        {routine.map((item) => {
          return (
            <li key={item._id} className="flex items-center gap-1 py-3">
              <label className="font-bold p-3 rounded-xl bg-white grow">
                {item.title}
              </label>
              <RoutineEditDeleteButton item={item} />
              <RoutineEditButton item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
