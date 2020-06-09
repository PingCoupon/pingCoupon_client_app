import {getTimeFormat} from './timer';

const toDayYear = new Date().getFullYear();
const toDayMonth = getTimeFormat(new Date().getMonth() + 1);
const toDayDate = getTimeFormat(new Date().getDate());
const startYear = 2020;

const dummyPrevYear = [];
const dummyYear = [];
const dummyMonth = [];
const dummyDate = [];

for (let year = toDayYear; year >= toDayYear - 100; year--) {
  dummyPrevYear.push(year);
}
for (let year = startYear; year <= toDayYear; year++) {
  dummyYear.push(year);
}
for (let month = 1; month <= 12; month++) {
  dummyMonth.push(getTimeFormat(month));
}
for (let date = 1; date <= 31; date++) {
  dummyDate.push(getTimeFormat(date));
}

export const prevYearList = dummyPrevYear;
export const yearList = dummyYear;
export const monthList = dummyMonth;
export const dateList = dummyDate;

export function checkOverToEnd(start, end) {
  if (Number(start.split('-').join('')) > Number(end.split('-').join(''))) {
    return true;
  }

  return false;
}

export function checkLeapYear(date) {
  if (
    Number(date.split('-').join('')) <= 20200231 &&
    Number(date.split('-').join('')) >= 20200229
  ) {
    return true;
  }

  return false;
}

export function checkIsToday(date) {
  if (
    Number(date.split('-').join('')) >
    Number(`${toDayYear}-${toDayMonth}-${toDayDate}`.split('-').join(''))
  ) {
    return true;
  }

  return false;
}
