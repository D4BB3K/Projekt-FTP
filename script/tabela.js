const fs = require('fs');
const path = require('path');

const folderPath = '../pliki/5G';

function createLinksArray (folderPath) {
    const files = fs.readdirSync(folderPath);

    const fileLinks = files.map((file) => {
        const filePath = path.join(folderpath, file);
        return filePath;
    });

    return fileLinks;
}

const linksArray = createLinksArray(folderPath);
console.log(linksArray);

function crt_tab() {
    const tbl = document.createElement('table');
    var tbdy = document.createElement('tbody');
    
    for (var i = 0; i < 3; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 2; j++) {
      if (i == 2 && j == 1) {
        break
      } else {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('\u0020'))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
        tr.appendChild(td)
      }
    }
    tbdy.appendChild(tr);
  }

  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate();
