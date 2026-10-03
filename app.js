const CONFIG = {
  moderatorCode: 'DEA-2026',
  siteTitle: 'DOSSIERS DEA',
  appKey: 'dossiers-dea-v1'
};

const STORAGE_KEYS = {
  auth: 'dossiers-dea-auth',
  saved: 'dossiers-dea-saved',
  recent: 'dossiers-dea-recent'
};

const typeMeta = {
  'trafic-armes': {
    label: 'Trafic d’armes',
    description: 'Suspect principal, organisation, itinéraire, armes et suites.'
  },
  'trafic-drogue': {
    label: 'Trafic de drogue / stupéfiants',
    description: 'Substances, vente, trafic et répercussions.'
  },
  'blanchiment': {
    label: 'Blanchiment d’argent',
    description: 'Sociétés écrans, méthodes et flux financiers.'
  },
  'gangs': {
    label: 'Gangs et organisations',
    description: 'Structure, activité, membres et repaires.'
  },
  'licenciement': {
    label: 'Rapport de licenciement',
    description: 'Motifs, procédure, sanctions et éléments probants.'
  }
};

const fieldDefinitions = {
  base: [
    { key: 'numeroDossier', label: 'N° de dossier', required: true, type: 'text' },
    { key: 'dateOuverture', label: 'Date d’ouverture', required: true, type: 'date' },
    { key: 'ouvertPar', label: 'Ouvert par', required: true, type: 'text' },
    { key: 'serviceDivision', label: 'Service / Division', type: 'text' },
    { key: 'priorite', label: 'Priorité', required: true, type: 'select', options: ['Faible', 'Moyen', 'Élevé', 'Critique'] },
    { key: 'statut', label: 'Statut', type: 'select', options: ['INCOMPLET', 'COMPLET'] }
  ],
  preuves: [
    { key: 'saisiesEffectuees', label: 'Saisies effectuées', type: 'textarea' },
    { key: 'preuvesRecueillies', label: 'Preuves recueillies', required: true, type: 'textarea' },
    { key: 'temoinsInformateurs', label: 'Témoins / informateurs', type: 'textarea' },
    { key: 'mesuresPrises', label: 'Mesures prises', type: 'checkboxes', options: ['Surveillance', 'Perquisition', 'Garde à vue', 'Mandat d’arrêt', 'Transmis au parquet'] },
    { key: 'resumeFaits', label: 'Résumé des faits', required: true, type: 'textarea' }
  ],
  validation: [
    { key: 'completePar', label: 'Complété par', required: true, type: 'text' },
    { key: 'dateCompletion', label: 'Date de complétion', required: true, type: 'date' },
    { key: 'observationsFinales', label: 'Observations finales', type: 'textarea' }
  ]
};

const dossierTemplates = {
  'trafic-armes': {
    type: 'trafic-armes',
    title: 'Trafic d’armes',
    fields: [
      { key: 'suspectPrincipal', label: 'Suspect principal', required: true, type: 'text' },
      { key: 'complices', label: 'Complices', type: 'text' },
      { key: 'organisationLiee', label: 'Organisation liée', type: 'text' },
      { key: 'typesArmes', label: 'Types d’armes', type: 'checkboxes', options: ['Armes de poing', 'Fusils', 'Armes automatiques', 'Explosifs', 'Munitions', 'Pièces détachées'] },
      { key: 'quantiteEstimee', label: 'Quantité estimée', required: true, type: 'text' },
      { key: 'numerosSerie', label: 'Numéros de série', type: 'text' },
      { key: 'origine', label: 'Origine', type: 'text' },
      { key: 'destination', label: 'Destination', type: 'text' },
      { key: 'itineraire', label: 'Itinéraire', required: true, type: 'textarea' },
      { key: 'transport', label: 'Transport', type: 'text' },
      { key: 'lieuxStockage', label: 'Lieux de stockage', type: 'text' },
      { key: 'dateFaits', label: 'Date des faits', required: true, type: 'date' }
    ]
  },
  'trafic-drogue': {
    type: 'trafic-drogue',
    title: 'Trafic de drogue / stupéfiants',
    fields: [
      { key: 'suspectPrincipal', label: 'Suspect principal', required: true, type: 'text' },
      { key: 'membresRevendeurs', label: 'Membres / revendeurs', type: 'text' },
      { key: 'fournisseur', label: 'Fournisseur', type: 'text' },
      { key: 'substances', label: 'Substances', type: 'checkboxes', options: ['Cannabis', 'Cocaïne', 'Héroïne', 'Amphétamines', 'Drogues de synthèse', 'Opioïdes', 'Précurseurs chimiques', 'Autre'] },
      { key: 'quantite', label: 'Quantité', required: true, type: 'text' },
      { key: 'valeur', label: 'Valeur', type: 'text' },
      { key: 'origine', label: 'Origine', type: 'text' },
      { key: 'destination', label: 'Destination', type: 'text' },
      { key: 'modeAchemine', label: 'Mode d’acheminement', type: 'text' },
      { key: 'zonesVente', label: 'Zones de vente', required: true, type: 'textarea' },
      { key: 'laboratoiresStockage', label: 'Laboratoires / stockage', type: 'text' },
      { key: 'dateFaits', label: 'Date des faits', required: true, type: 'date' }
    ]
  },
  blanchiment: {
    type: 'blanchiment',
    title: 'Blanchiment d’argent',
    fields: [
      { key: 'suspectPrincipal', label: 'Suspect principal', required: true, type: 'text' },
      { key: 'societesEcrans', label: 'Sociétés écrans', required: true, type: 'text' },
      { key: 'pretNoms', label: 'Prête-noms', type: 'text' },
      { key: 'infractionOrigine', label: 'Infraction d’origine', type: 'checkboxes', options: ['Trafic de drogue', 'Trafic d’armes', 'Racket', 'Fraude', 'Corruption', 'Autre'] },
      { key: 'montantEstime', label: 'Montant estimé', required: true, type: 'text' },
      { key: 'periode', label: 'Période', type: 'text' },
      { key: 'methodes', label: 'Méthodes', type: 'checkboxes', options: ['Dépôts fractionnés', 'Commerce de façade', 'Immobilier', 'Cryptomonnaies', 'Jeux / casinos', 'Transferts à l’étranger'] },
      { key: 'comptes', label: 'Comptes', type: 'text' },
      { key: 'biensAcquis', label: 'Biens acquis', type: 'text' }
    ]
  },
  gangs: {
    type: 'gangs',
    title: 'Gangs et organisations',
    fields: [
      { key: 'nom', label: 'Nom', required: true, type: 'text' },
      { key: 'alias', label: 'Alias', type: 'text' },
      { key: 'signesDistinctifs', label: 'Signes distinctifs', type: 'text' },
      { key: 'territoire', label: 'Territoire', required: true, type: 'text' },
      { key: 'effectif', label: 'Effectif', type: 'text' },
      { key: 'dangerosite', label: 'Dangerosité', required: true, type: 'select', options: ['Faible', 'Moyen', 'Élevé', 'Très élevé'] },
      { key: 'chef', label: 'Chef', required: true, type: 'text' },
      { key: 'lieutenants', label: 'Lieutenants', type: 'text' },
      { key: 'membres', label: 'Membres', type: 'text' },
      { key: 'allies', label: 'Alliés', type: 'text' },
      { key: 'rivaux', label: 'Rivaux', type: 'text' },
      { key: 'activites', label: 'Activités', type: 'checkboxes', options: ['Trafic de drogue', 'Trafic d’armes', 'Racket', 'Blanchiment', 'Violences', 'Vols / braquages'] },
      { key: 'detail', label: 'Détail', type: 'textarea' },
      { key: 'repaire', label: 'Repaires', type: 'text' }
    ]
  },
  licenciement: {
    type: 'licenciement',
    title: 'Rapport de licenciement',
    fields: [
      { key: 'nom', label: 'Nom', required: true, type: 'text' },
      { key: 'matricule', label: 'Matricule', required: true, type: 'text' },
      { key: 'grade', label: 'Grade', required: true, type: 'text' },
      { key: 'dateEntree', label: 'Date d’entrée', type: 'date' },
      { key: 'superieur', label: 'Supérieur', type: 'text' },
      { key: 'motifs', label: 'Motifs', type: 'checkboxes', options: ['Faute grave', 'Faute lourde', 'Insuffisance professionnelle', 'Absences répétées', 'Insubordination', 'Violation de la confidentialité', 'Abus de pouvoir', 'Autre'] },
      { key: 'dateFaits', label: 'Date des faits', required: true, type: 'date' },
      { key: 'description', label: 'Description', required: true, type: 'textarea' },
      { key: 'temoins', label: 'Témoins', type: 'text' },
      { key: 'sanctionsAnterieures', label: 'Sanctions antérieures', type: 'text' },
      { key: 'dateEntretien', label: 'Date de l’entretien', type: 'date' },
      { key: 'employeEntendu', label: 'Employé entendu', required: true, type: 'select', options: ['Oui', 'Non', 'Refusé de venir'] },
      { key: 'observations', label: 'Observations', type: 'textarea' },
      { key: 'preuves', label: 'Preuves', required: true, type: 'textarea' },
      { key: 'type', label: 'Type', required: true, type: 'select', options: ['Avec préavis', 'Sans préavis', 'Effet immédiat'] },
      { key: 'dateEffet', label: 'Date d’effet', required: true, type: 'date' },
      { key: 'decidePar', label: 'Décidé par', required: true, type: 'text' },
      { key: 'materielRetirer', label: 'Matériel à retirer', type: 'checkboxes', options: ['Badge', 'Arme de service', 'Véhicule', 'Radio / téléphone', 'Accès informatiques', 'Tenue'] },
      { key: 'justification', label: 'Justification', required: true, type: 'textarea' }
    ]
  }
};

const state = {
  loggedInUser: null,
  currentDossier: null,
  views: {
    home: document.getElementById('view-home'),
    dossier: document.getElementById('view-dossier')
  },
  linkedDossiers: []
};

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

function slugify(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60) || 'dossier';
}

function generateId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function sha256(value) {
  return crypto.subtle
    .digest('SHA-256', new TextEncoder().encode(value))
    .then((buffer) => Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, '0')).join(''));
}

function encodePayload(data) {
  const json = JSON.stringify(data);
  const binary = btoa(unescape(encodeURIComponent(json)));
  return binary.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function decodePayload(value) {
  if (!value) return null;
  try {
    const normalized = value.replace(/-/g, '+').replace(/_/g, '/');
    const padded = normalized + '='.repeat((4 - (normalized.length % 4)) % 4);
    const decoded = decodeURIComponent(escape(atob(padded)));
    return JSON.parse(decoded);
  } catch (error) {
    return null;
  }
}

function safeLocalStorageGet(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function safeLocalStorageSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn('LocalStorage unavailable', error);
  }
}

function getAuth() {
  return safeLocalStorageGet(STORAGE_KEYS.auth, null);
}

function setAuth(auth) {
  safeLocalStorageSet(STORAGE_KEYS.auth, auth);
}

function getSavedDossiers() {
  return safeLocalStorageGet(STORAGE_KEYS.saved, {});
}

function saveDossiersMap(map) {
  safeLocalStorageSet(STORAGE_KEYS.saved, map);
}

function getRecentList() {
  return safeLocalStorageGet(STORAGE_KEYS.recent, []);
}

function setRecentList(list) {
  safeLocalStorageSet(STORAGE_KEYS.recent, list);
}

function setLoggedInUser(user) {
  state.loggedInUser = user;
  setAuth(user);
  updateTopbar();
  renderHome();
}

function logout() {
  state.loggedInUser = null;
  setAuth(null);
  updateTopbar();
  renderHome();
  showToast('Déconnexion effectuée.');
}

function updateTopbar() {
  const auth = getAuth();
  const loginPanel = document.getElementById('login-panel');
  const connectedPanel = document.getElementById('connected-panel');
  const btnLogout = document.getElementById('btn-logout');

  if (auth && auth.name) {
    state.loggedInUser = auth;
    loginPanel.classList.add('hidden');
    connectedPanel.classList.remove('hidden');
    document.getElementById('connected-user').textContent = auth.name;
    btnLogout.classList.remove('hidden');
  } else {
    state.loggedInUser = null;
    loginPanel.classList.remove('hidden');
    connectedPanel.classList.add('hidden');
    btnLogout.classList.add('hidden');
  }
}

function listRequiredFieldsForCurrentDossier() {
  const fields = [...document.querySelectorAll('[data-required="true"]')]
    .map((element) => {
      const label = element.dataset.label || 'Champ';
      const value = readInputValue(element);
      return { label, value };
    })
    .filter((item) => !item.value || (Array.isArray(item.value) && item.value.length === 0));

  return fields.map((item) => item.label);
}

function readInputValue(element) {
  if (element.type === 'checkbox') {
    return element.checked ? element.value : '';
  }

  if (element.type === 'checkbox-group') {
    return element.value || '';
  }

  if (element.tagName === 'SELECT' || element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
    return element.value.trim();
  }

  return '';
}

function createBaseDossier(type) {
  const meta = typeMeta[type] || typeMeta['trafic-armes'];
  const dossier = {
    id: generateId(),
    type,
    title: meta.label,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: 'INCOMPLET',
    locked: false,
    lockAuthor: '',
    author: state.loggedInUser ? state.loggedInUser.name : '',
    openedBy: state.loggedInUser ? state.loggedInUser.name : '',
    dateOuverture: new Date().toISOString().slice(0, 10),
    numeroDossier: '',
    priorite: 'Moyen',
    serviceDivision: '',
    preuvesRecueillies: '',
    resumeFaits: '',
    completePar: '',
    dateCompletion: '',
    observationsFinales: '',
    mesurePrises: [],
    reviewMode: false,
    readOnly: false,
    notes: ''
  };

  const template = dossierTemplates[type] || dossierTemplates['trafic-armes'];
  template.fields.forEach((field) => {
    dossier[field.key] = '';
  });

  if (dossier.type === 'licenciement') {
    dossier.typeDossier = 'Rapport de licenciement';
  }

  return dossier;
}

function renderTypeButtons() {
  const root = document.getElementById('new-dossier-types');
  const types = Object.keys(typeMeta);
  root.innerHTML = types
    .map(
      (type) => `
        <button class="type-item" data-type="${type}">
          <div>
            <strong>${typeMeta[type].label}</strong>
            <span>${typeMeta[type].description}</span>
          </div>
          <span>＋</span>
        </button>
      `
    )
    .join('');

  root.querySelectorAll('[data-type]').forEach((button) => {
    button.addEventListener('click', () => {
      if (!state.loggedInUser) {
        showToast('Connectez-vous pour créer un dossier.');
        return;
      }

      const dossier = createBaseDossier(button.dataset.type);
      state.currentDossier = dossier;
      renderDossierView(dossier);
    });
  });
}

function renderRecentList() {
  const list = document.getElementById('recent-list');
  const dossiers = Object.values(getSavedDossiers());

  if (!dossiers.length) {
    list.innerHTML = '<div class="muted">Aucun dossier sauvegardé pour le moment.</div>';
    return;
  }

  const recent = getRecentList();
  const ordered = recent.length ? recent.map((id) => dossiers.find((d) => d.id === id)).filter(Boolean) : dossiers.slice().reverse();
  list.innerHTML = ordered
    .map(
      (dossier) => `
        <div class="recent-item">
          <div class="recent-main" data-open="${dossier.id}">
            <strong>${dossier.title || typeMeta[dossier.type]?.label || 'Dossier'}</strong>
            <span class="recent-meta">${dossier.numeroDossier || 'N° non défini'} • ${dossier.status || 'INCOMPLET'}</span>
          </div>
          <div class="recent-actions">
            <button class="icon-btn" data-delete="${dossier.id}" title="Supprimer">🗑</button>
          </div>
        </div>
      `
    )
    .join('');

  list.querySelectorAll('[data-open]').forEach((entry) => {
    entry.addEventListener('click', () => {
      const dossier = getSavedDossiers()[entry.dataset.open];
      if (dossier) {
        state.currentDossier = dossier;
        renderDossierView(dossier);
      }
    });
  });

  list.querySelectorAll('[data-delete]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const id = button.dataset.delete;
      const map = getSavedDossiers();
      delete map[id];
      saveDossiersMap(map);
      const recent = getRecentList().filter((item) => item !== id);
      setRecentList(recent);
      renderRecentList();
      showToast('Dossier retiré de la liste.');
    });
  });
}

function renderHome() {
  const auth = getAuth();
  const hasLogin = !!(auth && auth.name);
  document.getElementById('view-home').classList.add('active');
  document.getElementById('view-dossier').classList.remove('active');

  if (hasLogin) {
    updateTopbar();
  }

  renderTypeButtons();
  renderRecentList();
}

function navigateToHome() {
  state.currentDossier = null;
  renderHome();
}

function bindFormValues(form, dossier) {
  form.innerHTML = '';

  const fieldGroups = [
    { title: 'IDENTIFICATION', fields: fieldDefinitions.base },
    { title: 'Détails du dossier', fields: dossierTemplates[dossier.type]?.fields || [] },
    { title: 'Preuves et suites', fields: fieldDefinitions.preuves },
    { title: 'VALIDATION', fields: fieldDefinitions.validation }
  ];

  fieldGroups.forEach((group) => {
    const panel = document.createElement('div');
    panel.className = 'form-panel';

    const header = document.createElement('div');
    header.className = 'form-panel-header';
    header.textContent = group.title;
    panel.appendChild(header);

    const body = document.createElement('div');
    body.className = 'form-panel-body';

    const grid = document.createElement('div');
    grid.className = 'form-grid';

    group.fields.forEach((field) => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'grid';
      wrapper.style.gap = '8px';

      const label = document.createElement('label');
      label.htmlFor = `field-${field.key}`;
      label.innerHTML = `${field.label}${field.required ? ' <span class="required-mark">*</span>' : ''}`;

      wrapper.appendChild(label);

      const value = dossier[field.key] || '';
      if (field.type === 'textarea') {
        const input = document.createElement('textarea');
        input.id = `field-${field.key}`;
        input.name = field.key;
        input.dataset.label = field.label;
        input.dataset.required = field.required ? 'true' : 'false';
        input.value = value;
        if (isReadOnlyForDossier(dossier)) input.disabled = true;
        wrapper.appendChild(input);
      } else if (field.type === 'select') {
        const input = document.createElement('select');
        input.id = `field-${field.key}`;
        input.name = field.key;
        input.dataset.label = field.label;
        input.dataset.required = field.required ? 'true' : 'false';
        input.innerHTML = `<option value="">Choisir…</option>${field.options
          .map((option) => `<option value="${option}" ${value === option ? 'selected' : ''}>${option}</option>`)
          .join('')}`;
        if (isReadOnlyForDossier(dossier)) input.disabled = true;
        wrapper.appendChild(input);
      } else if (field.type === 'checkboxes') {
        const box = document.createElement('div');
        box.className = 'checklist';
        if (field.required) {
          box.dataset.required = 'true';
        }

        field.options.forEach((option) => {
          const item = document.createElement('label');
          item.className = 'check-item';

          const input = document.createElement('input');
          input.type = 'checkbox';
          input.name = field.key;
          input.value = option;
          input.checked = Array.isArray(dossier[field.key]) ? dossier[field.key].includes(option) : false;
          input.dataset.label = field.label;
          input.dataset.required = field.required ? 'true' : 'false';
          if (isReadOnlyForDossier(dossier)) input.disabled = true;

          const text = document.createElement('span');
          text.textContent = option;

          item.appendChild(input);
          item.appendChild(text);
          box.appendChild(item);
        });

        wrapper.appendChild(box);
      } else {
        const input = document.createElement('input');
        input.type = field.type;
        input.id = `field-${field.key}`;
        input.name = field.key;
        input.value = value;
        input.dataset.label = field.label;
        input.dataset.required = field.required ? 'true' : 'false';
        if (isReadOnlyForDossier(dossier)) input.disabled = true;
        wrapper.appendChild(input);
      }

      grid.appendChild(wrapper);
    });

    body.appendChild(grid);
    panel.appendChild(body);
    form.appendChild(panel);
  });

  const actionRow = document.createElement('div');
  actionRow.className = 'form-row-actions';

  const canEdit = canModifyDossier(dossier);
  if (canEdit) {
    const saveBtn = document.createElement('button');
    saveBtn.type = 'button';
    saveBtn.className = 'primary-btn';
    saveBtn.textContent = 'Sauvegarder';
    saveBtn.addEventListener('click', saveCurrentDossier);
    actionRow.appendChild(saveBtn);

    const lockBtn = document.createElement('button');
    lockBtn.type = 'button';
    lockBtn.className = 'secondary-btn';
    lockBtn.textContent = dossier.locked ? '🔓 Déverrouiller (auteur)' : '🔒 Verrouiller';
    lockBtn.addEventListener('click', () => {
      if (dossier.locked) {
        unlockDossier();
      } else {
        lockDossier();
      }
    });
    actionRow.appendChild(lockBtn);

    const moderationBtn = document.createElement('button');
    moderationBtn.type = 'button';
    moderationBtn.className = 'ghost-btn';
    moderationBtn.style.color = 'var(--text)';
    moderationBtn.style.background = 'var(--panel-muted)';
    moderationBtn.style.border = '1px solid var(--line)';
    moderationBtn.textContent = '🛠 Modération';
    moderationBtn.addEventListener('click', openModerationModal);
    actionRow.appendChild(moderationBtn);
  }

  const openLinkBtn = document.createElement('button');
  openLinkBtn.type = 'button';
  openLinkBtn.className = 'ghost-btn';
  openLinkBtn.style.color = 'var(--text)';
  openLinkBtn.style.background = 'var(--panel-muted)';
  openLinkBtn.style.border = '1px solid var(--line)';
  openLinkBtn.textContent = '🔗 Ouvrir le dossier partagé';
  openLinkBtn.addEventListener('click', () => {
    const url = buildShareUrl(dossier);
    window.location.hash = '#' + encodePayload({ d: dossier });
    showToast('Dossier ouvert en partage public.');
  });
  actionRow.appendChild(openLinkBtn);

  form.appendChild(actionRow);
}

function isReadOnlyForDossier(dossier) {
  if (!dossier) return true;
  if (dossier.status === 'COMPLET') return true;
  if (dossier.locked && dossier.lockAuthor && dossier.lockAuthor !== (state.loggedInUser?.name || '')) return true;
  return false;
}

function canModifyDossier(dossier) {
  if (!state.loggedInUser) return false;
  if (dossier.status === 'COMPLET' && !(dossier.locked && dossier.lockAuthor === state.loggedInUser.name)) return false;
  if (dossier.locked && dossier.lockAuthor && dossier.lockAuthor !== state.loggedInUser.name) return false;
  return true;
}

function buildShareUrl(dossier) {
  const encoded = encodePayload({ d: dossier });
  return `${location.origin}${location.pathname}#${encoded}`;
}

function renderDossierView(dossier) {
  document.getElementById('view-home').classList.remove('active');
  document.getElementById('view-dossier').classList.add('active');

  const form = document.getElementById('dossier-form');
  const topbar = document.getElementById('dossier-topbar');
  const shareNotice = document.getElementById('share-notice');
  const formWrap = document.getElementById('dossier-form-wrap');

  const statusClass = dossier.status === 'COMPLET' ? 'complete' : dossier.locked ? 'readonly' : '';
  document.getElementById('dossier-status').textContent = dossier.status || 'INCOMPLET';
  document.getElementById('dossier-status').className = `status-badge ${statusClass}`.trim();
  document.getElementById('dossier-badge').textContent = `Dossier • ${typeMeta[dossier.type]?.label || 'Inconnu'}`;
  document.getElementById('viewer-title').textContent = dossier.title || typeMeta[dossier.type]?.label || 'Dossier';

  const shareLabel = dossier.status === 'COMPLET' ? 'lecture seule' : 'n’importe quel utilisateur peut le compléter';
  shareNotice.classList.remove('hidden');
  shareNotice.innerHTML = `
    <div class="eyebrow">Lien du dossier</div>
    <div><strong>${dossier.title || typeMeta[dossier.type]?.label}</strong></div>
    <div class="muted">${shareLabel}</div>
    <div class="share-url">
      <input type="text" value="${buildShareUrl(dossier)}" readonly />
      <button type="button" class="primary-btn small" id="copy-share-url">📋 Copier le lien</button>
    </div>
  `;

  document.getElementById('copy-share-url').addEventListener('click', () => {
    copyTextToClipboard(buildShareUrl(dossier));
  });

  formWrap.classList.remove('hidden');
  topbar.classList.remove('hidden');
  bindFormValues(form, dossier);

  const linked = document.createElement('div');
  linked.className = 'link-grid';
  linked.innerHTML = `
    <div class="section-header"><h3>Dossiers liés</h3></div>
    <div class="field-row">
      <label>Coller un lien d’un autre dossier</label>
      <div class="share-url">
        <input id="linked-url" type="text" placeholder="https://...#..." />
        <button type="button" id="btn-add-linked" class="secondary-btn small">Ajouter</button>
      </div>
    </div>
    <div id="linked-list"></div>
  `;

  form.appendChild(linked);
  renderLinkedDossiers();

  const bindAddLinked = document.getElementById('btn-add-linked');
  bindAddLinked.addEventListener('click', () => {
    const url = document.getElementById('linked-url').value.trim();
    if (!url) {
      showToast('Collez un lien de dossier valide.');
      return;
    }
    addLinkedDossier(url);
  });

  if (!state.loggedInUser) {
    document.querySelectorAll('input, textarea, select').forEach((field) => {
      field.disabled = true;
    });
  }
}

function renderLinkedDossiers() {
  const list = document.getElementById('linked-list');
  if (!list) return;

  if (!state.linkedDossiers.length) {
    list.innerHTML = '<div class="muted">Aucun dossier lié ajouté.</div>';
    return;
  }

  list.innerHTML = state.linkedDossiers
    .map(
      (item) => `
        <div class="link-card">
          <div class="link-card-header">
            <strong>${item.title}</strong>
            <span class="inline-tag ${item.status === 'COMPLET' ? 'complete' : item.locked ? 'readonly' : ''}">${item.status || 'INCOMPLET'}</span>
          </div>
          <small>${typeMeta[item.type]?.label || item.type}</small>
          <div class="meta-row">
            <div class="muted">${item.numeroDossier || 'N° non défini'}</div>
            <button class="primary-btn small" data-open-linked="${encodeURIComponent(item.url)}">Ouvrir</button>
          </div>
        </div>
      `
    )
    .join('');

  list.querySelectorAll('[data-open-linked]').forEach((button) => {
    button.addEventListener('click', () => {
      const url = decodeURIComponent(button.dataset.openLinked);
      openSharedDossier(url);
    });
  });
}

function addLinkedDossier(url) {
  const dossier = openSharedDossier(url, false);
  if (!dossier) {
    showToast('Le lien ne correspond pas à un dossier valide.');
    return;
  }

  const duplicate = state.linkedDossiers.some((item) => item.url === url);
  if (!duplicate) {
    state.linkedDossiers.push({ ...dossier, url });
    renderLinkedDossiers();
    showToast('Dossier lié ajouté.');
  }
}

function openSharedDossier(url, navigate = true) {
  try {
    const cleanUrl = url.includes('#') ? url.split('#')[1] : url;
    const payload = decodePayload(cleanUrl);
    const dossier = payload?.d || payload;
    if (!dossier || !dossier.type) {
      return null;
    }

    if (navigate) {
      state.currentDossier = dossier;
      renderDossierView(dossier);
    }

    return dossier;
  } catch (error) {
    return null;
  }
}

function onHashChange() {
  const rawHash = window.location.hash.replace(/^#/, '');
  if (!rawHash) {
    if (state.currentDossier) {
      renderHome();
    }
    return;
  }

  const payload = decodePayload(rawHash);
  const dossier = payload?.d || payload;
  if (dossier && dossier.type) {
    state.currentDossier = dossier;
    renderDossierView(dossier);
    return;
  }

  if (!state.currentDossier) {
    renderHome();
  }
}

function normalizeFormData(form) {
  const formData = new FormData(form);
  const result = {};

  for (const [key, value] of formData.entries()) {
    if (formData.getAll(key).length > 1 && key !== 'mesuresPrises') {
      result[key] = formData.getAll(key);
    } else {
      result[key] = value;
    }
  }

  const checkboxes = form.querySelectorAll('input[type="checkbox"][name]');
  checkboxes.forEach((checkbox) => {
    const key = checkbox.name;
    if (!result[key]) result[key] = [];
    if (checkbox.checked) {
      if (!Array.isArray(result[key])) result[key] = [result[key]];
      result[key].push(checkbox.value);
    }
  });

  return result;
}

function prepareDossierFromForm(dossier) {
  const form = document.getElementById('dossier-form');
  const data = normalizeFormData(form);
  const merged = { ...dossier, ...data };

  merged.title = typeMeta[merged.type]?.label || 'Dossier';
  merged.updatedAt = new Date().toISOString();
  merged.author = state.loggedInUser ? state.loggedInUser.name : merged.author || '';
  merged.ouvertPar = merged.ouvertPar || merged.author || state.loggedInUser?.name || '';
  merged.status = merged.statut || merged.status || 'INCOMPLET';

  if (merged.status === 'COMPLET') {
    merged.completePar = merged.completePar || state.loggedInUser?.name || merged.ouvertPar || '';
    merged.dateCompletion = merged.dateCompletion || new Date().toISOString().slice(0, 10);
  }

  return merged;
}

function saveCurrentDossier() {
  const form = document.getElementById('dossier-form');
  const missing = listRequiredFieldsForCurrentDossier();

  if (missing.length) {
    showToast(`Champs obligatoires manquants : ${missing.slice(0, 3).join(', ')}${missing.length > 3 ? '...' : ''}`);
    return;
  }

  const dossier = prepareDossierFromForm(state.currentDossier);
  const map = getSavedDossiers();
  map[dossier.id] = dossier;
  saveDossiersMap(map);

  const recent = getRecentList();
  if (!recent.includes(dossier.id)) recent.push(dossier.id);
  setRecentList(recent.slice(-12));

  state.currentDossier = dossier;
  window.location.hash = '#' + encodePayload({ d: dossier });
  renderDossierView(dossier);
  renderRecentList();
  showToast('Dossier sauvegardé.');
}

function copyTextToClipboard(value) {
  navigator.clipboard
    .writeText(value)
    .then(() => showToast('Lien copié.'))
    .catch(() => showToast('Le navigateur a refusé la copie. Copiez manuellement.'));
}

function lockDossier() {
  const dossier = state.currentDossier;
  if (!dossier) return;

  const missing = listRequiredFieldsForCurrentDossier();
  if (missing.length) {
    const confirmLock = window.confirm(`Le dossier contient ${missing.length} champs obligatoires manquants. Confirmez le verrouillage ?`);
    if (!confirmLock) return;
  }

  dossier.locked = true;
  dossier.lockAuthor = state.loggedInUser.name;
  dossier.status = dossier.status || 'INCOMPLET';
  const map = getSavedDossiers();
  map[dossier.id] = dossier;
  saveDossiersMap(map);
  renderDossierView(dossier);
  showToast('Dossier verrouillé par l’auteur.');
}

function unlockDossier() {
  const dossier = state.currentDossier;
  if (!dossier || !state.loggedInUser) return;
  if (dossier.lockAuthor !== state.loggedInUser.name) {
    showToast('Seul l’auteur peut déverrouiller ce dossier.');
    return;
  }

  dossier.locked = false;
  dossier.lockAuthor = '';
  const map = getSavedDossiers();
  map[dossier.id] = dossier;
  saveDossiersMap(map);
  renderDossierView(dossier);
  showToast('Dossier déverrouillé.');
}

function openModerationModal() {
  const dossier = state.currentDossier;
  if (!dossier) return;

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-card">
      <div class="modal-header">
        <h3>🛠 Modération</h3>
        <button class="ghost-btn" data-close-modal="true">×</button>
      </div>
      <div class="modal-body">
        <div class="action-list">
          <div class="action-row">
            <div>
              <strong>Supprimer</strong>
              <div class="muted">Retire le dossier de la liste.</div>
            </div>
            <button class="danger-btn" data-action="delete">🗑 Supprimer</button>
          </div>
          <div class="action-row">
            <div>
              <strong>Dupliquer</strong>
              <div class="muted">Crée une copie du dossier.</div>
            </div>
            <button class="secondary-btn" data-action="duplicate">📄 Dupliquer</button>
          </div>
          <div class="action-row">
            <div>
              <strong>Vider le dossier</strong>
              <div class="muted">Efface les données du dossier.</div>
            </div>
            <button class="secondary-btn" data-action="clear">🧹 Vider</button>
          </div>
          <div class="action-row">
            <div>
              <strong>Forcer la modification</strong>
              <div class="muted">Désactive le verrouillage.</div>
            </div>
            <button class="secondary-btn" data-action="force-edit">🔓 Forcer</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector('[data-close-modal]').addEventListener('click', () => modal.remove());
  modal.querySelectorAll('[data-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.dataset.action;
      const code = window.prompt('Code modérateur :');
      if (String(code || '') !== String(CONFIG.moderatorCode)) {
        showToast('Code modérateur incorrect.');
        return;
      }

      switch (action) {
        case 'delete':
          if (!window.confirm('Supprimer définitivement ce dossier ?')) return;
          removeDossierFromStorage(dossier.id);
          modal.remove();
          navigateToHome();
          showToast('Dossier supprimé.');
          break;
        case 'duplicate': {
          const clone = { ...dossier, id: generateId(), title: `${dossier.title} (copie)`, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), lockAuthor: '', locked: false };
          const map = getSavedDossiers();
          map[clone.id] = clone;
          saveDossiersMap(map);
          state.currentDossier = clone;
          modal.remove();
          renderDossierView(clone);
          showToast('Copie créée.');
          break;
        }
        case 'clear': {
          if (!window.confirm('Vider le dossier ? Cette action ne peut pas être annulée.')) return;
          const cleared = { ...dossier, ...createBaseDossier(dossier.type), id: dossier.id, title: dossier.title, author: dossier.author, type: dossier.type, createdAt: dossier.createdAt, updatedAt: new Date().toISOString() };
          const map = getSavedDossiers();
          map[cleared.id] = cleared;
          saveDossiersMap(map);
          state.currentDossier = cleared;
          modal.remove();
          renderDossierView(cleared);
          showToast('Dossier vidé.');
          break;
        }
        case 'force-edit': {
          dossier.locked = false;
          dossier.lockAuthor = '';
          const map = getSavedDossiers();
          map[dossier.id] = dossier;
          saveDossiersMap(map);
          modal.remove();
          renderDossierView(dossier);
          showToast('Modification forcée activée.');
          break;
        }
        default:
          break;
      }
    });
  });
}

function removeDossierFromStorage(id) {
  const map = getSavedDossiers();
  delete map[id];
  saveDossiersMap(map);
  setRecentList(getRecentList().filter((item) => item !== id));
}

function handleLogin() {
  const name = document.getElementById('login-name').value.trim();
  const password = document.getElementById('login-password').value;

  if (name.length < 2) {
    showToast('Le nom doit faire au moins 2 caractères.');
    return;
  }

  if (password.length < 4) {
    showToast('Le mot de passe doit faire au moins 4 caractères.');
    return;
  }

  sha256(password).then((hash) => {
    setLoggedInUser({ name, passwordHash: hash });
    document.getElementById('login-password').value = '';
  });
}

function initEventBindings() {
  document.getElementById('btn-login').addEventListener('click', handleLogin);
  document.getElementById('btn-logout').addEventListener('click', logout);
  document.getElementById('btn-home').addEventListener('click', navigateToHome);
  document.getElementById('btn-new-dossier').addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-card">
        <div class="modal-header">
          <h3>Choisir un type</h3>
          <button class="ghost-btn" data-close-modal="true">×</button>
        </div>
        <div class="modal-body">
          <div class="type-grid">
            ${Object.keys(typeMeta)
              .map(
                (type) => `
                  <button class="type-item" data-type-choice="${type}">
                    <div>
                      <strong>${typeMeta[type].label}</strong>
                      <span>${typeMeta[type].description}</span>
                    </div>
                    <span>＋</span>
                  </button>
                `
              )
              .join('')}
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    modal.querySelector('[data-close-modal]').addEventListener('click', () => modal.remove());
    modal.querySelectorAll('[data-type-choice]').forEach((button) => {
      button.addEventListener('click', () => {
        const dossier = createBaseDossier(button.dataset.typeChoice);
        state.currentDossier = dossier;
        modal.remove();
        renderDossierView(dossier);
      });
    });
  });

  window.addEventListener('hashchange', onHashChange);
  window.addEventListener('beforeunload', (event) => {
    const form = document.getElementById('dossier-form');
    if (form && form.querySelector('input, textarea, select') && !state.currentDossier?.readOnly) {
      event.preventDefault();
      event.returnValue = '';
    }
  });
}

function bootstrap() {
  updateTopbar();
  renderHome();
  initEventBindings();

  const auth = getAuth();
  if (auth && auth.name) {
    state.loggedInUser = auth;
  }

  const hash = window.location.hash.replace(/^#/, '');
  if (hash) {
    const payload = decodePayload(hash);
    const dossier = payload?.d || payload;
    if (dossier && dossier.type) {
      state.currentDossier = dossier;
      renderDossierView(dossier);
    }
  }
}

bootstrap();
