function setTimestamp() {
  // 挿入するセル探索
  // C1, D1, C2, D2, C3, D3 の順番に挿入する
  var currentSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = currentSheet.getRange('C:C');
  var values = range.getValues();
  var lastNonEmptyRowIndexC = -1;

  // C 列で最初の空のセルを探索
  for (var i = 0; i < values.length; i++) {
    if (values[i][0] == '') {
      lastNonEmptyRowIndexC = i;
      break;
    }
  }

  var CurrentCell = currentSheet.getRange('D' + lastNonEmptyRowIndexC);
  if (currentCell.getValues() != '') {
    currentCell = currentSheet.getRange('C' + (lastNonEmptyRowIndexC + 1));
  }
  

  // タイムスタンプ取得
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  currentCell.setValue(hours + ":" + minutes + ":" + seconds);
}

