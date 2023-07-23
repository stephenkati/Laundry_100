export const saveToken = (token) => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  const token = localStorage.getItem('token');
  return token ? token : null;
}

export const deleteToken = () => {
  localStorage.removeItem('token');
}
