export function PhoneNumber(value) {
    console.log(value, "userhelper");
    let result;
    const numberRegex = /^[0-9\-\+]{9,15}$/;
    if (numberRegex.test(value)) {
      console.log(true);
      result = "";
      return result;
    } else if (!numberRegex.test(value)) {
      console.log(false);
      result = "Phone Number is Not Valid";
      return result;
    }
  }
  
  //   const usernameValidation = () => {
  //     const reg = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
  //     if (username === "") {
  //       setUMessage("Enter Username");
  //     } else if (reg.test(username)) {
  //       setUMessage("Valid Username");
  //     } else if (!reg.test(username)) {
  //       setUMessage("Invalid Username");
  //     } else {
  //       setUMessage("");
  //     }
  //   };
  