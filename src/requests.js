export const userSignup = async (user) => {
  const response = await fetch(
    "https://fitflex.switchsolutions.com.pk/api/users/signup",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  const json = await response.json();

  return json;
  // .catch((err) => {
  //   console.log(err);
  // });
};
export const otpVerify = async (user) => {
  return fetch("https://fitflex.switchsolutions.com.pk/api/users/signin", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
