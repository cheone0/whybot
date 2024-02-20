if (Data[0] == "!6차") {
  try {
    let answer = searchHexa(Data[1]);
    let lastAnswer = "";
    let skillcore = "";
    let masterycore = "";
    let gangcore = "";
    let sharecore = "";
    for (i = 0; i < answer.character_hexa_core_equipment.length - 1; i++) {
      if (
        answer.character_hexa_core_equipment[i].hexa_core_type == "스킬 코어"
      ) {
        skillcore +=
          answer.character_hexa_core_equipment[i].hexa_core_name +
          " : " +
          answer.character_hexa_core_equipment[i].hexa_core_level +
          "\n";
      } else if (
        answer.character_hexa_core_equipment[i].hexa_core_type == "강화 코어"
      ) {
        gangcore +=
          answer.character_hexa_core_equipment[i].hexa_core_name +
          " : " +
          answer.character_hexa_core_equipment[i].hexa_core_level +
          "\n";
      } else if (
        answer.character_hexa_core_equipment[i].hexa_core_type ==
        "마스터리 코어"
      ) {
        masterycore +=
          answer.character_hexa_core_equipment[i].hexa_core_name +
          " : " +
          answer.character_hexa_core_equipment[i].hexa_core_level +
          "\n";
      } else if (
        answer.character_hexa_core_equipment[i].hexa_core_type == "공용 코어"
      ) {
        sharecore +=
          answer.character_hexa_core_equipment[i].hexa_core_name +
          " : " +
          answer.character_hexa_core_equipment[i].hexa_core_level +
          "\n";
      }
    }
    replier.reply(
      "[스킬 코어]\n" +
        skillcore +
        "\n[강화 코어]\n" +
        gangcore +
        "\n[마스터리 코어]\n" +
        masterycore +
        "\n[공용 코어]\n" +
        sharecore
    );
  } catch (e) {
    replier.reply("에러");
  }
}

//캐릭터 헥사 출력
function searchHexa(chName) {
  let ocid = searchOcid(chName);
  let nowtime = nowDate();
  let val = org.jsoup.Jsoup.connect(
    "https://open.api.nexon.com/maplestory/v1/character/hexamatrix?" + ocid
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
