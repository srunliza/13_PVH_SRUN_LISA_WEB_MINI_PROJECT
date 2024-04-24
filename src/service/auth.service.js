
// for login
export const loginService = async (userInfo) => {
  console.log("userInfo in login service ",userInfo)
  try {
    const res = await fetch(
      "http://110.74.194.123:8989/api/todo/v1/auth/login",
      {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log("data in login service ", data);
    return data;
  } catch (err) {
    console.log("error login service : ", err);
  }
};

// for register
export const registerService = async (userInfo) => {
  console.log("user info in register service", userInfo);
  try {
    const res = await fetch(
      "http://110.74.194.123:8989/api/todo/v1/auth/sign-up",
      {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log("data in sign up service ", data);
    return data;
  } catch (err) { 8
    console.log("error login service : ", err);
  }
}
