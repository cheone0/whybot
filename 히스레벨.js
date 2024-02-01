if (Data[0] == "!히스") {
  try {
    let u = maplegg.select("script").get().html().slice(0, 600).split(",");

    let Day = new Array[7]();
    for (i = 0; i < 7; i++) {
      Day[i] = u[i * 2]
        .replace("let expHistories", "")
        .replace(/date/g, "")
        .replace(/ /g, "")
        .replace(/=/g, "")
        .replace(/"/g, "")
        .replace(/:/g, "")
        .replace(/\[/g, "")
        .replace(/{/g, "")
        .replace(/}/g, "")
        .replace(/2023-/g, "")
        .replace(/-/g, ".")
        .replace(/date/g, "");
    }

    let Lv = [];
    for (i = 1; i < 8; i++) {
      Lv[i - 1] = u[i * 2 + 11]
        .replace(/ /g, "")
        .replace(/=/g, "")
        .replace(/"/g, "")
        .replace(/:/g, "")
        .replace(/\[/g, "")
        .replace(/{/g, "")
        .replace(/}/g, "")
        .replace(/exp/g, "")
        .replace(/;/g, "")
        .replace("let expHistoryLabels", "")
        .replace(/level/g, "")
        .replace(/\]/g, "")
        .slice(-3);
    }

    let Exp = [];
    for (i = 1; i < 8; i++) {
      Exp[i - 1] = u[i * 2 + 12]
        .replace(/[a-z]/g, "")
        .replace(/#/g, "")
        .replace(/\'/g, "")
        .replace(/ /g, "")
        .replace(/:/g, "")
        .replace(/"/g, "")
        .replace(/\]/g, "")
        .replace(/{/g, "")
        .replace(/}/g, "")
        .replace(/;/g, "")
        .replace(/c3./g, "")
        .replace(/c3/g, "")
        .replace(/\(/g, "")
        .trim();
    }

    replier.reply(
      "닉네임 : " +
        Data[1] +
        "\n" +
        Day[6] +
        " : Lv." +
        Lv[0] +
        "(" +
        Exp[0] +
        "%)\n" +
        Day[5] +
        " : Lv." +
        Lv[1] +
        "(" +
        Exp[1] +
        "%)\n" +
        Day[4] +
        " : Lv." +
        Lv[2] +
        "(" +
        Exp[2] +
        "%)\n" +
        Day[3] +
        " : Lv." +
        Lv[3] +
        "(" +
        Exp[3] +
        "%)\n" +
        Day[2] +
        " : Lv." +
        Lv[4] +
        "(" +
        Exp[4] +
        "%)\n" +
        Day[1] +
        " : Lv." +
        Lv[5] +
        "(" +
        Exp[5] +
        "%)\n" +
        Day[0] +
        " : Lv." +
        Lv[6] +
        "(" +
        Exp[6].slice(0, -2).trim() +
        "%)"
    );
  } catch (e) {
    replier.reply("이 사람 사냥 한지 얼마 안됐거나 안하거나 메이플안함");
  }
}

if (Data[0] == "!레벨") {
  try {
    let levelHistory = maplegg
      .select("script")
      .get(25)
      .html()
      .slice(0, 500)
      .split(",");

    let ld = [];
    for (i = 0; i < 7; i++) {
      ld[i] = levelHistory[i + 7]
        .replace("\\ub144", "년")
        .replace("\\uc6d4", "월")
        .replace("\\uc77c", "일")
        .replace(/"/g, "")
        .replace(/]/g, "");
    }

    let Lv = [];
    for (i = 0; i < 7; i++) {
      Lv[i] = levelHistory[i + 15].replace(/\D/g, "");
    }

    replier.reply(
      "닉네임 : " +
        Data[1] +
        "\n" +
        ld[0] +
        " : Lv." +
        Lv[0] +
        "\n" +
        ld[1] +
        " : Lv." +
        Lv[1] +
        "\n" +
        ld[2] +
        " : Lv." +
        Lv[2] +
        "\n" +
        ld[3] +
        " : Lv." +
        Lv[3] +
        "\n" +
        ld[4] +
        " : Lv." +
        Lv[4] +
        "\n" +
        ld[5] +
        " : Lv." +
        Lv[5] +
        "\n" +
        ld[6] +
        " : Lv." +
        Lv[6]
    );
  } catch (e) {
    replier.reply("자료못찾음");
  }
}

if (Data[0] == "test") {
  try {
    const ocid = searchOcid(Data[1]);
    const sday = getCurrentWeek();
    let lv1 = searchLv(ocid, day1);
    let lv7 = searchLv(ocid, day7);
    let exp1 = searchHis(ocid, day1);
    let exp7 = searchHis(ocid, day7);

    let first_exp = exp7;
    let last_exp = exp1;
    let first_lv = lv7;
    let last_lv = lv1;

    let level_diff = last_lv - first_lv;
    let exp_diff = last_exp - first_exp;
    let week_exp_percent = level_diff * 100 + exp_diff;
    let avg = week_exp_percent / 7;
    let required_day = Math.ceil((100 - last_exp) / avg);

    replier.reply(required_day);
  } catch (e) {
    replier.reply("오류 있을수도");
  }
}

// api 개편 이후
if (Data[0] == "!히스" || Data[0] == "!ㅎㅅ") {
  try {
    const newtoday = new Date();
    const Nyesterday1 = new Date(
      Date.parse(newtoday) - 1 * 1000 * 60 * 60 * 24
    );
    const Nyesterday2 = new Date(
      Date.parse(newtoday) - 2 * 1000 * 60 * 60 * 24
    );
    const Nyesterday3 = new Date(
      Date.parse(newtoday) - 3 * 1000 * 60 * 60 * 24
    );
    const Nyesterday4 = new Date(
      Date.parse(newtoday) - 4 * 1000 * 60 * 60 * 24
    );
    const Nyesterday5 = new Date(
      Date.parse(newtoday) - 5 * 1000 * 60 * 60 * 24
    );
    const Nyesterday6 = new Date(
      Date.parse(newtoday) - 6 * 1000 * 60 * 60 * 24
    );
    const Nyesterday7 = new Date(
      Date.parse(newtoday) - 7 * 1000 * 60 * 60 * 24
    );
    const Nyesterday8 = new Date(
      Date.parse(newtoday) - 8 * 1000 * 60 * 60 * 24
    );
    const Nyesterday9 = new Date(
      Date.parse(newtoday) - 9 * 1000 * 60 * 60 * 24
    );

    const noowhour = nowHour(newtoday);
    let ocid = searchOcid(Data[1]);

    let day1 = cccDate(Nyesterday7);
    let day2 = cccDate(Nyesterday6);
    let day3 = cccDate(Nyesterday5);
    let day4 = cccDate(Nyesterday4);
    let day5 = cccDate(Nyesterday3);
    let day6 = cccDate(Nyesterday2);
    let day7 = cccDate(Nyesterday1);

    if (noowhour < 1) {
      day1 = cccDate(Nyesterday8);
      day2 = cccDate(Nyesterday7);
      day3 = cccDate(Nyesterday6);
      day4 = cccDate(Nyesterday5);
      day5 = cccDate(Nyesterday4);
      day6 = cccDate(Nyesterday3);
      day7 = cccDate(Nyesterday2);
    }
    let lv1 = searchLv(ocid, day7);
    let lv2 = searchLv(ocid, day6);
    let lv3 = searchLv(ocid, day5);
    let lv4 = searchLv(ocid, day4);
    let lv5 = searchLv(ocid, day3);
    let lv6 = searchLv(ocid, day2);
    let lv7 = searchLv(ocid, day1);

    let exp1 = searchHis(ocid, day7);
    let exp2 = searchHis(ocid, day6);
    let exp3 = searchHis(ocid, day5);
    let exp4 = searchHis(ocid, day4);
    let exp5 = searchHis(ocid, day3);
    let exp6 = searchHis(ocid, day2);
    let exp7 = searchHis(ocid, day1);

    let mday1 = day1
      .replace("2023-", "")
      .replace("2024-", "")
      .replace("-", ".");
    let mday2 = day2
      .replace("2023-", "")
      .replace("2024-", "")
      .replace("-", ".");
    let mday3 = day3
      .replace("2023-", "")
      .replace("2024-", "")
      .replace("-", ".");
    let mday4 = day4
      .replace("2023-", "")
      .replace("2024-", "")
      .replace("-", ".");
    let mday5 = day5
      .replace("2023-", "")
      .replace("2024-", "")
      .replace("-", ".");
    let mday6 = day6
      .replace("2023-", "")
      .replace("2024-", "")
      .replace("-", ".");
    let mday7 = day7
      .replace("2023-", "")
      .replace("2024-", "")
      .replace("-", ".");

    let first_exp = exp7;
    let last_exp = exp1;
    let first_lv = lv7;
    let last_lv = lv1;

    let level_diff = last_lv - first_lv;
    let exp_diff = last_exp - first_exp;
    let week_exp_percent = level_diff * 100 + exp_diff;
    let avg = week_exp_percent / 7;
    let required_day = Math.ceil((100 - last_exp) / avg);

    replier.reply(
      "닉네임 : " +
        Data[1] +
        "\n" +
        mday1 +
        " : " +
        lv7 +
        "(" +
        exp7 +
        "%)" +
        "\n" +
        mday2 +
        " : " +
        lv6 +
        "(" +
        +exp6 +
        "%)" +
        "\n" +
        mday3 +
        " : " +
        lv5 +
        "(" +
        exp5 +
        "%)" +
        "\n" +
        mday4 +
        " : " +
        lv4 +
        "(" +
        exp4 +
        "%)" +
        "\n" +
        mday5 +
        " : " +
        lv3 +
        "(" +
        exp3 +
        "%)" +
        "\n" +
        mday6 +
        " : " +
        lv2 +
        "(" +
        exp2 +
        "%)" +
        "\n" +
        mday7 +
        " : " +
        lv1 +
        "(" +
        exp1 +
        "%)" +
        "\n" +
        "예상 레벨업 날짜 : " +
        changeDate(required_day)
    );
  } catch (e) {
    replier.reply("오류 있을수도");
  }
}

//캐릭터 히스 출력
function searchHis(ocid, time) {
  let val = org.jsoup.Jsoup.connect(
    "https://open.api.nexon.com/maplestory/v1/character/basic?" + ocid
  )
    .header("x-nxopen-api-key", apiKey)
    .data("ocid", ocid)
    .data("date", time)
    .ignoreContentType(true)
    .ignoreHttpErrors(true)
    .get()
    .text();

  let ans = JSON.parse(val);
  return ans.character_exp_rate;
}

//캐릭터 레벨 출력
function searchLv(ocid, time) {
  let val = org.jsoup.Jsoup.connect(
    "https://open.api.nexon.com/maplestory/v1/character/basic?" + ocid
  )
    .header("x-nxopen-api-key", apiKey)
    .data("ocid", ocid)
    .data("date", time)
    .ignoreContentType(true)
    .ignoreHttpErrors(true)
    .get()
    .text();

  let ans = JSON.parse(val);
  return ans.character_level;
}

//날짜 변환
function changeDate(e) {
  const year = e.getFullYear();
  const month = (e.getMonth() + 1).toString().padStart(2, "0");
  const day = e.getDate().toString().padStart(2, "0");
  const dateStr = year + "-" + month + "-" + day;

  return dateStr;
}

//현재 시간 출력
function nowHour(e) {
  return ("0" + e.getHours()).slice(-2);
}
