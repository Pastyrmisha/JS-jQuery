// function reverse();

const reverse = (str) => {
    let i = 0;
    let result = "";
  
    while (i < str.length) {
      result = str[i] + result;
  
      i += 1;
    }
    return result;
  };
  
  console.log(reverse("Hello!"));