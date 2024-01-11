console.log("hello");

// !헥사 9 10
if (Data[0] == "!헥사") {
  try {
    if (
      Data[1] < 0 ||
      Data[1] > 29 ||
      Data[2] > 30 ||
      Data[2] < 1 ||
      Data[1] >= Data[2]
    ) {
      replier.reply("입력값 다시");
    } else {
      let originS = [
        5, 1, 1, 1, 2, 2, 2, 3, 3, 10, 3, 3, 4, 4, 4, 4, 4, 4, 5, 15, 5, 5, 5,
        5, 5, 6, 6, 6, 7, 20,
      ];
      let originP = [
        100, 30, 35, 40, 45, 50, 55, 60, 65, 200, 80, 90, 100, 110, 120, 130,
        140, 150, 160, 350, 170, 180, 190, 200, 210, 220, 230, 240, 250, 500,
      ];
      let masteryS = [
        3, 1, 1, 1, 1, 1, 1, 2, 2, 5, 2, 2, 2, 2, 2, 2, 2, 2, 3, 8, 3, 3, 3, 3,
        3, 3, 3, 3, 4, 10,
      ];
      let masteryP = [
        50, 15, 18, 20, 23, 25, 28, 30, 33, 100, 40, 45, 50, 55, 60, 65, 70, 75,
        80, 175, 85, 90, 95, 100, 105, 110, 115, 120, 125, 250,
      ];
      let fiveS = [
        4, 1, 1, 1, 2, 2, 2, 3, 3, 8, 3, 3, 3, 3, 3, 3, 3, 3, 4, 12, 4, 4, 4, 4,
        4, 5, 5, 5, 6, 15,
      ];
      let fiveP = [
        75, 23, 27, 30, 34, 38, 42, 45, 49, 150, 60, 68, 75, 83, 90, 98, 105,
        113, 120, 263, 128, 135, 143, 150, 158, 165, 173, 180, 188, 375,
      ];
      let sum1 = 0;
      let sum2 = 0;
      let sum3 = 0;
      let sum4 = 0;
      let sum5 = 0;
      let sum6 = 0;

      for (i = Data[1]; i < Data[2]; i++) {
        sum1 += originS[i];
        sum2 += originP[i];
        sum3 += masteryS[i];
        sum4 += masteryP[i];
        sum5 += fiveS[i];
        sum6 += fiveP[i];
      }

      while (Data[1] < Data[2]) {
        Data[1]++;
        sum1 += originS[i];
        sum2 += originP[i];
        sum3 += masteryS[i];
        sum4 += masteryP[i];
        sum5 += fiveS[i];
        sum6 += fiveP[i];
      }

      replier.reply(
        Data[1] +
          "레벨 에서 " +
          Data[2] +
          "레벨 까지 필요한\n솔 에르다와 솔 에르다 조각의 갯수는\n" +
          "오리진 : 솔 " +
          sum1 +
          "개, " +
          "조각 " +
          sum2 +
          "개\n" +
          "마스터리 : 솔 " +
          sum3 +
          "개, " +
          "조각 " +
          sum4 +
          "개\n" +
          "5차 : 솔 " +
          sum5 +
          "개, " +
          "조각 " +
          sum6 +
          "개"
      );
    }
  } catch (e) {
    replier.reply("숫자 다시 입력해봐.");
  }
}
