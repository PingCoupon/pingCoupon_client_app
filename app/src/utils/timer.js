export const getTimeFormat = time => {
  if (time < 10) {
    return `0${time}`;
  }
  if (time >= 10) {
    return `${time}`;
  }
};

export const getTime = time => {
  const hour = Math.floor(time / 3600);
  const minute = Math.floor(time / 60);
  const second = Math.floor(time - minute * 60);

  return `${getTimeFormat(hour)}:${getTimeFormat(minute)}:${getTimeFormat(
    second,
  )}`;
};

export const getUnTime = time => {
  const hour = Number(time.split(':')[0]) * 3600;
  const minute = Number(time.split(':')[1]) * 60;
  const second = Number(time.split(':')[2]);

  return hour + minute + second;
};

export const useTimer = ({time, maxTime, setTimerCount, setIsAction}) => {
  setIsAction(true);

  const timer = setInterval(() => {
    if (time === maxTime) {
      setIsAction(false);
      clearInterval(timer);
    }

    setTimerCount(getTime(time));
    time += 1;
  }, 1000);

  return timer;
};
