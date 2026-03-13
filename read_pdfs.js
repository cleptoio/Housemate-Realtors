const pdf = require('pdf-parse');
const fs = require('fs');

const pdfs = [
    'assets/images/Springshire Filpbook_161125.pdf',
    'assets/images/Godrej_Ivara_Flipchart.pdf',
];

(async () => {
    for (const filePath of pdfs) {
        try {
            const buf = fs.readFileSync(filePath);
            const data = await pdf(buf, { max: 3 }); // first 3 pages
            console.log('\n==========');
            console.log('FILE:', filePath);
            console.log('==========');
            console.log(data.text.slice(0, 3000));
        } catch (e) {
            console.error('Error parsing', filePath, e.message);
        }
    }
})();
