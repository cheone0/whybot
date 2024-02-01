if (Data[0] == "test") {
  const newtoday = new Date();
  const Nyesterday1 = new Date(Date.parse(newtoday) - 1 * 1000 * 60 * 60 * 24);
  const Nyesterday2 = new Date(Date.parse(newtoday) - 2 * 1000 * 60 * 60 * 24);
  const Nyesterday3 = new Date(Date.parse(newtoday) - 3 * 1000 * 60 * 60 * 24);
  const Nyesterday4 = new Date(Date.parse(newtoday) - 4 * 1000 * 60 * 60 * 24);
  const Nyesterday5 = new Date(Date.parse(newtoday) - 5 * 1000 * 60 * 60 * 24);
  const Nyesterday6 = new Date(Date.parse(newtoday) - 6 * 1000 * 60 * 60 * 24);
  const Nyesterday7 = new Date(Date.parse(newtoday) - 7 * 1000 * 60 * 60 * 24);
  const Nyesterday8 = new Date(Date.parse(newtoday) - 8 * 1000 * 60 * 60 * 24);
  const Nyesterday9 = new Date(Date.parse(newtoday) - 9 * 1000 * 60 * 60 * 24);

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

  let mday1 = day1.replace("2023-", "").replace("2024-", "").replace("-", ".");
  let mday2 = day2.replace("2023-", "").replace("2024-", "").replace("-", ".");
  let mday3 = day3.replace("2023-", "").replace("2024-", "").replace("-", ".");
  let mday4 = day4.replace("2023-", "").replace("2024-", "").replace("-", ".");
  let mday5 = day5.replace("2023-", "").replace("2024-", "").replace("-", ".");
  let mday6 = day6.replace("2023-", "").replace("2024-", "").replace("-", ".");
  let mday7 = day7.replace("2023-", "").replace("2024-", "").replace("-", ".");

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
}
