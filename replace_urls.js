const fs = require('fs');
const files = ['index.html', 'about.html', 'services.html', 'projects.html', 'contact.html'];
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/href="([a-z]+)\.html(#.*)?"/g, 'href="$1$2"');
    fs.writeFileSync(file, content);
});
console.log('Replaced .html in all hrefs successfully');
