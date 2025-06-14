import { useCategory } from "@/hook/quires/category";
import { RoutineDataType } from "@/types/Routine";
import { ChangeEvent, useState } from "react";
import { useAddRoutine, useRoutine } from "@/hook/quires/routine";
import AddRoutineSuccessModal from "@components/modal/AddRoutineSuccessModal";
import AddRoutineBodyFooter from "./AddRoutineBodyFooter";
import AddRoutineBodyAddButton from "./AddRoutineBodyAddButton";
import AddRoutineBodyList from "./AddRoutineBodyList";
import { LabelInput, LabelSelect } from "ji-design-system";

export default function AddRoutineBody() {
  const { routine } = useRoutine();
  const { category } = useCategory();
  const [title, setTitle] = useState<string>("");
  const [categoryChange, setCategoryChange] = useState<string>("");
  const [errTitle, setErrTitle] = useState<string>("");
  const [errCategory, setErrCategory] = useState<string>("");
  const [exercise, setExercise] = useState<RoutineDataType[]>([]);
  const { addRoutine, addRoutineSuccess } = useAddRoutine();

  function handleChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    if (errTitle !== "") setErrTitle("");
    setTitle(e.target.value);
  }

  function handleChangeCategory(text: string) {
    if (errCategory !== "") setErrCategory("");
    setCategoryChange(text);
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
    if (categoryChange === "") return setErrCategory("카테고리를 선택해주세요");
    addRoutine({
      id: routine.length === 0 ? 0 : routine[routine?.length - 1].id + 1,
      title,
      category: categoryChange,
      routine: exercise,
    });
  }

  return (
    <article className="w-full p-6 flex flex-col gap-6">
      <LabelInput
        type="text"
        label="루틴 제목"
        $width="100%"
        placeholder="...제목"
        errortext={errTitle}
        onChange={handleChangeTitle}
      />
      <div className="relative">
        <LabelSelect
          width="100%"
          label="카테고리"
          placeholder="카테고리"
          values={category?.map((item) => item.category) ?? []}
          handleChangeSelect={handleChangeCategory}
        />
        {errCategory && (
          <p className="mt-1 absolute text-[10px] text-red-700">
            {errCategory}
          </p>
        )}
      </div>
      {exercise.length > 0 && <AddRoutineBodyList exercise={exercise} />}
      <AddRoutineBodyAddButton handleAddExercise={handleAddExercise} />
      <AddRoutineBodyFooter handleAddRoutine={handleAddRoutine} />
      {addRoutineSuccess && <AddRoutineSuccessModal />}
    </article>
  );
}
