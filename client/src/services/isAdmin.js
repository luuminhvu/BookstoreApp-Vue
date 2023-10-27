const jsCookie = require("js-cookie");
const isAdmin = () => {
  const token = jsCookie.get("account");
  const newUser = JSON.parse(token);
  if (newUser.isAdmin === true) {
    return true;
  } else {
    return false;
  }
};
const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": jsCookie.get("token"),
    },
  };
  return headers;
};
module.exports = { isAdmin, setHeaders };
