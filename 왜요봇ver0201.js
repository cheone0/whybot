importPackage(org.jsoup);
const scriptName = "왜요봇";
const apiKey =
  "live_bac10c4d43549c98b6c71003faff7264dad70f28dd6c5a9c4913b94ce9209adad790ad852b833191366ec813fecf53b7";
// resopnse 매개변수 room : 채팅이 날라온 채팅방의 방이름 msg : 채팅 내용 sender : 채팅을 보낸 사람
// isGroupChat : 채팅방이 단체채팅방인지 아닌지 알려줌 replier : 답장 객체. replier.reply(보낼내용) 으로
// 답장할 수 있음.

function response(room, msg, sender, isGroupChat, replier) {
  var Data = msg.split(" ");

  let originS = [
    5, 1, 1, 1, 2, 2, 2, 3, 3, 10, 3, 3, 4, 4, 4, 4, 4, 4, 5, 15, 5, 5, 5, 5, 5,
    6, 6, 6, 7, 20,
  ];
  let originP = [
    100, 30, 35, 40, 45, 50, 55, 60, 65, 200, 80, 90, 100, 110, 120, 130, 140,
    150, 160, 350, 170, 180, 190, 200, 210, 220, 230, 240, 250, 500,
  ];
  let masteryS = [
    3, 1, 1, 1, 1, 1, 1, 2, 2, 5, 2, 2, 2, 2, 2, 2, 2, 2, 3, 8, 3, 3, 3, 3, 3,
    3, 3, 3, 4, 10,
  ];
  let masteryP = [
    50, 15, 18, 20, 23, 25, 28, 30, 33, 100, 40, 45, 50, 55, 60, 65, 70, 75, 80,
    175, 85, 90, 95, 100, 105, 110, 115, 120, 125, 250,
  ];
  let fiveS = [
    4, 1, 1, 1, 2, 2, 2, 3, 3, 8, 3, 3, 3, 3, 3, 3, 3, 3, 4, 12, 4, 4, 4, 4, 4,
    5, 5, 5, 6, 15,
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

  //날짜 변환
  function cccDate(e) {
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
  if (Data[0] == "!헥사") {
    try {
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

      replier.reply(
        Data[1] +
          "레벨에서 " +
          Data[2] +
          "레벨까지 필요한\n" +
          "솔 에르다와 조각의 갯수는\n\n" +
          "오리진 : 솔 " +
          answerOriginS +
          "개, 조각 " +
          answerOriginP +
          "개\n" +
          "마스터리 : 솔 " +
          answermasteryS +
          "개, 조각 " +
          answermasteryP +
          "개\n" +
          "5차 : 솔 " +
          answerFiveS +
          "개, 조각 " +
          answerFiveP +
          "개\n" +
          "공용 : 솔 " +
          answerPublicS +
          "개, 조각 " +
          answerPublicP +
          "개"
      );
    } catch (e) {
      replier.reply("숫자 다시 입력해봐.");
    }
  }
  if (Data[0] == "!랭킹") {
    let guildKey = "";
    let wid = "";
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
      case "리더":
        guildKey = 367847;
        wid = 0;
        break;
      case "게임":
        guildKey = 402844;
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

  if (Data[0] == "!ㅇ") {
    var ment = [];
    var nowtime = nowDate();

    //검색결과가 없을 때
    for (i = 1; i < Data.length; i++) {
      try {
        let pro = searchPro(Data[i]);
        var dataStar1 = searchPopularity(Data[i]).popularity;
        var dataGuild1 = pro.character_guild_name;

        if (dataStar1 == undefined) {
          var dataStar1 = "-";
        }
        if (dataGuild1 == undefined || dataGuild1 == null) {
          var dataGuild1 = "-";
        }
        ment[i - 1] =
          Data[i] +
          " / 인기도 : " +
          dataStar1 +
          " / 길드 : " +
          dataGuild1 +
          "\n";
      } catch (e) {
        replier.reply(e);
      }
    }
    replier.reply(ment.join(""));
  }

  if (Data[0] == "!정보" || Data[0] == "!ㅈㅂ") {
    try {
      function yesterday() {
        var surverTime = org.jsoup.Jsoup.connect(
          "https://www.google.com/search?q=%EC%96%B4%EC%A0%9C%EB%82%A0%EC%A7%9C&sca_esv=595616611&sxsrf=AM9HkKnOVPumBxbKZaRfs3qYupw0jokHNg%3A1704362083270&ei=Y4CWZfKMELPR1e8P1oifyAg&udm=&ved=0ahUKEwiyyqrEu8ODAxWzaPUHHVbEB4kQ4dUDCBA&uact=5&oq=%EC%96%B4%EC%A0%9C%EB%82%A0%EC%A7%9C&gs_lp=Egxnd3Mtd2l6LXNlcnAiDOyWtOygnOuCoOynnDIGEAAYBxgeMggQABgHGB4YDzIGEAAYBxgeMgYQABgFGB5IyhRQvwZY0xJwBngBkAECmAGKAaABhgmqAQQwLjEwuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICEBAAGIAEGBQYhwIYsQMYgwHCAgoQABiABBiKBRhDwgINEAAYgAQYDRixAxiDAcICBxAAGIAEGA3CAggQABiABBiiBMICCBAAGAcYHhgK4gMEGAAgQYgGAZAGCg&sclient=gws-wiz-serp"
        ).get();
        var hh = surverTime
          .select(
            "#rso > div.ULSxyf > div > div > div > div > div > div.vk_bk.dDoNo.FzvWSb"
          )
          .text();
        var yesterday = hh.split(" ");
        var year = yesterday[1].replace(/[^0-9]/, "");
        var month = ("0" + yesterday[2].replace(/[^0-9]/, "")).slice(-2);
        var day = ("0" + yesterday[3].replace(/[^0-9]/, "")).slice(-2);

        return year + "-" + month + "-" + day;
      }
      var nowtime = yesterday();
      let pro = searchPro(Data[1]);
      let popular = searchPopularity(Data[1]).popularity;
      let dojang = searchDojang(Data[1]).dojang_best_floor;
      let exp = pro.character_exp_rate;
      let name = pro.chracter_name;
      let job = pro.character_class;
      let world = pro.world_name;
      let lv = pro.character_level;
      let guild = pro.character_guild_name;
      let union = searchUnion(Data[1]).union_level;
      let power = searchStat(Data[1]).stat_value;

      if (guild == null) {
        guild = "-";
      }

      replier.reply(
        "닉네임 : " +
          Data[1] +
          "\n레벨 : " +
          lv +
          "(" +
          exp +
          "%)" +
          "\n직업 : " +
          job +
          "\n서버 : " +
          world +
          "\n유니온 : " +
          union +
          "\n무릉 : " +
          dojang +
          "층" +
          "\n전투력 : " +
          won(power) +
          "\n인기도 : " +
          popular +
          "\n길드 : " +
          guild +
          "\nmaple.gg/u/" +
          Data[1]
      );
    } catch (e) {
      var nowtime = nowDate();
      let pro = searchPro(Data[1]);
      let popular = searchPopularity(Data[1]).popularity;
      let dojang = searchDojang(Data[1]).dojang_best_floor;
      let exp = pro.character_exp_rate;
      let name = pro.chracter_name;
      let job = pro.character_class;
      let world = pro.world_name;
      let lv = pro.character_level;

      let union = searchUnion(Data[1]).union_level;

      replier.reply("닉네임 : " + Data[1] + "\nmaple.gg/u/" + Data[1]);
    }
  }

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

      let finalAvgday = changeDate(required_day).replace(/-/g, ".");

      if (required_day == Infinity) {
        finalAvgday = "사냥 좀 해라";
      }

      if (exp1 == undefined) {
        replier.reply("몰라");
      } else {
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
            finalAvgday
        );
      }
    } catch (e) {
      replier.reply("오류 있을수도");
    }
  }

  if (Data[0] == "!골라줘" || Data[0] == "!ㄱㄹㅈ") {
    try {
      var vvs = [];
      for (i = 1; i < Data.length; i++) {
        vvs.push(Data[i]);
      }
      var nnn = Math.floor(Math.random() * vvs.length);
      var nnnM = vvs[nnn];
      replier.reply(nnnM);
    } catch (error) {
      replier.reply("글쎄");
    }
  }

  if (Data[0] == "!강화" || Data[0] == "!ㄱㅎ") {
    let S = Number(Data[1]);
    let S2 = Number(Data[2]);
    let L = Number(Data[3]);
    let meso = 0;
    let distroy = 0;
    let stack = [];

    function click() {
      meso = 1000 + (Math.pow(L, 3) * (S + 1)) / 25;

      return meso;
    }

    function click_1() {
      meso = 1000 + (Math.pow(L, 3) * Math.pow(S + 1, 2.7)) / 25;

      return meso;
    }

    function click_1(x) {
      let arr1 = [400, 220, 150, 110, 75, 200]; //10 11 12 13 14 15~21
      meso = 1000 + (Math.pow(L, 3) * Math.pow(S + 1, 2.7)) / arr1[x];

      return meso;
    }

    try {
      if (S < 0 || S2 > 22) {
        replier.reply("숫자 잘못 입력");
      } else if (S == S2) {
        replier.reply("숫자 잘못 입력");
      } else if (S > S2) {
        replier.reply("숫자 잘못 입력");
      } else {
        while (S < S2) {
          if (S < 3) {
            meso = meso + click();
            let R = Math.random() * 100;
            if (R > 95 - 5 * S) {
            } else {
              S++;
            }
          }
          if (S > 2 && S < 10) {
            meso = meso + click();
            let R = Math.random() * 100;
            if (R > 100 - 5 * S) {
            } else {
              S++;
            }
          }
          if (S == 10) {
            meso = meso + click_1(0);
            let R = Math.random() * 100;
            if (R > 100 - 5 * S) {
            } else {
              S++;
            }
          }
          if (S == 11) {
            meso = meso + click_1(1);
            let R = Math.random() * 100;
            if (R > 100 - 5 * S) {
            } else {
              S++;
            }
          }
          if (S == 12) {
            meso = meso + click_1(2);
            let R = Math.random() * 100;
            if (R > 100 - 5 * S) {
            } else {
              S++;
            }
          }
          if (S == 13) {
            meso = meso + click_1(3);
            let R = Math.random() * 100;
            if (R > 100 - 5 * S) {
            } else {
              S++;
            }
          }
          if (S == 14) {
            meso = meso + click_1(4);
            let R = Math.random() * 100;
            if (R > 100 - 5 * S) {
            } else {
              S++;
            }
          }

          if (S > 14 && S < 22) {
            if (S == 15) {
              meso = meso + click_1(5);
              let R = Math.random() * 100;

              if (
                stack[stack.length - 1] == 1 &&
                stack[stack.length - 2] == 1
              ) {
                S++;
                stack.push(0);
              } else if (R <= 2.1) {
                distroy++;
                S = 12;
              } else if (R >= 70) {
                S++;
                stack.push(0);
              } else {
                stack.push(0);
              }
            }

            if (S == 16) {
              meso = meso + click_1(5);
              let R = Math.random() * 100;

              if (
                stack[stack.length - 1] == 1 &&
                stack[stack.length - 2] == 1
              ) {
                S++;
                stack.push(0);
              } else if (R <= 2.1) {
                distroy++;
                stack.push(0);
                S = 12;
              } else if (R >= 70) {
                S++;
                stack.push(0);
              } else {
                S--;
                stack.push(1);
              }
            }

            if (S == 17) {
              meso = meso + click_1(5);
              let R = Math.random() * 100;

              if (
                stack[stack.length - 1] == 1 &&
                stack[stack.length - 2] == 1
              ) {
                S++;
                stack.push(0);
              } else if (R <= 2.1) {
                distroy++;
                stack.push(0);
                S = 12;
              } else if (R >= 70) {
                S++;
                stack.push(0);
              } else {
                S--;
                stack.push(1);
              }
            }

            if (S == 18) {
              meso = meso + click_1(5);
              let R = Math.random() * 100;

              if (
                stack[stack.length - 1] == 1 &&
                stack[stack.length - 2] == 1
              ) {
                S++;
                stack.push(0);
              } else if (R <= 2.8) {
                distroy++;
                stack.push(0);
                S = 12;
              } else if (R >= 70) {
                S++;
                stack.push(0);
              } else {
                S--;
                stack.push(1);
              }
            }
            if (S == 19) {
              meso = meso + click_1(5);
              let R = Math.random() * 100;

              if (
                stack[stack.length - 1] == 1 &&
                stack[stack.length - 2] == 1
              ) {
                S++;
                stack.push(0);
              } else if (R <= 2.8) {
                distroy++;
                stack.push(0);
                S = 12;
              } else if (R >= 70) {
                S++;
                stack.push(0);
              } else {
                S--;
                stack.push(1);
              }
            }

            if (S == 20) {
              meso = meso + click_1(5);
              let R = Math.random() * 100;
              if (R <= 7) {
                distroy++;
                S = 12;
              } else if (R >= 70) {
                S++;
              } else {
              }
            }

            if (S == 21) {
              meso = meso + click_1(5);
              let R = Math.random() * 100;
              if (R <= 7) {
                distroy++;
                S = 12;
              } else if (R >= 70) {
                S++;
              } else {
                S--;
              }
            }
          }
        }
      }

      replier.reply(
        " 사용한 메소 값 : " +
          won(meso) +
          "메소" +
          "\n" +
          " 현재 스타포스 : " +
          S +
          "\n" +
          " 터진횟수 : " +
          distroy
      );
    } catch (e) {
      replier.reply(e);
    }
  }

  if (msg == "!뭐먹지" || msg == "!ㅁㅁㅈ") {
    let sValue = [
      "곱창떡볶이",
      "극성비",
      "칠흑냠",
      "여명냠",
      "리스트레인트링 4레벨",
      "아웃백",
      "스테이크에 크림파스타",
      "수제버거",
      "말해줘도 안먹을거 다 알아",

      "에그드랍",
      "아메리카노",
      "케이크",
      "해물파전에 칼국수",
      "월남쌈",
      "호떡",
      "냉모밀과 돈가스",
      "들기름막국수",
      "짜장밥",
      "참치절임덮밥",
      "마제소바",
      "묵은지김치찜",
      "베이글에 크림치즈",
      "잼 바른 빵에 우유 부어 먹기",
      "재획비",
      "자는 사람은 꿈을 꾸지만 재획하는 사람은 꿈을 이룬다.",
      "콩밥",
      "해쉬브라운과 소세지 계란스크램블",
      "비비큐 황올",
      "핫크리스피버거",
      "뿔꼬끼삐짜",
      "베이컨볶음밥 ",
      "김치볶음밥 ",
      "간장계란밥 ",
      "소고기볶음밥",
      "스팸볶음밥",

      "새우볶음밥",
      "카레덮밥",
      "짜장밥",
      "오징어덮밥",
      "오므라이스",
      "육회비빔밥",
      "김치알밥",
      "아보카도연어덮밥",
      "비빔밥",

      "쌈밥",
      "미역국",

      "설렁탕",

      "뼈해장국",

      "육개장",
      "갈비탕",
      "삼계탕",
      "추어탕",
      "꽃게탕",
      "홍합탕",

      "된장찌개",
      "차돌된장찌개",
      "꽃게된장찌개",
      "김치찌개",
      "순두부찌개",
      "부대찌개",
      "청국장",
      "동태찌개",
      "비지찌개",
      "고추장찌개",
      "짜글이찌개",
      "버섯불고기전골",
      "소고기찌개",
      "밀폐유나베",

      "불고기전골",

      "만두전골",

      "곱창전골",
      "대창전골",

      "불낙전골",
      "삼겹살",
      "수육",
      "스테이크구이",
      "찹스테이크",
      "갈비찜",
      "돼지갈비",
      "LA갈비",
      "바베큐",
      "김치등갈비찜",
      "묵은지돼지갈비찜",
      "매운쪽갈비찜",
      "폭립",
      "제육볶음",
      "소불고기",
      "돼지불고기",
      "닭볶음탕",
      "닭갈비",
      "훈제오리구이",

      "차돌숙주볶음",
      "찜닭",
      "소세지야채볶음",
      "돈까스",
      "떡갈비",
      "함박스테이크",
      "동그랑땡",

      "곱창구이",
      "막창구이",
      "족발",
      "치킨",
      "닭강정",
      "생선까스",
      "연어스테이크",
      "오징어볶음",

      "쭈꾸미볶음",
      "아귀찜",
      "해물찜",
      "고등어구이",
      "고등어조림",

      "갈치구이",
      "갈치조림",
      "장어구이",

      "낙곱새",
      "바지락술찜",
      "바지락칼국수",
      "꽃게찜",
      "대게찜",
      "랍스터찜",
      "간장게장",
      "양념게장",
      "새우장",
      "회",
      "생굴",
      "잡채",
      "골뱅이무침",
      "곱창볶음",
      "순대볶음",
      "닭똥집볶음",
      "닭발",

      "월남쌈",
      "도토리묵무침",
      "쌈무말이",
      "계란찜",
      "계란후라이",
      "계란말이",
      "부추계란볶음",
      "스크램블",
      "스팸구이에 뜨신밥 ",
      "치킨너겟",
      "치킨텐더",
      "애호박전",
      "김치전",
      "부추전",

      "베이컨팽이버섯말이",
      "맛살하트전",
      "참치마요",
      "라면",
      "주먹밥",
      "유부초밥",
      "김밥",
      "떡볶이",
      "라볶이",
      "떡꼬치",
      "소떡소떡",
      "샌드위치",
      "마늘빵",
      "토스트",
      "냉면",
      "잔치국수",
      "비빔국수",
      "열무국수",
      "콩국수",
      "수제비",
      "비빔만두",
      "쫄면",
      "칼국수",
      "떡국",
      "만둣국",
      "우동",
      "핫도그",
      "찐만두",
      "떡튀순",
      "비빔만두에 김밥",

      "순대",
      "짜장면",
      "짬뽕",
      "마라탕",
      "탕수육",
      "꿔바로우",
      "마파두부",
      "계란토마토볶음밥",

      "깐풍기",

      "유린기",
      "중화요리ㄱㄱ",

      "파스타",

      "감바스",
      "스테이크",
      "도미노피자",

      "피자",
      "함박스테이크",
      "리조또",
      "스테이크",
      "샐러드",
      "햄버거",
      "부리또",

      "버거킹",
      "콘샐러드",
      "초밥",
      "라멘",
      "나가사키짬뽕",

      "연어덮밥",
      "새우장덮밥",
      "메밀소바",
      "돈카츠",

      "볶음우동",
      "카레우동",
      "가츠동",
      "규동",
      "쌀국수",
      "팟타이",
      "타코",
      "감자탕",
      "붕어빵 \n슈붕 웩 팥붕최고",
      "나도 고민중",
    ];
    var menu = sValue[Math.floor(Math.random() * sValue.length)];

    replier.reply(menu);
  }
  if (msg == "!왜요") {
    replier.reply(
      "!정보 (캐릭명)\n전반적인 정보 조회\n\n!히스 (캐릭명)\n경험치 히스토리 \n\n!뭐먹지\n" +
        "메뉴 추천\n\n!포탈\n유용한 사이트 모음\n\n!실방무 A B ...\n맨 앞에는 실제방무와" +
        " 추가되는 방무를 띄어쓰기로 나열하면 실방무 계산.\n게임내 방무표기가 86이고 스킬에 방깍이 적용되면 !실방무 86 30 이렇게 써서 실방" +
        "무 확인가능\n\n!보스방무 A\nex)!보스방무 96.43\n실방무에 따른 보스에 적용되는 데미지 계산." +
        "\n" +
        "\n" +
        "!강화 (현재스타포스) (목표스타포스) (장비레벨)" +
        "\n" +
        "ex)!강화 17 22 250" +
        "\n" +
        "최대 22성까지, mvp,샤타,파방 미적용" +
        "\n" +
        "\n" +
        "!헥사 A B" +
        "\n" +
        "A에서 B까지 필요한 솔 에르다와 조각의 갯수" +
        "\n" +
        "ex)!헥사 0 30" +
        "\n\n" +
        "!골라줘 A B C...." +
        "\n" +
        "띄어쓰기가 기준이니 유의해서 사용" +
        "\n" +
        "ex)!골라줘 피방가서메이플하기 그냥집에서하기" +
        "\n" +
        "ex)!골라줘 라면 잔치국수 비빔국수" +
        "\n\n" +
        "!랭킹 (길드이름) (숫자)" +
        "\n" +
        "ex)!랭킹 리더 1" +
        "\n" +
        "1페이지당 20명까지, 최대 숫자는 10까지(길드가 200명 풀일 경우에) 예를 들어 3을 적으면 60위~80위가 나옵니다. 적용하고 싶은 길드는 따로 문의해주세요." +
        "\n\n" +
        "히스 뭐먹지 정보는 초성으로 대체 가능 ex)!ㅎㅅ/!ㅈㅂ/!ㅁㅁㅈ"
    );
  }

  if (msg == "!포탈" || msg == "!ㅍㅌ") {
    replier.reply("http://mapleportal.net/");
  }

  if (Data[0] == "!실방무" || Data[0] == "!ㅅㅂㅁ") {
    result = 1 - Data[1] / 100;
    try {
      for (i = 2; i < Data.length; i++) {
        result = result * (1 - Data[i] / 100);
      }
      sum = 100 - result * 100;
      replier.reply("계산 결과 : " + sum.toFixed(1) + "%");
    } catch (e) {
      replier.reply("흠");
    }
  }

  if (Data[0] == "!보스방무" || Data[0] == "!ㅂㅅㅂㅁ") {
    try {
      replier.reply(
        "카오스 벨룸 : " +
          Math.floor(100 - 200 * (1 - Data[1] / 100)) +
          "%데미지\n스데미루윌진듄더슬검마 " +
          ": " +
          Math.floor(100 - 300 * (1 - Data[1] / 100)) +
          "%데미지\n세칼카 : " +
          Math.floor(100 - 380 * (1 - Data[1] / 100)) +
          "%데미지"
      );
    } catch (e) {
      replier.reply("흠");
    }
  }

  if (Data[0] == "!ㅎ") {
    var ment = [];
    for (i = 1; i < Data.length; i++) {
      var home1 = org.jsoup.Jsoup.connect(
        "https://maplestory.nexon.com/N23Ranking/World/Total?c=" +
          Data[i] +
          "&w=0"
      );

      //검색결과가 없을 때
      var nonList = home1
        .get()
        .select("#container > div > div > div:nth-child(4) > div")
        .text();

      if (nonList == "랭킹정보가 없습니다.") {
        ment[i - 1] = Data[i] + " 캐릭터를 찾지 못했습니다. \n";
      } else {
        var data01 = home1
          .get()
          .select("div.rank_table_wrap")
          .select("tbody")
          .select("tr.search_com_chk");
        var dataStar1 = data01.select("td").get(4).text();
        var dataGuild1 = data01.select("td").get(5).text();

        ment[i - 1] =
          Data[i] +
          " / 인기도 : " +
          dataStar1 +
          " / 길드 : " +
          dataGuild1 +
          "\n";
      }
    }

    try {
      replier.reply(ment.join(""));
    } catch (e) {
      replier.reply("뭔가 잘못댐");
    }
  }

  if (msg == "!이벤트" || msg == "!ㅇㅂㅌ") {
    const dat = org.jsoup.Jsoup.connect("https://maple.gg/event")
      .get()
      .select('div[class="d-inline-block align-middle mt-3 mt-sm-0"]');
    const dataR = dat.select("a");
    const count = dat.select("small").text().split("남음");
    let reply = "[이벤트 목록]  ";

    for (let i = 0; i < count.length - 1; i++) {
      let title = dataR.get(i).text();
      let link = dataR.get(i).attr("href");
      let period = dat.select("small").get(i).text();

      reply += " " + title + " - " + link + " \n " + period + " \n\n";
    }
    replier.reply(reply);
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

  //식별자출력
  function searchOcid(chName) {
    let val = org.jsoup.Jsoup.connect(
      "https://open.api.nexon.com/maplestory/v1/id?" + chName
    )
      .header("x-nxopen-api-key", apiKey)
      .data("character_name", chName)
      .ignoreContentType(true)
      .ignoreHttpErrors(true)
      .get()
      .text();

    let ans = JSON.parse(val);

    return ans.ocid;
  }

  //캐릭터 정보 출력
  function searchPro(chName) {
    let ocid = searchOcid(chName);
    let val = org.jsoup.Jsoup.connect(
      "https://open.api.nexon.com/maplestory/v1/character/basic?" + ocid
    )
      .header("x-nxopen-api-key", apiKey)
      .data("ocid", ocid)
      .data("date", nowtime)
      .ignoreContentType(true)
      .ignoreHttpErrors(true)
      .get()
      .text();

    let ans = JSON.parse(val);
    return ans;
  }

  //캐릭터 인기도 출력
  function searchPopularity(chName) {
    nowDate();
    let ocid = searchOcid(chName);
    let val = org.jsoup.Jsoup.connect(
      "https://open.api.nexon.com/maplestory/v1/character/popularity?" + ocid
    )
      .header("x-nxopen-api-key", apiKey)
      .data("ocid", ocid)
      .data("date", nowtime)
      .ignoreContentType(true)
      .ignoreHttpErrors(true)
      .get()
      .text();

    let ans = JSON.parse(val);
    return ans;
  }

  //캐릭터 무릉
  function searchDojang(chName) {
    let ocid = searchOcid(chName);
    let val = org.jsoup.Jsoup.connect(
      "https://open.api.nexon.com/maplestory/v1/character/dojang?" + ocid
    )
      .header("x-nxopen-api-key", apiKey)
      .data("ocid", ocid)
      .data("date", nowtime)
      .ignoreContentType(true)
      .ignoreHttpErrors(true)
      .get()
      .text();

    let ans = JSON.parse(val);
    return ans;
  }
  //날짜 변환
  function changeDate(e) {
    const today = new Date();
    const yesterday = new Date(today.setDate(today.getDate() + e));
    const year = yesterday.getFullYear();
    const month = (yesterday.getMonth() + 1).toString().padStart(2, "0");
    const day = yesterday.getDate().toString().padStart(2, "0");
    const dateStr = year + "-" + month + "-" + day;

    return dateStr;
  }

  //유니온 조회
  function searchUnion(chName) {
    let ocid = searchOcid(chName);
    let val = org.jsoup.Jsoup.connect(
      "https://open.api.nexon.com/maplestory/v1/user/union?" + ocid
    )
      .header("x-nxopen-api-key", apiKey)
      .data("ocid", ocid)
      .data("date", nowtime)
      .ignoreContentType(true)
      .ignoreHttpErrors(true)
      .get()
      .text();

    let ans = JSON.parse(val);
    return ans;
  }

  //전투력 조회
  function searchStat(chName) {
    let ocid = searchOcid(chName);
    let val = org.jsoup.Jsoup.connect(
      "https://open.api.nexon.com/maplestory/v1/character/stat?" + ocid
    )
      .header("x-nxopen-api-key", apiKey)
      .data("ocid", ocid)
      .data("date", nowtime)
      .ignoreContentType(true)
      .ignoreHttpErrors(true)
      .get()
      .text();

    let ans = JSON.parse(val);
    let ans2 = ans.final_stat[42];
    return ans2;
  }

  //날짜 출력
  function nowDate() {
    const today = new Date();
    const yesterday = new Date(today.setDate(today.getDate() - 1));
    const year = yesterday.getFullYear();
    const month = (yesterday.getMonth() + 1).toString().padStart(2, "0");
    const day = yesterday.getDate().toString().padStart(2, "0");
    const dateStr = year + "." + month + "." + day;

    return dateStr;
  }

  function getCurrentWeek() {
    const day = new Date();
    const oneday = new Date(day.setDate(day.getDate() - 7));

    day.setTime(oneday);

    const result = [day.toISOString().slice(0, 10)];

    for (let i = 1; i < 7; i++) {
      day.setTime(day.getTime() + 86400000);
      result.push(day.toISOString().slice(0, 10));
    }

    return result;
  }

  //단위
  function won(number) {
    var inputNumber = number < 0 ? false : number;
    var unitWords = ["", "만", "억", "조", "경"];
    var splitUnit = 10000;
    var splitCount = unitWords.length;
    var resultArray = [];
    var resultString = "";

    for (var i = 0; i < splitCount; i++) {
      var unitResult =
        (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
      unitResult = Math.floor(unitResult);
      if (unitResult > 0) {
        resultArray[i] = unitResult;
      }
    }

    for (var i = 0; i < resultArray.length; i++) {
      if (!resultArray[i]) continue;
      resultString = String(resultArray[i]) + unitWords[i] + resultString;
    }

    return resultString;
  }
}

//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.
function onCreate(savedInstanceState, activity) {
  var textView = new android.widget.TextView(activity);
  textView.setText("Hello, World!");
  textView.setTextColor(android.graphics.Color.DKGRAY);
  activity.setContentView(textView);
}

function onStart(activity) {}

function onResume(activity) {}

function onPause(activity) {}

function onStop(activity) {}
