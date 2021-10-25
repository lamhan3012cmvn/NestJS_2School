export const RandomFunc = () =>
  (Math.random() + 1).toString(36).substring(4).toUpperCase();
