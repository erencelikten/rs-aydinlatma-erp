// --- EK MODÜLLER (app-modules.js) ---

// --- MODULE: PURCHASING ---
function renderPurchasing() {
    return `
        <div class="flex-between mb-2">
            <div>
                <h2>Satın Alma & Tedarik</h2>
                <p class="text-muted">Hammadde, cihaz ve medikal malzeme siparişleri</p>
            </div>
            <button class="btn btn-warning" onclick="alert('Tedarikçi sipariş formu')">
                ${Icons.plus} Yeni Sipariş
            </button>
        </div>
        
        <div class="grid grid-3 mb-2">
            <div class="stat-card">
                <div class="stat-value text-warning">₺45,000</div>
                <div class="stat-label">Bekleyen Siparişler</div>
            </div>
             <div class="stat-card">
                <div class="stat-value">5</div>
                <div class="stat-label">Aktif Tedarikçi</div>
            </div>
            <div class="stat-card">
                <div class="stat-value text-danger">2</div>
                <div class="stat-label">Geciken Teslimat</div>
            </div>
        </div>

        <div class="card">
            <div class="card-header"><h3>Tedarikçi Listesi ve Borçlar</h3></div>
            <div class="table-container">
                <table>
                    <thead><tr><th>Tedarikçi</th><th>Kategori</th><th>Borç</th><th>Vade</th><th>Durum</th></tr></thead>
                    <tbody>
                        ${AppData.payables.map(p => `
                            <tr>
                                <td>${p.supplier}</td>
                                <td>${p.type}</td>
                                <td class="text-danger bold">${formatCurrency(p.amount)}</td>
                                <td>${formatDate(p.dueDate)}</td>
                                <td><span class="badge badge-warning">${p.status}</span></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// --- MODULE: PRODUCTION ---
function renderProduction() {
    const totalStockValue = AppData.products.reduce((sum, p) => sum + (p.price * p.stock), 0);

    return `
        <div class="flex-between mb-2">
            <div>
                <h2>Üretim Hattı & Stok</h2>
                <p class="text-muted">Cihaz montaj, stok ve kalite kontrol</p>
            </div>
            <div class="flex gap-1">
                <button class="btn btn-primary" onclick="openModal('product')">${Icons.plus} Ürün Ekle</button>
            </div>
        </div>

        <div class="grid grid-3 mb-2">
            <div class="stat-card">
                <div class="stat-value">${AppData.products.length}</div>
                <div class="stat-label">Ürün Çeşidi</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${AppData.products.reduce((sum, p) => sum + p.stock, 0)}</div>
                <div class="stat-label">Toplam Stok</div>
            </div>
            <div class="stat-card">
                <div class="stat-value text-success">${formatCurrency(totalStockValue)}</div>
                <div class="stat-label">Stok Değeri</div>
            </div>
        </div>

        <div class="card">
            <div class="card-header"><h3>Ürün Kataloğu</h3></div>
            <div class="table-container">
                <table>
                    <thead><tr><th>ID</th><th>Ürün Adı</th><th>Stok</th><th>Birim Fiyat</th><th>Toplam Değer</th><th>İşlemler</th></tr></thead>
                    <tbody>
                         ${AppData.products.map(p => `
                            <tr>
                                <td>#${p.id}</td>
                                <td><strong>${p.name}</strong></td>
                                <td class="${p.stock < 10 ? 'text-danger bold' : 'bold'}">${p.stock} Adet</td>
                                <td>${formatCurrency(p.price)}</td>
                                <td class="text-success">${formatCurrency(p.price * p.stock)}</td>
                                <td><button class="btn btn-danger btn-sm" onclick="deleteItem('product', ${p.id})">Sil</button></td>
                            </tr>
                         `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// --- MODULE: HR ---
function renderHR() {
    const employees = AppData.employees || [];
    const totalSalary = employees.reduce((sum, e) => sum + (e.salary || 0), 0);

    return `
        <div class="flex-between mb-2">
            <div>
                <h2>İnsan Kaynakları Yönetimi</h2>
                <p class="text-muted">Personel özlük, izin ve performans takibi</p>
            </div>
            <button class="btn btn-primary" onclick="openModal('hr-add')">${Icons.plus} Personel Ekle</button>
        </div>
        <div class="grid grid-4 mb-2">
            <div class="stat-card"><div class="stat-value">${employees.length}</div><div class="stat-label">Toplam Personel</div></div>
            <div class="stat-card"><div class="stat-value text-success">${employees.filter(e => e.status === 'Aktif').length}</div><div class="stat-label">Aktif Çalışan</div></div>
            <div class="stat-card"><div class="stat-value text-warning">${employees.filter(e => e.status === 'İzinli').length}</div><div class="stat-label">İzinli</div></div>
            <div class="stat-card"><div class="stat-value text-danger">₺${(totalSalary / 1000).toFixed(1)}K</div><div class="stat-label">Aylık Maaş Yükü</div></div>
        </div>
        <div class="card">
            <div class="table-container">
                <table>
                    <thead><tr><th>ID</th><th>Ad Soyad</th><th>Pozisyon</th><th>Departman</th><th>Maaş</th><th>Başlangıç</th><th>Durum</th><th>İşlem</th></tr></thead>
                    <tbody>
                        ${employees.map(e => `
                            <tr>
                                <td>#${e.id}</td>
                                <td><strong>${e.name}</strong></td>
                                <td>${e.pos}</td>
                                <td>${e.dept}</td>
                                <td>${formatCurrency(e.salary)}</td>
                                <td>${formatDate(e.start)}</td>
                                <td><span class="badge badge-${e.status === 'Aktif' ? 'success' : 'warning'}">${e.status}</span></td>
                                <td><button class="btn btn-danger btn-sm" onclick="deleteItem('employee', ${e.id})">Sil</button></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// --- MODULE: SIGNATURE ---
function renderSignature() {
    return `
         <div class="flex-between mb-2">
            <div>
                <h2>İmza Sistemi & Servis Formları</h2>
                <p class="text-muted">Dijital servis raporları ve müşteri onayı</p>
            </div>
             <button class="btn btn-primary" onclick="openModal('service-form')">
                ${Icons.plus} Yeni Servis Formu
            </button>
        </div>

        <div class="grid grid-2">
            <div class="card">
                <div class="card-header"><h3>Son İmzalanan Belgeler</h3></div>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Belge No</th><th>Müşteri</th><th>Tarih</th><th>İmza</th><th>Durum</th></tr></thead>
                         <tbody>
                            <tr><td>SRV-2025-001</td><td>Acıbadem Maslak</td><td>22.12.2025</td><td><span class="badge badge-success">İmzalandı</span></td><td><button class="btn btn-sm btn-secondary">PDF</button></td></tr>
                             <tr><td>SRV-2025-002</td><td>Memorial Şişli</td><td>23.12.2025</td><td><span class="badge badge-warning">Bekliyor</span></td><td><button class="btn btn-sm btn-secondary">Gönder</button></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
             <div class="card">
                <div class="card-header"><h3>Hızlı Onay Bekleyenler</h3></div>
                 <div class="flex flex-col gap-1">
                    <div class="card p-2 flex-between" style="border:1px solid var(--border); padding: 16px;">
                         <div><strong>Neuro One Kurulumu</strong><br><small class="text-muted">Ankara Şehir Hastanesi</small></div>
                         <button class="btn btn-success btn-sm">Onayla & İmzala</button>
                    </div>
                     <div class="card p-2 flex-between" style="border:1px solid var(--border); padding: 16px;">
                         <div><strong>Yıllık Bakım Anlaşması</strong><br><small class="text-muted">Ege Üniversitesi</small></div>
                         <button class="btn btn-success btn-sm">Onayla & İmzala</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// --- MODULE: PROJECTS ---
function renderProjects() {
    return `
        <div class="flex-between mb-2">
            <div>
                <h2>Proje Yönetimi</h2>
                <p class="text-muted">Devam eden Ar-Ge ve kurulum projeleri</p>
            </div>
            <button class="btn btn-primary">${Icons.plus} Yeni Proje</button>
        </div>
        <div class="grid grid-2">
            <div class="card">
                <div class="card-header"><h3>Neuro One V3 Geliştirme</h3><span class="badge badge-info">%65 Tamamlandı</span></div>
                <p class="text-muted mb-1">Yeni nesil beyin-bilgisayar arayüzü geliştirmesi.</p>
                <div style="background:#374151; height:8px; border-radius:4px; overflow:hidden;"><div style="background:var(--primary); width:65%; height:100%;"></div></div>
                <div class="mt-2 text-right"><span class="text-muted">Bitiş: 15.03.2026</span></div>
            </div>
            <div class="card">
                <div class="card-header"><h3>Acıbadem Kurulum Entegrasyonu</h3><span class="badge badge-warning">%30 Tamamlandı</span></div>
                <p class="text-muted mb-1">Hastane veri sistemleri ile tam entegrasyon.</p>
                <div style="background:#374151; height:8px; border-radius:4px; overflow:hidden;"><div style="background:var(--warning); width:30%; height:100%;"></div></div>
                <div class="mt-2 text-right"><span class="text-muted">Bitiş: 20.01.2026</span></div>
            </div>
        </div>
    `;
}

// --- MODULE: MAINTENANCE ---
function renderMaintenance() {
    return `
        <div class="flex-between mb-2">
            <div>
                <h2>Bakım & Onarım</h2>
                <p class="text-muted">Teknik servis operasyonları ve periyodik bakımlar</p>
            </div>
            <div class="flex gap-1">
                <button class="btn btn-primary">Müdahale Ekle</button>
                <button class="btn btn-secondary">Bakım Planı</button>
            </div>
        </div>
        <div class="card">
            <div class="table-container">
                <table>
                    <thead><tr><th>Müşteri</th><th>Cihaz</th><th>İşlem Tipi</th><th>Teknisyen</th><th>Tarih</th><th>Durum</th></tr></thead>
                    <tbody>
                        ${AppData.maintenance.map(m => {
        const sale = AppData.sales.find(s => s.id === m.saleId);
        const custName = sale ? getCustomerName(sale.customerId) : '-';
        const prodName = sale ? getProductName(sale.productId) : '-';
        return `
                            <tr>
                                <td>${custName}</td>
                                <td>${prodName}</td>
                                <td>${m.type}</td>
                                <td>Ali Veli</td>
                                <td>${formatDate(m.nextDate)}</td>
                                <td><span class="badge badge-${m.status === 'Yaklaşıyor' ? 'warning' : 'info'}">${m.status}</span></td>
                            </tr>
                            `;
    }).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// --- MODULE: REPORTS ---
function renderReports() {
    return `
        <div class="flex-between mb-2">
            <div><h2>Raporlar & Analizler</h2></div>
            <button class="btn btn-secondary">PDF İndir</button>
        </div>
        <div class="grid grid-2">
            <div class="card">
                <h3>Aylık Satış Dağılımı</h3>
                <div style="height:200px; display:flex; align-items:center; justify-content:center; color:var(--text-muted);">
                    [Grafik Alanı: Satışlar Artış Trendinde]
                </div>
            </div>
            <div class="card">
                <h3>Gider Kalemleri</h3>
                <div style="height:200px; display:flex; align-items:center; justify-content:center; color:var(--text-muted);">
                    [Grafik Alanı: En büyük gider Ar-Ge]
                </div>
            </div>
        </div>
    `;
}

// --- MODULE: SETTINGS ---
function renderSettings() {
    return `
        <h2>Sistem Ayarları</h2>
        <div class="card mt-1">
            <div class="form-group">
                <label class="form-label">Firma Adı</label>
                <input type="text" class="form-input" value="BİYOSERA MEDİKAL TEKNOLOJİLERİ">
            </div>
            <div class="form-group">
                <label class="form-label">Varsayılan Para Birimi</label>
                <select class="form-select"><option>TRY (₺)</option><option>USD ($)</option><option>EUR (€)</option></select>
            </div>
            <div class="form-group">
                <label class="form-label">Tema</label>
                <select class="form-select"><option>Koyu (Dark)</option><option>Açık (Light)</option></select>
            </div>
            <button class="btn btn-primary">Kaydet</button>
        </div>
    `;
}

// --- MODULE: CUSTOMERS ---
function renderCustomers() {
    return `
        <div class="flex-between mb-2">
            <div><h2>Müşteri Listesi</h2></div>
            <button class="btn btn-primary" onclick="openModal('customer')">${Icons.plus} Müşteri Ekle</button>
        </div>
        <div class="card">
            <div class="table-container">
                <table>
                    <thead><tr><th>ID</th><th>Kurum Adı</th><th>Şehir</th><th>Tip</th><th>Yetkili</th><th>İşlemler</th></tr></thead>
                    <tbody>
                        ${AppData.customers.map(c => `
                            <tr>
                                <td>#${c.id}</td>
                                <td><strong>${c.name}</strong></td>
                                <td>${c.city}</td>
                                <td><span class="badge badge-info">${c.type}</span></td>
                                <td>${c.contact}</td>
                                <td>
                                    <button class="btn btn-danger btn-sm" onclick="deleteItem('customer', ${c.id})">Sil</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// --- MODULE: INVOICES ---
function renderInvoices() {
    return `
        <div class="flex-between mb-2">
            <div><h2>Faturalar</h2></div>
            <button class="btn btn-primary">${Icons.plus} Fatura Kes</button>
        </div>
        <div class="card">
            <div class="table-container">
                <table>
                    <thead><tr><th>No</th><th>Cari</th><th>Tarih</th><th>Tutar</th><th>Durum</th></tr></thead>
                    <tbody>
                         ${AppData.receivables.map(r => `
                            <tr>
                                <td>${r.ref}</td>
                                <td>${getCustomerName(r.customerId)}</td>
                                <td>${formatDate(r.dueDate)}</td>
                                <td class="bold">${formatCurrency(r.amount)}</td>
                                <td><span class="badge badge-warning">${r.status}</span></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}
