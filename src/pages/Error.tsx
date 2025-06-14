import { PATH } from "@/enum/path";

export default function Error() {
  function returnToHome() {
    window.location.replace(PATH.home);
  }

  return (
    <section className="page_layout items-center justify-center gap-10">
      <p className="text-[26px] font-bold text-white">
        알수 없는 오류가 발생했습니다.
      </p>
      <button
        className="bg-white py-4 px-6 rounded-xl font-bold outline-none border-none"
        onClick={returnToHome}
      >
        홈화면으로
      </button>
    </section>
  );
}
