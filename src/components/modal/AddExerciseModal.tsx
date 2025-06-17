import { useState } from "react";
import TwoButtonModal from "./TwoButtonModal";
import { InputField } from "@components/components/common/InputField";

type Props = {
  handleAddExercise: (
    title: string,
    kg: number,
    set: number,
    link: string
  ) => void;
  handleCloseModal: () => void;
};

export default function AddExerciseModal({
  handleAddExercise,
  handleCloseModal,
}: Props) {
  const [title, setTitle] = useState<string>("");
  const [kg, setKg] = useState<number>(0);
  const [set, setSet] = useState<number>(0);
  const [link, setLink] = useState<string>("");
  const [errTitle, setErrTitle] = useState<string>("");
  const [errSet, setErrSet] = useState<string>("");

  function handleAddButton(
    title: string,
    kg: number,
    set: number,
    link: string
  ) {
    if (title === "") return setErrTitle("제목을 입력해주세요.");
    if (set === 0) return setErrSet("횟수를 입력해주세요");
    handleAddExercise(title, kg, set, link);
    handleCloseModal();
  }

  function handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
    if (errTitle !== "") setErrTitle("");
    setTitle(e.target.value);
  }

  function handleChangeSet(e: React.ChangeEvent<HTMLInputElement>) {
    if (errSet !== "") setErrSet("");
    setSet(Number(e.target.value));
  }

  return (
    <TwoButtonModal
      component={
        <div className="flex flex-col gap-2">
          <header className="text-lg font-bold">운동 추가</header>
          <InputField
            type="text"
            label="제목"
            placeholder="제목"
            error={errTitle}
            onChange={handleChangeTitle}
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
            error={errSet}
            onChange={handleChangeSet}
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
      primaryEvent={() => handleAddButton(title, kg, set, link)}
      secondaryText="취소"
      secondaryEvent={handleCloseModal}
      handleCloseModal={handleCloseModal}
    />
  );
}
