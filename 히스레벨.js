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
    let maplegg = org.jsoup.Jsoup.connect("https:maple.gg/u/천필두").get();
    let test = maplegg
      .select(
        "body > div.sc-ec10ac04-0.cShhcg > div.container-content > div.sc-ec10ac04-2.bpLecu > section > div.sc-368b05c7-0.iOVGLn > div.sc-368b05c7-1.XIEde > section > div.sc-4d540805-5.bQFvxx > div.sc-4d540805-6.NcQCH > div.sc-4d540805-8.eXVKIn > span.job"
      )
      .text();
    replier.reply(test);
  } catch (e) {
    replier.reply(e);
  }
}

if (Data[0] == "!히스" || Data[0] == "!ㅎㅅ") {
  try {
    const ocid = searchOcid(Data[1]);
    const sday = getCurrentWeek();

    let day1 = sday[0];
    let day2 = sday[1];
    let day3 = sday[2];
    let day4 = sday[3];
    let day5 = sday[4];
    let day6 = sday[5];
    let day7 = sday[6];

    let lv1 = searchLv(ocid, day1);
    let lv2 = searchLv(ocid, day2);
    let lv3 = searchLv(ocid, day3);
    let lv4 = searchLv(ocid, day4);
    let lv5 = searchLv(ocid, day5);
    let lv6 = searchLv(ocid, day6);
    let lv7 = searchLv(ocid, day7);

    let exp1 = searchHis(ocid, day1);
    let exp2 = searchHis(ocid, day2);
    let exp3 = searchHis(ocid, day3);
    let exp4 = searchHis(ocid, day4);
    let exp5 = searchHis(ocid, day5);
    let exp6 = searchHis(ocid, day6);
    let exp7 = searchHis(ocid, day7);

    let mday1 = sday[0]
      .replace("2023-", "")
      .replace("2024-", "")
      .replace("-", ".");
    let mday2 = sday[1]
      .replace("2023-", "")
      .replace("2024-", "")
      .replace("-", ".");
    let mday3 = sday[2]
      .replace("2023-", "")
      .replace("2024-", "")
      .replace("-", ".");
    let mday4 = sday[3]
      .replace("2023-", "")
      .replace("2024-", "")
      .replace("-", ".");
    let mday5 = sday[4]
      .replace("2023-", "")
      .replace("2024-", "")
      .replace("-", ".");
    let mday6 = sday[5]
      .replace("2023-", "")
      .replace("2024-", "")
      .replace("-", ".");
    let mday7 = sday[6]
      .replace("2023-", "")
      .replace("2024-", "")
      .replace("-", ".");

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
        "%)"
    );
  } catch (e) {
    replier.reply("오류 있을수도");
  }
}

let maplegg = org.jsoup.Jsoup.connect(
  "https://maplehistory.kr/character/" + ocid
).get();
let hh = maplegg.select("#characterUsefulInfo > div > div:nth-child(2)").text();

document.querySelector("#characterUsefulInfo > div > div:nth-child(2)");
