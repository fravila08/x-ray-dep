import axios from "axios";

export const api = axios.create({
  baseURL: "https://tango-dep.com/api/",
});

export const userConfirmation = async () => {
  let token = localStorage.getItem("token");
  if (token) {
    api.defaults.headers.common["Authorization"] = `Token ${token}`;
    let response = await api.get("users/");
    if (response.status === 200) {
      return response.data.user;
    }
    delete api.defaults.headers.common["Authorization"];
  }
  return null;
};

export const userRegistration = async (email, password) => {
  let response = await api.post("users/signup/", {
    email: email,
    password: password,
  });
  if (response.status === 201) {
    let { user, token } = response.data;
    localStorage.setItem("token", token);
    api.defaults.headers.common["Authorization"] = `Token ${token}`;
    return user;
  }
  alert(response.data);
  return null;
};

export const userLogIn = async (email, password) => {
  let response = await api.post("users/login/", {
    email: email,
    password: password,
  });
  if (response.status === 200) {
    let { user, token } = response.data;
    localStorage.setItem("token", token);
    api.defaults.headers.common["Authorization"] = `Token ${token}`;
    return user;
  }
  alert(response.data);
  return null;
};

export const userLogOut = async () => {
  let response = await api.post("users/logout/");
  if (response.status === 204) {
    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];
    return null;
  }
  alert("Something went wrong and logout failed");
};

export const getUsersLists = async () => {
  try {
    let response = await api.get("lists/");
    if (response.status === 200) {
      return response.data;
    }
    alert(response.data);
    return [];
  } catch (e) {
    alert(e.message);
    return [];
  }
};
