// RS Aydınlatma ERP - Enterprise Management System

// --- GLOBAL ICONS LIBRARY (SVG) ---
const Icons = {
    dashboard: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
    money: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>',
    chart: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>',
    tool: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
    plus: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
    check: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
    trendDown: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>'
};

// --- CENTRAL DATA STORE ---
const AppData = {
    customers: [
        { id: 1, name: 'Ankara Avize Sarayı', city: 'Ankara', type: 'Bayi', contact: 'Ahmet Karadağ', phone: '+90 532 111 22 33' },
        { id: 2, name: 'Özgür İnşaat & Dekorasyon', city: 'İstanbul', type: 'Proje', contact: 'Ayşe Demir', phone: '+90 533 444 55 66' },
        { id: 3, name: 'Lüx Aydınlatma Showroom', city: 'İzmir', type: 'Bayi', contact: 'Mehmet Öz', phone: '+90 505 777 88 99' },
    ],
    products: [
        { id: 1, name: 'Eliza Modern Sarkıt Led Avize', category: 'İç Mekan', price: 2250, stock: 450, code: 'RS-AV-101' },
        { id: 2, name: 'Kelebek Yuvarlak Led Aplik', category: 'Aplik', price: 850, stock: 120, code: 'RS-AP-202' },
        { id: 3, name: 'Luxury 5 Li Sıralı Sarkıt', category: 'Modern', price: 5800, stock: 15, code: 'RS-AV-303' },
        { id: 4, name: '12V 5A LED Sürücü (Driver)', category: 'Elektronik', price: 150, stock: 12, code: 'RS-EL-404' },
    ],
    sales: [
        { id: 1, customerId: 1, total: 45000, date: '2026-03-10', status: 'Onaylandı', type: 'Toptan' },
        { id: 2, customerId: 2, total: 125000, date: '2026-03-11', status: 'Beklemede', type: 'Proje' },
    ],
    maintenance: [
        { id: 1, saleId: 101, nextDate: '2026-03-30', type: 'Montaj Kontrol', status: 'Bekliyor', notes: 'Sarkıt avize kablo kontrolü' },
        { id: 2, saleId: 102, nextDate: '2026-04-05', type: 'Yıllık Bakım', status: 'Yaklaşıyor', notes: 'Dış cephe wallwasher temizliği' }
    ],
    receivables: [ // Alacaklar
        { id: 1, customerId: 1, amount: 85000, dueDate: '2026-03-30', status: 'Bekliyor', ref: 'FAT-2026-012' },
        { id: 2, customerId: 3, amount: 125000, dueDate: '2026-04-15', status: 'Bekliyor', ref: 'FAT-2026-015' }
    ],
    payables: [ // Ödenecekler
        { id: 1, supplier: 'Anadolu Cam Ltd.', amount: 45000, dueDate: '2026-03-25', status: 'Kritik', type: 'Hammadde' },
        { id: 2, supplier: 'Hızlı Kargo Lojistik', amount: 12000, dueDate: '2026-04-05', status: 'Bekliyor', type: 'Lojistik' }
    ],
    expenses: [
        { id: 1, category: 'Ar-Ge', amount: 45000, date: '2026-02-10', desc: 'Solar Aydınlatma Prototip' },
        { id: 2, category: 'Personel', amount: 320000, date: '2026-03-01', desc: 'Şubat Ayı Maaşları' }
    ],
    employees: [
        { id: 101, name: 'Ahmet Karadağ', dept: 'Üretim', pos: 'Üretim Müdürü', status: 'Aktif', salary: 65000, start: '2023-01-01' },
        { id: 102, name: 'Ayşe Demir', dept: 'Tasarım', pos: 'Endüstriyel Tasarımcı', status: 'Aktif', salary: 55000, start: '2023-06-15' },
        { id: 103, name: 'Mehmet Öz', dept: 'Satış', pos: 'Bölge Satış Sorumlusu', status: 'Aktif', salary: 45000, start: '2024-02-10' },
        { id: 104, name: 'Zeynep Kaya', dept: 'Muhasebe', pos: 'Muhasebe Uzmanı', status: 'Aktif', salary: 42000, start: '2024-08-20' }
    ],
    checks: [
        { id: 1, type: 'Müşteri Çeki', entity: 'Ankara Avize Sarayı', amount: 150000, dueDate: '2026-04-15', status: 'Portföyde', bank: 'Garanti BBVA', ref: 'TR-12345678' },
        { id: 2, type: 'Firma Çeki', entity: 'Anadolu Metal A.Ş', amount: 45000, dueDate: '2026-03-20', status: 'Tahsil Edildi', bank: 'İş Bankası', ref: 'TR-98765432' },
        { id: 3, type: 'Senet', entity: 'Modern Dekor Ltd', amount: 25000, dueDate: '2026-03-10', status: 'Karşılıksız', bank: '-', ref: 'SNT-001' }
    ],
    accounts: [
        { id: 1, name: 'Merkez Kasa (Nakit)', type: 'Kasa', balance: 42500, currency: 'TRY' },
        { id: 2, name: 'Garanti BBVA (Ticari)', type: 'Banka', balance: 345000, currency: 'TRY' },
        { id: 3, name: 'İş Bankası (Döviz)', type: 'Banka', balance: 12500, currency: 'USD' }
    ],
    users: [
        { id: 1, username: 'eren', password: 'eren', role: 'admin', name: 'Eren Yılmaz', status: 'Aktif' },
        { id: 2, username: 'satis', password: '123', role: 'sales', name: 'Satış Personeli', status: 'Aktif' },
        { id: 3, username: 'finans', password: '123', role: 'finance', name: 'Muhasebe Uzmanı', status: 'Aktif' }
    ]
};

// --- CORE FUNCTIONS ---
async function initApp() {
    await loadData();
    loadPage('dashboard');
    setupEventListeners();
    updateNotifications();
}

// --- DATABASE SYNC FUNCTIONS ---
async function loadData() {
    try {
        // RS Aydınlatma ERP stores its entire state in one JSON for simplicity, 
        // we will fetch the 'app_state' from Supabase.
        const { data, error } = await window.supabaseClient
            .from('erp_settings')
            .select('state_data')
            .eq('id', 'global_state')
            .single();

        if (error) {
            console.warn('Supabase load error (probably first run):', error.message);
            // If table or data doesn't exist, we fallback to initial AppData and save it
            await saveData();
        } else if (data && data.state_data) {
            Object.assign(AppData, data.state_data);
            console.log('Data loaded from Supabase');
        }
    } catch (err) {
        console.error('Critical sync error:', err);
    }
}

async function saveData() {
    try {
        const { error } = await window.supabaseClient
            .from('erp_settings')
            .upsert({ 
                id: 'global_state', 
                state_data: AppData,
                updated_at: new Date()
            });

        if (error) throw error;
        console.log('Data saved to Supabase');
        updateNotifications();
    } catch (err) {
        console.error('Save error:', err.message);
    }
}

function setupEventListeners() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            if (item.dataset.page) { // onclick olanlar (çıkış vb) etkilenmesin
                e.preventDefault();
                document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                loadPage(item.dataset.page);
            }
        });
    });
}

function updateNotifications() {
    // Count pending items for notification badge
    const pendingMaintenance = AppData.maintenance.filter(m => m.status === 'Yaklaşıyor' || m.status === 'Bekliyor').length;
    const pendingReceivables = AppData.receivables.filter(r => r.status === 'Bekliyor').length;
    const criticalPayables = AppData.payables.filter(p => p.status === 'Kritik').length;

    const totalNotifications = pendingMaintenance + pendingReceivables + criticalPayables;

    // Update the notification badge in the topbar
    const badge = document.querySelector('.notification-badge');
    if (badge) {
        badge.textContent = totalNotifications;
        badge.style.display = totalNotifications > 0 ? 'block' : 'none';
    }
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(amount);
}

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('tr-TR');
}

function getDaysRemaining(dueDateStr) {
    if (!dueDateStr) return '-';
    const due = new Date(dueDateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    due.setHours(0, 0, 0, 0);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return `<span class="text-danger bold">${Math.abs(diffDays)} gün gecikti</span>`;
    if (diffDays === 0) return `<span class="text-warning bold">Bugün</span>`;
    if (diffDays <= 7) return `<span class="text-warning bold">${diffDays} gün kaldı</span>`;
    return `<span class="text-success">${diffDays} gün kaldı</span>`;
}

function getCustomerName(id) {
    return AppData.customers.find(c => c.id === id)?.name || 'Bilinmiyor';
}

function getProductName(id) {
    return AppData.products.find(p => p.id === id)?.name || 'Bilinmiyor';
}

// --- PAGE RENDERERS ---
function loadPage(page) {
    const content = document.getElementById('mainContent');
    const title = document.getElementById('pageTitle');

    let html = '';

    switch (page) {
        case 'dashboard':
            title.innerText = 'Yönetim Paneli';
            html = renderDashboard();
            break;
        case 'satis':
            title.innerText = 'Satış Yönetimi';
            html = renderSales();
            break;
        case 'satin-alma':
            title.innerText = 'Satın Alma & Tedarik';
            html = renderPurchasing();
            break;
        case 'uretim':
            title.innerText = 'Üretim Hattı';
            html = renderProduction();
            break;
        case 'stok':
            title.innerText = 'Stok Yönetimi';
            html = renderProduction();
            break;
        case 'servis':
            title.innerText = 'Teknik Servis & Destek';
            html = renderService();
            break;
        case 'bakim':
            title.innerText = 'Bakım & Onarım';
            html = renderMaintenance();
            break;
        case 'finansal':
            title.innerText = 'Finansal Durum';
            html = renderFinance();
            break;
        case 'muhasebe':
            title.innerText = 'Muhasebe & Finans';
            html = renderFinance();
            break;
        case 'cek-senet':
            title.innerText = 'Çek & Senet Yönetimi';
            html = renderChecks();
            break;
        case 'gelir-gider':
            title.innerText = 'Gelir & Gider Detayları';
            html = renderIncomeExpense();
            break;
        case 'masraflar':
            title.innerText = 'Masraf Yönetimi';
            html = renderExpenses();
            break;
        case 'entegrasyonlar':
            title.innerText = 'Banka & E-Ticaret Entegrasyonları';
            html = renderIntegrations();
            break;
        case 'ik':
        case 'personel':
            title.innerText = 'İnsan Kaynakları';
            html = renderHR();
            break;
        case 'projeler':
            title.innerText = 'Proje Yönetimi';
            html = renderProjects();
            break;
        case 'raporlar':
            title.innerText = 'Raporlar & Analizler';
            html = renderReports();
            break;
        case 'imza':
            title.innerText = 'Dijital İmza & Servis Formları';
            html = renderSignature();
            break;
        case 'documents':
            title.innerText = 'Belge & PDF Oluşturucu';
            html = renderDocuments();
            break;
        case 'sartnameler':
            title.innerText = 'Teknik Şartnameler Kütüphanesi';
            html = renderSartnameler();
            break;
        case 'mail':
            title.innerText = 'Mail İstihbaratı & Pazarlama';
            html = renderMailIntelligence();
            break;
        case 'ayarlar':
            title.innerText = 'Sistem Ayarları';
            html = renderSettings();
            break;
        case 'musteriler':
            title.innerText = 'Müşteri Yönetimi';
            html = renderCustomers();
            break;
        case 'kullanicilar':
            title.innerText = 'Kullanıcı ve Yetki Yönetimi';
            html = renderUsers();
            break;
        default:
            title.innerText = page.charAt(0).toUpperCase() + page.slice(1);
            html = `<div class="card"><h3>Modül Hazırlanıyor...</h3><p>${page} modülü yakında aktif olacak.</p></div>`;
    }
    content.innerHTML = html;
}

// --- MODULE: USERS (RBAC) ---
function renderUsers() {
    return `
        <div class="flex-between mb-2">
            <div>
                <h2>Kullanıcı Yönetimi (Admin)</h2>
                <p class="text-muted">Sisteme erişimi olan kullanıcıları ve yetkilerini yönetin</p>
            </div>
            <button class="btn btn-primary" onclick="alert('Kullanıcı Ekleme Modalı Yapılacak')">
                ${Icons.plus} Yeni Kullanıcı
            </button>
        </div>
        <div class="card">
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Kullanıcı Adı</th>
                            <th>Ad Soyad</th>
                            <th>Rol (Yetki)</th>
                            <th>Durum</th>
                            <th>İşlem</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${AppData.users.map(u => `
                            <tr>
                                <td style="font-weight:600">${u.username}</td>
                                <td>${u.name}</td>
                                <td><span class="badge badge-info">${u.role.toUpperCase()}</span></td>
                                <td><span class="badge badge-${u.status === 'Aktif' ? 'success' : 'danger'}">${u.status}</span></td>
                                <td>
                                    <button class="btn btn-secondary btn-sm" onclick="alert('Düzenlenecek: ${u.username}')">Düzenle</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// --- MODULE: DASHBOARD (COCKPIT STYLE) ---
function renderDashboard() {
    const totalSales = AppData.sales.reduce((sum, s) => sum + s.amount, 0);
    const totalReceivables = AppData.receivables.reduce((sum, r) => sum + r.amount, 0);
    const totalPayables = AppData.payables.reduce((sum, p) => sum + p.amount, 0);
    const netCashFlow = totalSales - totalPayables - AppData.expenses.reduce((s, e) => s + e.amount, 0);

    // Auto-generated system metrics for cockpit feel
    const sysLoad = Math.floor(Math.random() * 30) + 20;
    const dbStatus = "Stable";
    const activeUsers = Math.floor(Math.random() * 5) + 8;

    return `
        <!-- Financial & Business Cockpit Header -->
        <h2 class="page-title mb-2 fs-3">Finansal Genel Bakış</h2>

        <!-- Metric Heads-Up Display -->
        <div class="grid grid-4 mb-2">
            <div class="stat-box-sm">
                <div>
                    <div class="label">Net Kârlılık</div>
                    <div class="value text-success">${formatCurrency(netCashFlow)}</div>
                </div>
                <!-- Stylish Mini Trend -->
                <div class="trend text-success">
                   <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
                        <path d="M0 25 L10 20 L20 22 L30 10 L40 15 L50 5 L60 8" stroke="#33D69F" stroke-width="2" fill="none"/>
                        <path d="M0 25 L10 20 L20 22 L30 10 L40 15 L50 5 L60 8 V30 H0 Z" fill="url(#gradSuccess)" opacity="0.2"/>
                        <defs><linearGradient id="gradSuccess" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#33D69F"/><stop offset="100%" stop-color="#33D69F" stop-opacity="0"/></linearGradient></defs>
                   </svg>
                </div>
            </div>
            <div class="stat-box-sm">
                <div>
                    <div class="label">Toplam Gelir</div>
                    <div class="value">${formatCurrency(totalReceivables)}</div>
                </div>
                <div class="trend text-primary">
                    <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
                        <path d="M0 28 L15 18 L30 20 L45 5 L60 2" stroke="#479CFF" stroke-width="2"/>
                        <defs><linearGradient id="gradPrimary" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#479CFF"/><stop offset="100%" stop-color="#479CFF" stop-opacity="0"/></linearGradient></defs>
                   </svg>
                </div>
            </div>
            <div class="stat-box-sm">
                <div>
                    <div class="label">Toplam Gider</div>
                    <div class="value text-danger" style="opacity:0.9">${formatCurrency(totalPayables)}</div>
                </div>
               <div class="trend text-danger">
                    <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
                        <path d="M0 10 L15 15 L30 5 L45 20 L60 25" stroke="#FF5263" stroke-width="2"/>
                   </svg>
               </div>
            </div>
             <div class="stat-box-sm">
                <div>
                    <div class="label">Sipariş Dönüşümü</div>
                    <div class="value text-warning">8.4 / 10</div>
                </div>
                 <div class="trend text-warning">● Yüksek</div>
            </div>
        </div>

        <!-- Main Cockpit Layout -->
        <div class="grid-cockpit">

            <!-- Left Panel: Critical Actions (Kept Compact) -->
            <div class="flex-col gap-1">
                <div class="card p-2">
                    <button class="btn btn-primary w-100 mb-2 btn-sm" onclick="openModal('sale')">${Icons.plus} Hızlı Satış</button>
                    <button class="btn btn-secondary w-100 mb-2 btn-sm" onclick="openModal('service-form')">Servis Girişi</button>

                    <div class="mt-2 text-center p-2 rounded" style="background:rgba(255,255,255,0.03); border:1px solid var(--border)">
                        <div class="label mb-1">Bakım Bekleyen</div>
                        <div style="font-size:1.5rem; font-weight:700; color:var(--warning)">${AppData.maintenance.filter(m => m.status === 'Yaklaşıyor').length}</div>
                    </div>
                </div>

                <div class="card p-2" style="flex:1">
                    <h3 style="font-size:0.8rem; text-transform:uppercase; color:var(--text-muted); margin-bottom:12px;">Stok Özeti</h3>
                    <ul style="list-style:none; padding:0; font-size:0.85rem; color:var(--text-main);">
                        <li class="flex-between mb-2 p-1" style="border-bottom:1px solid var(--border)"><span>Eliza Sarkıt</span> <span class="bold">450 Adet</span></li>
                        <li class="flex-between mb-2 p-1" style="border-bottom:1px solid var(--border)"><span>Kelebek Aplik</span> <span class="bold">120 Adet</span></li>
                        <li class="flex-between p-1"><span>LED Sürücü</span> <span class="text-warning bold">12 (Kritik)</span></li>
                    </ul>
                </div>
            </div>

            <!-- Center Panel: Stylish Area Chart -->
            <div class="flex-col gap-1">
                <div class="card" style="height:100%; min-height:400px; display:flex; flex-direction:column;">
                    <div class="card-header flex-between" style="border-bottom:none; padding-bottom:0;">
                        <div>
                            <h3 style="font-size:1.1rem">Finansal Performans</h3>
                            <p class="text-muted" style="font-size:0.8rem">Son 6 Aylık Gelir/Gider Analizi</p>
                        </div>
                        <div class="flex gap-1">
                            <span class="badge badge-info" style="font-size:0.7rem">Gelir</span>
                            <span class="badge badge-danger" style="font-size:0.7rem">Gider</span>
                        </div>
                    </div>

                    <!-- SVG Area Chart -->
                    <div style="flex:1; padding:20px; position:relative; min-height:220px;">
                        <svg width="100%" height="100%" viewBox="0 0 500 200" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="chartGradBlue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stop-color="#479CFF" stop-opacity="0.4" />
                                    <stop offset="100%" stop-color="#479CFF" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="chartGradRed" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stop-color="#FF5263" stop-opacity="0.3" />
                                    <stop offset="100%" stop-color="#FF5263" stop-opacity="0" />
                                </linearGradient>
                            </defs>

                            <!-- Grid Lines -->
                            <line x1="0" y1="150" x2="500" y2="150" stroke="#333" stroke-width="1" stroke-dasharray="4" />
                            <line x1="0" y1="100" x2="500" y2="100" stroke="#333" stroke-width="1" stroke-dasharray="4" />
                            <line x1="0" y1="50" x2="500" y2="50" stroke="#333" stroke-width="1" stroke-dasharray="4" />

                            <!-- Income Area (Blue) -->
                            <path d="M0 160 Q 80 140, 160 100 T 320 60 T 500 40 V 200 H 0 Z" fill="url(#chartGradBlue)" />
                            <path d="M0 160 Q 80 140, 160 100 T 320 60 T 500 40" fill="none" stroke="#479CFF" stroke-width="3" />

                            <!-- Expense Area (Red) -->
                            <path d="M0 180 Q 90 170, 180 160 T 360 140 T 500 130 V 200 H 0 Z" fill="url(#chartGradRed)" />
                            <path d="M0 180 Q 90 170, 180 160 T 360 140 T 500 130" fill="none" stroke="#FF5263" stroke-width="2" stroke-dasharray="5,5" />

                            <!-- Points -->
                            <circle cx="160" cy="100" r="4" fill="#479CFF" stroke="#141416" stroke-width="2" />
                            <circle cx="320" cy="60" r="4" fill="#479CFF" stroke="#141416" stroke-width="2" />
                            <circle cx="500" cy="40" r="4" fill="#479CFF" stroke="#141416" stroke-width="2" />
                        </svg>
                        <!-- Month Labels -->
                        <div class="flex-between text-muted" style="font-size:0.75rem; margin-top:-20px; position:relative; z-index:10; padding:0 10px;">
                            <span>Oca</span><span>Şub</span><span>Mar</span><span>Nis</span><span>May</span><span>Haz</span>
                        </div>
                    </div>

                    <!-- Recent Transactions Table -->
                    <div class="table-container" style="padding:0 20px 20px 20px;">
                        <h4 class="text-muted mb-2" style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.1em; border-bottom:1px solid var(--border); padding-bottom:8px;">Son İşlemler</h4>
                        <table style="border-spacing: 0 8px;">
                            <tbody>
                                ${AppData.sales.slice(-2).map(s => `
                                    <tr style="background:transparent; border-bottom:1px solid var(--border-light)">
                                        <td style="padding:8px 0; font-size:0.9rem;">
                                            <div class="flex items-center gap-1">
                                                <div style="width:8px; height:8px; background:var(--success); border-radius:50%"></div>
                                                <span class="bold">${getCustomerName(s.customerId)}</span>
                                            </div>
                                        </td>
                                        <td style="padding:8px 0; text-align:right; color:var(--success); font-weight:700;">+${formatCurrency(s.amount)}</td>
                                    </tr>
                                `).join('')}
                                ${AppData.payables.slice(-2).map(p => `
                                    <tr style="background:transparent;">
                                        <td style="padding:8px 0; font-size:0.9rem;">
                                            <div class="flex items-center gap-1">
                                                <div style="width:8px; height:8px; background:var(--danger); border-radius:50%"></div>
                                                <span class="bold">${p.supplier}</span>
                                            </div>
                                        </td>
                                        <td style="padding:8px 0; text-align:right; color:var(--danger); font-weight:700;">-${formatCurrency(p.amount)}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Right Panel: Live Feed / Notifications -->
            <div class="card p-0" style="overflow:hidden;">
                <div class="card-header flex-between" style="padding:16px; margin:0; border-bottom:1px solid var(--border); background:var(--bg-hover);">
                    <h3 style="font-size:0.9rem">Banka & E-Ticaret Akışı API</h3>
                    <div class="flex gap-1 items-center">
                        <button onclick="syncAllAPIs()" class="btn btn-sm btn-primary" style="padding:4px 10px; font-size:0.75rem;" id="btnSync">🔄 Senkronize Et</button>
                        <span class="status-dot ok" id="apiStatusDot"></span>
                    </div>
                </div>
                <div id="liveFeedContainer" style="max-height:500px; overflow-y:auto;">
                    <div class="feed-item">
                        <div class="feed-time">12:45</div>
                        <div class="feed-content">
                            <div class="bold">Sistem Girişi</div>
                            <div class="text-muted">Ahmet Yılmaz sisteme giriş yaptı (IP: 192.168.1.45)</div>
                        </div>
                    </div>
                    <div class="feed-item">
                        <div class="feed-time">12:30</div>
                        <div class="feed-content">
                            <div class="bold">Yeni Sipariş</div>
                            <div class="text-muted">Ankara Avize Sarayı için Eliza Sarkıt siparişi oluşturuldu.</div>
                        </div>
                    </div>
                    <div class="feed-item">
                        <div class="feed-time">11:15</div>
                        <div class="feed-content">
                            <div class="bold text-warning">Stok Uyarısı</div>
                            <div class="text-muted">LED Sürücü stokları kritik seviyenin altına düştü (12 adet).</div>
                        </div>
                    </div>
                    <div class="feed-item">
                        <div class="feed-time">10:00</div>
                        <div class="feed-content">
                            <div class="bold text-success">Tahsilat</div>
                            <div class="text-muted">Özgür İnşaat proje ödemesi onaylandı.</div>
                        </div>
                    </div>
                    <div class="feed-item">
                        <div class="feed-time">09:12</div>
                        <div class="feed-content">
                            <div class="bold">Sunucu Yedekleme</div>
                            <div class="text-muted">Günlük veri tabanı yedeği başarıyla alındı.</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    `;
}

// --- API INTEGRATION (BACKEND BRIDGE) ---
async function syncAllAPIs() {
    const btn = document.getElementById('btnSync');
    const dot = document.getElementById('apiStatusDot');
    const feed = document.getElementById('liveFeedContainer');
    if (!feed) return;

    btn.innerText = "⏳ Bağlanıyor...";
    btn.disabled = true;
    dot.className = "status-dot warning"; // Sarı yap

    try {
        // Trendyol API İsteği
        const trendyolRes = await fetch('http://localhost:8000/api/v1/trendyol/orders');
        const trendyolOrders = await trendyolRes.json();

        // Banka API İsteği
        const bankRes = await fetch('http://localhost:8000/api/v1/bank/transactions');
        const bankTransactions = await bankRes.json();

        let newCardsHTML = "";

        // Siparişleri Akışa Ekle
        trendyolOrders.forEach(o => {
            const timeOnly = o.order_date.split(' ')[1].substring(0, 5);
            newCardsHTML += `
                <div class="feed-item" style="background: rgba(255, 140, 0, 0.1); border-left: 3px solid #ff8c00;">
                    <div class="feed-time" style="color:#ff8c00">${timeOnly}</div>
                    <div class="feed-content">
                        <div class="bold text-warning">API: Yeni ${o.platform} Siparişi</div>
                        <div class="text-muted"><span class="bold">${o.customer_name}</span> adlı müşteri ${o.quantity} adet <span class="bold">${o.product_name}</span> sipariş verdi. (${formatCurrency(o.total_price)})</div>
                        <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 4px;">Sipariş Kodu: ${o.id}</div>
                    </div>
                </div>
            `;
        });

        // Banka Hareketlerini Akışa Ekle
        bankTransactions.forEach(t => {
            const timeOnly = t.date.split(' ')[1].substring(0, 5);
            const isIncome = t.transaction_type === "IN";
            const color = isIncome ? "var(--success)" : "var(--danger)";
            const bg = isIncome ? "rgba(51, 214, 159, 0.1)" : "rgba(255, 82, 99, 0.1)";

            newCardsHTML += `
                <div class="feed-item" style="background: ${bg}; border-left: 3px solid ${color};">
                    <div class="feed-time" style="color:${color}">${timeOnly}</div>
                    <div class="feed-content">
                        <div class="bold" style="color:${color}">API: Banka Hareketi (${t.bank_name})</div>
                        <div class="text-muted"><span class="bold">${t.sender_receiver}</span> ${isIncome ? 'tarafından ödeme geldi.' : 'tarafına ödeme yapıldı.'} Açıklama: ${t.description}</div>
                        <div class="bold" style="margin-top:4px; font-size: 0.9rem;">${isIncome ? '+' : '-'}${formatCurrency(t.amount)}</div>
                    </div>
                </div>
            `;
        });

        // Yeni kartları mevcut akışın EN ÜSTÜNE ekle
        feed.insertAdjacentHTML('afterbegin', newCardsHTML);

        btn.innerText = "✅ Eşitlendi";
        dot.className = "status-dot ok"; // Yeşile çevir

        setTimeout(() => {
            btn.innerText = "🔄 Senkronize Et";
            btn.disabled = false;
        }, 3000);

    } catch (error) {
        console.error("API Bağlantı Hatası:", error);
        btn.innerText = "❌ Hata!";
        dot.className = "status-dot error"; // Kırmızı yap
        setTimeout(() => {
            btn.innerText = "🔄 Tekrar Dene";
            btn.disabled = false;
        }, 3000);
    }
}

// --- MODULE: SALES ---
function renderSales() {
    return `
        <div class="flex-between mb-2">
            <div>
                <h2>Satış & Proforma Yönetimi</h2>
                <p class="text-muted">Fırsatlar, proformalar ve kurumsal teklifler</p>
            </div>
            <div class="flex gap-1">
                <button class="btn btn-secondary" onclick="openModal('proforma')">
                    ${Icons.plus} Yeni Proforma
                </button>
                <button class="btn btn-primary" onclick="openModal('sale')">
                    ${Icons.plus} Yeni Satış
                </button>
            </div>
        </div>
        <div class="card">
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Satış ID</th>
                            <th>Müşteri / Bayi</th>
                            <th>Ürün Modeli</th>
                            <th>Tarih</th>
                            <th>Tutar</th>
                            <th>Durum</th>
                            <th>İşlem</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${AppData.sales.map(s => `
                            <tr>
                                <td>#${s.id}</td>
                                <td style="font-weight:600">${getCustomerName(s.customerId)}</td>
                                <td>${getProductName(s.productId)}</td>
                                <td>${formatDate(s.date)}</td>
                                <td>${formatCurrency(s.amount)}</td>
                                <td><span class="badge badge-info">${s.status}</span></td>
                                <td><button class="btn btn-secondary btn-sm">Detay</button></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// --- MODULE: SERVICE & MAINTENANCE ---
function renderService() {
    return `
        <div class="flex-between mb-2">
             <div>
                <h2>Teknik Servis & Bakım Takibi</h2>
                <p class="text-muted">Periyodik bakımlar ve arıza kayıtları</p>
            </div>
            <button class="btn btn-primary" onclick="alert('Bakım planlama modalı açılacak')">
                ${Icons.plus} Bakım Planla
            </button>
        </div>
        <div class="grid grid-3 mb-2">
            ${AppData.maintenance.map(m => {
        const sale = AppData.sales.find(s => s.id === m.saleId);
        const custName = sale ? getCustomerName(sale.customerId) : 'Bilinmiyor';
        const prodName = sale ? getProductName(sale.productId) : 'Bilinmiyor';

        return `
                 <div class="card" style="border-left: 4px solid var(--primary)">
                    <div style="font-size:0.8rem; color:var(--text-muted)">${formatDate(m.nextDate)}</div>
                    <h3 class="mt-1">${custName}</h3>
                    <div class="text-primary mb-1">${prodName}</div>
                    <div class="badge badge-warning">${m.type}</div>
                    <p class="mt-1" style="font-size:0.9rem">${m.notes}</p>
                    <button class="btn btn-secondary mt-2 w-100">Servis Raporu Gir</button>
                 </div>
                 `;
    }).join('')}
        </div>
    `;
}

// --- MODULE: INTEGRATIONS (BANK & E-COMMERCE) ---
function renderIntegrations() {
    return `
        <div class="flex-between mb-2">
            <div>
                <h2>Açık Bankacılık ve Pazaryeri API Çözümleri</h2>
                <p class="text-muted">Tüm banka hesaplarınız, kredi ödemeleri ve e-ticaret siparişleriniz tek ekranda.</p>
            </div>
            <div class="flex gap-1">
                <button class="btn btn-primary" onclick="syncAllAPIs()">
                    🔄 Senkronize Et
                </button>
            </div>
        </div>

        <div class="grid grid-4 mb-2">
            <div class="stat-card" style="border-top: 3px solid #ff8c00;">
                 <div class="stat-value text-info">685.200 ₺</div>
                 <div class="stat-label">Toplam E-Ticaret Ciro</div>
            </div>
            <div class="stat-card" style="border-top: 3px solid #33D69F;">
                 <div class="stat-value text-success">3.450.800 ₺</div>
                 <div class="stat-label">Tüm Bankalar Toplam Nakit</div>
            </div>
            <div class="stat-card" style="border-top: 3px solid #ff5263;">
                 <div class="stat-value text-danger">185.000 ₺</div>
                 <div class="stat-label">Yaklaşan Toplam Kredi/Kart</div>
            </div>
            <div class="stat-card" style="border-top: 3px solid var(--accent);">
                 <div class="stat-value">42 Adet</div>
                 <div class="stat-label">Bekleyen Toplam Kargo (Pazaryeri)</div>
            </div>
        </div>

        <div class="grid grid-2">
            <!-- PAZARYERLERİ E-TİCARET BÖLÜMÜ -->
            <div class="card p-0" style="overflow:hidden;">
                <div class="card-header" style="background:var(--bg-hover); margin:0; padding:16px; border-bottom:1px solid var(--border);">
                    <h3>🛒 Pazaryerleri & E-Ticaret Entegrasyonları</h3>
                </div>
                
                <div style="max-height: 800px; overflow-y: auto; padding-right: 4px;">
                    <!-- TRENDYOL -->
                    <div class="p-2 border-bottom" style="border-bottom:1px solid var(--border-light)">
                        <div class="flex-between mb-1">
                            <div class="flex items-center gap-1">
                                <span style="display:inline-block; width:12px; height:12px; background:#f27a1a; border-radius:50%;"></span>
                                <span class="bold" style="font-size:1.1rem;">Trendyol API</span>
                                <span class="badge badge-success">Açık</span>
                            </div>
                            <div class="text-right">
                                <div class="bold text-success">325.500 ₺</div>
                                <div class="text-muted" style="font-size:0.8rem">Bu Ay Tahsilat</div>
                            </div>
                        </div>
                        <div class="grid grid-3 mt-1" style="gap:10px;">
                            <div style="background:var(--bg-card); padding:10px; border-radius:8px; text-align:center;">
                                <div class="text-muted" style="font-size:0.75rem;">Bugün Gelen</div>
                                <div class="bold">18 Sipariş</div>
                            </div>
                            <div style="background:var(--bg-card); padding:10px; border-radius:8px; text-align:center; border:1px solid var(--warning);">
                                <div class="text-muted" style="font-size:0.75rem;">Bekleyen Kargo</div>
                                <div class="bold text-warning">12 Adet</div>
                            </div>
                            <div style="background:var(--bg-card); padding:10px; border-radius:8px; text-align:center;">
                                <div class="text-muted" style="font-size:0.75rem;">Değerlendirme</div>
                                <div class="bold text-info">4.8 / 5.0</div>
                            </div>
                        </div>
                        <div class="mt-1" style="font-size:0.85rem; color:var(--text-muted);">
                            <span class="bold">Son İşlem:</span> [TY-455201] Eliza Modern Sarkıt (Paketleniyor)
                        </div>
                    </div>

                    <!-- HEPSIBURADA -->
                    <div class="p-2 border-bottom" style="border-bottom:1px solid var(--border-light)">
                        <div class="flex-between mb-1">
                            <div class="flex items-center gap-1">
                                <span style="display:inline-block; width:12px; height:12px; background:#ff6000; border-radius:50%;"></span>
                                <span class="bold" style="font-size:1.1rem;">Hepsiburada API</span>
                                <span class="badge badge-success">Açık</span>
                            </div>
                            <div class="text-right">
                                <div class="bold text-success">180.200 ₺</div>
                                <div class="text-muted" style="font-size:0.8rem">Bu Ay Tahsilat</div>
                            </div>
                        </div>
                        <div class="grid grid-3 mt-1" style="gap:10px;">
                            <div style="background:var(--bg-card); padding:10px; border-radius:8px; text-align:center;">
                                <div class="text-muted" style="font-size:0.75rem;">Bugün Gelen</div>
                                <div class="bold">14 Sipariş</div>
                            </div>
                            <div style="background:var(--bg-card); padding:10px; border-radius:8px; text-align:center; border:1px solid var(--warning);">
                                <div class="text-muted" style="font-size:0.75rem;">Bekleyen Kargo</div>
                                <div class="bold text-warning">10 Adet</div>
                            </div>
                            <div style="background:var(--bg-card); padding:10px; border-radius:8px; text-align:center;">
                                <div class="text-muted" style="font-size:0.75rem;">Mağaza Puanı</div>
                                <div class="bold text-info">9.7 / 10</div>
                            </div>
                        </div>
                        <div class="mt-1" style="font-size:0.85rem; color:var(--text-muted);">
                            <span class="bold">Son İşlem:</span> [HB-128499] Kelebek Aplik Gold (Kargoya Verildi)
                        </div>
                    </div>

                    <!-- N11 -->
                    <div class="p-2 border-bottom" style="border-bottom:1px solid var(--border-light)">
                        <div class="flex-between mb-1">
                            <div class="flex items-center gap-1">
                                <span style="display:inline-block; width:12px; height:12px; background:#e31e24; border-radius:50%;"></span>
                                <span class="bold" style="font-size:1.1rem;">N11 API</span>
                                <span class="badge badge-success">Açık</span>
                            </div>
                            <div class="text-right">
                                <div class="bold text-success">95.000 ₺</div>
                                <div class="text-muted" style="font-size:0.8rem">Bu Ay Tahsilat</div>
                            </div>
                        </div>
                        <div class="grid grid-3 mt-1" style="gap:10px;">
                            <div style="background:var(--bg-card); padding:10px; border-radius:8px; text-align:center;">
                                <div class="text-muted" style="font-size:0.75rem;">Bugün Gelen</div>
                                <div class="bold">8 Sipariş</div>
                            </div>
                            <div style="background:var(--bg-card); padding:10px; border-radius:8px; text-align:center; border:1px solid var(--warning);">
                                <div class="text-muted" style="font-size:0.75rem;">Bekleyen Kargo</div>
                                <div class="bold text-warning">6 Adet</div>
                            </div>
                            <div style="background:var(--bg-card); padding:10px; border-radius:8px; text-align:center;">
                                <div class="text-muted" style="font-size:0.75rem;">Başarı Oranı</div>
                                <div class="bold text-info">%100</div>
                            </div>
                        </div>
                        <div class="mt-1" style="font-size:0.85rem; color:var(--text-muted);">
                            <span class="bold">Son İşlem:</span> [N11-988410] Cerrahi Maske Seti (Teslim Edildi)
                        </div>
                    </div>

                    <!-- AMAZON -->
                    <div class="p-2 border-bottom" style="border-bottom:1px solid var(--border-light)">
                        <div class="flex-between mb-1">
                            <div class="flex items-center gap-1">
                                <span style="display:inline-block; width:12px; height:12px; background:#FF9900; border-radius:50%;"></span>
                                <span class="bold" style="font-size:1.1rem;">Amazon Türkiye</span>
                                <span class="badge badge-success">Açık</span>
                            </div>
                            <div class="text-right">
                                <div class="bold text-success">54.500 ₺</div>
                                <div class="text-muted" style="font-size:0.8rem">Bu Ay Tahsilat</div>
                            </div>
                        </div>
                        <div class="grid grid-3 mt-1" style="gap:10px;">
                            <div style="background:var(--bg-card); padding:10px; border-radius:8px; text-align:center;">
                                <div class="text-muted" style="font-size:0.75rem;">Bugün Gelen</div>
                                <div class="bold">11 Sipariş</div>
                            </div>
                            <div style="background:var(--bg-card); padding:10px; border-radius:8px; text-align:center; border:1px solid var(--warning);">
                                <div class="text-muted" style="font-size:0.75rem;">Bekleyen FBA</div>
                                <div class="bold text-warning">8 Adet</div>
                            </div>
                            <div style="background:var(--bg-card); padding:10px; border-radius:8px; text-align:center;">
                                <div class="text-muted" style="font-size:0.75rem;">BuyBox</div>
                                <div class="bold text-info">%85</div>
                            </div>
                        </div>
                        <div class="mt-1" style="font-size:0.85rem; color:var(--text-muted);">
                            <span class="bold">Son İşlem:</span> [AMZ-741P] Medikal Ekipman (Depoya İletildi)
                        </div>
                    </div>

                    <!-- ÇİÇEKSEPETİ -->
                    <div class="p-2 border-bottom" style="border-bottom:1px solid var(--border-light)">
                        <div class="flex-between mb-1">
                            <div class="flex items-center gap-1">
                                <span style="display:inline-block; width:12px; height:12px; background:#0071c3; border-radius:50%;"></span>
                                <span class="bold" style="font-size:1.1rem;">Çiçeksepeti Extra</span>
                                <span class="badge badge-success">Açık</span>
                            </div>
                            <div class="text-right">
                                <div class="bold text-success">30.000 ₺</div>
                                <div class="text-muted" style="font-size:0.8rem">Bu Ay Tahsilat</div>
                            </div>
                        </div>
                        <div class="grid grid-3 mt-1" style="gap:10px;">
                            <div style="background:var(--bg-card); padding:10px; border-radius:8px; text-align:center;">
                                <div class="text-muted" style="font-size:0.75rem;">Bugün Gelen</div>
                                <div class="bold">4 Sipariş</div>
                            </div>
                            <div style="background:var(--bg-card); padding:10px; border-radius:8px; text-align:center; border:1px solid var(--warning);">
                                <div class="text-muted" style="font-size:0.75rem;">Bekleyen Kargo</div>
                                <div class="bold text-warning">6 Adet</div>
                            </div>
                            <div style="background:var(--bg-card); padding:10px; border-radius:8px; text-align:center;">
                                <div class="text-muted" style="font-size:0.75rem;">Puan</div>
                                <div class="bold text-info">9.5</div>
                            </div>
                        </div>
                        <div class="mt-1" style="font-size:0.85rem; color:var(--text-muted);">
                            <span class="bold">Son İşlem:</span> [CS-8812] İlk Yardım Çantası (Hazırlanıyor)
                        </div>
                    </div>
                </div>
            </div>

            <!-- AÇIK BANKACILIK BÖLÜMÜ -->
            <div class="card p-0" style="overflow:hidden;">
                <div class="card-header" style="background:var(--bg-hover); margin:0; padding:16px; border-bottom:1px solid var(--border);">
                    <h3>🏦 Banka Hesapları & Kredi Durumları</h3>
                </div>

                <div style="max-height: 800px; overflow-y: auto; padding-right: 4px;">
                    <!-- GARANTİ -->
                    <div class="p-2 border-bottom" style="border-bottom:1px solid var(--border-light)">
                        <div class="flex-between mb-1">
                            <div class="flex items-center gap-1">
                                <span style="display:inline-block; width:12px; height:12px; background:#009933; border-radius:50%;"></span>
                                <span class="bold" style="font-size:1.1rem;">Garanti BBVA</span>
                                <span class="text-muted" style="font-size:0.8rem;">(TR45...1041)</span>
                            </div>
                            <div class="text-right">
                                <div class="bold text-success" style="font-size:1.2rem;">845.000 ₺</div>
                                <div class="text-muted" style="font-size:0.8rem">Kullanılabilir Bakiye</div>
                            </div>
                        </div>
                        <div class="flex-between" style="font-size:0.85rem; padding:4px 0;">
                            <span class="text-muted">Son Hareket (Gelen):</span>
                            <span class="text-success bold">+15.000 ₺ (Acıbadem Yön. Prf.)</span>
                        </div>
                        <div class="flex-between" style="font-size:0.85rem; padding:4px 0;">
                            <span class="text-muted">Son Hareket (Giden):</span>
                            <span class="text-danger bold">-8.500 ₺ (Kargo Lojistik A.Ş)</span>
                        </div>
                        <div class="mt-1 flex-between p-1 rounded" style="background: rgba(255, 82, 99, 0.1); border-left: 3px solid var(--danger);">
                            <div>
                                <div class="text-danger bold" style="font-size:0.8rem;">YAKLAŞAN TİCARİ KREDİ TAKSİDİ</div>
                                <div style="font-size:0.75rem;">Son Gün: 18.03.2026</div>
                            </div>
                            <div class="bold text-danger">35.000 ₺</div>
                        </div>
                    </div>

                    <!-- İŞ BANKASI -->
                    <div class="p-2 border-bottom" style="border-bottom:1px solid var(--border-light)">
                        <div class="flex-between mb-1">
                            <div class="flex items-center gap-1">
                                <span style="display:inline-block; width:12px; height:12px; background:#0055A5; border-radius:50%;"></span>
                                <span class="bold" style="font-size:1.1rem;">İş Bankası</span>
                                <span class="text-muted" style="font-size:0.8rem;">(TR12...8842)</span>
                            </div>
                            <div class="text-right">
                                <div class="bold text-success" style="font-size:1.2rem;">620.400 ₺</div>
                                <div class="text-muted" style="font-size:0.8rem">Kullanılabilir Bakiye</div>
                            </div>
                        </div>
                        <div class="flex-between" style="font-size:0.85rem; padding:4px 0;">
                            <span class="text-muted">Döviz Hesabı (USD):</span>
                            <span class="text-info bold">$ 12.500</span>
                        </div>
                        <div class="flex-between" style="font-size:0.85rem; padding:4px 0;">
                            <span class="text-muted">Döviz Hesabı (EUR):</span>
                            <span class="text-info bold">€ 4.200</span>
                        </div>
                        <div class="mt-1 flex-between p-1 rounded" style="background: rgba(255, 140, 0, 0.1); border-left: 3px solid var(--warning);">
                            <div>
                                <div class="text-warning bold" style="font-size:0.8rem;">KURUMSAL KREDİ KARTI KESİMİ</div>
                                <div style="font-size:0.75rem;">Son Gün: 22.03.2026</div>
                            </div>
                            <div class="bold text-warning">18.500 ₺</div>
                        </div>
                    </div>

                    <!-- AKBANK -->
                    <div class="p-2 border-bottom" style="border-bottom:1px solid var(--border-light)">
                        <div class="flex-between mb-1">
                            <div class="flex items-center gap-1">
                                <span style="display:inline-block; width:12px; height:12px; background:#E52026; border-radius:50%;"></span>
                                <span class="bold" style="font-size:1.1rem;">Akbank</span>
                                <span class="text-muted" style="font-size:0.8rem;">(TR88...1122)</span>
                            </div>
                            <div class="text-right">
                                <div class="bold text-success" style="font-size:1.2rem;">415.000 ₺</div>
                                <div class="text-muted" style="font-size:0.8rem">Kullanılabilir Bakiye</div>
                            </div>
                        </div>
                        <div class="flex-between" style="font-size:0.85rem; padding:4px 0;">
                            <span class="text-muted">Son Hareket (Gelen):</span>
                            <span class="text-success bold">+45.000 ₺ (Medikal Pazarlama)</span>
                        </div>
                        <div class="flex-between" style="font-size:0.85rem; padding:4px 0;">
                            <span class="text-muted">Son Hareket (Giden):</span>
                            <span class="text-danger bold">-12.000 ₺ (Kira Ödemesi)</span>
                        </div>
                        <div class="mt-1 flex-between p-1 rounded" style="background: rgba(51, 214, 159, 0.1); border-left: 3px solid var(--success);">
                            <div>
                                <div class="text-success bold" style="font-size:0.8rem;">VADELİ MEVDUAT GETİRİSİ</div>
                                <div style="font-size:0.75rem;">Tahakkuk Günü: 01.04.2026</div>
                            </div>
                            <div class="bold text-success">+9.500 ₺</div>
                        </div>
                    </div>

                    <!-- YAPI KREDİ -->
                    <div class="p-2 border-bottom" style="border-bottom:1px solid var(--border-light)">
                        <div class="flex-between mb-1">
                            <div class="flex items-center gap-1">
                                <span style="display:inline-block; width:12px; height:12px; background:#005A9C; border-radius:50%;"></span>
                                <span class="bold" style="font-size:1.1rem;">Yapı Kredi</span>
                                <span class="text-muted" style="font-size:0.8rem;">(TR33...4455)</span>
                            </div>
                            <div class="text-right">
                                <div class="bold text-success" style="font-size:1.2rem;">325.800 ₺</div>
                                <div class="text-muted" style="font-size:0.8rem">Kullanılabilir Bakiye</div>
                            </div>
                        </div>
                        <div class="flex-between" style="font-size:0.85rem; padding:4px 0;">
                            <span class="text-muted">Son Hareket (Gelen):</span>
                            <span class="text-success bold">+8.200 ₺ (N11 Hak Eviş)</span>
                        </div>
                        <div class="flex-between" style="font-size:0.85rem; padding:4px 0;">
                            <span class="text-muted">Son Hareket (Giden):</span>
                            <span class="text-danger bold">-24.000 ₺ (Vergi Dairesi)</span>
                        </div>
                        <div class="mt-1 flex-between p-1 rounded" style="background: rgba(255, 82, 99, 0.1); border-left: 3px solid var(--danger);">
                            <div>
                                <div class="text-danger bold" style="font-size:0.8rem;">ROTATİF KREDİ KAPAMA</div>
                                <div style="font-size:0.75rem;">Son Gün: Bugün</div>
                            </div>
                            <div class="bold text-danger">45.000 ₺</div>
                        </div>
                    </div>

                    <!-- ZİRAAT BANKASI -->
                    <div class="p-2 border-bottom" style="border-bottom:1px solid var(--border-light)">
                        <div class="flex-between mb-1">
                            <div class="flex items-center gap-1">
                                <span style="display:inline-block; width:12px; height:12px; background:#E2001A; border-radius:50%;"></span>
                                <span class="bold" style="font-size:1.1rem;">Ziraat Bankası</span>
                                <span class="text-muted" style="font-size:0.8rem;">(TR99...8888)</span>
                            </div>
                            <div class="text-right">
                                <div class="bold text-success" style="font-size:1.2rem;">810.500 ₺</div>
                                <div class="text-muted" style="font-size:0.8rem">Kullanılabilir Bakiye</div>
                            </div>
                        </div>
                        <div class="flex-between" style="font-size:0.85rem; padding:4px 0;">
                            <span class="text-muted">Son Hareket (Gelen):</span>
                            <span class="text-success bold">+120.000 ₺ (Devlet İhalesi Hakediş)</span>
                        </div>
                        <div class="flex-between" style="font-size:0.85rem; padding:4px 0;">
                            <span class="text-muted">Son Hareket (Giden):</span>
                            <span class="text-danger bold">-3.500 ₺ (SGK Prim)</span>
                        </div>
                    </div>

                    <!-- HALKBANK -->
                    <div class="p-2 border-bottom" style="border-bottom:1px solid var(--border-light)">
                        <div class="flex-between mb-1">
                            <div class="flex items-center gap-1">
                                <span style="display:inline-block; width:12px; height:12px; background:#005B9F; border-radius:50%;"></span>
                                <span class="bold" style="font-size:1.1rem;">Halkbank</span>
                                <span class="text-muted" style="font-size:0.8rem;">(TR11...2222)</span>
                            </div>
                            <div class="text-right">
                                <div class="bold text-success" style="font-size:1.2rem;">245.000 ₺</div>
                                <div class="text-muted" style="font-size:0.8rem">Kullanılabilir Bakiye</div>
                            </div>
                        </div>
                        <div class="mt-1 flex-between p-1 rounded" style="background: rgba(255, 82, 99, 0.1); border-left: 3px solid var(--danger);">
                            <div>
                                <div class="text-danger bold" style="font-size:0.8rem;">ESNAF KREDİSİ TAKSİDİ</div>
                                <div style="font-size:0.75rem;">Son Gün: 28.03.2026</div>
                            </div>
                            <div class="bold text-danger">15.000 ₺</div>
                        </div>
                    </div>

                    <!-- VAKIFBANK -->
                    <div class="p-2 border-bottom" style="border-bottom:1px solid var(--border-light)">
                        <div class="flex-between mb-1">
                            <div class="flex items-center gap-1">
                                <span style="display:inline-block; width:12px; height:12px; background:#FFB81C; border-radius:50%;"></span>
                                <span class="bold" style="font-size:1.1rem;">Vakıfbank</span>
                                <span class="text-muted" style="font-size:0.8rem;">(TR22...3333)</span>
                            </div>
                            <div class="text-right">
                                <div class="bold text-success" style="font-size:1.2rem;">185.100 ₺</div>
                                <div class="text-muted" style="font-size:0.8rem">Kullanılabilir Bakiye</div>
                            </div>
                        </div>
                    </div>

                    <!-- DENİZBANK -->
                    <div class="p-2 border-bottom" style="border-bottom:1px solid var(--border-light)">
                        <div class="flex-between mb-1">
                            <div class="flex items-center gap-1">
                                <span style="display:inline-block; width:12px; height:12px; background:#00458C; border-radius:50%;"></span>
                                <span class="bold" style="font-size:1.1rem;">Denizbank</span>
                                <span class="text-muted" style="font-size:0.8rem;">(TR55...6666)</span>
                            </div>
                            <div class="text-right">
                                <div class="bold text-success" style="font-size:1.2rem;">4.000 ₺</div>
                                <div class="text-muted" style="font-size:0.8rem">Kullanılabilir Bakiye</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `;
}

// --- MODULE: FINANCE ---
function renderFinance() {
    return `
        <div class="flex-between mb-2">
             <div>
                <h2>Finansal Yönetim</h2>
                <p class="text-muted">Gelir, gider ve nakit akışı kontrolü</p>
            </div>
            <div class="flex gap-1">
                <button class="btn btn-success" onclick="openModal('income')">${Icons.plus} Gelir Ekle</button>
                <button class="btn btn-danger" onclick="openModal('expense')">${Icons.plus} Gider Ekle</button>
            </div>
        </div>

        <div class="grid grid-2">
            <div class="card">
                <div class="card-header"><h3>Alacak Takibi (Gelecek Para)</h3></div>
                <table class="w-100">
                    ${AppData.receivables.map(r => `
                        <tr style="border-bottom:1px solid var(--border)">
                            <td class="p-2">${getCustomerName(r.customerId)}</td>
                            <td class="p-2 text-right">${formatDate(r.dueDate)}</td>
                            <td class="p-2 text-right text-success bold">${formatCurrency(r.amount)}</td>
                        </tr>
                    `).join('')}
                </table>
            </div>
            <div class="card">
                <div class="card-header"><h3>Ödeme Takibi (Çıkacak Para)</h3></div>
                <table class="w-100">
                    ${AppData.payables.map(p => `
                        <tr style="border-bottom:1px solid var(--border)">
                            <td class="p-2">${p.supplier}</td>
                            <td class="p-2 text-right">${formatDate(p.dueDate)}</td>
                            <td class="p-2 text-right text-danger bold">${formatCurrency(p.amount)}</td>
                        </tr>
                    `).join('')}
                </table>
            </div>
        </div>
    `;
}

// --- MODULE: CHECKS & NOTES (ÇEK & SENET) ---
function renderChecks() {
    const portfolioTotal = AppData.checks.filter(c => c.status === 'Portföyde').reduce((sum, c) => sum + c.amount, 0);
    const bouncedTotal = AppData.checks.filter(c => c.status === 'Karşılıksız').reduce((sum, c) => sum + c.amount, 0);

    return `
        <div class="flex-between mb-2">
             <div>
                <h2>Çek & Senet Takibi</h2>
                <p class="text-muted">Müşteri çekleri, firma senetleri ve tahsilat durumları</p>
            </div>
            <div class="flex gap-1">
                <button class="btn btn-primary" onclick="alert('Yeni Çek/Senet Girişi')">${Icons.plus} Yeni Evrak Gir</button>
            </div>
        </div>

        <div class="grid grid-3 mb-2">
            <div class="stat-card">
                <div class="stat-value text-info">${formatCurrency(portfolioTotal)}</div>
                <div class="stat-label">Portföydeki Çekler</div>
            </div>
            <div class="stat-card">
                <div class="stat-value text-danger" style="opacity:0.9">${formatCurrency(bouncedTotal)}</div>
                <div class="stat-label">Karşılıksız / Şüpheli</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${AppData.checks.length}</div>
                <div class="stat-label">Toplam Evrak Sayısı</div>
            </div>
        </div>

        <div class="card">
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Evrak Tipi</th>
                            <th>Referans No</th>
                            <th>Cari / Kurum</th>
                            <th>Banka</th>
                            <th>Vade Tarihi</th>
                            <th>Tutar</th>
                            <th>Durum</th>
                            <th>İşlem</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${AppData.checks.map(c => `
                            <tr>
                                <td><span class="badge ${c.type === 'Senet' ? 'badge-warning' : 'badge-info'}">${c.type}</span></td>
                                <td><strong>${c.ref}</strong></td>
                                <td>${c.entity}</td>
                                <td>${c.bank}</td>
                                <td>${formatDate(c.dueDate)}</td>
                                <td class="bold">${formatCurrency(c.amount)}</td>
                                <td>
                                    <span class="badge badge-${c.status === 'Tahsil Edildi' ? 'success' :
            (c.status === 'Karşılıksız' ? 'danger' : 'warning')
        }">${c.status}</span>
                                </td>
                                <td><button class="btn btn-secondary btn-sm">Görüntüle</button></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// --- MODULE: SARTNAMELER (TECHNICAL SPECIFICATIONS) ---
// --- MODULE: DOCUMENTS GENERATOR ---
function renderDocuments() {
    return `
        <div class="flex-between mb-2">
            <div>
                <h2>Belge & Evrak Oluşturucu</h2>
                <p class="text-muted">Resmi Fatura, Proforma ve Şartnameleri RS Aydınlatma antetiyle hazırlayın</p>
            </div>
        </div>
        
        <div class="grid grid-3 mb-2">
            <div class="card p-2" style="text-align: center; cursor: pointer; transition: 0.3s;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='var(--border)'" onclick="openModal('doc-invoice')">
                <div style="font-size: 3rem; margin-bottom: 1rem; color: var(--primary)">📄</div>
                <h3>Resmi Fatura Kes</h3>
                <p class="text-muted text-sm mt-1">Müşterilere gidecek asıl ticari fatura</p>
            </div>
            
            <div class="card p-2" style="text-align: center; cursor: pointer; transition: 0.3s;" onmouseover="this.style.borderColor='var(--warning)'" onmouseout="this.style.borderColor='var(--border)'" onclick="openModal('proforma')">
                <div style="font-size: 3rem; margin-bottom: 1rem; color: var(--warning)">📑</div>
                <h3>Proforma Fatura</h3>
                <p class="text-muted text-sm mt-1">Teklif öncesi proforma hazırlama</p>
            </div>
            
            <div class="card p-2" style="text-align: center; cursor: pointer; transition: 0.3s;" onmouseover="this.style.borderColor='var(--success)'" onmouseout="this.style.borderColor='var(--border)'" onclick="openModal('doc-sartname')">
                <div style="font-size: 3rem; margin-bottom: 1rem; color: var(--success)">📋</div>
                <h3>Teknik Şartname</h3>
                <p class="text-muted text-sm mt-1">İhale ve şartname dokümanı hazırlama</p>
            </div>
        </div>
    `;
}

function renderSartnameler() {
    return `
        <div class="flex-between mb-2">
            <div>
                <h2>Ürün Katalogları ve Teknik Şartnameler</h2>
                <p class="text-muted">Aydınlatma ürünlerinin teknik dökümanları ve proje şartnameleri</p>
            </div>
            <button class="btn btn-primary" onclick="alert('Belge/Katalog Yükle (PDF/Word/HTML)')">${Icons.plus} Katalog Yükle</button>
        </div>
        <div class="grid grid-3">
            <div class="card" style="border-left: 4px solid var(--primary);">
                <div class="flex-between">
                    <h3 style="margin-bottom: 8px;">Eliza Modern Sarkıt</h3>
                    <span class="badge badge-info">PDF & HTML</span>
                </div>
                <p class="text-muted" style="font-size: 0.85rem; margin-bottom: 16px;">Enerji tasarruflu LED mimarisi ve lümen değerleri güncel şartnamesi.</p>
                <div class="flex gap-1">
                    <button class="btn btn-secondary w-100">Görüntüle</button>
                    <button class="btn btn-primary w-100">İndir</button>
                </div>
            </div>
            
            <div class="card" style="border-left: 4px solid var(--primary);">
                <div class="flex-between">
                    <h3 style="margin-bottom: 8px;">Respomed eNO</h3>
                    <span class="badge badge-info">PDF & HTML</span>
                </div>
                <p class="text-muted" style="font-size: 0.85rem; margin-bottom: 16px;">Fraksiyone ekshale nitrik oksit ölçüm cihazı şartnamesi.</p>
                <div class="flex gap-1">
                     <button class="btn btn-secondary w-100" onclick="window.open('../RS Aydınlatma_Teknik_Sartnameler/Respomed_eNO_PDF_Katalog.html', '_blank')">Görüntüle</button>
                    <button class="btn btn-primary w-100">İndir</button>
                </div>
            </div>

            <div class="card" style="border-left: 4px solid var(--warning);">
                <div class="flex-between">
                    <h3 style="margin-bottom: 8px;">RS Aydınlatma Monitör 5X</h3>
                    <span class="badge badge-warning">Sadece PDF</span>
                </div>
                <p class="text-muted" style="font-size: 0.85rem; margin-bottom: 16px;">Yoğun bakım hasta başı monitörü genel özellikleri.</p>
                <div class="flex gap-1">
                    <button class="btn btn-secondary w-100">Görüntüle</button>
                    <button class="btn btn-primary w-100">İndir</button>
                </div>
            </div>
        </div>
    `;
}

// --- MODULE: DASHBOARD ---
function renderDashboard() {
    return `
        <div class="flex-between mb-2">
            <h2>RS Aydınlatma Üretim & Satış Özeti</h2>
            <div class="text-muted">Son Güncelleme: ${new Date().toLocaleTimeString()}</div>
        </div>

        <div class="grid grid-4 mb-2">
            <div class="stat-card">
                <div class="stat-value text-success">1.250.000 ₺</div>
                <div class="stat-label">Bu Ay Toplam Satış</div>
                <div class="stat-change text-success">↑ %12.5</div>
            </div>
            <div class="stat-card">
                <div class="stat-value text-info">850 Adet</div>
                <div class="stat-label">Stokta Hazır Avize</div>
                <div class="stat-change">Üretim Bekleyen: 120</div>
            </div>
            <div class="stat-card">
                <div class="stat-value text-danger">45.200 ₺</div>
                <div class="stat-label">Yaklaşan Ödemeler</div>
                <div class="stat-change text-danger">Bugün: 12.000 ₺</div>
            </div>
            <div class="stat-card">
                <div class="stat-value text-info">12 Adet</div>
                <div class="stat-label">Aktif Üretim Bandı</div>
                <div class="stat-change">Kapasite: %85</div>
            </div>
        </div>

        <div class="grid grid-2">
            <div class="card">
                <div class="card-header">
                    <h3>🔍 Kritik Stok Uyarıları (Hammadde & Ürün)</h3>
                    <a href="#" class="btn btn-sm btn-secondary" onclick="loadPage('stok')">Tümünü Gör</a>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Ürün/Hammadde</th>
                            <th>Kategori</th>
                            <th>Kritik</th>
                            <th>Mevcut</th>
                            <th>İşlem</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="bold">12V 5A LED Sürücü</span></td>
                            <td>Elektronik</td>
                            <td>50 Adet</td>
                            <td class="text-danger">12 Adet</td>
                            <td><button class="btn btn-sm btn-primary">Sipariş Aç</button></td>
                        </tr>
                        <tr>
                            <td><span class="bold">Eliza Kristal Taş Seti</span></td>
                            <td>Aksesuar</td>
                            <td>100 Set</td>
                            <td class="text-danger">45 Set</td>
                            <td><button class="btn btn-sm btn-primary">Sipariş Aç</button></td>
                        </tr>
                        <tr>
                            <td><span class="bold">Gold Kaplama Gövde - 40cm</span></td>
                            <td>Metal Kasa</td>
                            <td>30 Adet</td>
                            <td class="text-warning">28 Adet</td>
                            <td><button class="btn btn-sm btn-primary">Sipariş Aç</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3>🏭 Bekleyen Üretim Emirleri</h3>
                    <a href="#" class="btn btn-sm btn-secondary" onclick="loadPage('uretim')">Tümünü Gör</a>
                </div>
                <ul class="activity-list">
                    <li class="activity-item">
                        <div class="activity-icon" style="background:var(--info-bg); color:var(--info);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        </div>
                        <div class="activity-details">
                            <div class="activity-title">Modern Sarkıt - 50 Adet</div>
                            <div class="activity-time">Aşama: Metal Bükme / Montaj</div>
                        </div>
                    </li>
                    <li class="activity-item">
                        <div class="activity-icon" style="background:var(--success-bg); color:var(--success);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        </div>
                        <div class="activity-details">
                            <div class="activity-title">Kelebek Aplik - Gold / 20 Adet</div>
                            <div class="activity-time">Aşama: Paketleme (Sevke Hazır)</div>
                        </div>
                    </li>
                    <li class="activity-item">
                        <div class="activity-icon" style="background:var(--warning-bg); color:var(--warning);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                        </div>
                        <div class="activity-details">
                            <div class="activity-title">Özel Tasarım Otel Avizesi - 1 Adet</div>
                            <div class="activity-time">Aşama: Boyahane (Malzeme Bekliyor)</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    `;
}

// --- MODULE: MAIL INTELLIGENCE ---
function renderMailIntelligence() {
    return `
        <div class="flex-between mb-2">
            <div>
                <h2>Mail İstihbaratı ve Hedef Kitle</h2>
                <p class="text-muted">Kurumsal pazarlama, bayiler ve mimari proje veritabanı iletişimi</p>
            </div>
            <div class="flex gap-1">
                <button class="btn btn-secondary">Mail Listesi İçe Aktar</button>
                <button class="btn btn-warning" onclick="openModal('email-campaign')">Yeni Kampanya</button>
            </div>
        </div>

        <div class="grid grid-3 mb-2">
            <div class="stat-card">
                 <div class="stat-value text-info">4.250</div>
                 <div class="stat-label">Toplam Kayıtlı Mail</div>
            </div>
            <div class="stat-card">
                 <div class="stat-value text-success">%68</div>
                 <div class="stat-label">Ortalama Açılma Oranı</div>
            </div>
            <div class="stat-card">
                 <div class="stat-value text-warning">Devam Ediyor</div>
                 <div class="stat-label">Aktif Kampanya: Showroom 2026</div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3>Hedef Kitle Listeleri (Veritabanları)</h3>
            </div>
            <div class="table-container">
                <table>
                    <thead>
                        <tr><th>Liste Adı</th><th>Açıklama</th><th>Kişi Sayısı</th><th>Son Güncelleme</th><th>İşlem</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>RS Aydınlatma Bayileri</strong></td>
                            <td>Türkiye geneli dekorasyon ve aydınlatma bayileri</td>
                            <td>450</td>
                            <td>12.03.2026</td>
                            <td><button class="btn btn-secondary btn-sm">Detay</button></td>
                        </tr>
                        <tr>
                            <td><strong>İç Mimarlık & Dekorasyon</strong></td>
                            <td>A Plus proje ofisleri ve bağımsız iç mimarlar</td>
                            <td>1.250</td>
                            <td>01.03.2026</td>
                            <td><button class="btn btn-secondary btn-sm">Detay</button></td>
                        </tr>
                        <tr>
                            <td><strong>İnşaat Proje Firmaları</strong></td>
                            <td>Konut ve ticari yapı müteahhitleri</td>
                            <td>2.550</td>
                            <td>15.02.2026</td>
                            <td><button class="btn btn-secondary btn-sm">Detay</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// --- MODAL SYSTEM ---
function openModal(type) {
    const modal = document.getElementById('modalOverlay');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');

    modal.classList.add('active');

    // ... (Modal Content Logic Same as before, just ensuring clean HTML)
    // Şimdilik modal içeriğini koruyoruz, çünkü orada emoji yok (form elemanları var)
    // Ancak service-form'daki imza kısmı emoji içeriyordu, onu temizleyelim.

    if (type === 'sale') {
        title.innerText = 'Yeni Satış Kaydı';
        body.innerHTML = `
        <form id="form-sale" class="grid grid-2 gap-2">
                <div class="form-group"><label class="form-label">Müşteri</label><select id="sale-customer" class="form-select">${AppData.customers.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}</select></div>
                <div class="form-group"><label class="form-label">Ürün</label><select id="sale-product" class="form-select">${AppData.products.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}</select></div>
                <div class="form-group"><label class="form-label">Tarih</label><input id="sale-date" type="date" class="form-input"></div>
                <div class="form-group"><label class="form-label">Tutar</label><input id="sale-amount" type="number" class="form-input"></div>
            </form>
        <div class="flex justify-end mt-2"><button class="btn btn-primary w-100" onclick="handleFormSubmit('sale')">Kaydet</button></div>
    `;
    }
    else if (type === 'proforma' || type === 'doc-invoice' || type === 'doc-sartname') {
        const isInvoice = type === 'doc-invoice';
        const isSartname = type === 'doc-sartname';

        title.innerText = isInvoice ? 'Resmi Fatura Düzenle' : (isSartname ? 'Teknik Şartname Oluştur' : 'Yeni Proforma Fatura');
        body.innerHTML = `
        <form id="form-document" class="grid grid-2 gap-2">
            <div class="form-group" style="grid-column: span 2">
                <label class="form-label">${isSartname ? 'İhale / Kurum Adı' : 'Müşteri (Cari)'}</label>
                <select id="doc-customer" class="form-select">
                    ${AppData.customers.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">${isInvoice ? 'Fatura No' : (isSartname ? 'Şartname No' : 'Proforma No')}</label>
                <input id="doc-no" type="text" class="form-input" value="${isInvoice ? 'FAT' : (isSartname ? 'SRT' : 'PROF')}-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}">
            </div>
            <div class="form-group">
                <label class="form-label">Tarih</label>
                <input id="doc-date" type="date" class="form-input" value="${new Date().toISOString().split('T')[0]}">
            </div>
            <div class="form-group" style="grid-column: span 2">
                <label class="form-label">Ürün / Cihaz Seçimi</label>
                <select id="doc-product" class="form-select">
                    ${AppData.products.map(p => `<option value="${p.id}">${p.name} - ${formatCurrency(p.price)}</option>`).join('')}
                </select>
            </div>
        </form>
        <div class="flex justify-end mt-2"><button class="btn btn-primary w-100" onclick="generateAndPrintPDF('${type}')">PDF Oluştur ve Yazdır</button></div>
        `;
    }
    else if (type === 'email-campaign') {
        title.innerText = 'Yeni Mail Kampanyası / Göndergesi';
        body.innerHTML = `
        <form id="form-email" class="grid grid-2 gap-2">
            <div class="form-group" style="grid-column: span 2">
                <label class="form-label">Hedef Kitle / Alici Listesi</label>
                <select id="email-target" class="form-select">
                    <option>İç Mimarlık ve Dekorasyon Ofisleri (850 Kişi)</option>
                    <option>RS Aydınlatma Bayi Ağı (450 Kişi)</option>
                    <option>İnşaat ve Müteahhitlik Firmaları (1.200 Kişi)</option>
                    <option>Mevcut Müşteri Veritabanı</option>
                </select>
            </div>
            <div class="form-group" style="grid-column: span 2">
                <label class="form-label">Mail Konusu (Subject)</label>
                <input id="email-subject" type="text" class="form-input" placeholder="Örn: 2026 Yeni Koleksiyon Sarkıt ve Aplik Sistemleri">
            </div>
            <div class="form-group" style="grid-column: span 2">
                <label class="form-label">Mail İçeriği</label>
                <textarea id="email-content" class="form-textarea" rows="6" placeholder="Sayın ilgili,\nRS Aydınlatma olarak iç mekan dekorasyonuna değer katan en yeni koleksiyonumuzdan bahsetmekten kıvanç duyuyoruz...\nSaygılarımızla,\nSatış Departmanı"></textarea>
            </div>
            <div class="form-group" style="grid-column: span 2; padding: 15px; border: 1px dashed var(--border); border-radius: 8px; font-size: 0.9rem; color: var(--text-muted); text-align: center; cursor: pointer;" onclick="alert('Dosya yükleme penceresi açılacak')">
                <span style="color: var(--warning)">Evrak Ekle (Örn: Seçkin PDF Dokümanı)</span> 📎
            </div>
        </form>
        <div class="flex justify-end mt-2"><button class="btn btn-primary w-100" onclick="handleFormSubmit('email-campaign')">Kampanyayı Başlat / Gönder</button></div>
        `;
    }
    else if (type === 'income') {
        title.innerText = 'Gelir Ekle';
        body.innerHTML = `
        < form id = "form-income" class="grid grid-2 gap-2" >
                <div class="form-group"><label class="form-label">Kategori</label><select id="income-category" class="form-select"><option>Satış</option><option>Yatırım</option></select></div>
                <div class="form-group"><label class="form-label">Tutar</label><input id="income-amount" type="number" class="form-input"></div>
                <div class="form-group"><label class="form-label">Tarih</label><input id="income-date" type="date" class="form-input"></div>
                <div class="form-group" style="grid-column:span 2"><label class="form-label">Açıklama</label><input id="income-desc" type="text" class="form-input"></div>
            </form >
        <div class="flex justify-end mt-2"><button class="btn btn-success w-100" onclick="handleFormSubmit('income')">Kaydet</button></div>
    `;
    }
    else if (type === 'expense') {
        title.innerText = 'Gider Ekle';
        body.innerHTML = `
        < form id = "form-expense" class="grid grid-2 gap-2" >
                <div class="form-group"><label class="form-label">Kategori</label><select id="expense-category" class="form-select"><option>Personel</option><option>Kira</option></select></div>
                <div class="form-group"><label class="form-label">Tutar</label><input id="expense-amount" type="number" class="form-input"></div>
                <div class="form-group"><label class="form-label">Tarih</label><input id="expense-date" type="date" class="form-input"></div>
                <div class="form-group" style="grid-column:span 2"><label class="form-label">Açıklama</label><input id="expense-desc" type="text" class="form-input"></div>
            </form >
        <div class="flex justify-end mt-2"><button class="btn btn-danger w-100" onclick="handleFormSubmit('expense')">Kaydet</button></div>
    `;
    }
    else if (type === 'service-form') {
        title.innerText = 'Servis Formu';
        body.innerHTML = `
        < form id = "form-service" class="grid grid-2 gap-2" >
                <div class="form-group"><label class="form-label">Müşteri</label><select id="srv-customer" class="form-select">${AppData.customers.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}</select></div>
                <div class="form-group"><label class="form-label">Cihaz</label><select id="srv-product" class="form-select">${AppData.products.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}</select></div>
                <div class="form-group"><label class="form-label">İşlem</label><select id="srv-type" class="form-select"><option>Bakım</option><option>Arıza</option></select></div>
                <div class="form-group"><label class="form-label">Sonraki Bakım</label><input id="srv-nextdate" type="date" class="form-input"></div>
                <div class="form-group" style="grid-column: span 2"><label class="form-label">Notlar</label><textarea id="srv-notes" class="form-textarea"></textarea></div>
                <div class="form-group" style="grid-column: span 2; border: 1px dashed var(--border); padding: 1rem; text-align: center;">
                    <label class="form-label mb-1">Müşteri Onayı</label>
                    <div style="padding: 20px; background: #222; border-radius: 8px; cursor: pointer;" onclick="this.style.border='2px solid var(--primary)'; this.innerHTML='${Icons.check} İmzalandı';">
                        [İmza İçin Tıkla]
                    </div>
                </div>
            </form >
        <div class="flex justify-end mt-2"><button class="btn btn-primary w-100" onclick="handleFormSubmit('service')">Kaydet</button></div>
    `;
    }
    else if (type === 'hr-add') {
        title.innerText = 'Personel Ekle';
        body.innerHTML = `
        < form id = "form-hr" class="grid grid-2 gap-2" >
                <div class="form-group"><label class="form-label">Ad Soyad</label><input id="hr-name" type="text" class="form-input"></div>
                <div class="form-group"><label class="form-label">Departman</label><select id="hr-dept" class="form-select"><option>Yazılım</option><option>Satış</option><option>Ar-Ge</option><option>HR</option><option>Finans</option></select></div>
                <div class="form-group"><label class="form-label">Durum</label><select id="hr-status" class="form-select"><option>Aktif</option><option>İzinli</option></select></div>
                <div class="form-group"><label class="form-label">Pozisyon</label><input id="hr-pos" type="text" class="form-input"></div>
            </form >
        <div class="flex justify-end mt-2"><button class="btn btn-primary w-100" onclick="handleFormSubmit('hr')">Kaydet</button></div>
    `;
    }
    else if (type === 'customer') {
        title.innerText = 'Yeni Müşteri Ekle';
        body.innerHTML = `
        <form id="form-customer" class="grid grid-2 gap-2">
            <div class="form-group"><label class="form-label">Kurum Adı</label><input id="cust-name" type="text" class="form-input" placeholder="Örn: İstanbul Hastanesi"></div>
            <div class="form-group"><label class="form-label">Şehir</label><input id="cust-city" type="text" class="form-input" placeholder="İstanbul"></div>
            <div class="form-group"><label class="form-label">Tip</label><select id="cust-type" class="form-select"><option>Hastane</option><option>Klinik</option><option>Üniversite</option><option>Kamu</option><option>Özel</option></select></div>
            <div class="form-group"><label class="form-label">İlgili Kişi</label><input id="cust-contact" type="text" class="form-input" placeholder="Ad Soyad"></div>
            <div class="form-group" style="grid-column: span 2"><label class="form-label">Telefon Numarası</label><input id="cust-phone" type="text" class="form-input" placeholder="+90 5XX XXX XX XX"></div>
        </form>
        <div class="flex justify-end mt-2"><button class="btn btn-primary w-100" onclick="handleFormSubmit('customer')">Müşteri Ekle</button></div>
        `;
    }
    else if (type === 'product') {
        title.innerText = 'Yeni Ürün Ekle';
        body.innerHTML = `
        <form id="form-product" class="grid grid-2 gap-2">
            <div class="form-group" style="grid-column: span 2"><label class="form-label">Ürün Adı</label><input id="prod-name" type="text" class="form-input" placeholder="Eliza Sarkıt V1"></div>
            <div class="form-group"><label class="form-label">Fiyat (₺)</label><input id="prod-price" type="number" class="form-input" placeholder="450000"></div>
            <div class="form-group"><label class="form-label">Stok Adedi</label><input id="prod-stock" type="number" class="form-input" placeholder="10"></div>
        </form>
        <div class="flex justify-end mt-2"><button class="btn btn-primary w-100" onclick="handleFormSubmit('product')">Ürün Ekle</button></div>
        `;
    }
}

function closeModal() {
    const modal = document.getElementById('modalOverlay');
    modal.classList.remove('active');
}

// --- PDF GENERATOR CORE ---
function generateAndPrintPDF(type) {
    const customerId = parseInt(document.getElementById('doc-customer').value);
    const docNo = document.getElementById('doc-no').value;
    const date = document.getElementById('doc-date').value;
    const productId = parseInt(document.getElementById('doc-product').value);

    const customer = AppData.customers.find(c => c.id === customerId);
    const product = AppData.products.find(p => p.id === productId);

    let title = '';
    let content = '';

    if (type === 'doc-invoice') {
        title = 'TİCARİ FATURA';
        content = `
            <table style="width:100%; margin-top:20px; border-collapse: collapse;">
                <tr><td colspan="2" style="background:#eee; padding:10px; font-weight:bold;">MÜŞTERİ BİLGİLERİ</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #ddd; width:150px;"><strong>Firma Adı:</strong></td><td style="padding:10px; border-bottom:1px solid #ddd;">${customer.name}</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #ddd;"><strong>Yetkili:</strong></td><td style="padding:10px; border-bottom:1px solid #ddd;">${customer.contact} (${customer.phone || '-'})</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #ddd;"><strong>Şehir/Tip:</strong></td><td style="padding:10px; border-bottom:1px solid #ddd;">${customer.city} / ${customer.type}</td></tr>
            </table>
            
            <table style="width:100%; margin-top:30px; border-collapse: collapse; text-align: left;">
                <thead>
                    <tr style="background:#0b1e36; color:white;">
                        <th style="padding:15px;">Ürün Açıklaması</th>
                        <th style="padding:15px;">Miktar</th>
                        <th style="padding:15px;">Birim Fiyat</th>
                        <th style="padding:15px;">Toplam</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding:15px; border-bottom:1px solid #eee;">${product.name}</td>
                        <td style="padding:15px; border-bottom:1px solid #eee;">1 Adet</td>
                        <td style="padding:15px; border-bottom:1px solid #eee;">${formatCurrency(product.price)}</td>
                        <td style="padding:15px; border-bottom:1px solid #eee;"><strong>${formatCurrency(product.price)}</strong></td>
                    </tr>
                </tbody>
            </table>
            <div style="text-align:right; margin-top:20px; font-size:1.2rem; font-weight:bold;">Genel Toplam: ${formatCurrency(product.price)}</div>
        `;
    } else if (type === 'proforma') {
        title = 'PROFORMA FATURA TEKLİFİ';
        content = `
            <p style="margin-bottom:30px; font-size:1.1rem;">Sayın <strong>${customer.name}</strong> yetkilisi <strong>${customer.contact}</strong>,<br>Talebiniz üzerine hazırlanan cihaz fiyat teklifimiz aşağıda bilgilerinize sunulmuştur.</p>
            <table style="width:100%; margin-top:10px; border-collapse: collapse; text-align: left;">
                <thead>
                    <tr style="background:#0984e3; color:white;">
                        <th style="padding:15px;">Cihaz / Model</th>
                        <th style="padding:15px;">Adet</th>
                        <th style="padding:15px;">Liste Fiyatı</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding:15px; border-bottom:1px solid #eee; font-weight:bold;">${product.name}</td>
                        <td style="padding:15px; border-bottom:1px solid #eee;">1 Set</td>
                        <td style="padding:15px; border-bottom:1px solid #eee; color:#d63031; font-size:1.1rem;"><strong>${formatCurrency(product.price)}</strong></td>
                    </tr>
                </tbody>
            </table>
            <p style="margin-top:40px; font-size:0.9rem; color:#555;"><i>* Bu teklif belgesi ${formatDate(date)} tarihinden itibaren 15 gün süreyle geçerlidir. Cihaz kurulumu ve eğitim firmamızca ücretsiz sağlanacaktır.</i></p>
        `;
    } else if (type === 'doc-sartname') {
        title = 'TEKNİK ŞARTNAME & ÜRÜN BEYANI';
        content = `
            <h3 style="text-align:center; margin-bottom: 20px;">${product.name} - TEKNİK ÖZELLİKLERİ</h3>
            <ul style="line-height: 1.8; font-size: 1rem;">
                <li>Cihaz klinik ortamlara ve yoğun bakıma tam uyumlu medikal standartlarda üretilmiş olmalıdır.</li>
                <li>Hassas ölçüm sensörleri sayesinde anlık veriyi 0.1 saniye gecikmeyle aktarabilmelidir.</li>
                <li>Kullanıcı dostu arayüze sahip olup, acil durumlarda sesli ve ışıklı uyarı vermelidir.</li>
                <li>Cihazın CE ve yetkili tıbbi uygunluk sertifikalarına sahip olması zorunludur.</li>
                <li>Şebeke dalgalanmalarına karşı anlık koruma sağlayacak dahili bir regülatörü bulunmalıdır.</li>
                <li>Kutu içeriğinde sarf malzemeleri, güç kablosu ve detaylı kurulum dokümantasyonu eksiksiz yer almalıdır.</li>
            </ul>
            <div style="margin-top: 50px; font-size: 0.95rem;">
                <strong>Hazırlayan Firma:</strong> RS Aydınlatma Sistemleri San. ve Tic. Ltd. Şti.<br>
                <strong>Tarih:</strong> ${formatDate(date)}<br>
                <strong>Evrak Referans No:</strong> ${docNo}<br><br>
                <em>Onay Kutusu: [ &nbsp; ] Okudum, Onaylıyorum. YETKİLİ İMZA: ........................</em>
            </div>
        `;
    }

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>${title} - ${docNo}</title>
            <style>
                body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; margin: 0; padding: 2cm 2cm 0 2cm; color: #222; background: white; }
                .pdf-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #0b1e36; padding-bottom: 20px; margin-bottom: 30px; }
                .pdf-logo { max-height: 70px; }
                .pdf-company-info { text-align: right; font-size: 0.85rem; color: #555; line-height: 1.4; }
                .pdf-title-box { text-align: center; margin-bottom: 40px; }
                .pdf-title-box h1 { margin: 0; color: #0b1e36; font-size: 24px; letter-spacing: 1px;}
                .pdf-title-box p { margin: 5px 0 0 0; color: #777; font-size: 14px; }
                .pdf-footer { position: fixed; bottom: 1cm; left: 2cm; right: 2cm; text-align: center; font-size: 0.8rem; color: #999; border-top: 1px solid #eee; padding-top: 10px; }
                @media print {
                    @page { margin: 0; size: A4; }
                    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                }
            </style>
        </head>
        <body onload="setTimeout(() => { window.print(); }, 500)">
            <div class="pdf-header">
                <div><img src="assets/logo.png" class="pdf-logo" alt="RS Aydınlatma" onerror="this.src='../assets/logo.png'"></div>
                <div class="pdf-company-info">
                    <strong>RS AYDINLATMA MEDİKAL SAN. VE TİC. LTD. ŞTİ.</strong><br>
                    İvedik OSB Mah. 1354 Cad. No: 114<br>
                    Yenimahalle / ANKARA<br>
                    Tel: +90 312 395 00 00 | E-posta: info@rs_aydinlatma.com
                </div>
            </div>
            
            <div class="pdf-title-box">
                <h1>${title}</h1>
                <p>Belge Kayıt No: ${docNo} &nbsp;|&nbsp; Düzenleme Tarihi: ${formatDate(date)}</p>
            </div>
            
            <div class="pdf-content">
                ${content}
            </div>
            
            <div class="pdf-footer">
                Bu belge <strong style="color:#0b1e36;">RS Aydınlatma Kurumsal ERP Modülü</strong> tarafından ${formatDate(new Date())} tarihinde elektronik olarak üretilmiştir. Her hakkı saklıdır.
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
    closeModal();
}

function handleFormSubmit(type) {
    const today = new Date().toISOString().split('T')[0];

    if (type === 'sale') {
        const customerId = parseInt(document.getElementById('sale-customer').value);
        const productId = parseInt(document.getElementById('sale-product').value);
        const amount = parseFloat(document.getElementById('sale-amount').value) || 0;
        const date = document.getElementById('sale-date').value || today;

        if (!amount) {
            alert('Lütfen tutar giriniz!');
            return;
        }

        // Satış ekle
        const newSale = {
            id: 100 + Date.now(),
            customerId: customerId,
            productId: productId,
            date: date,
            amount: amount,
            status: 'Yeni Sipariş'
        };
        AppData.sales.push(newSale);

        // Otomatik alacak kaydı oluştur
        AppData.receivables.push({
            id: Date.now(),
            customerId: customerId,
            amount: amount,
            dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 gün sonra
            status: 'Bekliyor',
            ref: 'FAT-' + new Date().getFullYear() + '-' + String(AppData.receivables.length + 1).padStart(3, '0')
        });

        saveData();
        closeModal();
        showToast('Satış kaydedildi! Alacak otomatik oluşturuldu.', 'success');
        loadPage('satis');
    }
    else if (type === 'income') {
        const amount = parseFloat(document.getElementById('income-amount').value) || 0;
        const category = document.getElementById('income-category').value;
        const date = document.getElementById('income-date').value || today;
        const desc = document.getElementById('income-desc').value || 'Gelir';

        if (!amount) {
            alert('Lütfen tutar giriniz!');
            return;
        }

        AppData.receivables.push({
            id: Date.now(),
            customerId: 0, // Genel gelir
            amount: amount,
            dueDate: date,
            status: 'Tahsil Edildi',
            ref: category + '-' + Date.now(),
            desc: desc
        });

        saveData();
        closeModal();
        showToast('Gelir kaydedildi: ' + formatCurrency(amount), 'success');
        loadPage('finansal');
    }
    else if (type === 'expense') {
        const amount = parseFloat(document.getElementById('expense-amount').value) || 0;
        const category = document.getElementById('expense-category').value;
        const date = document.getElementById('expense-date').value || today;
        const desc = document.getElementById('expense-desc').value || 'Gider';

        if (!amount) {
            alert('Lütfen tutar giriniz!');
            return;
        }

        AppData.expenses.push({
            id: Date.now(),
            category: category,
            amount: amount,
            date: date,
            desc: desc
        });

        // Ayrıca payables'a da ekle
        AppData.payables.push({
            id: Date.now(),
            supplier: desc,
            amount: amount,
            dueDate: date,
            status: 'Ödendi',
            type: category
        });

        saveData();
        closeModal();
        showToast('Gider kaydedildi: ' + formatCurrency(amount), 'danger');
        loadPage('finansal');
    }
    else if (type === 'service') {
        const customerId = parseInt(document.getElementById('srv-customer').value);
        const productId = parseInt(document.getElementById('srv-product').value);
        const srvType = document.getElementById('srv-type').value;
        const nextDate = document.getElementById('srv-nextdate').value || today;
        const notes = document.getElementById('srv-notes').value || '';

        // En son satışı bul veya yeni oluştur
        let saleId = AppData.sales.find(s => s.customerId === customerId && s.productId === productId)?.id;
        if (!saleId) {
            saleId = 100 + Date.now();
        }

        AppData.maintenance.push({
            id: Date.now(),
            saleId: saleId,
            nextDate: nextDate,
            type: srvType,
            status: 'Planlandı',
            notes: notes
        });

        saveData();
        closeModal();
        showToast('Servis kaydı oluşturuldu!', 'success');
        loadPage('servis');
    }
    else if (type === 'hr') {
        const name = document.getElementById('hr-name').value;
        const dept = document.getElementById('hr-dept').value;
        const pos = document.getElementById('hr-pos').value;
        const status = document.getElementById('hr-status').value;

        if (!name) {
            alert('Lütfen ad soyad giriniz!');
            return;
        }

        AppData.employees.push({
            id: 100 + AppData.employees.length + 1,
            name: name,
            dept: dept,
            pos: pos,
            status: status,
            salary: 50000,
            start: today
        });

        saveData();
        closeModal();
        showToast('Personel eklendi: ' + name, 'success');
        loadPage('personel');
    }
    else if (type === 'customer') {
        const name = document.getElementById('cust-name').value;
        const city = document.getElementById('cust-city').value;
        const custType = document.getElementById('cust-type').value;
        const contact = document.getElementById('cust-contact').value;
        const phone = document.getElementById('cust-phone').value;

        if (!name) {
            alert('Lütfen kurum adı giriniz!');
            return;
        }

        AppData.customers.push({
            id: AppData.customers.length + 1,
            name: name,
            city: city,
            type: custType,
            contact: contact,
            phone: phone
        });

        saveData();
        closeModal();
        showToast('Müşteri eklendi: ' + name, 'success');
        loadPage('musteriler');
    }
    else if (type === 'product') {
        const name = document.getElementById('prod-name').value;
        const price = parseFloat(document.getElementById('prod-price').value) || 0;
        const stock = parseInt(document.getElementById('prod-stock').value) || 0;

        if (!name || !price) {
            alert('Lütfen ürün adı ve fiyat giriniz!');
            return;
        }

        AppData.products.push({
            id: AppData.products.length + 1,
            name: name,
            price: price,
            stock: stock
        });

        saveData();
        closeModal();
        showToast('Ürün eklendi: ' + name, 'success');
        loadPage('uretim');
    }
    else if (type === 'email-campaign') {
        const target = document.getElementById('email-target').value;
        const subject = document.getElementById('email-subject').value;
        const content = document.getElementById('email-content').value;

        if (!subject || !content) {
            alert('Lütfen mail konusu ve içeriğini doldurun!');
            return;
        }

        closeModal();
        showToast('Mail kampanyası kuyruğa eklendi. Tüm kayıtlı adreslere gönderiliyor.', 'success');
    }
    else {
        saveData();
        closeModal();
        showToast('İşlem kaydedildi.', 'info');
    }
}

// Toast Notification System
function showToast(message, type = 'info') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) existingToast.remove();

    const colors = {
        success: '#33D69F',
        danger: '#FF5263',
        warning: '#FFB946',
        info: '#479CFF'
    };

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        font-weight: 600;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    toast.textContent = message;

    // Add animation keyframes
    if (!document.querySelector('#toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(toast);

    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Delete functions
function deleteItem(type, id) {
    if (!confirm('Bu kaydı silmek istediğinizden emin misiniz?')) return;

    switch (type) {
        case 'customer':
            AppData.customers = AppData.customers.filter(c => c.id !== id);
            loadPage('musteriler');
            break;
        case 'product':
            AppData.products = AppData.products.filter(p => p.id !== id);
            loadPage('uretim');
            break;
        case 'sale':
            AppData.sales = AppData.sales.filter(s => s.id !== id);
            loadPage('satis');
            break;
        case 'employee':
            AppData.employees = AppData.employees.filter(e => e.id !== id);
            loadPage('personel');
            break;
        case 'expense':
            AppData.expenses = AppData.expenses.filter(e => e.id !== id);
            loadPage('masraflar');
            break;
        case 'receivable':
            AppData.receivables = AppData.receivables.filter(r => r.id !== id);
            loadPage('faturalar');
            break;
        case 'payable':
            AppData.payables = AppData.payables.filter(p => p.id !== id);
            loadPage('satin-alma');
            break;
    }

    saveData();
    showToast('Kayıt silindi.', 'warning');
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');

    // Prevent body scroll when menu is open
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}

// Close mobile menu when clicking a nav item
function setupMobileNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 1024) {
                toggleMobileMenu();
            }
        });
    });
}

// --- AUTHENTICATION SYSTEM ---
const AUTH_KEY = 'rs_aydinlatma_auth';

function checkAuth() {
    const authData = localStorage.getItem(AUTH_KEY);
    if (!authData) return false;

    try {
        const parsed = JSON.parse(authData);
        if (parsed.isLoggedIn && parsed.username) {
            return parsed;
        }
    } catch (e) { /* ignore */ }
    return false;
}

function applyRBAC(role) {
    const navItems = document.querySelectorAll('.nav-item');

    // Varsayılan erişilebilen menüler (Herkes için)
    const baseAccess = ['dashboard', 'ayarlar'];

    // Role özgü yetki listesi
    const rolePermissions = {
        'admin': 'ALL', // Her yere girebilir
        'sales': ['dashboard', 'satis', 'musteriler', 'projeler', 'stok', 'sartnameler', 'mail', 'documents'],
        'finance': ['dashboard', 'muhasebe', 'cek-senet', 'gelir-gider', 'finansal', 'masraflar', 'faturalar', 'alim', 'personel', 'onay', 'documents']
    };

    const allowed = rolePermissions[role] || baseAccess;

    navItems.forEach(item => {
        const page = item.dataset.page;
        // Çıkış butonu gibi data-page'i olmayan item'lar açık kalır
        if (!page) {
            item.style.display = 'flex';
            return;
        }

        if (allowed === 'ALL' || allowed.includes(page) || baseAccess.includes(page)) {
            item.style.display = 'flex';
            item.parentElement.style.display = 'block'; // Üst başlık bölmesini (nav-section) de göster
        } else {
            item.style.display = 'none';
        }
    });

    // Boş kalan nav-section'ları gizle
    const sections = document.querySelectorAll('.nav-section');
    sections.forEach(sec => {
        const visibleItems = sec.querySelectorAll('.nav-item[style="display: flex;"]');
        if (visibleItems.length === 0 && sec.querySelector('.nav-item')) {
            sec.style.display = 'none';
        } else {
            sec.style.display = 'block';
        }
    });
}

function handleLogin(e) {
    if (e) e.preventDefault();
    const userField = document.getElementById('loginUsername');
    const passField = document.getElementById('loginPassword');
    const errorMsg = document.getElementById('authErrorMsg');

    // Dinamik kullanıcı veritabanı kontrolü (AppData.users)
    const userQuery = userField.value.trim();
    const passQuery = passField.value;

    const foundUser = AppData.users.find(u => u.username === userQuery && u.password === passQuery && u.status === 'Aktif');

    if (foundUser) {
        errorMsg.classList.remove('active');
        localStorage.setItem(AUTH_KEY, JSON.stringify({
            isLoggedIn: true,
            username: foundUser.username,
            name: foundUser.name,
            role: foundUser.role
        }));

        // Hide login, show app
        document.getElementById('authOverlay').classList.add('hidden');
        document.getElementById('appContainer').style.display = 'flex';

        applyRBAC(foundUser.role);

        // Initialize App Operations
        initApp();
        setupMobileNavigation();

        const avatar = document.querySelector('.user-avatar');
        if (avatar && foundUser.name) {
            avatar.textContent = foundUser.name.substring(0, 2).toUpperCase();
        }

    } else {
        errorMsg.classList.add('active');
        // Add shake animation
        const card = document.querySelector('.auth-card');
        card.style.animation = 'shake 0.4s cubic-bezier(.36,.07,.19,.97) both';
        setTimeout(() => card.style.animation = '', 400);
    }
}

function handleLogout() {
    localStorage.removeItem(AUTH_KEY);
    window.location.reload();
}

// Global hook for the exit button
window.logoutApp = handleLogout;

const DB_NAME = 'rs_aydinlatma_erp_db';

// Tema yönetimi
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcons(savedTheme);
}

// Global toggle function
window.toggleDarkMode = function () {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcons(newTheme);
};

// Listen for clicks on the toggle button (Event Delegation)
document.addEventListener('click', (e) => {
    const btn = e.target.closest('#themeToggle');
    if (btn) {
        window.toggleDarkMode();
    }
});

function updateThemeIcons(theme) {
    const sunIcon = document.getElementById('themeIconSun');
    const moonIcon = document.getElementById('themeIconMoon');
    if (sunIcon && moonIcon) {
        if (theme === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }
}

// On Page Load
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    initTheme();
    loadPage('dashboard');

    // Add keyframes for shake if not present
    if (!document.getElementById('shakeKeyframes')) {
        const style = document.createElement('style');
        style.id = 'shakeKeyframes';
        style.innerHTML = `
            @keyframes shake {
                10%, 90% { transform: translate3d(-1px, 0, 0); }
                20%, 80% { transform: translate3d(2px, 0, 0); }
                30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
                40%, 60% { transform: translate3d(4px, 0, 0); }
            }
        `;
        document.head.appendChild(style);
    }

    const session = checkAuth();
    if (session) {
        // User is logged in, hide overlay and init app
        document.getElementById('authOverlay').classList.add('hidden');
        document.getElementById('appContainer').style.display = 'flex';

        applyRBAC(session.role);
        initApp();
        setupMobileNavigation();

        // Update user avatar initials
        const avatar = document.querySelector('.user-avatar');
        if (avatar && session.name) {
            avatar.textContent = session.name.substring(0, 2).toUpperCase();
        } else if (avatar && session.username) {
            avatar.textContent = session.username.substring(0, 2).toUpperCase();
        }
    } else {
        // Show login
        document.getElementById('authOverlay').classList.remove('hidden');
        document.getElementById('appContainer').style.display = 'none';

        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            loginBtn.addEventListener('click', handleLogin);
        }
    }
});

// --- EK MODÜLLER (app-modules.js'den aktarıldı) ---

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
            <div class="stat-card"><div class="stat-value text-warning">₺45,000</div><div class="stat-label">Bekleyen Siparişler</div></div>
            <div class="stat-card"><div class="stat-value">5</div><div class="stat-label">Aktif Tedarikçi</div></div>
            <div class="stat-card"><div class="stat-value text-danger">2</div><div class="stat-label">Geciken Teslimat</div></div>
        </div>

        <div class="card">
            <div class="card-header"><h3>Tedarikçi Listesi ve Borçlar</h3></div>
            <div class="table-container">
                <table>
                    <thead><tr><th>Tedarikçi</th><th>Kategori</th><th>Borç</th><th>Vade</th><th>Kalan Gün</th><th>Durum</th></tr></thead>
                    <tbody>
                        ${AppData.payables.map(p => `
                            <tr>
                                <td>${p.supplier}</td>
                                <td>${p.type}</td>
                                <td class="text-danger bold">${formatCurrency(p.amount)}</td>
                                <td>${formatDate(p.dueDate)}</td>
                                <td>${getDaysRemaining(p.dueDate)}</td>
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
            <div><h2>Üretim Hattı & Stok</h2><p class="text-muted">Cihaz montaj, stok ve kalite kontrol</p></div>
            <div class="flex gap-1"><button class="btn btn-primary" onclick="openModal('product')">${Icons.plus} Ürün Ekle</button></div>
        </div>
        <div class="grid grid-3 mb-2">
            <div class="stat-card"><div class="stat-value">${AppData.products.length}</div><div class="stat-label">Ürün Çeşidi</div></div>
            <div class="stat-card"><div class="stat-value">${AppData.products.reduce((sum, p) => sum + p.stock, 0)}</div><div class="stat-label">Toplam Stok</div></div>
            <div class="stat-card"><div class="stat-value text-success">${formatCurrency(totalStockValue)}</div><div class="stat-label">Stok Değeri</div></div>
        </div>
        <div class="card">
            <div class="card-header"><h3>Ürün Kataloğu</h3></div>
            <div class="table-container">
                <table>
                    <thead><tr><th>ID</th><th>Ürün Adı</th><th>Stok</th><th>Birim Fiyat</th><th>Toplam Değer</th><th>İşlemler</th></tr></thead>
                    <tbody>
                         ${AppData.products.map(p => `
                            <tr>
                                <td>#${p.id}</td><td><strong>${p.name}</strong></td>
                                <td class="${p.stock < 10 ? 'text-danger bold' : 'bold'}">${p.stock} Adet</td>
                                <td>${formatCurrency(p.price)}</td><td class="text-success">${formatCurrency(p.price * p.stock)}</td>
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
            <div><h2>İnsan Kaynakları Yönetimi</h2><p class="text-muted">Personel özlük, izin ve performans takibi</p></div>
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
                                <td>#${e.id}</td><td><strong>${e.name}</strong></td><td>${e.pos}</td><td>${e.dept}</td>
                                <td>${formatCurrency(e.salary)}</td><td>${formatDate(e.start)}</td>
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
            <div><h2>Dijital Onay & Sevkiyat Formları</h2><p class="text-muted">Dijital montaj raporları ve müşteri teslimat onayı</p></div>
             <button class="btn btn-primary" onclick="openModal('service-form')">${Icons.plus} Yeni Teslimat Formu</button>
        </div>
        <div class="grid grid-2">
            <div class="card">
                <div class="card-header"><h3>Son İmzalanan Belgeler</h3></div>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Belge No</th><th>Müşteri / Bayi</th><th>Tarih</th><th>İmza</th><th>Durum</th></tr></thead>
                         <tbody>
                            <tr><td>MONT-2026-001</td><td>Ankara Avize Sarayı</td><td>12.03.2026</td><td><span class="badge badge-success">İmzalandı</span></td><td><button class="btn btn-sm btn-secondary">PDF</button></td></tr>
                             <tr><td>MONT-2026-002</td><td>Özgür İnşaat</td><td>13.03.2026</td><td><span class="badge badge-warning">Bekliyor</span></td><td><button class="btn btn-sm btn-secondary">Gönder</button></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
             <div class="card">
                <div class="card-header"><h3>Hızlı Onay Bekleyenler</h3></div>
                 <div class="flex flex-col gap-1">
                    <div class="card p-2 flex-between" style="border:1px solid var(--border); padding: 16px;">
                         <div><strong>Mağaza Aydınlatma Projesi</strong><br><small class="text-muted">Lüx Aydınlatma İzmir</small></div>
                         <button class="btn btn-success btn-sm">Onayla & İmzala</button>
                    </div>
                     <div class="card p-2 flex-between" style="border:1px solid var(--border); padding: 16px;">
                         <div><strong>Villa Aydınlatma Paketi Onayı</strong><br><small class="text-muted">Özgür İnşaat Projesi</small></div>
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
            <div><h2>Proje Yönetimi</h2><p class="text-muted">Devam eden mimari projeler ve Ar-Ge çalışmaları</p></div>
            <button class="btn btn-primary">${Icons.plus} Yeni Proje</button>
        </div>
        <div class="grid grid-2">
            <div class="card">
                <div class="card-header"><h3>Showroom Aydınlatma V2</h3><span class="badge badge-info">%65 Tamamlandı</span></div>
                <p class="text-muted mb-1">Mağaza içi ray spot ve lineer aydınlatma sistemleri.</p>
                <div style="background:#374151; height:8px; border-radius:4px; overflow:hidden;"><div style="background:var(--primary); width:65%; height:100%;"></div></div>
                <div class="mt-2 text-right"><span class="text-muted">Bitiş: 15.03.2026</span></div>
            </div>
            <div class="card">
                <div class="card-header"><h3>Ankara Plaza Dış Cephe</h3><span class="badge badge-warning">%30 Tamamlandı</span></div>
                <p class="text-muted mb-1">Dış cephe wallwasher and pixel led montajı.</p>
                <div style="background:#374151; height:8px; border-radius:4px; overflow:hidden;"><div style="background:var(--warning); width:30%; height:100%;"></div></div>
                <div class="mt-2 text-right"><span class="text-muted">Bitiş: 20.06.2026</span></div>
            </div>
        </div>
    `;
}

// --- MODULE: MAINTENANCE ---
function renderMaintenance() {
    return `
        <div class="flex-between mb-2">
            <div><h2>Bakım & Onarım</h2><p class="text-muted">Teknik servis operasyonları ve periyodik bakımlar</p></div>
            <div class="flex gap-1"><button class="btn btn-primary">Müdahale Ekle</button><button class="btn btn-secondary">Bakım Planı</button></div>
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
                                    <td>${custName}</td><td>${prodName}</td><td>${m.type}</td><td>Ali Veli</td>
                                    <td>${formatDate(m.nextDate)}</td><td><span class="badge badge-${m.status === 'Yaklaşıyor' ? 'warning' : 'info'}">${m.status}</span></td>
                                </tr>`;
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
                <div style="height:200px; display:flex; align-items:center; justify-content:center; color:var(--text-muted);">[Grafik Alanı: Satışlar Artış Trendinde]</div>
            </div>
            <div class="card">
                <h3>Gider Kalemleri</h3>
                <div style="height:200px; display:flex; align-items:center; justify-content:center; color:var(--text-muted);">[Grafik Alanı: En büyük gider Ar-Ge]</div>
            </div>
        </div>
    `;
}

// --- MODULE: SETTINGS ---
function renderSettings() {
    return `
        <h2>Sistem Ayarları</h2>
        <div class="card mt-1">
            <div class="form-group"><label class="form-label">Firma Adı</label><input type="text" class="form-input" value="RS AYDINLATMA MEDİKAL TEKNOLOJİLERİ"></div>
            <div class="form-group"><label class="form-label">Varsayılan Para Birimi</label><select class="form-select"><option>TRY (₺)</option><option>USD ($)</option><option>EUR (€)</option></select></div>
            <div class="form-group"><label class="form-label">Tema</label><select class="form-select"><option>Koyu (Dark)</option><option>Açık (Light)</option></select></div>
            <button class="btn btn-primary">Kaydet</button>
        </div>
    `;
}

// --- MODULE: GELİR-GİDER & KASA (INCOME/EXPENSE & BANK) ---
function renderIncomeExpense() {
    const totalIncome = AppData.sales.reduce((sum, s) => sum + s.amount, 0) +
        AppData.receivables.filter(r => r.status === 'Tahsil Edildi').reduce((sum, r) => sum + r.amount, 0);
    const totalExpense = AppData.expenses.reduce((sum, e) => sum + e.amount, 0);
    const netProfit = totalIncome - totalExpense;

    return `
        <div class="flex-between mb-2">
            <div>
                <h2>Kasa, Banka ve Nakit Akışı</h2>
                <p class="text-muted">Anlık şirket varlıkları ve gelir/gider dökümü</p>
            </div>
            <div class="flex gap-1">
                <button class="btn btn-secondary" onclick="alert('Kasa/Banka Transferi')">Para Transferi</button>
                <button class="btn btn-success" onclick="openModal('income')">${Icons.plus} Gelir Ekle</button>
                <button class="btn btn-danger" onclick="openModal('expense')">${Icons.plus} Gider Ekle</button>
            </div>
        </div>
        
        <!-- Bank Accounts Section -->
        <h3 class="mb-1" style="font-size: 1rem; color: var(--text-muted); text-transform: uppercase;">Aktif Hesaplar</h3>
        <div class="grid grid-3 mb-2">
            ${AppData.accounts.map(acc => `
                <div class="card" style="border-top: 4px solid var(--${acc.type === 'Kasa' ? 'success' : 'primary'}); position: relative; overflow: hidden;">
                    <div style="position: absolute; right: -20px; top: -20px; opacity: 0.05; font-size: 100px;">
                         ${acc.type === 'Kasa' ? '₺' : '🏦'}
                    </div>
                    <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom: 4px;">${acc.type} Hesabı</div>
                    <h3 class="mb-1" style="font-size: 1.1rem;">${acc.name}</h3>
                    <div class="stat-value ${acc.currency === 'USD' ? 'text-warning' : ''}">${acc.currency === 'USD' ? '$' : '₺'}${acc.balance.toLocaleString('tr-TR')}</div>
                </div>
            `).join('')}
        </div>

        <!-- Cash Flow Stats -->
        <h3 class="mb-1 mt-2" style="font-size: 1rem; color: var(--text-muted); text-transform: uppercase;">Aylık Nakit Akışı</h3>
        <div class="grid grid-3 mb-2">
             <div class="stat-card">
                <div class="stat-value text-success">${formatCurrency(totalIncome)}</div>
                <div class="stat-label">Bu Ay Giren Para</div>
            </div>
             <div class="stat-card">
                <div class="stat-value text-danger">${formatCurrency(totalExpense)}</div>
                <div class="stat-label">Bu Ay Çıkan Para</div>
            </div>
             <div class="stat-card">
                <div class="stat-value ${netProfit >= 0 ? 'text-success' : 'text-danger'}">${formatCurrency(netProfit)}</div>
                <div class="stat-label">Net Fark (Kâr/Zarar)</div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                 <h3>Son Finansal Hareketler (Ekstre)</h3>
            </div>
            <div class="table-container">
                <table>
                    <thead>
                        <tr><th>Tarih</th><th>İşlem Tipi</th><th>Kategori / Açıklama</th><th>Tutar</th><th>Hesap</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>24.12.2025</td>
                            <td><span class="badge badge-success">Tahsilat</span></td>
                            <td>Acıbadem (Sipariş Ödemesi)</td>
                            <td class="bold text-success">+₺125.000,00</td>
                            <td>Garanti BBVA</td>
                        </tr>
                        <tr>
                            <td>23.12.2025</td>
                            <td><span class="badge badge-danger">Gider</span></td>
                            <td>Kira (Ofis Kirası)</td>
                            <td class="bold text-danger">-₺12.000,00</td>
                            <td>Garanti BBVA</td>
                        </tr>
                        <tr>
                            <td>22.12.2025</td>
                            <td><span class="badge badge-danger">Gider</span></td>
                            <td>Personel (Avans - Ahmet Yılmaz)</td>
                            <td class="bold text-danger">-₺5.000,00</td>
                            <td>Merkez Kasa</td>
                        </tr>
                        <tr>
                            <td>20.12.2025</td>
                            <td><span class="badge badge-success">Satış Peşinatı</span></td>
                            <td>Peşin Satış (Klinik)</td>
                            <td class="bold text-success">+₺25.000,00</td>
                            <td>Merkez Kasa</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// --- MODULE: MASRAFLAR (EXPENSES MANAGEMENT) ---
function renderExpenses() {
    return `
         <div class="flex-between mb-2">
            <div><h2>Masraf Yönetimi</h2><p class="text-muted">Personel, operasyon ve proje giderleri</p></div>
             <button class="btn btn-primary">Masraf Formu Onayla</button>
        </div>
        <div class="grid grid-3 mb-2">
            <div class="stat-card"><div class="stat-value">₺12,500</div><div class="stat-label">Bu Ay Yakıt</div></div>
            <div class="stat-card"><div class="stat-value">₺8,200</div><div class="stat-label">Bu Ay Yemek</div></div>
            <div class="stat-card"><div class="stat-value">₺45,000</div><div class="stat-label">Seyahat & Konaklama</div></div>
        </div>
        <div class="card">
            <div class="table-container">
                <table>
                    <thead><tr><th>Personel</th><th>Departman</th><th>Kategori</th><th>Tarih</th><th>Tutar</th><th>Durum</th><th>Belge</th></tr></thead>
                    <tbody>
                        <tr><td>Ahmet Yılmaz</td><td>Satış</td><td>Seyahat</td><td>22.12.2025</td><td class="bold">₺4,500</td><td><span class="badge badge-warning">Onay Bekliyor</span></td><td><button class="btn btn-sm btn-secondary">Görüntüle</button></td></tr>
                        <tr><td>Ayşe Demir</td><td>Teknik</td><td>Ekipman</td><td>20.12.2025</td><td class="bold">₺1,200</td><td><span class="badge badge-success">Onaylandı</span></td><td><button class="btn btn-sm btn-secondary">Görüntüle</button></td></tr>
                        <tr><td>Canan Dağ</td><td>Yönetim</td><td>Temsil Ağırlama</td><td>18.12.2025</td><td class="bold">₺8,500</td><td><span class="badge badge-success">Onaylandı</span></td><td><button class="btn btn-sm btn-secondary">Görüntüle</button></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// --- MODULE: CUSTOMERS ---
function renderCustomers() {
    return `
        <div class="flex-between mb-2">
            <div>
                <h2>Müşteri & Bayi Yönetimi</h2>
                <p class="text-muted">Klinik, inşaat firması ve kurumsal bayi veritabanı</p>
            </div>
            <button class="btn btn-primary" onclick="showAddCustomerModal()">+ Yeni Bayi/Müşteri Ekle</button>
        </div>

        <div class="grid grid-3 mb-2">
            <div class="stat-card">
                <div class="stat-value text-primary">${AppData.customers.length}</div>
                <div class="stat-label">Toplam Kayıtlı Müşteri</div>
            </div>
            <div class="stat-card">
                <div class="stat-value text-success">${AppData.customers.filter(c => c.type === 'Bayi').length}</div>
                <div class="stat-label">Aktif Bayiler</div>
            </div>
            <div class="stat-card">
                <div class="stat-value text-info">${AppData.customers.filter(c => c.type === 'Proje').length}</div>
                <div class="stat-label">Aktif Projeler (İnşaat)</div>
            </div>
        </div>

        <div class="card p-0">
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Firma Adı</th>
                        <th>Şehir</th>
                        <th>Tür</th>
                        <th>Yetkili</th>
                        <th>İletişim</th>
                        <th>İşlem</th>
                    </tr>
                </thead>
                <tbody>
                    ${AppData.customers.map(c => `
                        <tr>
                            <td>#${c.id}</td>
                            <td><span class="bold">${c.name}</span></td>
                            <td>${c.city}</td>
                            <td><span class="badge ${c.type === 'Bayi' ? 'badge-success' : 'badge-info'}">${c.type}</span></td>
                            <td>${c.contact}</td>
                            <td>${c.phone}</td>
                            <td>
                                <button class="btn btn-sm btn-secondary">Düzenle</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// --- MODULE: INVOICES ---
function renderInvoices() {
    const totalReceivables = AppData.receivables.filter(r => r.status === 'Bekliyor' || r.status === 'Gecikti').reduce((sum, r) => sum + r.amount, 0);

    return `
        <div class="flex-between mb-2">
            <div>
                <h2>Tahsilatlar ve Faturalar</h2>
                <p class="text-muted">Müşteri alacakları ve açık faturalar</p>
            </div>
            <button class="btn btn-primary">${Icons.plus} Yeni Fatura Kes</button>
        </div>
        
        <div class="grid grid-3 mb-2">
            <div class="stat-card">
                <div class="stat-value text-warning">${formatCurrency(totalReceivables)}</div>
                <div class="stat-label">Açık Alacaklar</div>
            </div>
            <div class="stat-card">
                <div class="stat-value text-danger">${AppData.receivables.filter(r => r.status === 'Gecikti').length}</div>
                <div class="stat-label">Geciken Tahsilat</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${AppData.receivables.length}</div>
                <div class="stat-label">Toplam Fatura</div>
            </div>
        </div>

        <div class="card">
            <div class="table-container">
                <table>
                    <thead><tr><th>Fatura No</th><th>Cari / Müşteri</th><th>Vade Tarihi</th><th>Kalan Gün</th><th>Tutar</th><th>Durum</th><th>İşlemler</th></tr></thead>
                    <tbody>
                         ${AppData.receivables.map(r => `
                            <tr>
                                <td><strong>${r.ref}</strong></td>
                                <td>${getCustomerName(r.customerId)}</td>
                                <td>${formatDate(r.dueDate)}</td>
                                <td>${getDaysRemaining(r.dueDate)}</td>
                                <td class="bold">${formatCurrency(r.amount)}</td>
                                <td><span class="badge badge-${r.status === 'Tahsil Edildi' ? 'success' : (r.status === 'Gecikti' ? 'danger' : 'warning')}">${r.status}</span></td>
                                <td>
                                    <button class="btn btn-secondary btn-sm">PDF</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
`;
}
