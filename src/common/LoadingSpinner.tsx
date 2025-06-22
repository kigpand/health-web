import ModalPortal from "@/ModalPortal";

export default function LoadingSpinner() {
  return (
    <ModalPortal
      component={
        <div className="h-[60px] w-[60px] border-4 border-lightgray border-t-0 border-r-0 rounded-full my-4 mx-auto z-[100] animate-spin" />
      }
    ></ModalPortal>
  );
}
