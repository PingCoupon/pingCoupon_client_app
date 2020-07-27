export const errorHandle = texts => {
  let errorText = '';

  for (let i in texts) {
    if (texts[i].trim() === '') {
      errorText += `${i}, `;
    }
  }

  if (errorText === '') {
    return false;
  }

  errorText += '이(가) 비어있습니다.\n';
  return errorText;
};
