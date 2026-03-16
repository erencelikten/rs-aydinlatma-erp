// Biyosera ERP/CRM System
// Main Application JavaScript

// Data Storage
const AppData = {
    stok: JSON.parse(localStorage.getItem('biyosera_stok')) || [
        { id: 1, kod: 'MED-001', ad: 'Cerrahi Maske', kategori: 'Koruyucu Ekipman', miktar: 5000, birim: 'Adet', birimFiyat: 2.50, minStok: 1000, durum: 'normal' },
        { id: 2, kod: 'MED-002', ad: 'Eldiven (Lateks)', kategori: 'Koruyucu Ekipman', miktar: 800, birim: 'Kutu', birimFiyat: 45.00, minStok: 500, durum: 'kritik' },
        { id: 3, kod: 'MED-003', ad: 'Dezenfektan 1L', kategori: 'Hijyen', miktar: 2500, birim: 'Adet', birimFiyat: 35.00, minStok: 1000, durum: 'normal' },
        { id: 4, kod: 'LAB-001', ad: 'Test Kiti COVID-19', kategori: 'Laboratuvar', miktar: 350, birim: 'Adet', birimFiyat: 125.00, minStok: 500, durum: 'kritik' },
        { id: 5, kod: 'MED-004', ad: 'Enjektör 5ml', kategori: 'Tıbbi Malzeme', miktar: 3200, birim: 'Adet', birimFiyat: 1.75, minStok: 2000, durum: 'normal' }
    ],

    muhasebe: JSON.parse(localStorage.getItem('biyosera_muhasebe')) || [
        { id: 1, tarih: '2025-12-20', tip: 'fatura', no: 'FAT-2025-001', cari: 'Sağlık Bakanlığı', tutar: 125000, durum: 'odendi', aciklama: 'Tıbbi malzeme satışı' },
        { id: 2, tarih: '2025-12-18', tip: 'fatura', no: 'FAT-2025-002', cari: 'Özel Hastane A.Ş.', tutar: 87500, durum: 'beklemede', aciklama: 'Koruyucu ekipman' },
        { id: 3, tarih: '2025-12-15', tip: 'gider', no: 'GID-2025-012', cari: 'Tedarikçi XYZ', tutar: 45000, durum: 'odendi', aciklama: 'Hammadde alımı' }
    ],

    gelirGider: JSON.parse(localStorage.getItem('biyosera_gelir_gider')) || [
        { id: 1, tarih: '2025-12-22', tip: 'gelir', kategori: 'Satış', tutar: 45000, aciklama: 'Medikal ürün satışı', onay: true },
        { id: 2, tarih: '2025-12-22', tip: 'gider', kategori: 'Personel', tutar: 28000, aciklama: 'Maaş ödemeleri', onay: true },
        { id: 3, tarih: '2025-12-21', tip: 'gelir', kategori: 'Satış', tutar: 67500, aciklama: 'Toplu sipariş', onay: true },
        { id: 4, tarih: '2025-12-20', tip: 'gider', kategori: 'Operasyonel', tutar: 12500, aciklama: 'Kira ve faturalar', onay: true },
        { id: 5, tarih: '2025-12-19', tip: 'gider', kategori: 'Tedarik', tutar: 35000, aciklama: 'Hammadde alımı', onay: false }
    ],

    imzalar: JSON.parse(localStorage.getItem('biyosera_imzalar')) || [
        { id: 1, belge: 'Tedarik Sözleşmesi #2025-A12', tarih: '2025-12-22', imzalayan: 'Eren Yönetici', durum: 'imzalandi', tip: 'sozlesme' },
        { id: 2, belge: 'Kalite Onay Belgesi #QA-445', tarih: '2025-12-21', imzalayan: 'Beklemede', durum: 'beklemede', tip: 'onay' },
        { id: 3, belge: 'Satış Teklifi #ST-2025-089', tarih: '2025-12-20', imzalayan: 'Eren Yönetici', durum: 'imzalandi', tip: 'teklif' }
    ]
};

// Save data to localStorage
function saveData(key) {
    localStorage.setItem(`biyosera_${key}`, JSON.stringify(AppData[key]));
}

// Page Management
const Pages = {
    dashboard: () => `
    <div class="grid grid-4">
      <div class="stat-card">
        <div class="stat-header">
          <div>
            <div class="stat-value">${AppData.stok.length}</div>
            <div class="stat-label">Toplam Ürün</div>
          </div>
          <div class="stat-icon">📦</div>
        </div>
        <div class="stat-change positive">
          <span>↑ 12%</span>
          <span style="color: var(--text-muted)">Bu ay</span>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-header">
          <div>
            <div class="stat-value">₺${calculateTotalRevenue().toLocaleString('tr-TR')}</div>
            <div class="stat-label">Toplam Gelir</div>
          </div>
          <div class="stat-icon">💰</div>
        </div>
        <div class="stat-change positive">
          <span>↑ 23%</span>
          <span style="color: var(--text-muted)">Bu ay</span>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-header">
          <div>
            <div class="stat-value">${AppData.muhasebe.filter(m => m.durum === 'beklemede').length}</div>
            <div class="stat-label">Bekleyen Fatura</div>
          </div>
          <div class="stat-icon">📄</div>
        </div>
        <div class="stat-change negative">
          <span>↓ 5%</span>
          <span style="color: var(--text-muted)">Bu ay</span>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-header">
          <div>
            <div class="stat-value">${AppData.stok.filter(s => s.durum === 'kritik').length}</div>
            <div class="stat-label">Kritik Stok</div>
          </div>
          <div class="stat-icon">⚠️</div>
        </div>
        <div class="stat-change negative">
          <span>Dikkat!</span>
        </div>
      </div>
    </div>
    
    <div class="grid grid-2 mt-2">
      <div class="card">
        <div class="card-header">
          <div>
            <h3 class="card-title">Son İşlemler</h3>
            <p class="card-subtitle">Güncel muhasebe hareketleri</p>
          </div>
          <button class="btn btn-secondary">Tümünü Gör</button>
        </div>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Tarih</th>
                <th>İşlem</th>
                <th>Tutar</th>
                <th>Durum</th>
              </tr>
            </thead>
            <tbody>
              ${AppData.muhasebe.slice(0, 5).map(m => `
                <tr>
                  <td>${formatDate(m.tarih)}</td>
                  <td>${m.aciklama}</td>
                  <td>₺${m.tutar.toLocaleString('tr-TR')}</td>
                  <td><span class="badge badge-${m.durum === 'odendi' ? 'success' : 'warning'}">${m.durum}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <div>
            <h3 class="card-title">Kritik Stok Uyarıları</h3>
            <p class="card-subtitle">Minimum seviyenin altındaki ürünler</p>
          </div>
          <button class="btn btn-secondary">Sipariş Ver</button>
        </div>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Ürün</th>
                <th>Mevcut</th>
                <th>Min. Stok</th>
                <th>Durum</th>
              </tr>
            </thead>
            <tbody>
              ${AppData.stok.filter(s => s.durum === 'kritik').map(s => `
                <tr>
                  <td>${s.ad}</td>
                  <td>${s.miktar} ${s.birim}</td>
                  <td>${s.minStok} ${s.birim}</td>
                  <td><span class="badge badge-danger">Kritik</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,

    stok: () => `
    <div class="flex-between mb-2">
      <div>
        <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">Stok Yönetimi</h2>
        <p style="color: var(--text-muted);">Tüm ürünlerinizi yönetin ve takip edin</p>
      </div>
      <button class="btn btn-primary" onclick="openStokModal()">
        <span>➕</span>
        <span>Yeni Ürün Ekle</span>
      </button>
    </div>
    
    <div class="grid grid-4 mb-2">
      <div class="stat-card">
        <div class="stat-value">${AppData.stok.length}</div>
        <div class="stat-label">Toplam Ürün Çeşidi</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${AppData.stok.reduce((sum, s) => sum + s.miktar, 0).toLocaleString('tr-TR')}</div>
        <div class="stat-label">Toplam Stok Adedi</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">₺${AppData.stok.reduce((sum, s) => sum + (s.miktar * s.birimFiyat), 0).toLocaleString('tr-TR')}</div>
        <div class="stat-label">Toplam Değer</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${AppData.stok.filter(s => s.durum === 'kritik').length}</div>
        <div class="stat-label">Kritik Seviye</div>
      </div>
    </div>
    
    <div class="card">
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Kod</th>
              <th>Ürün Adı</th>
              <th>Kategori</th>
              <th>Miktar</th>
              <th>Birim Fiyat</th>
              <th>Toplam Değer</th>
              <th>Durum</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            ${AppData.stok.map(s => `
              <tr>
                <td><strong>${s.kod}</strong></td>
                <td>${s.ad}</td>
                <td>${s.kategori}</td>
                <td>${s.miktar} ${s.birim}</td>
                <td>₺${s.birimFiyat.toFixed(2)}</td>
                <td>₺${(s.miktar * s.birimFiyat).toLocaleString('tr-TR')}</td>
                <td><span class="badge badge-${s.durum === 'kritik' ? 'danger' : 'success'}">${s.durum}</span></td>
                <td>
                  <button class="btn btn-secondary" style="padding: 0.25rem 0.75rem;" onclick="editStok(${s.id})">Düzenle</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `,

    muhasebe: () => `
    <div class="flex-between mb-2">
      <div>
        <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">Muhasebe</h2>
        <p style="color: var(--text-muted);">Fatura ve cari hesap yönetimi</p>
      </div>
      <button class="btn btn-primary" onclick="openMuhasebeModal()">
        <span>➕</span>
        <span>Yeni Kayıt</span>
      </button>
    </div>
    
    <div class="grid grid-3 mb-2">
      <div class="stat-card">
        <div class="stat-value">₺${AppData.muhasebe.filter(m => m.tip === 'fatura').reduce((sum, m) => sum + m.tutar, 0).toLocaleString('tr-TR')}</div>
        <div class="stat-label">Toplam Fatura</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">₺${AppData.muhasebe.filter(m => m.durum === 'odendi').reduce((sum, m) => sum + m.tutar, 0).toLocaleString('tr-TR')}</div>
        <div class="stat-label">Ödenen</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">₺${AppData.muhasebe.filter(m => m.durum === 'beklemede').reduce((sum, m) => sum + m.tutar, 0).toLocaleString('tr-TR')}</div>
        <div class="stat-label">Bekleyen</div>
      </div>
    </div>
    
    <div class="card">
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Tarih</th>
              <th>Tip</th>
              <th>Belge No</th>
              <th>Cari</th>
              <th>Açıklama</th>
              <th>Tutar</th>
              <th>Durum</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            ${AppData.muhasebe.map(m => `
              <tr>
                <td>${formatDate(m.tarih)}</td>
                <td><span class="badge badge-info">${m.tip}</span></td>
                <td><strong>${m.no}</strong></td>
                <td>${m.cari}</td>
                <td>${m.aciklama}</td>
                <td>₺${m.tutar.toLocaleString('tr-TR')}</td>
                <td><span class="badge badge-${m.durum === 'odendi' ? 'success' : 'warning'}">${m.durum}</span></td>
                <td>
                  <button class="btn btn-secondary" style="padding: 0.25rem 0.75rem;">Görüntüle</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `,

    imza: () => `
    <div class="flex-between mb-2">
      <div>
        <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">İmza Sistemi</h2>
        <p style="color: var(--text-muted);">Dijital imza ve onay yönetimi</p>
      </div>
      <button class="btn btn-primary" onclick="openImzaModal()">
        <span>➕</span>
        <span>Yeni Belge</span>
      </button>
    </div>
    
    <div class="grid grid-3 mb-2">
      <div class="stat-card">
        <div class="stat-value">${AppData.imzalar.length}</div>
        <div class="stat-label">Toplam Belge</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${AppData.imzalar.filter(i => i.durum === 'imzalandi').length}</div>
        <div class="stat-label">İmzalanan</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${AppData.imzalar.filter(i => i.durum === 'beklemede').length}</div>
        <div class="stat-label">Bekleyen</div>
      </div>
    </div>
    
    <div class="card">
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Belge</th>
              <th>Tip</th>
              <th>Tarih</th>
              <th>İmzalayan</th>
              <th>Durum</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            ${AppData.imzalar.map(i => `
              <tr>
                <td><strong>${i.belge}</strong></td>
                <td><span class="badge badge-info">${i.tip}</span></td>
                <td>${formatDate(i.tarih)}</td>
                <td>${i.imzalayan}</td>
                <td><span class="badge badge-${i.durum === 'imzalandi' ? 'success' : 'warning'}">${i.durum}</span></td>
                <td>
                  ${i.durum === 'beklemede' ?
            `<button class="btn btn-success" style="padding: 0.25rem 0.75rem;" onclick="signDocument(${i.id})">İmzala</button>` :
            `<button class="btn btn-secondary" style="padding: 0.25rem 0.75rem;">Görüntüle</button>`
        }
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `,

    'gelir-gider': () => `
    <div class="flex-between mb-2">
      <div>
        <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">Gelir-Gider Tablosu</h2>
        <p style="color: var(--text-muted);">Finansal hareketleri takip edin</p>
      </div>
      <button class="btn btn-primary" onclick="openGelirGiderModal()">
        <span>➕</span>
        <span>Yeni Kayıt</span>
      </button>
    </div>
    
    <div class="grid grid-4 mb-2">
      <div class="stat-card">
        <div class="stat-value">₺${AppData.gelirGider.filter(g => g.tip === 'gelir').reduce((sum, g) => sum + g.tutar, 0).toLocaleString('tr-TR')}</div>
        <div class="stat-label">Toplam Gelir</div>
        <div class="stat-change positive">
          <span>↑ Gelir</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-value">₺${AppData.gelirGider.filter(g => g.tip === 'gider').reduce((sum, g) => sum + g.tutar, 0).toLocaleString('tr-TR')}</div>
        <div class="stat-label">Toplam Gider</div>
        <div class="stat-change negative">
          <span>↓ Gider</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-value">₺${(AppData.gelirGider.filter(g => g.tip === 'gelir').reduce((sum, g) => sum + g.tutar, 0) - AppData.gelirGider.filter(g => g.tip === 'gider').reduce((sum, g) => sum + g.tutar, 0)).toLocaleString('tr-TR')}</div>
        <div class="stat-label">Net Kar/Zarar</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${AppData.gelirGider.filter(g => !g.onay).length}</div>
        <div class="stat-label">Onay Bekleyen</div>
      </div>
    </div>
    
    <div class="card">
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Tarih</th>
              <th>Tip</th>
              <th>Kategori</th>
              <th>Açıklama</th>
              <th>Tutar</th>
              <th>Onay</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            ${AppData.gelirGider.map(g => `
              <tr>
                <td>${formatDate(g.tarih)}</td>
                <td><span class="badge badge-${g.tip === 'gelir' ? 'success' : 'danger'}">${g.tip}</span></td>
                <td>${g.kategori}</td>
                <td>${g.aciklama}</td>
                <td style="font-weight: 700; color: ${g.tip === 'gelir' ? 'var(--secondary)' : 'var(--accent)'}">
                  ${g.tip === 'gelir' ? '+' : '-'}₺${g.tutar.toLocaleString('tr-TR')}
                </td>
                <td><span class="badge badge-${g.onay ? 'success' : 'warning'}">${g.onay ? 'Onaylandı' : 'Bekliyor'}</span></td>
                <td>
                  ${!g.onay ?
            `<button class="btn btn-success" style="padding: 0.25rem 0.75rem;" onclick="approveTransaction(${g.id})">Onayla</button>` :
            `<button class="btn btn-secondary" style="padding: 0.25rem 0.75rem;">Görüntüle</button>`
        }
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `
};

// Helper Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function calculateTotalRevenue() {
    return AppData.gelirGider.filter(g => g.tip === 'gelir').reduce((sum, g) => sum + g.tutar, 0);
}

// Navigation
function navigateTo(page) {
    const pageTitle = {
        'dashboard': 'Dashboard',
        'stok': 'Stok Yönetimi',
        'muhasebe': 'Muhasebe',
        'imza': 'İmza Sistemi',
        'gelir-gider': 'Gelir-Gider Tablosu',
        'raporlar': 'Raporlar',
        'analizler': 'Analizler',
        'ayarlar': 'Sistem Ayarları',
        'kullanicilar': 'Kullanıcı Yönetimi'
    };

    document.getElementById('pageTitle').textContent = pageTitle[page] || 'Dashboard';
    document.getElementById('mainContent').innerHTML = Pages[page] ? Pages[page]() : '<div class="card"><h2>Bu sayfa henüz hazırlanıyor...</h2></div>';

    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === page) {
            item.classList.add('active');
        }
    });
}

// Modal Functions
function openModal(title, body, footer = '') {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalBody').innerHTML = body;
    if (footer) {
        document.getElementById('modalFooter').innerHTML = footer;
    }
    document.getElementById('modalOverlay').classList.add('active');
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
}

function openStokModal() {
    const body = `
    <form id="stokForm">
      <div class="form-group">
        <label class="form-label">Ürün Kodu</label>
        <input type="text" class="form-input" name="kod" required>
      </div>
      <div class="form-group">
        <label class="form-label">Ürün Adı</label>
        <input type="text" class="form-input" name="ad" required>
      </div>
      <div class="form-group">
        <label class="form-label">Kategori</label>
        <select class="form-select" name="kategori" required>
          <option value="Koruyucu Ekipman">Koruyucu Ekipman</option>
          <option value="Tıbbi Malzeme">Tıbbi Malzeme</option>
          <option value="Laboratuvar">Laboratuvar</option>
          <option value="Hijyen">Hijyen</option>
        </select>
      </div>
      <div class="grid grid-2">
        <div class="form-group">
          <label class="form-label">Miktar</label>
          <input type="number" class="form-input" name="miktar" required>
        </div>
        <div class="form-group">
          <label class="form-label">Birim</label>
          <input type="text" class="form-input" name="birim" value="Adet" required>
        </div>
      </div>
      <div class="grid grid-2">
        <div class="form-group">
          <label class="form-label">Birim Fiyat (₺)</label>
          <input type="number" step="0.01" class="form-input" name="birimFiyat" required>
        </div>
        <div class="form-group">
          <label class="form-label">Minimum Stok</label>
          <input type="number" class="form-input" name="minStok" required>
        </div>
      </div>
    </form>
  `;

    const footer = `
    <button class="btn btn-secondary" onclick="closeModal()">İptal</button>
    <button class="btn btn-primary" onclick="saveStok()">Kaydet</button>
  `;

    openModal('Yeni Ürün Ekle', body, footer);
}

function saveStok() {
    const form = document.getElementById('stokForm');
    const formData = new FormData(form);
    const newStok = {
        id: AppData.stok.length + 1,
        kod: formData.get('kod'),
        ad: formData.get('ad'),
        kategori: formData.get('kategori'),
        miktar: parseInt(formData.get('miktar')),
        birim: formData.get('birim'),
        birimFiyat: parseFloat(formData.get('birimFiyat')),
        minStok: parseInt(formData.get('minStok')),
        durum: parseInt(formData.get('miktar')) < parseInt(formData.get('minStok')) ? 'kritik' : 'normal'
    };

    AppData.stok.push(newStok);
    saveData('stok');
    closeModal();
    navigateTo('stok');
}

function openGelirGiderModal() {
    const body = `
    <form id="gelirGiderForm">
      <div class="form-group">
        <label class="form-label">Tip</label>
        <select class="form-select" name="tip" required>
          <option value="gelir">Gelir</option>
          <option value="gider">Gider</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Kategori</label>
        <select class="form-select" name="kategori" required>
          <option value="Satış">Satış</option>
          <option value="Personel">Personel</option>
          <option value="Operasyonel">Operasyonel</option>
          <option value="Tedarik">Tedarik</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Tutar (₺)</label>
        <input type="number" step="0.01" class="form-input" name="tutar" required>
      </div>
      <div class="form-group">
        <label class="form-label">Açıklama</label>
        <textarea class="form-textarea" name="aciklama" required></textarea>
      </div>
      <div class="form-group">
        <label class="form-label">Tarih</label>
        <input type="date" class="form-input" name="tarih" value="${new Date().toISOString().split('T')[0]}" required>
      </div>
    </form>
  `;

    const footer = `
    <button class="btn btn-secondary" onclick="closeModal()">İptal</button>
    <button class="btn btn-primary" onclick="saveGelirGider()">Kaydet</button>
  `;

    openModal('Yeni Gelir/Gider Kaydı', body, footer);
}

function saveGelirGider() {
    const form = document.getElementById('gelirGiderForm');
    const formData = new FormData(form);
    const newRecord = {
        id: AppData.gelirGider.length + 1,
        tarih: formData.get('tarih'),
        tip: formData.get('tip'),
        kategori: formData.get('kategori'),
        tutar: parseFloat(formData.get('tutar')),
        aciklama: formData.get('aciklama'),
        onay: false
    };

    AppData.gelirGider.unshift(newRecord);
    saveData('gelir_gider');
    closeModal();
    navigateTo('gelir-gider');
}

function approveTransaction(id) {
    const transaction = AppData.gelirGider.find(g => g.id === id);
    if (transaction) {
        transaction.onay = true;
        saveData('gelir_gider');
        navigateTo('gelir-gider');
    }
}

function signDocument(id) {
    const doc = AppData.imzalar.find(i => i.id === id);
    if (doc) {
        doc.durum = 'imzalandi';
        doc.imzalayan = 'Eren Yönetici';
        saveData('imzalar');
        navigateTo('imza');
    }
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    // Load dashboard
    navigateTo('dashboard');

    // Setup navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.dataset.page;
            if (page) {
                navigateTo(page);
            }
        });
    });

    // Close modal on overlay click
    document.getElementById('modalOverlay').addEventListener('click', (e) => {
        if (e.target.id === 'modalOverlay') {
            closeModal();
        }
    });
});
