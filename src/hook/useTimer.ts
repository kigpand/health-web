import { useEffect, useState } from "react";
import { useInterval } from "./useInterval";

type Props = {
  timer: number;
};

export function useTimer({ timer }: Props) {
  const [time, setTime] = useState<number>(timer);

  useInterval(
    () => {
      setTime(time - 1);
    },
    time !== 0 ? 1000 : null
  );

  useEffect(() => {
    if (time === 0) {
      //   setIsNextButton(true);
    }
  }, [time]);

  return { time };
}
