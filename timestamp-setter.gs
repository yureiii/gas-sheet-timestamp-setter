function setTimestamp() {
  var currentCell = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getActiveCell();

  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  currentCell.setValue(hours + ":" + minutes + ":" + seconds);
}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('カスタムメニュー')
      .addItem('現在のセルにタイムスタンプ (H:mm:ss) を挿入', 'setTimestamp')
      .addToUi();
}
