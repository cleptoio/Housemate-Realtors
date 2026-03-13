const fs = require('fs');
const path = require('path');

const mappings = [
    {
        file: 'godrej-ivara.html',
        replacements: [
            { from: /assets\/brochures\/godrej-ivara\.pdf/g, to: 'assets/images/Godrej_Ivara_Flipchart.pdf' }
        ]
    },
    {
        file: 'lodha-camelot.html',
        replacements: [
            { from: /assets\/brochures\/lodha-camelot\.pdf/g, to: 'assets/images/Lodha%20Camelot.pdf' }
        ]
    },
    {
        file: 'lodha-signet.html',
        replacements: [
            { from: /assets\/brochures\/lodha-signet\.pdf/g, to: 'assets/images/Lodha%20Signet_Kharadi.pdf' }
        ]
    },
    {
        file: 'mahindra-ivylush.html',
        replacements: [
            { from: /assets\/brochures\/mahindra-ivylush\.pdf/g, to: 'assets/images/Mahindra%20Ivylush%20Brouchure.pdf' },
            { from: /assets\/brochures\/mahindra-ivylush-floorplan\.pdf/g, to: 'assets/images/Mahindra%20IvyLush_Floor%20plan%20booklet_03.02.2025.pdf' }
        ]
    },
    {
        file: 'riverdale-grand.html',
        replacements: [
            { from: /assets\/brochures\/riverdale-grand\.pdf/g, to: 'assets/images/Riverdale%20Grand%20FINAL%20Main%20Brochure_13.09.2023.pdf' }
        ]
    },
    {
        file: 'springshire.html',
        replacements: [
            { from: /assets\/brochures\/springshire\.pdf/g, to: 'assets/images/Springshire%20Filpbook_161125.pdf' }
        ]
    }
];

mappings.forEach(mapping => {
    const filePath = path.join(__dirname, mapping.file);
    if (!fs.existsSync(filePath)) {
        console.log(`File missing: ${mapping.file}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    mapping.replacements.forEach(rep => {
        content = content.replace(rep.from, rep.to);
    });

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated paths in ${mapping.file}`);
    }
});
