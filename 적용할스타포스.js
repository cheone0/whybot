if (Data[0] == "!강화") {
  let S = Number(Data[1]);
  let S2 = Number(Data[2]);
  let L = Number(Data[3]);
  let meso = 0;
  let distroy = 0;
  let stack = [];

  function click() {
    meso = 1000 + (Math.pow(L, 3) * (S + 1)) / 25;

    return meso;
  }

  function click_1() {
    meso = 1000 + (Math.pow(L, 3) * Math.pow(S + 1, 2.7)) / 25;

    return meso;
  }

  function click_1(x) {
    let arr1 = [400, 220, 150, 110, 75, 200]; //10 11 12 13 14 15~21
    meso = 1000 + (Math.pow(L, 3) * Math.pow(S + 1, 2.7)) / arr1[x];

    return meso;
  }

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

  try {
    if (S < 0 || S2 > 22) {
      replier.reply("숫자 잘못 입력");
    } else if (S == S2) {
      replier.reply("숫자 잘못 입력");
    } else if (S > S2) {
      replier.reply("숫자 잘못 입력");
    } else {
      while (S < 21) {
        if (S == S2) {
          break;
        }

        if (S < 3) {
          meso = meso + click();
          let R = Math.random() * 100;
          if (R > 95 - 5 * S) {
          } else {
            S++;
          }
        }
        if (S > 2 && S < 10) {
          meso = meso + click();
          let R = Math.random() * 100;
          if (R > 100 - 5 * S) {
          } else {
            S++;
          }
        }
        if (S == 10) {
          meso = meso + click_1(0);
          let R = Math.random() * 100;
          if (R > 100 - 5 * S) {
          } else {
            S++;
          }
        }
        if (S == 11) {
          meso = meso + click_1(1);
          let R = Math.random() * 100;
          if (R > 100 - 5 * S) {
          } else {
            S++;
          }
        }
        if (S == 12) {
          meso = meso + click_1(2);
          let R = Math.random() * 100;
          if (R > 100 - 5 * S) {
          } else {
            S++;
          }
        }
        if (S == 13) {
          meso = meso + click_1(3);
          let R = Math.random() * 100;
          if (R > 100 - 5 * S) {
          } else {
            S++;
          }
        }
        if (S == 14) {
          meso = meso + click_1(4);
          let R = Math.random() * 100;
          if (R > 100 - 5 * S) {
          } else {
            S++;
          }
        }

        if (S > 14 && S < 22) {
          if (S == 15) {
            meso = meso + click_1(5);
            let R = Math.random() * 100;

            if (stack[stack.length - 1] == 1 && stack[stack.length - 2] == 1) {
              S++;
              stack.push(0);
            } else if (R <= 2.1) {
              distroy++;
              S = 12;
            } else if (R >= 70) {
              S++;
              stack.push(0);
            } else {
              stack.push(0);
            }
          }

          if (S == 16) {
            meso = meso + click_1(5);
            let R = Math.random() * 100;

            if (stack[stack.length - 1] == 1 && stack[stack.length - 2] == 1) {
              S++;
              stack.push(0);
            } else if (R <= 2.1) {
              distroy++;
              stack.push(0);
              S = 12;
            } else if (R >= 70) {
              S++;
              stack.push(0);
            } else {
              S--;
              stack.push(1);
            }
          }

          if (S == 17) {
            meso = meso + click_1(5);
            let R = Math.random() * 100;

            if (stack[stack.length - 1] == 1 && stack[stack.length - 2] == 1) {
              S++;
              stack.push(0);
            } else if (R <= 2.1) {
              distroy++;
              stack.push(0);
              S = 12;
            } else if (R >= 70) {
              S++;
              stack.push(0);
            } else {
              S--;
              stack.push(1);
            }
          }

          if (S == 18) {
            meso = meso + click_1(5);
            let R = Math.random() * 100;

            if (stack[stack.length - 1] == 1 && stack[stack.length - 2] == 1) {
              S++;
              stack.push(0);
            } else if (R <= 2.8) {
              distroy++;
              stack.push(0);
              S = 12;
            } else if (R >= 70) {
              S++;
              stack.push(0);
            } else {
              S--;
              stack.push(1);
            }
          }
          if (S == 19) {
            meso = meso + click_1(5);
            let R = Math.random() * 100;

            if (stack[stack.length - 1] == 1 && stack[stack.length - 2] == 1) {
              S++;
              stack.push(0);
            } else if (R <= 2.8) {
              distroy++;
              stack.push(0);
              S = 12;
            } else if (R >= 70) {
              S++;
              stack.push(0);
            } else {
              S--;
              stack.push(1);
            }
          }

          if (S == 20) {
            meso = meso + click_1(5);
            let R = Math.random() * 100;

            if (R <= 7) {
              distroy++;
              S = 12;
            } else if (R >= 70) {
              S++;
            } else {
            }
          }

          if (S == 21) {
            meso = meso + click_1(5);
            let R = Math.random() * 100;
            if (R <= 7) {
              distroy++;
              S = 12;
            } else if (R >= 70) {
              S++;
            } else {
              S--;
            }
          }
        }
      }
    }

    replier.reply(
      " 사용한 메소 값 : " +
        won(meso) +
        "메소" +
        "\n" +
        " 현재 스타포스 : " +
        S +
        "\n" +
        " 터진횟수 : " +
        distroy
    );
  } catch (e) {
    replier.reply(e);
  }
}
