if (Data[0] == "!정보") {
  try {
    let rank = maplegg
      .select(
        "#user-profile > section > div.row.row-normal > div.col-lg-8 > div > div.row.ro" +
          "w-normal.user-additional > div:nth-child(4) > span"
      )
      .text();
    let lv = maplegg
      .select(
        "#user-profile > section > div.row.row-normal > div.col-lg-8 > div > div.user-s" +
          "ummary > ul > li:nth-child(2)"
      )
      .text();
    let job = maplegg
      .select(
        "#user-profile > section > div.row.row-normal > div.col-lg-8 > div > div.user-s" +
          "ummary > ul > li:nth-child(3)"
      )
      .text();
    let popular = maplegg
      .select(
        "#user-profile > section > div.row.row-normal > div.col-lg-8 > div > div.user-s" +
          "ummary > ul > li:nth-child(4)"
      )
      .text()
      .replace(/\D/g, "");
    let guild = maplegg
      .select(
        "#user-profile > section > div.row.row-normal > div.col-lg-8 > div > div.row.ro" +
          "w-normal.user-additional > div.col-lg-2.col-md-4.col-sm-4.col-6.mt-3 > a"
      )
      .text();
    let power = maplegg
      .select(
        "#app > div.card.border-bottom-0 > div > section > div.row.text-center > div:nt" +
          "h-child(1) > section > div > div > div > h1"
      )
      .text()
      .replace(/\D/g, "");
    let union = maplegg
      .select(
        "#app > div.card.border-bottom-0 > div > section > div.row.text-center > div:nt" +
          "h-child(3) > section > div > div > span"
      )
      .text();
    let server = maplegg
      .select("li.character-card-summary-item>span")
      .get(0)
      .text();
    replier.reply(
      "닉네임 : " +
        Data[1] +
        "\n레벨 : " +
        lv +
        "\n직업 : " +
        job +
        "\n서버 : " +
        server +
        "" +
        "\n직업랭킹(월드) : " +
        rank +
        "\n유니온 : " +
        union +
        "\n무릉 : " +
        power +
        "\n인기도 : " +
        popular +
        "\n길드 : " +
        guild +
        "\nmaple.gg/u/" +
        Data[1]
    );
  } catch (e) {
    try {
      let home = org.jsoup.Jsoup.connect(
        "https://maplestory.nexon.com/N23Ranking/World/Total?c=" +
          Data[1] +
          "&w=0"
      );
      let data0 = home
        .get()
        .select("div.rank_table_wrap")
        .select("tbody")
        .select("tr.search_com_chk");
      let dataJob = data0.select("td.left").select("dd").text().split("/")[1];
      let dataLv = data0.select("td").get(2).text();
      let dataStar = data0.select("td").get(4).text();
      let dataGuild = data0.select("td").get(5).text();

      replier.reply(
        "닉네임 : " +
          Data[1] +
          "\n레벨 : " +
          dataLv +
          "\n직업 : " +
          dataJob +
          "\n인기도 : " +
          dataStar +
          "\n길드 : " +
          dataGuild
      );
    } catch (e) {
      replier.reply("메이플안함");
    }
  }
}

//maple.gg개편 후

if (Data[0] == "!정보") {
  try {
    let rank = maplegg
      .select(
        "body > div.sc-75886672-0.fVGJyO > div.container-content > main > div > section.sc-4ee1f1fe-0.hicFkn > div:nth-child(3) > div.rank"
      )
      .text()
      .trim();

    let lv = maplegg
      .select(
        "body > div.sc-75886672-0.fVGJyO > div.container-content > div.sc-75886672-2.grCImu > section > div.sc-23cd8f14-0.fyObXE > div.sc-23cd8f14-1.fIGGDV > section > div.sc-62ba0c3f-5.ehEQNc > div.sc-62ba0c3f-6.Kpece > div.sc-62ba0c3f-8.uaHMG > span.level"
      )
      .text();

    let job = maplegg
      .select(
        "body > div.sc-75886672-0.fVGJyO > div.container-content > div.sc-75886672-2.grCImu > section > div.sc-23cd8f14-0.fyObXE > div.sc-23cd8f14-1.fIGGDV > section > div.sc-62ba0c3f-5.ehEQNc > div.sc-62ba0c3f-6.Kpece > div.sc-62ba0c3f-8.uaHMG > span.job"
      )
      .text();

    let popular = maplegg
      .select(
        "body > div.sc-75886672-0.fVGJyO > div.container-content > div.sc-75886672-2.grCImu > section > div.sc-23cd8f14-0.fyObXE > div.sc-23cd8f14-1.fIGGDV > section > div.sc-62ba0c3f-5.ehEQNc > div.sc-62ba0c3f-6.Kpece > div.sc-62ba0c3f-8.uaHMG > span.popularity"
      )
      .text()
      .replace(/[^0-9]/g, "");

    let guild = maplegg
      .select(
        "body > div.sc-75886672-0.fVGJyO > div.container-content > div.sc-75886672-2.grCImu > section > div.sc-23cd8f14-0.fyObXE > div.sc-23cd8f14-1.fIGGDV > section > div.sc-62ba0c3f-5.ehEQNc > div.sc-62ba0c3f-6.Kpece > div.sc-62ba0c3f-8.uaHMG > div > a > span"
      )
      .text();

    let server = maplegg
      .select(
        "body > div.sc-75886672-0.fVGJyO > div.container-content > div.sc-75886672-2.grCImu > section > div.sc-23cd8f14-0.fyObXE > div.sc-23cd8f14-1.fIGGDV > section > div.sc-62ba0c3f-5.ehEQNc > div.sc-62ba0c3f-6.Kpece > div.sc-62ba0c3f-7.iVtnVs > div.world > span"
      )
      .text();

    let power = maplegg
      .select(
        "body > div.sc-75886672-0.fVGJyO > div.container-content > main > div > section.sc-e8a6934a-0.iHQint > div.sc-32380e67-0.RYJNI > div.sc-32380e67-2.cMvdPK > div.content"
      )
      .text();

    let union = maplegg
      .select(
        "body > div.sc-75886672-0.fVGJyO > div.container-content > main > div > section.sc-e8a6934a-0.iHQint > div.sc-32380e67-0.cBGYZH > div.sc-32380e67-2.gyckEt > div.info"
      )
      .text();

    replier.reply(
      "닉네임 : " +
        Data[1] +
        "\n레벨 : " +
        lv +
        "\n직업 : " +
        job +
        "\n서버 : " +
        server +
        "" +
        "\n직업랭킹(월드) : " +
        rank +
        "\n유니온 : " +
        union +
        "\n무릉 : " +
        power +
        "\n인기도 : " +
        popular +
        "\n길드 : " +
        guild +
        "\nmaple.gg/u/" +
        Data[1]
    );
  } catch (e) {
    try {
      let home = org.jsoup.Jsoup.connect(
        "https://maplestory.nexon.com/N23Ranking/World/Total?c=" +
          Data[1] +
          "&w=0"
      );
      let data0 = home
        .get()
        .select("div.rank_table_wrap")
        .select("tbody")
        .select("tr.search_com_chk");
      let dataJob = data0.select("td.left").select("dd").text().split("/")[1];
      let dataLv = data0.select("td").get(2).text();
      let dataStar = data0.select("td").get(4).text();
      let dataGuild = data0.select("td").get(5).text();

      replier.reply(
        "닉네임 : " +
          Data[1] +
          "\n레벨 : " +
          dataLv +
          "\n직업 : " +
          dataJob +
          "\n인기도 : " +
          dataStar +
          "\n길드 : " +
          dataGuild
      );
    } catch (e) {
      replier.reply("메이플안함");
    }
  }
}
