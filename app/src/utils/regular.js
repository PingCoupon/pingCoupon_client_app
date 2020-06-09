export const emailRegular = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
export const passwordRegular = /^[A-Za-z0-9!@#$%^&*]{8,16}$/;
export const authenticationNumber = /^[0-9a-zA-Z]{6}$/;
export const phoneNumberRegular = /^[0-9]{11}$/;
export const nickNameRegular = /^[0-9각-힣a-zA-Z_]+$/;
export const nameRegular = /^[각-힣a-zA-Z_]+$/;
export const moneyRegular = /[^0-9]/g;

export const checkOnlyNumber = value => /^[0-9,]+$/.test(value) || value === '';

export const checkLanguage = value =>
  /^[ㄱ-ㅎ각-힣a-zA-Z]+$/g.test(value) || !value;

export const numberWithCommas = value => {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const residentRegistrationNumber = value => {
  return value.replace(/([0-9]{6})([0-9]{1})/, '$1-$2');
};

export const phoneNumberWithDash = value => {
  return value.replace(
    /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,
    '$1-$2-$3',
  );
};

export const birth6wordWithDash = value => {
  return value.replace(/([0-9]{2})([0-9]{2})([0-9]{2})/, '$1-$2-$3');
};

export const onlyNumber = value => {
  return value.replace(/[^0-9]/g, '');
};
