let originS = [
  5, 1, 1, 1, 2, 2, 2, 3, 3, 10, 3, 3, 4, 4, 4, 4, 4, 4, 5, 15, 5, 5, 5, 5, 5,
  6, 6, 6, 7, 20,
];
let originP = [
  100, 30, 35, 40, 45, 50, 55, 60, 65, 200, 80, 90, 100, 110, 120, 130, 140,
  150, 160, 350, 170, 180, 190, 200, 210, 220, 230, 240, 250, 500,
];
let masteryS = [
  3, 1, 1, 1, 1, 1, 1, 2, 2, 5, 2, 2, 2, 2, 2, 2, 2, 2, 3, 8, 3, 3, 3, 3, 3, 3,
  3, 3, 4, 10,
];
let masteryP = [
  50, 15, 18, 20, 23, 25, 28, 30, 33, 100, 40, 45, 50, 55, 60, 65, 70, 75, 80,
  175, 85, 90, 95, 100, 105, 110, 115, 120, 125, 250,
];
let fiveS = [
  4, 1, 1, 1, 2, 2, 2, 3, 3, 8, 3, 3, 3, 3, 3, 3, 3, 3, 4, 12, 4, 4, 4, 4, 4, 5,
  5, 5, 6, 15,
];
let fiveP = [
  75, 23, 27, 30, 34, 38, 42, 45, 49, 150, 60, 68, 75, 83, 90, 98, 105, 113,
  120, 263, 128, 135, 143, 150, 158, 165, 173, 180, 188, 375,
];
let publicS = [
  7, 2, 2, 2, 3, 3, 3, 5, 5, 14, 5, 5, 6, 6, 6, 6, 6, 6, 7, 17, 7, 7, 7, 7, 7,
  9, 9, 9, 10, 20,
];
let publicP = [
  125, 38, 44, 50, 57, 63, 69, 75, 82, 300, 110, 124, 138, 152, 165, 179, 193,
  207, 220, 525, 234, 248, 262, 275, 289, 303, 317, 330, 344, 750,
];

console.log("hello");
let Data = ["!헥사", "7", "10"];
let firstHexaLv = Data[1];
let lastHexaLv = Data[2];
// 오리진 솔 갯수
let answerOriginS = originS
  .slice(firstHexaLv, lastHexaLv)
  .reduce((prev, curr) => prev + curr, 0);
// 오리진 조각 갯수
let answerOriginP = originP
  .slice(firstHexaLv, lastHexaLv)
  .reduce((prev, curr) => prev + curr, 0);
// 마스터리 솔 갯수
let answermasteryS = masteryS
  .slice(firstHexaLv, lastHexaLv)
  .reduce((prev, curr) => prev + curr, 0);
// 마스터리 조각 갯수
let answermasteryP = masteryP
  .slice(firstHexaLv, lastHexaLv)
  .reduce((prev, curr) => prev + curr, 0);
// 5차 솔 갯수
let answerFiveS = fiveS
  .slice(firstHexaLv, lastHexaLv)
  .reduce((prev, curr) => prev + curr, 0);
// 5차 조각 갯수
let answerFiveP = fiveP
  .slice(firstHexaLv, lastHexaLv)
  .reduce((prev, curr) => prev + curr, 0);
// 공용코어 솔 갯수
let answerPublicS = publicS
  .slice(firstHexaLv, lastHexaLv)
  .reduce((prev, curr) => prev + curr, 0);
// 공용코어 조각 갯수
let answerPublicP = publicP
  .slice(firstHexaLv, lastHexaLv)
  .reduce((prev, curr) => prev + curr, 0);
console.log(answerOriginS);
console.log(`${Data[1]}레벨에서 ${Data[2]}레벨 까지 필요한\n
솔 에르다와 조각의 갯수는\n
오리진 : 솔 ${answerOriginS}개, 조각 ${answerOriginP}개\n
마스터리 : 솔 ${answermasteryS}개, 조각  ${answermasteryP}개\n
5차 : 솔 ${answerFiveS}개, 조각  ${answerFiveP}개\n
공용 : 솔 ${answerPublicS}개, 조각  ${answerPublicP}개\n`);
