export function EmailHelper(value) {
    console.log(value, "email");
    let result;
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  
    if (EmailRegex.test(value)) {
      console.log(true);
      result = "";
      return result;
    } else if (!EmailRegex.test(value) && value !== "") {
      console.log(false);
      result = "Email is Not Valid";
      return result;
    }
  }
  