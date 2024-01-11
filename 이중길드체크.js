// 메이플 홈페이지에서 조회

if (Data[0] == "!ㅇ") {
  let ment = [];
  for (i = 1; i < Data.length; i++) {
    let home1 = org.jsoup.Jsoup.connect(
      "https://maplestory.nexon.com/N23Ranking/World/Total?c=" +
        Data[i] +
        "&w=0"
    );

    //검색결과가 없을 때
    let nonList = home1
      .get()
      .select("#container > div > div > div:nth-child(4) > div")
      .text();

    if (nonList == "랭킹정보가 없습니다.") {
      ment[i - 1] = Data[i] + " 캐릭터를 찾지 못했습니다. \n";
    } else {
      let data01 = home1
        .get()
        .select("div.rank_table_wrap")
        .select("tbody")
        .select("tr.search_com_chk");
      let dataStar1 = data01.select("td").get(4).text();
      let dataGuild1 = data01.select("td").get(5).text();

      ment[i - 1] =
        Data[i] + " / 인기도 : " + dataStar1 + " / 길드 : " + dataGuild1 + "\n";
    }
  }

  try {
    replier.reply(ment.join(""));
  } catch (e) {
    replier.reply("뭔가 잘못댐");
  }
}

// maple.gg에서 조회

if (Data[0] == "!ㅇ") {
  let ment = [];
  for (i = 1; i < Data.length; i++) {
    let home1 = org.jsoup.Jsoup.connect("https://maple.gg/u/" + Data[i]);

    //검색결과가 없을 때

    let nonList = home1
      .get()
      .select(
        "body > div.sc-75886672-0.fVGJyO > div.container-content > div > div > h2"
      )
      .text();

    if (nonList == "PAGE NOT FOUND") {
      ment[i - 1] = Data[i] + " 캐릭터를 찾지 못했습니다. \n";
    } else {
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
    }
  }

  try {
    replier.reply(ment.join(""));
  } catch (e) {
    replier.reply("뭔가 잘못댐");
  }
}

if (msg == "!test") {
  let home1 = org.jsoup.Jsoup.connect("https://maple.gg/u/ㅇ나롱ㄴ젲ㄷ");
  if (hom1 == 404) {
    replier.reply(nonList);
  }
}
