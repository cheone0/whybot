if (Data[0] == "!랭킹") {
  switch (Data[1]) {
    case "무무":
      guildKey = 456159;
      wid = 0;
      break;

    case "니니":
      guildKey = 29906;
      wid = 44;
      break;

    case "곤란":
      guildKey = 14512;
      wid = 50;
      break;

    case "편안":
      guildKey = 8893;
      wid = 50;
      break;

    case "짱아":
      guildKey = 934534;
      wid = 3;
      break;

    case "설렘":
      guildKey = 326440;
      wid = 0;
      break;

    default:
  }

  try {
    if (Data[2] == null) {
      replier.reply("숫자 입력해줘");
    } else {
      let rankList = [];
      let mapleG = org.jsoup.Jsoup.connect(
        "https://maplestory.nexon.com/Common/Guild?gid=" +
          guildKey +
          "&wid=" +
          wid +
          "&orderby=0&page=" +
          Data[2]
      )
        .get()
        .select("div.guild_user_list")
        .select("tbody");
      let muname = mapleG.select("tr").get(0).select("a").text();
      let muLv = mapleG.select("tr").get(0).select("td").get(2).text();
      for (i = 1; i < mapleG.select("tr").length + 1; i++) {
        let muname = mapleG
          .select("tr")
          .get(i - 1)
          .select("a")
          .text();
        let muLv = mapleG
          .select("tr")
          .get(i - 1)
          .select("td")
          .get(2)
          .text();
        rankList[i - 1] =
          i + 20 * (Data[2] - 1) + "위: [" + muname + "] " + muLv + "\n";
      }
      replier.reply(rankList.join(""));
    }
  } catch (e) {
    replier.reply("에러");
  }
}
