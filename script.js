const recordsForm = document.getElementById('input-form');

const recordsTable = document.getElementById('records-table');

let records = [];

recordsForm.addEventListener('submit', function(event){
  event.preventDefault();
});

function createRecord() {
  const id = document.getElementById('id').value;
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const published = document.getElementById('published').value;

  const record = {
    id: id,
    title: title,
    author: author,
    published: published
  };

  records.push(record);
  window.localStorage.setItem('records', JSON.stringify(records));
  console.log(records)
  recordsForm.reset();
}

function renderRecords(){
  clearTable();
  const reference = window.localStorage.getItem('records');
 
  if (reference) {
      records = JSON.parse(reference);
      var tableBody = recordsTable.getElementsByTagName('tbody')[0];
      records.forEach(function(record) {
        var row = tableBody.insertRow();
      
        var idCell = row.insertCell(0);
        var titleCell = row.insertCell(1);
        var authorCell = row.insertCell(2);
        var publishedCell = row.insertCell(3);
      
        
        idCell.innerHTML = record.id;
        titleCell.innerHTML = record.title;
        authorCell.innerHTML = record.author;
        publishedCell.innerHTML = record.published;
      });

}}
function clearTable() {
  
  var rows = recordsTable.getElementsByTagName('tr');
  for (var i = rows.length - 1; i > 0; i--) {
    recordsTable.deleteRow(i);
  }
}

function deleteRecord() {
  const deleteId = document.getElementById('deleteEntry').value;

  var tableRows = recordsTable.getElementsByTagName('tr');
  
  for (var i = 0; i < tableRows.length; i++) {
    var row = tableRows[i];
    var idCell = row.cells[0]; 

    if (idCell.innerHTML === deleteId) {
      recordsTable.deleteRow(i);
      break; 
    };
    deleteRecordFromLocalStorage();
  }
  }
function deleteRecordFromLocalStorage() {
    var recordId = document.getElementById('deleteEntry').value;
    var records = JSON.parse(localStorage.getItem('records'));
  
    var updatedRecords = records.filter(function(record) {
      return record.id !== recordId;
    });

    localStorage.setItem('records', JSON.stringify(updatedRecords));
  }

function deleteAll() {
  recordsTable.getElementsByTagName('tbody')[0].innerHTML = '';
  records.splice(0, records.length);
  localStorage.clear();
}


