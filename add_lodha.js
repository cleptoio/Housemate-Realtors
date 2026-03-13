const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'projects.html');
let content = fs.readFileSync(file, 'utf8');

// The new cards to insert
const lodhaCamelotHtml = `
    <!-- ═══════════ LODHA CAMELOT ═══════════ -->
    <section class="section section--dark" id="lodha-camelot">
        <div class="container">
            <div class="project-showcase reveal-stagger">
                <div class="project-showcase__content">
                    <span class="project-tag">Ultra Luxury &bull; Kharadi</span>
                    <h3>Lodha Camelot</h3>
                    <p>A Life of Abundance — exclusive 3 & 4-bed residences at Kharadi's most coveted acres. 80% open spaces designed by Hafeez Contractor.</p>
                    <ul class="project-features">
                        <li><span>Config</span> 3 & 4 BHK</li>
                        <li><span>Carpet</span> From 1,250 Sq. Ft.</li>
                        <li><span>Price</span> From ₹2.34 Cr</li>
                    </ul>
                    <div style="display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap;">
                        <a href="lodha-camelot" class="btn btn--primary">View Details & Brochure</a>
                        <a href="contact" class="btn btn--outline" data-property="Lodha Camelot (Kharadi)">Inquire Now</a>
                    </div>
                </div>
                <div class="project-showcase__image-wrapper" data-property="Lodha Camelot (Kharadi)">
                    <div class="block-reveal"></div>
                    <img src="assets/images/lodha_camelot_hero.png" alt="Lodha Camelot towers exterior" class="parallax-img" loading="lazy">
                </div>
            </div>
        </div>
    </section>
`;

const lodhaSignetHtml = `
    <!-- ═══════════ LODHA SIGNET ═══════════ -->
    <section class="section" id="lodha-signet">
        <div class="container">
            <div class="project-showcase project-showcase--reverse reveal-stagger">
                <div class="project-showcase__content">
                    <span class="project-tag">Premium Living &bull; Kharadi</span>
                    <h3>Lodha Signet</h3>
                    <p>Premium residences in the heart of Kharadi by Lodha Group. Contact us for detailed information about configurations, pricing, and availability.</p>
                    <ul class="project-features">
                        <li><span>Location</span> Kharadi, Pune</li>
                        <li><span>Developer</span> Lodha Group</li>
                        <li><span>Status</span> Coming Soon</li>
                    </ul>
                    <div style="display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap;">
                        <a href="lodha-signet" class="btn btn--primary">View Details & Brochure</a>
                        <a href="contact" class="btn btn--outline" data-property="Lodha Signet (Kharadi)">Inquire Now</a>
                    </div>
                </div>
                <div class="project-showcase__image-wrapper" data-property="Lodha Signet (Kharadi)">
                    <div class="block-reveal"></div>
                    <img src="assets/images/lodha_signet_hero.png" alt="Lodha Signet exterior" class="parallax-img" loading="lazy">
                </div>
            </div>
        </div>
    </section>
`;

// Insert the new sections right before the CTA banner
content = content.replace('<!-- ═══════════ CTA BANNER ═══════════ -->', lodhaCamelotHtml + '\n' + lodhaSignetHtml + '\n    <!-- ═══════════ CTA BANNER ═══════════ -->');

// Replace existing buttons
content = content.replace(
    /<a href="contact" class="btn btn--outline mt-4" data-property="Riverdale Grand \(Kharadi\)">Inquire\s*Now<\/a>/g,
    \`<div style="display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap;">
                        <a href="riverdale-grand" class="btn btn--primary">View Details & Brochure</a>
                        <a href="contact" class="btn btn--outline" data-property="Riverdale Grand (Kharadi)">Inquire Now</a>
                    </div>\`
);

content = content.replace(
  /<a href="contact" class="btn btn--outline mt-4" data-property="Mahindra Ivylush">Inquire Now<\/a>/g,
  \`<div style="display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap;">
                        <a href="mahindra-ivylush" class="btn btn--primary">View Details & Brochure</a>
                        <a href="contact" class="btn btn--outline" data-property="Mahindra Ivylush">Inquire Now</a>
                    </div>\`
);

content = content.replace(
  /<a href="contact" class="btn btn--outline mt-4"\s*data-property="Kolte Patil Springshire \(Wagholi\)">Inquire Now<\/a>/g,
  \`<div style="display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap;">
                        <a href="springshire" class="btn btn--primary">View Details & Brochure</a>
                        <a href="contact" class="btn btn--outline" data-property="Kolte Patil Springshire (Wagholi)">Inquire Now</a>
                    </div>\`
);

content = content.replace(
  /<a href="contact" class="btn btn--white mt-4" data-property="Godrej Ivara \(Manjari\)">Inquire Now<\/a>/g,
  \`<div style="display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap;">
                        <a href="godrej-ivara" class="btn btn--primary">View Details & Brochure</a>
                        <a href="contact" class="btn btn--white" data-property="Godrej Ivara (Manjari)">Inquire Now</a>
                    </div>\`
);

fs.writeFileSync(file, content, 'utf8');
console.log('projects.html updated successfully.');
