import { RoutineListType } from "@/types/Routine";

type Props = {
  routineDetail: RoutineListType | undefined;
};

export default function RoutineDetailContainerUl({ routineDetail }: Props) {
  return (
    <article className="grow w-full flex flex-col">
      <label className="text-center text-2xl font-bold mt-[50px] mb-5 text-white">
        루틴 리스트
      </label>
      <ul className="flex flex-col items-center justify-center gap-4 w-full grow overflow-y-auto">
        {routineDetail?.routine.map((routine) => {
          return (
            <li
              key={routine.title}
              className="w-[90%] bg-white py-4 px-1 text-center rounded-xl"
            >
              {routine.title}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
