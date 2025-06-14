import { RecordType } from "@/types/RecordType";
import { Select } from "ji-design-system";
import CheckRoutineBodyList from "./CheckRoutineBodyList";

type Props = {
  count: number;
  record: RecordType[];
  handleChangeSelect: (value: number) => void;
};

export default function CheckRoutineBody({
  count,
  record,
  handleChangeSelect,
}: Props) {
  return (
    <article className="grow p-4">
      <div className="flex flex-col gap-2">
        <label className="font-bold">조회할 루틴 일정을 설정해주세요.</label>
        <Select
          width="100%"
          placeholder={String(count)}
          values={["3", "5", "7", "10"]}
          handleChangeSelect={(value) => handleChangeSelect(Number(value))}
        />
      </div>
      <header className="text-center font-bold text-lg mt-[50px] mb-5">
        최근 {count}일간 루틴
      </header>
      <ul className="w-full gap-2 flex flex-col items-center justify-center">
        {record?.map((item) => {
          return <CheckRoutineBodyList key={item._id} record={item} />;
        })}
      </ul>
    </article>
  );
}
