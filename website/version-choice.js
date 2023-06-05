const fs = require('fs');
const path = require('path');

document.addEventListener('DOMContentLoaded', function() {  
  var container = document.querySelector('.container');
  
  container.addEventListener('click', function(e) {
    if(e.target && e.target.classList.contains('game-version')) {
      alert('DEBUG: Selected version: ' + e.target.innerHTML);
    }
    if(e.target && e.target.classList.contains('button-img')) {
      alert('DEBUG: Selected version: ' + e.target.id);
      
      // Read the JSON file
      let modFilePath = path.join(__dirname, '1.19.4', 'fabric.mod.json');
      fs.readFile(modFilePath, 'utf-8', (err, data) => {
        if (err) {
          console.error("An error occurred while reading the file:", err);
          return;
        }
        
        // Parse the JSON data
        let jsonData = JSON.parse(data);
        
        // Update the "icon" field
        jsonData.icon = 'assets/lumina/' + e.target.id + '.png';
        
        // Write the updated JSON data back to the file
        fs.writeFile(modFilePath, JSON.stringify(jsonData, null, 2), 'utf-8', function(err) {
          if (err) {
            console.error("An error occurred while writing to the file:", err);
          } else {
            console.log("File has been successfully updated.");
          }
        });
      });
    }
  });
});
