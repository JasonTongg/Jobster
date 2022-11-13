export const AddToLocalStorage = (data) => {
  window.localStorage.setItem('token', data);
};

export const RemoveLocalStorage = () => {
  window.localStorage.removeItem('token');
};

export const GetLocalStorage = () => {
  return window.localStorage.getItem('token');
};
