const fs = require('fs');

const file = 'index.html';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/"streetAddress": "Kharadi",\s*"streetAddress": "Kharadi",/g, '"streetAddress": "Kharadi",');
content = content.replace(/"postalCode": "411014",\s*"postalCode": "411014",/g, '"postalCode": "411014",');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed index.html duplicates');
