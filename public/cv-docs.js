const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const bindChemVaultSearch = () => {
  const pageSearchButtons = document.querySelectorAll('[data-cv-open-search]');

  pageSearchButtons.forEach((pageSearch) => {
    if (pageSearch.dataset.cvSearchBound === 'true') return;

    pageSearch.dataset.cvSearchBound = 'true';
    pageSearch.addEventListener('click', () => {
      const siteSearch = document.querySelector('site-search');
      const shellSearch = siteSearch?.querySelector('button[data-open-modal]');
      const dialog = siteSearch?.querySelector('dialog');

      shellSearch?.dispatchEvent(
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
        }),
      );

      requestAnimationFrame(() => {
        if (!dialog || dialog.open) return;

        document.body.setAttribute('data-search-modal-open', '');
        dialog.addEventListener(
          'close',
          () => {
            document.body.removeAttribute('data-search-modal-open');
          },
          { once: true },
        );

        try {
          dialog.showModal();
        } catch {
          dialog.setAttribute('open', '');
        }

        dialog.querySelector('input, [role="searchbox"], textarea')?.focus();
      });
    });
  });
};

const bindRecordFilters = () => {
  const table = document.querySelector('[data-cv-record-table]');
  const controls = document.querySelector('[data-cv-record-controls]');
  if (!table || !controls || controls.dataset.cvRecordBound === 'true') return;

  controls.dataset.cvRecordBound = 'true';

  const searchInput = controls.querySelector('[data-cv-record-search]');
  const filterButtons = [...controls.querySelectorAll('[data-cv-record-filter]')];
  const countLabel = controls.querySelector('[data-cv-record-count]');
  const emptyState = document.querySelector('[data-cv-record-empty]');
  const rows = [...table.querySelectorAll('tbody tr')];
  let activeFilter = 'all';

  const getRowWorkspace = (row) => row.children[1]?.textContent.trim() || '';
  const getRowText = (row) => row.textContent.toLowerCase().replace(/\s+/g, ' ');

  const updateRows = () => {
    const query = searchInput?.value.trim().toLowerCase() || '';
    let visibleCount = 0;

    rows.forEach((row) => {
      const matchesFilter = activeFilter === 'all' || getRowWorkspace(row) === activeFilter;
      const matchesSearch = !query || getRowText(row).includes(query);
      const visible = matchesFilter && matchesSearch;
      row.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    if (countLabel) {
      countLabel.textContent = `${visibleCount} of ${rows.length} records`;
    }

    if (emptyState) {
      emptyState.hidden = visibleCount !== 0;
    }
  };

  filterButtons.forEach((button) => {
    button.setAttribute('aria-pressed', button.classList.contains('is-active') ? 'true' : 'false');
    button.addEventListener('click', () => {
      activeFilter = button.dataset.cvRecordFilter || 'all';
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      updateRows();
    });
  });

  searchInput?.addEventListener('input', updateRows);
  updateRows();
};

const bindScrollProgress = () => {
  if (document.querySelector('.cv-scroll-progress')) return;

  const progress = document.createElement('div');
  progress.className = 'cv-scroll-progress';
  progress.setAttribute('aria-hidden', 'true');
  progress.innerHTML = '<span></span>';
  document.body.append(progress);

  const meter = progress.querySelector('span');
  const update = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    meter.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
};

const bindBackToTop = () => {
  if (document.querySelector('.cv-back-to-top')) return;

  const button = document.createElement('button');
  button.className = 'cv-back-to-top';
  button.type = 'button';
  button.setAttribute('aria-label', 'Back to top');
  button.innerHTML = '<span aria-hidden="true"></span>';
  document.body.append(button);

  const update = () => {
    button.classList.toggle('is-visible', window.scrollY > 520);
  };

  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  });

  update();
  window.addEventListener('scroll', update, { passive: true });
};

const bindRevealAnimations = () => {
  if (prefersReducedMotion()) return;

  const revealTargets = document.querySelectorAll(
    '.cv-docs-hero, .cv-proof-strip, .cv-section, .cv-workspace-card, .cv-audience-card, .cv-command-card, .cv-launch-card, .cv-ops-card, .cv-path-card, .cv-route-card',
  );

  revealTargets.forEach((target) => {
    if (target.dataset.cvRevealBound === 'true') return;
    target.dataset.cvRevealBound = 'true';
    target.classList.add('cv-reveal');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
  );

  document.querySelectorAll('.cv-reveal:not(.is-visible)').forEach((target) => {
    observer.observe(target);
  });
};

const bindPointerGlow = () => {
  if (prefersReducedMotion()) return;

  const cards = document.querySelectorAll(
    '.cv-workspace-card, .cv-audience-card, .cv-command-card, .cv-launch-card, .cv-ops-card, .cv-path-card, .cv-route-card, .cv-exam-grid a',
  );

  cards.forEach((card) => {
    if (card.dataset.cvPointerBound === 'true') return;
    card.dataset.cvPointerBound = 'true';

    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--cv-pointer-x', `${event.clientX - rect.left}px`);
      card.style.setProperty('--cv-pointer-y', `${event.clientY - rect.top}px`);
    });

    card.addEventListener('pointerleave', () => {
      card.style.removeProperty('--cv-pointer-x');
      card.style.removeProperty('--cv-pointer-y');
    });
  });
};

const bindKeyboardShortcuts = () => {
  if (document.body.dataset.cvShortcutBound === 'true') return;
  document.body.dataset.cvShortcutBound = 'true';

  document.addEventListener('keydown', (event) => {
    const target = event.target;
    const isTyping =
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target?.isContentEditable;

    if (event.key !== '/' || isTyping || event.metaKey || event.ctrlKey || event.altKey) return;

    const recordSearch = document.querySelector('[data-cv-record-search]');
    if (!recordSearch) return;

    event.preventDefault();
    recordSearch.focus();
  });
};

const initChemVaultDocs = () => {
  bindChemVaultSearch();
  bindRecordFilters();
  bindScrollProgress();
  bindBackToTop();
  bindRevealAnimations();
  bindPointerGlow();
  bindKeyboardShortcuts();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initChemVaultDocs);
} else {
  initChemVaultDocs();
}
