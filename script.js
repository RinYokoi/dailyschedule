// 検索ボタンをクリックした時の関数
function clickButton() {
  // 変数に入力欄の文字を入れる
  var breadName = $(".inputText").val();
  // シートからデータを取得する
  $.ajax({
    // GASをデプロイして作ったURL
    url: "https://script.google.com/macros/s/AKfycbylEt-vUd30ubbcyGj0_AOXz1hsYjHL5hyuIFd4zRCY7I2v3a8LpvULkOWnR8EVE5w/exec",
    type: "GET",
    dataType: "json",
    success: function (sheet) {
      // 変数にシートのデータを入れる
      var memo = sheet.allData;
      // パンの数だけ検索をくりかえす
      for (var i = 0; i < memo.length; i++) {
        // iの値によって、検索するパンの名前を変える
        if (breadName == memo[i][0]) {
          // 指定したHTMLの中身を書き換える
          $(".outputText1").text(memo[i][1]);
          $(".outputText2").text(memo[i][2]);
          $(".outputText3").text(memo[i][3]);
          $(".outputText4").text(memo[i][4]);
          $(".outputText5").text(memo[i][5]);
          // 検索を止める
          break;
        }
        // それ以外の場合
        else {
          // 指定したHTMLの中身を書き換える
          $(".outputText1").text("曜日を入力してね！");
          $(".outputText2").text("");
          $(".outputText3").text("");
          $(".outputText4").text("");
          $(".outputText5").text("");
        }
      }
    }
  });
};
