export const AddToLocalStorage = (data) => {
  window.localStorage.setItem('user', JSON.stringify(data));
};

export const RemoveLocalStorage = () => {
  window.localStorage.removeItem('user');
};

export const GetLocalStorage = () => {
  return JSON.parse(window.localStorage.getItem('user'));
};
