import { baseUrl } from ".";

export async function sendPhoneVerificationCode(phoneNumber) {
  console.log("creating code");

  const response = await fetch(
    baseUrl + "/auth/sendVerification?phone=" + phoneNumber,
    {
      method: "GET",
      cors: "cors",
    }
  );
  return response;
}

export async function verifyCode(obj) {
  console.log("verify code");
  try {
    const response = await fetch(baseUrl + "/auth/verifyPhoneCode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cors: "cors",
      body: JSON.stringify(obj),
    });

    let res = response.json();
    console.log("res", res);
    return res;
  } catch (err) {
    console.log("oops... error", err.message);
    return;
  }
}
