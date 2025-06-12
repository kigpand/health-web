import { RoutineDataType } from "@/types/Routine";
import BodyListItemDetailModal from "@components/modal/BodyListItemDetailModal";
import { useState } from "react";

export default function AddRoutineBodyListItem(props: RoutineDataType) {
  const [isDetail, setIsDetail] = useState<boolean>(false);

  return (
    <>
      {isDetail && (
        <BodyListItemDetailModal
          {...props}
          handleCloseModal={() => setIsDetail(false)}
        />
      )}
      <li
        className="py-3 px-2 rounded text-center font-bold bg-white cursor-pointer"
        onClick={() => setIsDetail(true)}
      >
        {props.title}
      </li>
    </>
  );
}
