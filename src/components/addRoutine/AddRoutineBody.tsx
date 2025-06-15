import { useCategory } from "@/hook/quires/category";
import { RoutineDataType } from "@/types/Routine";
import { ChangeEvent, useState } from "react";
import { useAddRoutine, useRoutine } from "@/hook/quires/routine";
import AddRoutineSuccessModal from "@components/modal/AddRoutineSuccessModal";
import AddRoutineBodyFooter from "./AddRoutineBodyFooter";
import AddRoutineBodyAddButton from "./AddRoutineBodyAddButton";
import AddRoutineBodyList from "./AddRoutineBodyList";
import { SelectBox } from "@components/components/common/Selectbox";
import { InputField } from "@components/components/common/InputField";

export default function AddRoutineBody() {
  const { routine } = useRoutine();
  const { category } = useCategory();
  const [title, setTitle] = useState<string>("");
  const [errTitle, setErrTitle] = useState<string>("");
  const [errCategory, setErrCategory] = useState<string>("");
  const [exercise, setExercise] = useState<RoutineDataType[]>([]);
  const { addRoutine, addRoutineSuccess } = useAddRoutine();
  const [selectCategory, setSelectCategory] = useState<string>(
    category ? category[0].category : ""
  );

  function handleChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    if (errTitle !== "") setErrTitle("");
    setTitle(e.target.value);
  }

  function handleAddExercise(
    title: string,
    kg: number,
    set: number,
    link: string
  ) {
    setExercise([...exercise, { title, kg, set, link }]);
  }

  function handleAddRoutine() {
    if (!routine) return;
    if (title === "") return setErrTitle("제목을 입력해주세요");
    if (selectCategory === "") return setErrCategory("카테고리를 선택해주세요");
    addRoutine({
      id: routine.length === 0 ? 0 : routine[routine?.length - 1].id + 1,
      title,
      category: selectCategory,
      routine: exercise,
    });
  }

  return (
    <article className="w-full p-6 flex flex-col gap-4">
      {/* <LabelInput
        type="text"
        label="루틴 제목"
        $width="100%"
        placeholder="...제목"
        errortext={errTitle}
        onChange={handleChangeTitle}
      /> */}
      <InputField
        type="text"
        label="루틴 제목"
        labelClassName="text-white"
        placeholder="...제목"
        className="bg-white"
        error={errTitle}
        onChange={handleChangeTitle}
      />
      <div className="relative">
        {category && (
          <SelectBox
            label="카테고리"
            labelClassName="text-white"
            value={selectCategory}
            triggerClassName="bg-white"
            options={category?.map((item) => {
              return { label: item.category, value: item.category };
            })}
            onChange={(select) => setSelectCategory(select)}
            error={errCategory}
          />
        )}
      </div>
      {exercise.length > 0 && <AddRoutineBodyList exercise={exercise} />}
      <AddRoutineBodyAddButton handleAddExercise={handleAddExercise} />
      <AddRoutineBodyFooter handleAddRoutine={handleAddRoutine} />
      {addRoutineSuccess && <AddRoutineSuccessModal />}
    </article>
  );
}
