import { RecordType } from "@/types/RecordType";
import CheckRoutineBodyList from "./CheckRoutineBodyList";
import { SelectBox } from "@components/components/common/Selectbox";

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
      <SelectBox
        label="조회할 루틴 일정을 설정해주세요."
        labelClassName="text-white"
        value={String(count)}
        triggerClassName="bg-white"
        options={[
          { label: "3", value: "3" },
          { label: "5", value: "5" },
          { label: "7", value: "7" },
          { label: "10", value: "10" },
        ]}
        onChange={(select) => handleChangeSelect(Number(select))}
      />
      <header className="text-center font-bold text-lg text-white mt-[50px] mb-5">
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
