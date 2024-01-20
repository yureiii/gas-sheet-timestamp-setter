function setTimestamp() {
  // 挿入するセル探索
  // C1, D1, C2, D2, C3, D3 の順番に挿入する
  const currentSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const range = currentSheet.getRange('C:C');
  const values = range.getValues();
  let lastNonEmptyRowIndexC = -1;

  // C 列で最初の空のセルを探索
  for (let i = 0; i < values.length; i++) {
    if (values[i][0] == '') {
      lastNonEmptyRowIndexC = i;
      break;
    }
  }

  let currentCell = currentSheet.getRange('D' + lastNonEmptyRowIndexC);
  if (currentCell.getValues() != '') {
    currentCell = currentSheet.getRange('C' + (lastNonEmptyRowIndexC + 1));
  }
  

  // タイムスタンプ取得
  const now = new Date();
  const hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  currentCell.setValue(hours + ":" + minutes + ":" + seconds);
}

