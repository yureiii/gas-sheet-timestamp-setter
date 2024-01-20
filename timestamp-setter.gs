function setTimestamp(column, targetRow) {
  let targetColumn;
  if (column === 2) {
    targetColumn = 'C';
  } else if (column === 6) {
    targetColumn = 'D';
  } else {
    return;
  }
  const currentSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const currentCell = currentSheet.getRange(targetColumn + targetRow);


  // タイムスタンプ取得
  const now = new Date();
  const hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  currentCell.setValue(hours + ":" + minutes + ":" + seconds);
}



function onEdit(e) {
  const range = e.range;
  const editColumn = range.getColumn();
  const editRow = range.getRow();

  // B 列 か F 列が編集された場合に実行
  if (editColumn === 2 || editColumn === 6) {
    setTimestamp(editColumn, editRow);
  }
}
