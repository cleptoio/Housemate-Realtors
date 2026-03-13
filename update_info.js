const fs = require('fs');
const path = require('path');

const files = ['index.html', 'about.html', 'services.html', 'projects.html', 'contact.html'];

const replacements = [
    {
        from: /<span>Pune,\s*Maharashtra,\s*India<\/span>/g,
        to: '<span>Kharadi, Pune, India 411014</span>'
    },
    {
        from: /Pune,\s*Maharashtra\s*411045/g,
        to: 'Kharadi, Pune 411014'
    },
    {
        from: /<span>\+91\s*81493\s*88788<\/span>/g,
        to: '<span>+91 81493 88788<br>+91 78882 33045<br>+91 86248 11109<br>+91 81697 66258</span>'
    },
    {
        from: /RERA\s*Registered\s*&bull;\s*Trusted\s*Since\s*Establishment/g,
        to: 'RERA: A011332502466 &bull; Trusted Since Establishment'
    },
    {
        from: /"telephone":\s*"\+91-8149388788"/g,
        to: '"telephone": "+91-8149388788, +91-7888233045, +91-8624811109, +91-8169766258"'
    },
    {
        from: /"addressLocality":\s*"Pune",\s*"addressRegion":\s*"Maharashtra"/g,
        to: '"streetAddress": "Kharadi",\n      "addressLocality": "Pune",\n      "addressRegion": "Maharashtra",\n      "postalCode": "411014"'
    },
    {
        from: /transparent,\s*and\s*bespoke\s*advisory\s*services\.<\/p>/g,
        to: 'transparent, and bespoke advisory services.</p>\n            <p style="color: var(--gold); font-size: 0.85rem; letter-spacing: 0.05em; margin-top: 0.5rem;">RERA: A011332502466</p>'
    },
    {
        from: /<a href="tel:\+918149388788">\+91\s*81493\s*88788<\/a><br>\s*<a href="tel:\+918149388788">\+91\s*81493\s*88788<\/a>/g,
        to: '<a href="tel:+918149388788">+91 81493 88788</a><br>\n                            <a href="tel:+917888233045">+91 78882 33045</a><br>\n                            <a href="tel:+918624811109">+91 86248 11109</a><br>\n                            <a href="tel:+918169766258">+91 81697 66258</a>'
    },
    {
        from: /<p>Yes,\s*we\s*are\s*a\s*RERA-certified\s*agency/g,
        to: '<p>Yes, we are registered under RERA (A011332502466) and'
    }
];

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    replacements.forEach(rep => {
        content = content.replace(rep.from, rep.to);
    });

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
