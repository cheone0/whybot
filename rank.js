if (Data[0] == "!짱아랭킹") {
  if (Data[1] == "1") {
    try {
      let rankList = [];
      let mapleG = org.jsoup.Jsoup.connect(
        "https://maplestory.nexon.com/Common/Guild?934534&wid=3"
      )
        .get()
        .select("div.guild_user_list")
        .select("tbody");
      let muname = mapleG.select("tr").get(0).select("a").text();
      let muLv = mapleG.select("tr").get(0).select("td").get(2).text();
      for (i = 0; i < 20; i++) {
        let muname = mapleG.select("tr").get(i).select("a").text();
        let muLv = mapleG.select("tr").get(i).select("td").get(2).text();
        rankList[i] = i + 1 + "위: [" + muname + "] " + muLv + "\n";
      }
      replier.reply(rankList.join(""));
    } catch (e) {
      replier.reply("에러");
    }
  }

  if (Data[1] == "2") {
    try {
      let rankList = [];
      let mapleG = org.jsoup.Jsoup.connect(
        "https://maplestory.nexon.com/Common/Guild?gid=934534&wid=3&orderby=0&page=2"
      )
        .get()
        .select("div.guild_user_list")
        .select("tbody");
      for (i = 0; i < 20; i++) {
        let muname = mapleG.select("tr").get(i).select("a").text();
        let muLv = mapleG.select("tr").get(i).select("td").get(2).text();
        rankList[i] = i + 21 + "위: [" + muname + "] " + muLv + "\n";
      }
      replier.reply(rankList.join(""));
    } catch (e) {
      replier.reply("에러");
    }
  }
  if (Data[1] == "3") {
    try {
      let rankList = [];
      let mapleG = org.jsoup.Jsoup.connect(
        "https://maplestory.nexon.com/Common/Guild?gid=934534&wid=3&orderby=0&page=3"
      )
        .get()
        .select("div.guild_user_list")
        .select("tbody");
      for (i = 0; i < 20; i++) {
        let muname = mapleG.select("tr").get(i).select("a").text();
        let muLv = mapleG.select("tr").get(i).select("td").get(2).text();
        rankList[i] = i + 41 + "위: [" + muname + "] " + muLv + "\n";
      }
      replier.reply(rankList.join(""));
    } catch (e) {
      replier.reply("에러");
    }
  }
  if (Data[1] == "4") {
    try {
      let rankList = [];
      let mapleG = org.jsoup.Jsoup.connect(
        "https://maplestory.nexon.com/Common/Guild?gid=934534&wid=3&orderby=0&page=4"
      )
        .get()
        .select("div.guild_user_list")
        .select("tbody");
      for (i = 0; i < 20; i++) {
        let muname = mapleG.select("tr").get(i).select("a").text();
        let muLv = mapleG.select("tr").get(i).select("td").get(2).text();
        rankList[i] = i + 61 + "위: [" + muname + "] " + muLv + "\n";
      }
      replier.reply(rankList.join(""));
    } catch (e) {
      replier.reply("에러");
    }
  }
}
