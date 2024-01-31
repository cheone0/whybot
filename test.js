// 경험치 예상 정보
let expFirst = 280 - 1 + 151047965184658;


let expLast =
  mapleExpTable[280 - 1] + logLast.character_exp;
let expNext = mapleExpTable[logLast.character_level - 1 + 1];
let expNeed = expNext - expLast;
let expRate = (expLast - expFirst) / (logLast.date - logFirst.date);

let nextLevelUpDate = new Date(logLast.date + Math.round(expNeed / expRate));

console.log(`예상 레벨업 날짜 : ${getDateString(nextLevelUpDate)}</div>`);
character.tail.js?test=1706041281