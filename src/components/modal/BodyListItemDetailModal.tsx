import ModalPortal from "@/ModalPortal";

type Props = {
  title: string;
  kg: number;
  set: number;
  handleCloseModal: () => void;
};

export default function BodyListItemDetailModal(props: Props) {
  return (
    <ModalPortal
      component={
        <article className="w-[300px] h-[200px] bg-white flex flex-col justify-center text-xl font-bold gap-5 rounded-3xl p-5">
          <div className="w-full flex gap-5">
            <span>제목:</span>
            <span>{props.title}</span>
          </div>
          <div className="w-full flex gap-5">
            <span>무게:</span>
            <span>{props.kg}kg</span>
          </div>
          <div className="w-full flex gap-5">
            <span>세트:</span>
            <span>{props.set}set</span>
          </div>
        </article>
      }
      handleCloseModal={props.handleCloseModal}
    />
  );
}
