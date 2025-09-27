export const mapKeyValues = (inputObject: any, keys: string[]) => {
  let result = '';
  for (let i = 0; i < keys.length; i++) {
    result =
      result + inputObject[keys[i]] + (i === keys.length - 1 ? '' : ', ');
  }
  return result;
};
