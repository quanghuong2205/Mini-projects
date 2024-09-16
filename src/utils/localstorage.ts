export const saveToLocalStorage = (key: string, data: unknown): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage = (key: string): unknown => {
  const data = localStorage.getItem(key);
  if (!data) return undefined;
  return JSON.parse(data);
};
