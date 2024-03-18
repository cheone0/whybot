//날짜 변환 from.천필두님
function cccDate(e) {
  const year = e.getFullYear();
  const month = (e.getMonth() + 1).toString().padStart(2, "0");
  const day = e.getDate().toString().padStart(2, "0");
  const dateStr = year + "-" + month + "-" + day;

  return dateStr;
}

if(Data[0] == "!환산") { // ex) !환산 빵눈꽃 
  let name = Data[1];
  const today = new Date();
  const Nyesterday2 = new Date(
    Date.parse(today) - 2 * 1000 * 60 * 60 * 24
  );
  const yesterday_2 = cccDate(Nyesterday2);

  let link = "https://maplescouter.com/info?name=" + name + "&date=" + yesterday_2 + "&preset=0000";

  replier.reply(link);
}