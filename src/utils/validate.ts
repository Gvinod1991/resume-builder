export const validate = ({ data, rules }: any): any => {
  let isValid = true;
  let errors = {};
  Object.keys(data).forEach((key) => {
    rules[key] &&
      Object.keys(rules[key]).forEach((rule) => {
        if (rule === 'presence') {
          if (!(data[key] && data[key].length > 0)) {
            isValid = isValid && false;
            errors = { ...errors, [key]: rules[key]?.message };
          } else {
            isValid = isValid && true;
            errors = { ...errors, [key]: '' };
          }
        }
      });
  });
  return { isValid, errors };
};
