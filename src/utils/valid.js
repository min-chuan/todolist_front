export function validEmail(val) {
  return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(val);
}

export function validPhone(val) {
  return /^1[3456789]\d{9}$/.test(val);
}

export function validAccount(name) {
  return validEmail(name) || validPhone(name);
}

export default {
  validEmail,
  validPhone,
  validAccount,
};
