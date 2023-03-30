export function set(data) {
  Object.keys(data).forEach(function (key) {
    console.log(key, data[key]);
    localStorage.setItem(key, data[key]);
  });
}

export function clear(keys) {
  keys.forEach((key) => {
    localStorage.removeItem(key);
  });
}

export function isLogged() {
  return "token" in localStorage;
}

