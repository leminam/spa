export const setId = () => {
  let id = "";
  let variant = "0123456789";

  for (let i = 0; i < 10; i++)
    id += variant.charAt(Math.floor(Math.random() * variant.length));

  return Number(id);
};

export const setTitle = () => {
  let title = "";
  let variant = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < 30; i++)
    title += variant.charAt(Math.floor(Math.random() * variant.length));

  return title;
};