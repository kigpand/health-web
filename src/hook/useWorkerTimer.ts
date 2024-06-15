import { useCallback, useEffect, useState } from "react";

export function useWorkerTimer(number: number) {
  const [time, setTime] = useState<number>(number);
  const [onTimer, setOnTimer] = useState<boolean>(false);

  useEffect(() => {
    const worker = new Worker(new URL("../utils/worker.ts", import.meta.url));
    if (onTimer) {
      worker.postMessage({ type: "startTimer", timer: number });
      worker.onmessage = (e) => {
        setTime(e.data.timer);
      };
    } else {
      worker.postMessage("finishTimer");
      worker.terminate();
    }
  }, [onTimer]);

  const handleTimer = useCallback((flag: boolean) => {
    setOnTimer(flag);
    if (!flag) {
      setOnTimer(false);
      setTime(number);
    }
  }, []);

  return { time, onTimer, handleTimer };
}
