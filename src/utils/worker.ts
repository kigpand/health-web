let timer: number = 0;
let interval: any;

onmessage = (e) => {
  timer = e.data.timer;

  if (interval) {
    clearInterval(interval);
  }

  if (e.data.type === "startTimer") {
    interval = setInterval(() => {
      timer -= 1;
      if (timer === 0) clearInterval(interval);
      postMessage({ timer });
    }, 1000);
  }

  if (e.data.type === "finishTimer") {
    clearInterval(interval);
  }
};
