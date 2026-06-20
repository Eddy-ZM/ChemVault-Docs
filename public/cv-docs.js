const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const runStateAnimation = (element, className, duration = 300) => {
  if (!element || prefersReducedMotion()) return;

  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
  window.setTimeout(() => element.classList.remove(className), duration);
};

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

  const focusTop = () => {
    const target = document.getElementById('_top') || document.body;
    const hadTabIndex = target.hasAttribute('tabindex');
    if (!hadTabIndex) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    if (!hadTabIndex) {
      target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
    }
  };

  button.addEventListener('click', () => {
    const reducedMotion = prefersReducedMotion();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reducedMotion ? 'auto' : 'smooth',
    });

    if (reducedMotion) {
      requestAnimationFrame(focusTop);
      return;
    }

    const deadline = performance.now() + 1000;
    const finishWhenSettled = () => {
      if (window.scrollY <= 4 || performance.now() > deadline) {
        if (window.scrollY > 4) window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        focusTop();
        return;
      }
      requestAnimationFrame(finishWhenSettled);
    };

    requestAnimationFrame(finishWhenSettled);
  });

  update();
  window.addEventListener('scroll', update, { passive: true });
};

const bindRevealAnimations = () => {
  if (prefersReducedMotion()) return;

  const revealTargets = document.querySelectorAll(
    '.cv-docs-hero, .cv-logic-strip, .cv-section, .cv-suite-card, .cv-system-card, .cv-feature-card, .cv-workspace-card, .cv-audience-card, .cv-command-card, .cv-launch-card, .cv-ops-card, .cv-path-card, .cv-route-card, .cv-commercial-strip article, .cv-solution-card, .cv-integration-map, .cv-integration-panel div, .cv-journey-line article, .cv-price-card, .cv-pricing-compare span',
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
    '.cv-logic-step, .cv-suite-card, .cv-system-card, .cv-feature-card, .cv-workspace-card, .cv-audience-card, .cv-command-card, .cv-launch-card, .cv-ops-card, .cv-path-card, .cv-route-card, .cv-exam-grid a, .cv-commercial-strip article, .cv-solution-card, .cv-integration-map, .cv-integration-panel div, .cv-price-card',
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

const bindPersonaSwitcher = () => {
  const switchers = document.querySelectorAll('[data-cv-persona-switcher]');

  switchers.forEach((switcher) => {
    if (switcher.dataset.cvPersonaBound === 'true') return;
    switcher.dataset.cvPersonaBound = 'true';

    const tabs = [...switcher.querySelectorAll('[data-cv-persona-tab]')];
    const panels = [...switcher.querySelectorAll('[data-cv-persona-panel]')];

    const activate = (mode) => {
      tabs.forEach((tab) => {
        const active = tab.dataset.cvPersonaTab === mode;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', active ? 'true' : 'false');
      });

      panels.forEach((panel) => {
        panel.hidden = panel.dataset.cvPersonaPanel !== mode;
      });
    };

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        activate(tab.dataset.cvPersonaTab || 'study');
      });
    });
  });
};

const bindProductDemo = () => {
  const demos = document.querySelectorAll('[data-cv-product-demo]');

  demos.forEach((demo) => {
    if (demo.dataset.cvDemoBound === 'true') return;
    demo.dataset.cvDemoBound = 'true';

    const tabs = [...demo.querySelectorAll('[data-cv-demo-tab]')];
    const panels = [...demo.querySelectorAll('[data-cv-demo-panel]')];

    const activate = (mode) => {
      tabs.forEach((tab) => {
        const active = tab.dataset.cvDemoTab === mode;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', active ? 'true' : 'false');
        tab.tabIndex = active ? 0 : -1;
      });

      panels.forEach((panel) => {
        const active = panel.dataset.cvDemoPanel === mode;
        panel.hidden = !active;
        if (active) runStateAnimation(panel, 'is-entering', 300);
      });
    };

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        activate(tab.dataset.cvDemoTab || 'overview');
      });

      tab.addEventListener('keydown', (event) => {
        const currentIndex = tabs.indexOf(tab);
        let nextIndex = currentIndex;

        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
          nextIndex = (currentIndex + 1) % tabs.length;
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
          nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        } else if (event.key === 'Home') {
          nextIndex = 0;
        } else if (event.key === 'End') {
          nextIndex = tabs.length - 1;
        } else {
          return;
        }

        event.preventDefault();
        const nextTab = tabs[nextIndex];
        activate(nextTab.dataset.cvDemoTab || 'overview');
        nextTab.focus();
      });
    });
  });
};

const bindRolePermissions = () => {
  const roleSelects = document.querySelectorAll('[data-cv-role-select]');
  const permissionSets = {
    Scientist: ['View workflows', 'Edit assets', 'Comment on records'],
    Manager: ['Approve changes', 'Release assets', 'View analytics'],
    Admin: ['Manage roles', 'Configure routing', 'Export audit data'],
  };

  roleSelects.forEach((select) => {
    if (select.dataset.cvRoleBound === 'true') return;
    select.dataset.cvRoleBound = 'true';

    const card = select.closest('.cv-access-card');
    const permissions = [...card?.querySelectorAll('[data-cv-role-permission]') || []];
    if (!card || permissions.length === 0) return;

    const update = ({ animate = false } = {}) => {
      const selectedPermissions = permissionSets[select.value] || permissionSets.Scientist;
      permissions.forEach((permission, index) => {
        const marker = document.createElement('i');
        permission.replaceChildren(marker, document.createTextNode(` ${selectedPermissions[index]}`));
      });

      if (animate) runStateAnimation(card, 'is-role-changing', 290);
    };

    select.addEventListener('change', () => update({ animate: true }));
    update();
  });
};

const bindRoutingToggle = () => {
  const toggles = document.querySelectorAll('[data-cv-routing-toggle]');

  toggles.forEach((toggle) => {
    if (toggle.dataset.cvRoutingBound === 'true') return;
    toggle.dataset.cvRoutingBound = 'true';

    const card = toggle.closest('.cv-routing-card');
    const status = card?.querySelector('[data-cv-routing-status]');
    const update = (enabled, { animate = false } = {}) => {
      toggle.classList.toggle('is-on', enabled);
      toggle.setAttribute('aria-pressed', enabled ? 'true' : 'false');
      toggle.setAttribute('aria-label', enabled ? 'Turn email routing off' : 'Turn email routing on');
      toggle.title = enabled ? 'Email routing is on' : 'Email routing is off';
      card?.classList.toggle('is-routing-off', !enabled);
      if (status) {
        status.textContent = enabled
          ? 'Inbound requests route to the right workspace.'
          : 'Inbound requests stay in the current workspace.';
      }
      if (animate) runStateAnimation(toggle, 'is-control-pulsing', 260);
    };

    toggle.addEventListener('click', () => {
      update(toggle.getAttribute('aria-pressed') !== 'true', { animate: true });
    });

    update(toggle.getAttribute('aria-pressed') === 'true');
  });
};

const bindMarketingNavigation = () => {
  const navigation = document.querySelector('.cv-marketing-nav');
  if (!navigation || navigation.dataset.cvNavigationBound === 'true') return;

  navigation.dataset.cvNavigationBound = 'true';
  const links = [...navigation.querySelectorAll('a[href^="#"]')];
  const sections = links
    .map((link) => {
      const id = link.getAttribute('href')?.slice(1);
      const section = id ? document.getElementById(id) : null;
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  const setActive = (activeLink) => {
    links.forEach((link) => {
      const active = link === activeLink;
      if (active) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  const update = () => {
    const threshold = window.innerHeight * 0.38;
    const active = sections.reduce((current, item) => {
      const top = item.section.getBoundingClientRect().top;
      if (top <= threshold) return item;
      return current;
    }, sections[0]);
    if (active) setActive(active.link);
  };

  links.forEach((link) => {
    link.addEventListener('click', () => setActive(link));
  });

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
};

const bindBillingToggle = () => {
  const billingBlocks = document.querySelectorAll('[data-cv-billing]');

  billingBlocks.forEach((block) => {
    if (block.dataset.cvBillingBound === 'true') return;
    block.dataset.cvBillingBound = 'true';

    const toggle = block.querySelector('[data-cv-billing-toggle]');
    const prices = [...block.querySelectorAll('[data-cv-price]')];
    const suffixes = [...block.querySelectorAll('.cv-price-card small')];
    let annual = false;

    const update = () => {
      prices.forEach((price) => {
        price.textContent = annual ? price.dataset.annual : price.dataset.monthly;
        runStateAnimation(price.closest('.cv-price-card'), 'is-price-changing', 300);
      });
      suffixes.forEach((suffix) => {
        suffix.textContent = annual ? '/yr' : '/mo';
      });
      toggle?.setAttribute('aria-pressed', annual ? 'true' : 'false');
      if (toggle) toggle.textContent = annual ? 'Monthly pricing' : 'Annual pricing';
    };

    toggle?.addEventListener('click', () => {
      annual = !annual;
      update();
    });

    update();
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
  bindPersonaSwitcher();
  bindProductDemo();
  bindRolePermissions();
  bindRoutingToggle();
  bindMarketingNavigation();
  bindBillingToggle();
  bindKeyboardShortcuts();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initChemVaultDocs);
} else {
  initChemVaultDocs();
}
