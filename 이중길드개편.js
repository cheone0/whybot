if (Data[0] == "!ㅇ") {
  let home1 = org.jsoup.Jsoup.connect("https://maple.gg/u/" + Data[i]);
  let ment = [];
  //검색결과가 없을 때
  for (i = 1; i < Data.length; i++) {
    try {
      let dataStar1 = home1
        .get()
        .select(
          "body > div.sc-75886672-0.fVGJyO > div.container-content > div.sc-75886672-2.grCImu > section > div.sc-23cd8f14-0.fyObXE > div.sc-23cd8f14-1.fIGGDV > section > div.sc-62ba0c3f-5.ehEQNc > div.sc-62ba0c3f-6.Kpece > div.sc-62ba0c3f-8.uaHMG > span.popularity"
        )
        .text()
        .replace(/[^0-9]/g, "");
      let dataGuild1 = home1
        .get()
        .select(
          "body > div.sc-75886672-0.fVGJyO > div.container-content > div.sc-75886672-2.grCImu > section > div.sc-23cd8f14-0.fyObXE > div.sc-23cd8f14-1.fIGGDV > section > div.sc-62ba0c3f-5.ehEQNc > div.sc-62ba0c3f-6.Kpece > div.sc-62ba0c3f-8.uaHMG > div > a > span"
        )
        .text();

      ment[i - 1] =
        Data[i] + " / 인기도 : " + dataStar1 + " / 길드 : " + dataGuild1 + "\n";
    } catch (e) {
      ment[i - 1] = Data[i] + " 캐릭터를 찾지 못했습니다. \n";
    }
  }
  replier.reply(ment.join(""));
}

if (Data[0] == "!ㅇ") {
  let home1 = org.jsoup.Jsoup.connect("https://maple.gg/u/" + Data[i]);
  let ment = [];
  //검색결과가 없을 때
  for (i = 1; i < Data.length; i++) {
    try {
      let dataStar1 = home1
        .get()
        .select(
          "body > div.sc-75886672-0.fVGJyO > div.container-content > div.sc-75886672-2.grCImu > section > div.sc-23cd8f14-0.fyObXE > div.sc-23cd8f14-1.fIGGDV > section > div.sc-62ba0c3f-5.ehEQNc > div.sc-62ba0c3f-6.Kpece > div.sc-62ba0c3f-8.uaHMG > span.popularity"
        )
        .text()
        .replace(/[^0-9]/g, "");
      let dataGuild1 = home1
        .get()
        .select(
          "body > div.sc-75886672-0.fVGJyO > div.container-content > div.sc-75886672-2.grCImu > section > div.sc-23cd8f14-0.fyObXE > div.sc-23cd8f14-1.fIGGDV > section > div.sc-62ba0c3f-5.ehEQNc > div.sc-62ba0c3f-6.Kpece > div.sc-62ba0c3f-8.uaHMG > div > a > span"
        )
        .text();

      ment[i - 1] =
        Data[i] + " / 인기도 : " + dataStar1 + " / 길드 : " + dataGuild1 + "\n";
    } catch (e) {
      ment[i - 1] = Data[i] + " 캐릭터를 찾지 못했습니다. \n";
    }
  }
  replier.reply(ment.join(""));
}

//이중길드 api
if (Data[0] == "test") {
  let ment = [];
  const nowtime = nowDate();
  //검색결과가 없을 때
  for (i = 1; i < Data.length; i++) {
    try {
      let pro = searchPro(Data[i]);
      let dataStar1 = searchPopularity(Data[i]).popularity;
      let dataGuild1 = pro.character_guild_name;

      if (dataStar1 == undefined) {
        let dataStar1 = "-";
      }
      if (dataGuild1 == undefined || dataGuild1 == null) {
        let dataGuild1 = "-";
      }

      ment[i - 1] =
        Data[i] + " / 인기도 : " + dataStar1 + " / 길드 : " + dataGuild1 + "\n";
    } catch (e) {
      replier.reply(e);
    }
  }
  replier.reply(ment.join(""));
}
