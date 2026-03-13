/* ============================================
   HOUSEMATE REALTORS — BROCHURE VIEWER
   PDF.js-powered viewer for property brochures
   ============================================ */

const PDFJS_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.2.67';

async function loadPdfJs() {
  const pdfjsLib = await import(`${PDFJS_CDN}/pdf.min.mjs`);
  pdfjsLib.GlobalWorkerOptions.workerSrc = `${PDFJS_CDN}/pdf.worker.min.mjs`;
  return pdfjsLib;
}

document.addEventListener('DOMContentLoaded', async () => {
  const viewers = document.querySelectorAll('.brochure-viewer');
  if (!viewers.length) return;

  let pdfjsLib;
  try {
    pdfjsLib = await loadPdfJs();
  } catch (err) {
    console.error('Failed to load PDF.js:', err);
    viewers.forEach(v => {
      const loading = v.querySelector('.brochure-viewer__loading');
      if (loading) loading.innerHTML = '<p>Viewer unavailable. Please use the download button below.</p>';
    });
    return;
  }

  viewers.forEach(viewer => initViewer(pdfjsLib, viewer));
});

function initViewer(pdfjsLib, el) {
  const canvas = el.querySelector('.brochure-viewer__canvas');
  const ctx = canvas.getContext('2d');
  const loadingEl = el.querySelector('.brochure-viewer__loading');
  const pageNumEl = el.querySelector('.brochure-viewer__page-num');
  const pageCountEl = el.querySelector('.brochure-viewer__page-count');
  const prevBtn = el.querySelector('.brochure-viewer__prev');
  const nextBtn = el.querySelector('.brochure-viewer__next');
  const zoomInBtn = el.querySelector('.brochure-viewer__zoom-in');
  const zoomOutBtn = el.querySelector('.brochure-viewer__zoom-out');
  const fsBtn = el.querySelector('.brochure-viewer__fullscreen');
  const canvasWrap = el.querySelector('.brochure-viewer__canvas-wrap');

  let pdfDoc = null;
  let currentPage = 1;
  let baseScale = 1.5;
  let rendering = false;

  function loadPdf(url) {
    loadingEl.style.display = 'flex';
    currentPage = 1;
    baseScale = 1.5;

    pdfjsLib.getDocument(url).promise.then(pdf => {
      pdfDoc = pdf;
      pageCountEl.textContent = pdf.numPages;
      loadingEl.style.display = 'none';
      renderPage(currentPage);
    }).catch(() => {
      loadingEl.innerHTML = '<p>Could not load brochure. Please use the download button below.</p>';
    });
  }

  function renderPage(num) {
    if (!pdfDoc || rendering) return;
    rendering = true;

    pdfDoc.getPage(num).then(page => {
      const containerWidth = canvasWrap.clientWidth - 32;
      const unscaledViewport = page.getViewport({ scale: 1 });
      const fitScale = containerWidth / unscaledViewport.width;
      const finalScale = fitScale * baseScale;
      const viewport = page.getViewport({ scale: finalScale });

      // Use devicePixelRatio for sharp rendering
      const dpr = window.devicePixelRatio || 1;
      canvas.width = viewport.width * dpr;
      canvas.height = viewport.height * dpr;
      canvas.style.width = viewport.width + 'px';
      canvas.style.height = viewport.height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      page.render({ canvasContext: ctx, viewport: viewport }).promise.then(() => {
        rendering = false;
        pageNumEl.textContent = num;
        updateNavButtons();
      });
    });
  }

  function updateNavButtons() {
    if (prevBtn) prevBtn.disabled = currentPage <= 1;
    if (nextBtn) nextBtn.disabled = currentPage >= pdfDoc?.numPages;
  }

  // Navigation
  if (prevBtn) prevBtn.addEventListener('click', () => {
    if (currentPage > 1) { currentPage--; renderPage(currentPage); }
  });
  if (nextBtn) nextBtn.addEventListener('click', () => {
    if (pdfDoc && currentPage < pdfDoc.numPages) { currentPage++; renderPage(currentPage); }
  });

  // Zoom
  if (zoomInBtn) zoomInBtn.addEventListener('click', () => {
    baseScale = Math.min(baseScale + 0.25, 3);
    renderPage(currentPage);
  });
  if (zoomOutBtn) zoomOutBtn.addEventListener('click', () => {
    baseScale = Math.max(baseScale - 0.25, 0.5);
    renderPage(currentPage);
  });

  // Fullscreen
  if (fsBtn) fsBtn.addEventListener('click', () => {
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  });

  // Re-render on fullscreen change
  document.addEventListener('fullscreenchange', () => {
    if (pdfDoc) setTimeout(() => renderPage(currentPage), 100);
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!pdfDoc) return;
    if (e.key === 'ArrowLeft' && currentPage > 1) { currentPage--; renderPage(currentPage); }
    if (e.key === 'ArrowRight' && currentPage < pdfDoc.numPages) { currentPage++; renderPage(currentPage); }
  });

  // Touch swipe
  let touchStartX = 0;
  canvas.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  canvas.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50 && pdfDoc) {
      if (diff > 0 && currentPage < pdfDoc.numPages) { currentPage++; renderPage(currentPage); }
      else if (diff < 0 && currentPage > 1) { currentPage--; renderPage(currentPage); }
    }
  }, { passive: true });

  // Responsive
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { if (pdfDoc) renderPage(currentPage); }, 200);
  });

  // Tab switching (for properties with multiple brochures)
  const section = el.closest('.section');
  if (section) {
    const tabs = section.querySelectorAll('.brochure-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        loadPdf(tab.dataset.pdf);
      });
    });
  }

  // Initial load
  loadPdf(el.dataset.pdf);
}
