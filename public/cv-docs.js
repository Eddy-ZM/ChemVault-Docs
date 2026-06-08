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

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bindChemVaultSearch);
} else {
  bindChemVaultSearch();
}
