let S = 0; //현재 스타포스 수
let L = 160; //장비레벨
let meso = 0; //사용한 메소
let distroy = 0; //터진 횟수
let stack = [];

//0~2성 메소 공식
function click() {
  meso = 1000 + (Math.pow(L, 3) * (S + 1)) / 25;

  return meso;
}
//3성~10성 메소 공식
function click_1() {
  meso = 1000 + (Math.pow(L, 3) * Math.pow(S + 1, 2.7)) / 25;

  return meso;
}
//10성~14성 메소 공식
function click_1(x) {
  let arr1 = [400, 220, 150, 110, 75, 200]; //10 11 12 13 14 15~21
  meso = 1000 + (Math.pow(L, 3) * Math.pow(S + 1, 2.7)) / arr1[x];

  return meso;
}

//스택 합계
// function stackSum() {
//   let sum1 = stack.slice(-2);
//   let result = sum1.reduceRight(sum);
//   function sum(total, num) {
//     return total + rum;
//   }
// }

//숫자를 단위 사용하여 표현
function won(number) {
  let inputNumber = number < 0 ? false : number;
  let unitWords = ["", "만", "억", "조", "경"];
  let splitUnit = 10000;
  let splitCount = unitWords.length;
  let resultArray = [];
  let resultString = "";

  for (let i = 0; i < splitCount; i++) {
    let unitResult =
      (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
    unitResult = Math.floor(unitResult);
    if (unitResult > 0) {
      resultArray[i] = unitResult;
    }
  }

  for (let i = 0; i < resultArray.length; i++) {
    if (!resultArray[i]) continue;
    resultString = String(resultArray[i]) + unitWords[i] + resultString;
  }

  return resultString;
}

//스타포스 시작

while (S < 21) {
  if (S < 3) {
    meso = meso + click();
    let R = Math.random() * 100;
    if (R > 95 - 5 * S) {
      console.log("스타포스 강화 실패 현재" + S + "성");
    } else {
      S++;
      console.log("스타포스 강화 성공 현재" + S + "성");
    }
  }
  if (S > 2 && S < 10) {
    meso = meso + click();
    let R = Math.random() * 100;
    if (R > 100 - 5 * S) {
      console.log("스타포스 강화 실패 현재" + S + "성");
    } else {
      S++;
      console.log("스타포스 강화 성공 현재" + S + "성");
    }
  }
  if (S == 10) {
    meso = meso + click_1(0);
    let R = Math.random() * 100;
    if (R > 100 - 5 * S) {
      console.log("스타포스 강화 실패 현재" + S + "성");
    } else {
      S++;
      console.log("스타포스 강화 성공 현재" + S + "성");
    }
  }
  if (S == 11) {
    meso = meso + click_1(1);
    let R = Math.random() * 100;
    if (R > 100 - 5 * S) {
      console.log("스타포스 강화 실패 현재" + S + "성");
    } else {
      S++;
      console.log("스타포스 강화 성공 현재" + S + "성");
    }
  }
  if (S == 12) {
    meso = meso + click_1(2);
    let R = Math.random() * 100;
    if (R > 100 - 5 * S) {
      console.log("스타포스 강화 실패 현재" + S + "성");
    } else {
      S++;
      console.log("스타포스 강화 성공 현재" + S + "성");
    }
  }
  if (S == 13) {
    meso = meso + click_1(3);
    let R = Math.random() * 100;
    if (R > 100 - 5 * S) {
      console.log("스타포스 강화 실패 현재" + S + "성");
    } else {
      S++;
      console.log("스타포스 강화 성공 현재" + S + "성");
    }
  }
  if (S == 14) {
    meso = meso + click_1(4);
    let R = Math.random() * 100;
    if (R > 100 - 5 * S) {
      console.log("스타포스 강화 실패 현재" + S + "성");
    } else {
      S++;
      console.log("스타포스 강화 성공 현재" + S + "성");
    }
  }

  if (S > 14 && S < 22) {
    if (S == 15) {
      meso = meso + click_1(5);
      let R = Math.random() * 100;

      if (stack[stack.length - 1] == 1 && stack[stack.length - 2] == 1) {
        S++;
        stack.push(0);
        console.log("찬스타임 현재 " + S + "성");
      } else if (R <= 2.1) {
        distroy++;
        console.log("펑" + R);
        S = 12;
      } else if (R >= 70) {
        S++;
        stack.push(0);
        console.log("스타포스 강화 성공 현재" + S + "성" + R);
      } else {
        stack.push(0);
        console.log("스타포스 강화 실패 현재" + S + "성");
      }
    }

    if (S == 16) {
      meso = meso + click_1(5);
      let R = Math.random() * 100;

      if (stack[stack.length - 1] == 1 && stack[stack.length - 2] == 1) {
        S++;
        stack.push(0);
        console.log("찬스타임 현재 " + S + "성");
      } else if (R <= 2.1) {
        distroy++;
        stack.push(0);
        console.log("펑" + R);
        S = 12;
      } else if (R >= 70) {
        S++;
        stack.push(0);
        console.log("스타포스 강화 성공 현재" + S + "성");
      } else {
        S--;
        stack.push(1);
        console.log("스타포스 강화 실패 현재" + S + "성");
      }
    }

    if (S == 17) {
      meso = meso + click_1(5);
      let R = Math.random() * 100;

      if (stack[stack.length - 1] == 1 && stack[stack.length - 2] == 1) {
        S++;
        stack.push(0);
        console.log("찬스타임 현재 " + S + "성");
      } else if (R <= 2.1) {
        distroy++;
        stack.push(0);
        console.log("펑" + R);
        S = 12;
      } else if (R >= 70) {
        S++;
        stack.push(0);
        console.log("스타포스 강화 성공 현재" + S + "성");
      } else {
        S--;
        stack.push(1);
        console.log("스타포스 강화 실패 현재" + S + "성");
      }
    }

    if (S == 18) {
      meso = meso + click_1(5);
      let R = Math.random() * 100;

      if (stack[stack.length - 1] == 1 && stack[stack.length - 2] == 1) {
        S++;
        stack.push(0);
        console.log("찬스타임 현재 " + S + "성");
      } else if (R <= 2.8) {
        distroy++;
        stack.push(0);
        console.log("펑" + R);
        S = 12;
      } else if (R >= 70) {
        S++;
        stack.push(0);
        console.log("스타포스 강화 성공 현재" + S + "성");
      } else {
        S--;
        stack.push(1);
        console.log("스타포스 강화 실패 현재" + S + "성");
      }
    }
    if (S == 19) {
      meso = meso + click_1(5);
      let R = Math.random() * 100;

      if (stack[stack.length - 1] == 1 && stack[stack.length - 2] == 1) {
        S++;
        stack.push(0);
        console.log("찬스타임 현재 " + S + "성");
      } else if (R <= 2.8) {
        distroy++;
        stack.push(0);
        console.log("펑" + R);
        S = 12;
      } else if (R >= 70) {
        S++;
        stack.push(0);
        console.log("스타포스 강화 성공 현재" + S + "성");
      } else {
        S--;
        stack.push(1);
        console.log("스타포스 강화 실패 현재" + S + "성");
      }
    }

    if (S == 20) {
      meso = meso + click_1(5);
      let R = Math.random() * 100;

      if (R <= 7) {
        distroy++;
        console.log("펑" + R);
        S = 12;
      } else if (R >= 70) {
        S++;
        console.log("스타포스 강화 성공 현재" + S + "성");
      } else {
        console.log("스타포스 강화 실패 현재" + S + "성");
      }
    }

    if (S == 21) {
      meso = meso + click_1(5);
      let R = Math.random() * 100;
      if (R <= 7) {
        distroy++;
        console.log("펑" + R);
        S = 12;
      } else if (R >= 70) {
        S++;
        console.log("스타포스 강화 성공 현재" + S + "성");
      } else {
        S--;
        console.log("스타포스 강화 실패 현재" + S + "성");
      }
    }
  }
}

console.log(" 사용한 메소 값 : " + won(meso) + "메소");
console.log(" 현재 스타포스 : " + S);
console.log(" 터진횟수 : " + distroy);
console.log(" stack " + stack);
