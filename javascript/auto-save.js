
const fs = require('fs');
const path = require('path');
const iframe = document.getElementById('iframe-wiki');

// Function to get the iframe content
function getIframeContent() {
  if (iframe.contentDocument) {
    return iframe.contentDocument.body.innerHTML;
  }
  return '';
}


// Save the iframe content to tw.html
function saveToFile(content) {
  const filePath = path.join(__dirname, 'tiddlywiki.html');
  fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
      console.error('Failed to save file:', err);
    } else {
      console.log('File saved to', filePath);
    }
  });
}

setInterval(() => {
    saveToFile(); // or saveContentToBackend()
  }, 1000); // Save every 1000ms (1 second)
  

