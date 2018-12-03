export const authService = {
  login,
  logout,
  getBalances
}

const _baseURL = 'https://api.roostermoney.com/v1';

function login() {
  const requestOptions = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      "accessKey": "cruz",
      "accessPassword": "4b67a94a33c154765273"
    })
  }
  return fetch(`${_baseURL}/auth/`, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      localStorage.setItem('token', JSON.stringify(data))
    })
}

function getBalances() {
  if(!localStorage.getItem('token')) {
    return null;
  }
  let token =  JSON.parse(localStorage.getItem('token')).token;
  const requestOptions = {
    headers: {
      "Content-Type": "application/json", 
      "x-access-token": token},
  }
  return fetch(`${_baseURL}/balance/`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
}

function logout() {
  localStorage.removeItem('token');
}