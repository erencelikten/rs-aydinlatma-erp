// RS Aydınlatma ERP - Premium Mobile Edition

// --- CENTRAL DATA STORE ---
const AppData = {
    salesTarget: 1500000,
    metrics: {
        totalRevenue: 1250500,
        totalOrders: 20,
        totalStock: 300,
        totalExpenses: 250500,
        totalReceivables: 34000
    },
    recentTransactions: [
        { id: 1, type: 'income', title: 'Toplam Ciro', desc: 'Senem', amount: 1250500, date: '25.09.2024' },
        { id: 2, type: 'expense', title: 'Toplam Ciro', desc: 'Kenan', amount: 1250500, date: '25.09.2024' },
        { id: 3, type: 'expense', title: 'Toplam Ciro', desc: '', amount: 300000, date: '24.09.2024' }
    ],
    weeklyStats: {
        totalIncome: 142850.75,
        totalExpense: 56400.20,
        netProfit: 86450.55,
        dateRange: '12 - 18 EYLÜL 2023',
        chartData: [
            { day: 'Pzt', value: 18500, height: 30 },
            { day: 'Sal', value: 24000, height: 40 },
            { day: 'Çar', value: 32800, height: 55 },
            { day: 'Per', value: 48500, height: 80 },
            { day: 'Cum', value: 58200, height: 100, isHighlight: true },
            { day: 'Cmt', value: 37200, height: 60 },
            { day: 'Pzr', value: 14000, height: 25 }
        ],
        details: {
            income: { total: 230500, item1: 'Hizmet Satışları:', val1: 155000, item2: 'Ürün Satışları:', val2: 75500 },
            expense: { total: 115300, item1: 'Personel:', val1: 65000, item2: 'Lojistik:', val2: 28000 },
            summary: { total: 65200, item1: 'Vergiler:', val1: 35200, item2: 'Diğer:', val2: 30000 }
        }
    },
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
        { id: 3, customerId: 3, total: 18500, date: '2026-03-15', status: 'Onaylandı', type: 'Toptan' }
    ],
    payables: [
        { id: 1, supplier: 'Anadolu Cam Ltd.', amount: 45000, dueDate: '2026-03-25', status: 'Kritik', type: 'Hammadde' },
        { id: 2, supplier: 'Hızlı Kargo Lojistik', amount: 12000, dueDate: '2026-04-05', status: 'Bekliyor', type: 'Lojistik' }
    ],
    employees: [
        { id: 101, name: 'Ahmet Karadağ', dept: 'Üretim', pos: 'Üretim Müdürü', status: 'Aktif', salary: 65000 },
        { id: 102, name: 'Ayşe Demir', dept: 'Tasarım', pos: 'Endüstriyel Tasarımcı', status: 'Aktif', salary: 55000 }
    ]
};

// --- CORE FUNCTIONS ---
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    loadPage('dashboard');
}

function formatCurrency(amount) {
    return '₺' + amount.toLocaleString('tr-TR', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

// --- NAVIGATION ---
function mobileNav(page) {
    // Update bottom nav active state
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.page === page) {
            btn.classList.add('active');
        }
    });

    loadPage(page);
    feather.replace(); // Refresh icons
}

function loadPage(page) {
    const content = document.getElementById('mainContent');
    let html = '';

    switch (page) {
        case 'dashboard':
            html = renderDashboard();
            break;
        case 'stats':
            html = renderStats();
            break;
        case 'operations':
            html = renderModulesMenu();
            break;
        case 'satis':
            html = renderSales();
            break;
        case 'add-sale':
            html = renderAddSale();
            break;
        case 'satin-alma':
            html = renderPurchasing();
            break;
        case 'uretim':
            html = renderProduction();
            break;
        case 'finans':
            html = renderFinance();
            break;
        case 'musteriler':
            html = renderCustomers();
            break;
        case 'add-customer':
            html = renderAddCustomer();
            break;
        case 'personel':
            html = renderHR();
            break;
        case 'add-employee':
            html = renderAddEmployee();
            break;
        case 'employee-detail':
            html = renderEmployeeDetail(window._selectedEmployeeId);
            break;
        case 'settings':
            html = renderSettings();
            break;
        case 'sentos':
            html = renderSentos();
            break;
        default:
            html = `
                <div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:60vh; color:var(--text-tertiary); gap:16px;">
                    <i data-feather="clock" style="width:48px; height:48px; opacity:0.5;"></i>
                    <div style="font-size:1.2rem; font-weight:600;">Modül Hazırlanıyor</div>
                    <p style="font-size:0.85rem; text-align:center;">Bu Premium modül çok yakında aktif olacak.</p>
                </div>
            `;
    }
    content.innerHTML = html;
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- RENDER DİNAMİK EKRANLAR ---

// 1. DASHBOARD (Referans 1)
function renderDashboard() {
    const targetPct = Math.round((AppData.metrics.totalRevenue / AppData.salesTarget) * 100);
    const sparkData = [18500, 24000, 32800, 48500, 58200, 37200, 14000];
    const sparkMax = Math.max(...sparkData);
    const sparkH = 60; // px height
    
    // SVG Sparkline path
    const pts = sparkData.map((v, i) => {
        const x = (i / (sparkData.length - 1)) * 200;
        const y = sparkH - (v / sparkMax) * sparkH;
        return `${x},${y}`;
    }).join(' ');
    const areaPath = `M0,${sparkH} L${sparkData.map((v,i)=>`${(i/(sparkData.length-1))*200},${sparkH - (v/sparkMax)*sparkH}`).join(' L')} L200,${sparkH} Z`;
    
    return `
        <!-- HERO CARD (TOPLAM CİRO) -->
        <div class="hero-card">
            <div class="hero-label">TOPLAM CİRO</div>
            <div class="hero-amount">${formatCurrency(AppData.metrics.totalRevenue)}</div>
            <div style="color:rgba(255,255,255,0.7); font-size:0.75rem; margin-top:8px; display:flex; align-items:center; gap:6px;">
                <i data-feather="trending-up" style="width:14px; height:14px; color:var(--green-neon);"></i>
                <span>Geçen aya göre <strong style="color:var(--green-neon);">+12.4%</strong></span>
            </div>

            <!-- HEDEF PROGRESS BAR -->
            <div style="margin-top:20px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <span style="font-size:0.7rem; font-weight:600; color:rgba(255,255,255,0.6);">SATIŞ HEDEFİ</span>
                    <span style="font-size:0.75rem; font-weight:800; color:#fff;">${targetPct}%</span>
                </div>
                <div style="width:100%; height:6px; background:rgba(255,255,255,0.1); border-radius:100px; overflow:hidden;">
                    <div style="width:${targetPct}%; height:100%; background:linear-gradient(90deg,var(--green-neon),rgba(182,233,43,0.6)); border-radius:100px; transition:width 1s ease;"></div>
                </div>
                <div style="font-size:0.65rem; color:rgba(255,255,255,0.5); margin-top:6px;">Hedef: ${formatCurrency(AppData.salesTarget)}</div>
            </div>
        </div>

        <!-- 4'LÜ METRİK GRID -->
        <div class="metrics-grid mt-2">
            <div class="metric-card" onclick="mobileNav('satis')">
                <i data-feather="shopping-cart" class="metric-icon-wrapper"></i>
                <div>
                    <div class="metric-title">Siparişler</div>
                    <div class="metric-value">${AppData.metrics.totalOrders}</div>
                </div>
                <i data-feather="chevron-right" class="nav-arrow"></i>
            </div>
            <div class="metric-card" onclick="mobileNav('uretim')">
                <i data-feather="package" class="metric-icon-wrapper"></i>
                <div>
                    <div class="metric-title">Stok</div>
                    <div class="metric-value">${AppData.metrics.totalStock}</div>
                </div>
                <i data-feather="chevron-right" class="nav-arrow"></i>
            </div>
            <div class="metric-card" onclick="mobileNav('finans')">
                <i data-feather="dollar-sign" class="metric-icon-wrapper"></i>
                <div>
                    <div class="metric-title">Gider</div>
                    <div class="metric-value">${formatCurrency(AppData.metrics.totalExpenses)}</div>
                </div>
                <i data-feather="chevron-right" class="nav-arrow" style="color:var(--red-neon)"></i>
            </div>
            <div class="metric-card" onclick="mobileNav('musteriler')">
                <i data-feather="credit-card" class="metric-icon-wrapper"></i>
                <div>
                    <div class="metric-title">Alacaklar</div>
                    <div class="metric-value">${formatCurrency(AppData.metrics.totalReceivables)}</div>
                </div>
                <i data-feather="chevron-right" class="nav-arrow" style="color:var(--orange-neon)"></i>
            </div>
        </div>

        <!-- SPARKLİNE GRAFİK KARTI -->
        <div class="hero-card mt-2" style="background:var(--bg-surface); border:1px solid var(--border-light); padding:20px 20px 12px;">
            <div class="flex-between mb-2">
                <div>
                    <div style="font-size:0.7rem; font-weight:600; color:var(--text-tertiary); letter-spacing:0.06em;">HAFTALIK AKTİVİTE</div>
                    <div style="font-size:1.15rem; font-weight:800; color:#fff; margin-top:2px;">${formatCurrency(58200)} <span style="font-size:0.75rem; color:var(--green-neon); font-weight:600;">En Yüksek</span></div>
                </div>
                <span class="badge badge-success">+12.4%</span>
            </div>
            <!-- SVG Sparkline -->
            <svg viewBox="0 0 200 ${sparkH}" style="width:100%; height:${sparkH}px; overflow:visible; display:block; margin-top:8px;">
                <defs>
                    <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="var(--green-neon)" stop-opacity="0.3"/>
                        <stop offset="100%" stop-color="var(--green-neon)" stop-opacity="0"/>
                    </linearGradient>
                </defs>
                <!-- Area fill -->
                <path d="${areaPath}" fill="url(#sparkGrad)"/>
                <!-- Line -->
                <polyline points="${pts}" fill="none" stroke="var(--green-neon)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <!-- Peak dot -->
                <circle cx="${(sparkData.indexOf(sparkMax)/(sparkData.length-1))*200}" cy="${sparkH - (sparkMax/sparkMax)*sparkH}" r="4" fill="var(--green-neon)" filter="drop-shadow(0 0 6px var(--green-neon))"/>
            </svg>
            <!-- Gün etiketleri -->
            <div style="display:flex; justify-content:space-between; margin-top:8px; padding:0 2px;">
                ${['Pzt','Sal','Çar','Per','Cum','Cmt','Pzr'].map(d=>`<span style="font-size:0.6rem; color:var(--text-tertiary); font-weight:600;">${d}</span>`).join('')}
            </div>
        </div>

        <!-- GELİR / GİDER KARŞILAŞTIRMA BARLARI -->
        <div class="mt-2">
            <div class="flex-between mb-2" style="padding: 0 4px;">
                <span class="section-title" style="margin:0;">GELİR vs GİDER</span>
                <span style="font-size:0.7rem; color:var(--text-tertiary); font-weight:500;">Bu Ay</span>
            </div>
            <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-md); padding:16px 20px; display:flex; flex-direction:column; gap:16px;">
                <!-- Gelir Bar -->
                <div>
                    <div class="flex-between mb-1">
                        <span style="font-size:0.8rem; font-weight:600; color:var(--green-neon);">Gelir</span>
                        <span style="font-size:0.8rem; font-weight:700; color:#fff;">${formatCurrency(AppData.weeklyStats.totalIncome)}</span>
                    </div>
                    <div style="width:100%; height:8px; background:var(--bg-surface-elevated); border-radius:100px; overflow:hidden;">
                        <div style="width:72%; height:100%; background:var(--green-neon); border-radius:100px;"></div>
                    </div>
                </div>
                <!-- Gider Bar -->
                <div>
                    <div class="flex-between mb-1">
                        <span style="font-size:0.8rem; font-weight:600; color:var(--red-neon);">Gider</span>
                        <span style="font-size:0.8rem; font-weight:700; color:#fff;">${formatCurrency(AppData.weeklyStats.totalExpense)}</span>
                    </div>
                    <div style="width:100%; height:8px; background:var(--bg-surface-elevated); border-radius:100px; overflow:hidden;">
                        <div style="width:28%; height:100%; background:var(--red-neon); border-radius:100px;"></div>
                    </div>
                </div>
                <!-- Net -->
                <div style="padding-top:12px; border-top:1px solid var(--border-light); display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:0.8rem; color:var(--text-secondary); font-weight:600;">Net Kâr</span>
                    <span style="font-size:1.1rem; font-weight:800; color:var(--green-neon);">${formatCurrency(AppData.weeklyStats.netProfit)}</span>
                </div>
            </div>
        </div>

        <!-- HIZLI ERİŞİM BUTONLARI -->
        <div class="mt-2">
            <div class="section-title mb-2" style="padding:0 4px;">HIZLI ERİŞİM</div>
            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px;">
                ${[
                    { icon:'shopping-bag', label:'Satış', page:'satis', color:'var(--blue-neon)', bg:'rgba(10,132,255,0.1)' },
                    { icon:'users', label:'Müşteri', page:'musteriler', color:'var(--orange-neon)', bg:'rgba(255,159,10,0.1)' },
                    { icon:'tool', label:'Üretim', page:'uretim', color:'var(--green-neon)', bg:'rgba(50,215,75,0.1)' },
                    { icon:'user-check', label:'Personel', page:'personel', color:'#a78bfa', bg:'rgba(167,139,250,0.1)' }
                ].map(item => `
                    <div onclick="mobileNav('${item.page}')" style="background:${item.bg}; border:1px solid ${item.color}22; border-radius:16px; padding:16px 8px; display:flex; flex-direction:column; align-items:center; gap:10px; cursor:pointer; transition:all 0.2s;">
                        <div style="width:40px; height:40px; border-radius:12px; background:${item.color}22; display:flex; align-items:center; justify-content:center; color:${item.color};">
                            <i data-feather="${item.icon}" style="width:20px; height:20px;"></i>
                        </div>
                        <span style="font-size:0.7rem; font-weight:700; color:${item.color}; text-align:center;">${item.label}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- SON İŞLEMLER -->
        <div class="mt-2 flex-between mb-1" style="padding: 0 4px;">
            <span class="section-title" style="margin:0;">SON İŞLEMLER</span>
            <span style="font-size:0.75rem; color:var(--blue-neon); font-weight:600; cursor:pointer;" onclick="mobileNav('satis')">Tümünü Gör</span>
        </div>
        
        <div class="transaction-list mb-4">
            ${AppData.recentTransactions.map(tx => `
                <div class="transaction-item">
                    <div class="tx-left">
                        <div class="tx-icon ${tx.type === 'income' ? 'income' : 'expense'}">
                            <i data-feather="${tx.type === 'income' ? 'arrow-up-right' : 'arrow-down-right'}"></i>
                        </div>
                        <div class="tx-details">
                            <span class="tx-title">${tx.title}</span>
                            <span class="tx-subtitle">${tx.desc || 'RS Aydınlatma'}</span>
                        </div>
                    </div>
                    <div class="tx-right">
                        <span class="tx-amount ${tx.type === 'income' ? 'text-green' : 'text-red'}">
                            ${tx.type === 'income' ? '+' : '-'}${formatCurrency(tx.amount)}
                        </span>
                        <span class="tx-subtitle">${tx.date}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// 2. İSTATİSTİK (Referans 2)
function renderStats() {
    const s = AppData.weeklyStats;
    
    // Bar Chart HTML Generation
    // Bars are strictly styled via inline heights corresponding to their mocked relative value.
    const barsHtml = s.chartData.map(data => `
        <div style="display:flex; flex-direction:column; align-items:center; flex:1; justify-content:flex-end; gap:8px;">
            ${data.isHighlight ? 
                `<span style="color:var(--green-neon); font-size:0.6rem; font-weight:700;">₺${(data.value/1000).toFixed(1)}K</span>` : 
                `<span style="color:var(--text-tertiary); font-size:0.6rem; font-weight:600;">₺${(data.value/1000).toFixed(1)}K</span>`
            }
            <div style="width:100%; max-width:24px; border-radius:6px; background:${data.isHighlight ? 'var(--green-neon)' : 'var(--bg-surface-elevated)'}; height:${data.height}px; box-shadow:${data.isHighlight ? '0 0 15px var(--green-glow)' : 'none'}; transition:all 0.3s ease;"></div>
            <span style="color:var(--text-tertiary); font-size:0.65rem; font-weight:500;">${data.day}</span>
        </div>
    `).join('');

    return `
        <!-- HAFTALIK BİLANÇO HEADER CARD -->
        <div class="hero-card" style="padding: 24px;">
            <div class="flex-between mb-2">
                <h2 style="font-size:1.1rem; font-weight:800; letter-spacing:0.02em; color:#fff;">HAFTALIK BİLANÇO</h2>
                <i data-feather="bar-chart-2" style="color:rgba(255,255,255,0.8);"></i>
            </div>
            
            <div style="display:flex; justify-content:space-between; margin-bottom:16px;">
                <!-- Toplam Hasılat -->
                <div style="display:flex; flex-direction:column; gap:4px;">
                    <span style="font-size:0.65rem; font-weight:600; color:rgba(255,255,255,0.7);">TOPLAM HASILAT</span>
                    <span style="font-size:1.1rem; font-weight:700; color:#fff;">${formatCurrency(s.totalIncome)}</span>
                </div>
                <!-- Harcamalar -->
                <div style="display:flex; flex-direction:column; gap:4px;">
                    <span style="font-size:0.65rem; font-weight:600; color:rgba(255,255,255,0.7);">HARCAMALAR</span>
                    <span style="font-size:1.1rem; font-weight:700; color:#fff;">${formatCurrency(s.totalExpense)}</span>
                </div>
                <!-- Net Kâr -->
                <div style="display:flex; flex-direction:column; gap:4px;">
                    <span style="font-size:0.65rem; font-weight:600; color:rgba(255,255,255,0.7);">NET KÂR</span>
                    <span style="font-size:1.1rem; font-weight:700; color:#fff;">${formatCurrency(s.netProfit)}</span>
                </div>
            </div>

            <div style="display:flex; align-items:center; gap:8px; font-size:0.75rem; color:rgba(255,255,255,0.7); font-weight:500;">
                <i data-feather="calendar" style="width:14px; height:14px;"></i>
                <span>${s.dateRange}</span>
            </div>
        </div>

        <!-- YATAY ÇİZGİLİ MODERN BAR CHART ALANI -->
        <div class="section-title mt-2 mb-1">HAFTALIK PERFORMANS</div>
        
        <!-- Y Axis Lines in background -->
        <div style="position:relative; width:100%; height:180px; margin-bottom:24px;">
            <!-- Çizgiler -->
            <div style="position:absolute; top:0; left:0; right:0; bottom:20px; display:flex; flex-direction:column; justify-content:space-between; z-index:1;">
                ${[60, 50, 40, 30, 20, 10, 0].map(val => `
                    <div style="display:flex; align-items:center; width:100%;">
                        <span style="width:24px; font-size:0.6rem; color:var(--text-tertiary); font-weight:600; text-align:right; margin-right:8px;">${val}K</span>
                        <div style="flex:1; height:1px; background:var(--border-light);"></div>
                    </div>
                `).join('')}
            </div>

            <!-- Barlar -->
            <div style="position:absolute; top:0; left:32px; right:0; bottom:0; display:flex; align-items:flex-end; justify-content:space-between; z-index:2; padding-top:10px;">
                ${barsHtml}
            </div>
        </div>

        <!-- 3'LÜ DETAY KARTLARI (Mockuptaki alt bölüm) -->
        <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; padding-bottom:32px;">
            
            <!-- Gelir -->
            <div class="metric-card" style="padding:12px; gap:8px; border-radius:14px;">
                <div style="width:28px; height:28px; border-radius:8px; background:rgba(182, 233, 43, 0.1); color:#B6E92B; display:flex; align-items:center; justify-content:center;">
                    <i data-feather="pie-chart" style="width:14px; height:14px;"></i>
                </div>
                <div>
                    <div style="font-size:0.65rem; font-weight:700; color:var(--text-secondary); line-height:1.2; height:24px;">AYLIK GELİR<br>DAĞILIMI</div>
                    <div style="font-size:0.9rem; font-weight:700; color:var(--text-primary); margin-top:4px; margin-bottom:8px;">Total: ₺230.500</div>
                    
                    <div style="display:flex; flex-direction:column; gap:6px;">
                        <div>
                            <span style="font-size:0.6rem; color:var(--text-tertiary);">Hizmet Satışları:</span><br>
                            <span style="font-size:0.7rem; font-weight:600; color:var(--text-secondary);">₺155.000</span>
                        </div>
                        <div>
                            <span style="font-size:0.6rem; color:var(--text-tertiary);">Ürün Satışları:</span><br>
                            <span style="font-size:0.7rem; font-weight:600; color:var(--text-secondary);">₺75.500</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Gider Kategorileri -->
            <div class="metric-card" style="padding:12px; gap:8px; border-radius:14px;">
                <div style="width:28px; height:28px; border-radius:8px; background:rgba(255, 107, 107, 0.1); color:var(--red-neon); display:flex; align-items:center; justify-content:center;">
                    <i data-feather="pie-chart" style="width:14px; height:14px;"></i>
                </div>
                <div>
                    <div style="font-size:0.65rem; font-weight:700; color:var(--text-secondary); line-height:1.2; height:24px;">HARCAMA<br>KATEGORİLERİ</div>
                    <div style="font-size:0.9rem; font-weight:700; color:var(--text-primary); margin-top:4px; margin-bottom:8px;">Total: ₺115.300</div>
                    
                    <div style="display:flex; flex-direction:column; gap:6px;">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-size:0.65rem; color:var(--text-tertiary);">Personel:</span>
                            <span style="font-size:0.7rem; font-weight:600; color:var(--text-secondary);">₺65.000</span>
                        </div>
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-size:0.65rem; color:var(--text-tertiary);">Lojistik:</span>
                            <span style="font-size:0.7rem; font-weight:600; color:var(--text-secondary);">₺28.000</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- İşletme Özeti -->
            <div class="metric-card" style="padding:12px; gap:8px; border-radius:14px;">
                <div style="width:28px; height:28px; border-radius:8px; background:rgba(71, 156, 255, 0.1); color:var(--blue-neon); display:flex; align-items:center; justify-content:center;">
                    <i data-feather="briefcase" style="width:14px; height:14px;"></i>
                </div>
                <div>
                    <div style="font-size:0.65rem; font-weight:700; color:var(--text-secondary); line-height:1.2; height:24px;">İŞLETME<br>ÖZETİ</div>
                    <div style="font-size:0.9rem; font-weight:700; color:var(--text-primary); margin-top:4px; margin-bottom:8px;">Total: ₺65.200</div>
                    
                    <div style="display:flex; flex-direction:column; gap:6px;">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-size:0.65rem; color:var(--text-tertiary);">Vergiler:</span>
                            <span style="font-size:0.7rem; font-weight:600; color:var(--text-secondary);">₺35.200</span>
                        </div>
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-size:0.65rem; color:var(--text-tertiary);">Diğer:</span>
                            <span style="font-size:0.7rem; font-weight:600; color:var(--text-secondary);">₺30.000</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    `;
}

// 3. TÜM MODÜLLER (Menü / Operasyonlar)
function renderModulesMenu() {
    return `
        <div class="page-title">Sistem Modülleri</div>
        
        <div class="module-group">
            <h3 class="section-title">Satış & Pazarlama</h3>
            <div class="module-list">
                <div class="module-item" onclick="mobileNav('satis')">
                    <div class="module-left">
                        <div class="module-icon"><i data-feather="shopping-bag"></i></div>
                        <div class="module-info">
                            <span class="module-title">Satış Yönetimi</span>
                            <span class="module-desc">Siparişler, faturalar ve teklifler</span>
                        </div>
                    </div>
                    <i data-feather="chevron-right" class="module-arrow"></i>
                </div>
                <!-- Müşteriler -->
                <div class="module-item" onclick="mobileNav('musteriler')">
                    <div class="module-left">
                        <div class="module-icon"><i data-feather="users"></i></div>
                        <div class="module-info">
                            <span class="module-title">Müşteriler & Cari</span>
                            <span class="module-desc">Firma bilgileri ve yetkili rehberi</span>
                        </div>
                    </div>
                    <i data-feather="chevron-right" class="module-arrow"></i>
                </div>
            </div>
        </div>
        
        <div class="module-group">
            <h3 class="section-title">Finans & Muhasebe</h3>
            <div class="module-list">
                <div class="module-item" onclick="mobileNav('finans')">
                    <div class="module-left">
                        <div class="module-icon" style="color:var(--blue-neon);"><i data-feather="pie-chart"></i></div>
                        <div class="module-info">
                            <span class="module-title">Kasa & Banka</span>
                            <span class="module-desc">Nakit akışı ve hesap durumları</span>
                        </div>
                    </div>
                    <i data-feather="chevron-right" class="module-arrow"></i>
                </div>
            </div>
        </div>

        <div class="module-group">
            <h3 class="section-title">Tedarik & Üretim</h3>
            <div class="module-list">
                <div class="module-item" onclick="mobileNav('uretim')">
                    <div class="module-left">
                        <div class="module-icon" style="color:var(--orange-neon);"><i data-feather="tool"></i></div>
                        <div class="module-info">
                            <span class="module-title">Üretim & Stok</span>
                            <span class="module-desc">Ürün deposu ve üretim bandı</span>
                        </div>
                    </div>
                    <i data-feather="chevron-right" class="module-arrow"></i>
                </div>
                <div class="module-item" onclick="mobileNav('satin-alma')">
                    <div class="module-left">
                        <div class="module-icon"><i data-feather="truck"></i></div>
                        <div class="module-info">
                            <span class="module-title">Satın Alma</span>
                            <span class="module-desc">Tedarikçi ödemeleri ve hammaddeler</span>
                        </div>
                    </div>
                    <i data-feather="chevron-right" class="module-arrow"></i>
                </div>
            </div>
        </div>

        <div class="module-group">
            <h3 class="section-title">Entegrasyonlar</h3>
            <div class="module-list">
                <div class="module-item" onclick="mobileNav('sentos')">
                    <div class="module-left">
                        <div class="module-icon" style="color:var(--blue-neon);"><i data-feather="repeat"></i></div>
                        <div class="module-info">
                            <span class="module-title">Sentos (Pazaryeri)</span>
                            <span class="module-desc">Trendyol, Hepsiburada, Amazon Senk.</span>
                        </div>
                    </div>
                    <i data-feather="chevron-right" class="module-arrow"></i>
                </div>
            </div>
        </div>
    `;
}

// 6. SENTOS ENTEGRASYONU
function renderSentos() {
    const s = SentosService.settings;
    return `
        <div class="flex-between mb-4">
            <button onclick="mobileNav('operations')" style="background:none; border:none; color:var(--text-secondary); cursor:pointer; display:flex; align-items:center; gap:8px; font-size:0.95rem;">
                <i data-feather="arrow-left" style="width:20px;"></i> Geri
            </button>
            <div class="page-title" style="margin-bottom:0; font-size:1.2rem;">Sentos Entegrasyonu</div>
        </div>

        <div class="hero-card mb-3" style="background:var(--bg-surface-elevated); border:1px solid var(--border-light);">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
                <div style="width:40px; height:40px; border-radius:12px; background:rgba(10,132,255,0.1); color:var(--blue-neon); display:flex; align-items:center; justify-content:center;">
                    <i data-feather="refresh-cw"></i>
                </div>
                <div>
                    <div style="font-size:0.9rem; font-weight:700; color:#fff;">Otomatik Senkronizasyon</div>
                    <div style="font-size:0.75rem; color:var(--text-tertiary);">Durum: <span style="color:${s.status === 'active' ? 'var(--green-neon)' : 'var(--red-neon)'}; font-weight:800;">${s.status === 'active' ? 'AKTİF' : 'PASİF'}</span></div>
                </div>
            </div>
            
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                <button class="btn btn-outline" style="font-size:0.8rem; padding:12px;" onclick="syncSentos('products')">
                    <i data-feather="upload-cloud" style="width:14px; margin-right:6px;"></i> Stok Gönder
                </button>
                <button class="btn btn-outline" style="font-size:0.8rem; padding:12px;" onclick="syncSentos('orders')">
                    <i data-feather="download-cloud" style="width:14px; margin-right:6px;"></i> Sipariş Çek
                </button>
            </div>
        </div>

        <div class="section-title mb-2">API AYARLARI</div>
        <div class="form-group">
            <label class="form-label">Sentos API Key</label>
            <input id="sentos_key" class="form-input" type="password" value="${s.apiKey}" placeholder="API anahtarınızı girin">
        </div>
        <div class="form-group">
            <label class="form-label">Sentos API Secret</label>
            <input id="sentos_secret" class="form-input" type="password" value="${s.apiSecret}" placeholder="API şifrenizi girin">
        </div>
        <div class="form-group">
            <label class="form-label">Entegrasyon Durumu</label>
            <select id="sentos_status" class="form-select">
                <option value="passive" ${s.status === 'passive' ? 'selected' : ''}>Pasif</option>
                <option value="active" ${s.status === 'active' ? 'selected' : ''}>Aktif</option>
            </select>
        </div>
        
        <button class="btn btn-primary" onclick="saveSentosSettings()">
            <i data-feather="save" style="width:18px; margin-right:8px;"></i> Ayarları Kaydet
        </button>

        <div id="sentos_log" style="margin-top:24px; display:none;">
            <div class="section-title mb-2">İŞLEM GÜNLÜĞÜ</div>
            <div style="background:#000; border-radius:12px; padding:16px; font-family:monospace; font-size:0.75rem; color:#0f0; max-height:150px; overflow-y:auto;">
                <div id="log_content"></div>
            </div>
        </div>
    `;
}

function saveSentosSettings() {
    const key = document.getElementById('sentos_key').value;
    const secret = document.getElementById('sentos_secret').value;
    const status = document.getElementById('sentos_status').value;
    
    SentosService.saveSettings(key, secret, status);
    showToast('Sentos ayarları başarıyla kaydedildi!');
    loadPage('sentos');
    feather.replace();
}

async function syncSentos(type) {
    const log = document.getElementById('sentos_log');
    const content = document.getElementById('log_content');
    log.style.display = 'block';
    
    if (type === 'products') {
        content.innerHTML += `<div>[${new Date().toLocaleTimeString()}] Stok senkronizasyonu başlatıldı...</div>`;
        const res = await SentosService.syncProducts();
        content.innerHTML += `<div>[${new Date().toLocaleTimeString()}] Başarılı: ${res.count} ürün Sentos'a aktarıldı.</div>`;
    } else {
        content.innerHTML += `<div>[${new Date().toLocaleTimeString()}] Siparişler kontrol ediliyor...</div>`;
        const res = await SentosService.fetchOrders();
        res.orders.forEach(o => {
            content.innerHTML += `<div>[${new Date().toLocaleTimeString()}] YENİ: ${o.id} (${o.platform}) - ${formatCurrency(o.total)}</div>`;
        });
        content.innerHTML += `<div>[${new Date().toLocaleTimeString()}] Toplam ${res.orders.length} yeni sipariş alındı.</div>`;
    }
    content.scrollTop = content.scrollHeight;
    showToast('Senkronizasyon tamamlandı!');
}

// 4. SATIŞ YÖNETİMİ
function renderSales() {
    return `
        <div class="page-title">Satış Yönetimi</div>
        
        <div class="flex-between mb-3">
            <div class="form-input" style="padding:12px 16px; margin:0; flex:1; display:flex; gap:12px; align-items:center;">
                <i data-feather="search" style="color:var(--text-tertiary); width:18px;"></i>
                <input type="text" placeholder="Sipariş No veya Müşteri Ara" style="background:transparent; border:none; color:#fff; outline:none; width:100%; font-size:0.9rem;">
            </div>
            <button class="btn btn-primary" onclick="mobileNav('add-sale')" style="width:auto; padding:12px 16px; margin-left:12px; border-radius:12px;">
                <i data-feather="plus" style="width:20px;"></i>
            </button>
        </div>

        <div class="transaction-list mb-4">
            ${AppData.sales.map(s => `
                <div class="transaction-item" style="cursor:pointer;">
                    <div class="tx-left">
                        <div class="tx-icon income">
                            <i data-feather="file-text"></i>
                        </div>
                        <div class="tx-details">
                            <span class="tx-title">${getCustomerName(s.customerId)}</span>
                            <span class="tx-subtitle">${s.date} &bull; ${s.type}</span>
                        </div>
                    </div>
                    <div class="tx-right text-right">
                        <span class="tx-amount text-primary">
                            ${formatCurrency(s.total)}
                        </span>
                        <div style="margin-top:6px;">
                            <span class="badge ${s.status === 'Onaylandı' ? 'badge-success' : 'badge-warning'}">${s.status}</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// SATIŞ EKLE FORMU
function renderAddSale() {
    const customerOptions = AppData.customers.map(c =>
        `<option value="${c.id}">${c.name}</option>`
    ).join('');
    return `
        <div class="flex-between mb-4">
            <button onclick="mobileNav('satis')" style="background:none; border:none; color:var(--text-secondary); cursor:pointer; display:flex; align-items:center; gap:8px; font-size:0.95rem;">
                <i data-feather="arrow-left" style="width:20px;"></i> Geri
            </button>
            <div class="page-title" style="margin-bottom:0; font-size:1.2rem;">Yeni Sipariş</div>
        </div>

        <div class="form-group">
            <label class="form-label">Müşteri</label>
            <select id="s_customer" class="form-select">
                <option value="">Müşteri seçin...</option>
                ${customerOptions}
            </select>
        </div>
        <div class="form-group">
            <label class="form-label">Tutar (₺)</label>
            <input id="s_total" class="form-input" type="number" placeholder="0">
        </div>
        <div class="form-group">
            <label class="form-label">Sipariş Tipi</label>
            <select id="s_type" class="form-select">
                <option value="Toptan">Toptan</option>
                <option value="Proje">Proje</option>
                <option value="Perakende">Perakende</option>
            </select>
        </div>
        <div class="form-group">
            <label class="form-label">Durum</label>
            <select id="s_status" class="form-select">
                <option value="Beklemede">Beklemede</option>
                <option value="Onaylandı">Onaylandı</option>
            </select>
        </div>
        <div class="form-group">
            <label class="form-label">Tarih</label>
            <input id="s_date" class="form-input" type="date" value="${new Date().toISOString().split('T')[0]}">
        </div>
        <button class="btn btn-success" onclick="addSale()">
            <i data-feather="check" style="width:18px;"></i> Siparişi Kaydet
        </button>
    `;
}

function addSale() {
    const customerId = parseInt(document.getElementById('s_customer').value);
    const total = parseFloat(document.getElementById('s_total').value);
    const type = document.getElementById('s_type').value;
    const status = document.getElementById('s_status').value;
    const date = document.getElementById('s_date').value;
    if (!customerId) { showToast('Lütfen bir müşteri seçin!', 'error'); return; }
    if (!total || total <= 0) { showToast('Geçerli bir tutar girin!', 'error'); return; }
    const newId = Math.max(...AppData.sales.map(s=>s.id), 0) + 1;
    AppData.sales.unshift({ id: newId, customerId, total, type, status, date });
    showToast('Sipariş başarıyla kaydedildi!');
    mobileNav('satis');
}

// 5. MÜŞTERİLER
function renderCustomers() {
    return `
        <div class="flex-between mb-3">
            <div class="page-title" style="margin-bottom:0">Müşteriler</div>
            <button class="btn btn-primary" onclick="mobileNav('add-customer')" style="width:auto; padding:10px 18px; border-radius:12px; font-size:0.85rem;">
                <i data-feather="plus" style="width:16px;"></i> Ekle
            </button>
        </div>
        
        <div class="module-list mb-4">
            ${AppData.customers.map(c => `
                <div class="module-item">
                    <div class="module-left">
                        <div class="module-icon" style="font-weight:700; font-size:1.1rem; background:rgba(255,255,255,0.08); color:#fff;">
                            ${c.name.charAt(0)}
                        </div>
                        <div class="module-info">
                            <span class="module-title">${c.name}</span>
                            <span class="module-desc">${c.contact} &bull; ${c.phone}</span>
                        </div>
                    </div>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="badge ${c.type === 'Bayi' ? 'badge-info' : 'badge-warning'}">${c.type}</span>
                        <button onclick="deleteCustomer(${c.id})" style="background:var(--red-bg); border:none; color:var(--red-neon); width:32px; height:32px; border-radius:8px; cursor:pointer; display:flex; align-items:center; justify-content:center;">
                            <i data-feather="trash-2" style="width:14px; height:14px;"></i>
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function deleteCustomer(id) {
    if (!confirm('Bu müşteriyi silmek istediğinize emin misiniz?')) return;
    AppData.customers = AppData.customers.filter(c => c.id !== id);
    showToast('Müşteri silindi.');
    loadPage('musteriler');
    feather.replace();
}

function renderAddCustomer() {
    return `
        <div class="flex-between mb-4">
            <button onclick="mobileNav('musteriler')" style="background:none; border:none; color:var(--text-secondary); cursor:pointer; display:flex; align-items:center; gap:8px; font-size:0.95rem;">
                <i data-feather="arrow-left" style="width:20px;"></i> Geri
            </button>
            <div class="page-title" style="margin-bottom:0; font-size:1.2rem;">Yeni Müşteri</div>
        </div>

        <div class="form-group">
            <label class="form-label">Firma Adı</label>
            <input id="c_name" class="form-input" placeholder="Örn: Ankara Avize Ltd.">
        </div>
        <div class="form-group">
            <label class="form-label">Yetkili Kişi</label>
            <input id="c_contact" class="form-input" placeholder="Ad Soyad">
        </div>
        <div class="form-group">
            <label class="form-label">Telefon</label>
            <input id="c_phone" class="form-input" placeholder="+90 5xx xxx xx xx" type="tel">
        </div>
        <div class="form-group">
            <label class="form-label">Şehir</label>
            <input id="c_city" class="form-input" placeholder="Şehir">
        </div>
        <div class="form-group">
            <label class="form-label">Müşteri Tipi</label>
            <select id="c_type" class="form-select">
                <option value="Bayi">Bayi</option>
                <option value="Proje">Proje</option>
                <option value="Bireysel">Bireysel</option>
            </select>
        </div>
        <button class="btn btn-success" onclick="addCustomer()">
            <i data-feather="check" style="width:18px;"></i> Kaydet
        </button>
    `;
}

function addCustomer() {
    const name = document.getElementById('c_name').value.trim();
    const contact = document.getElementById('c_contact').value.trim();
    const phone = document.getElementById('c_phone').value.trim();
    const city = document.getElementById('c_city').value.trim();
    const type = document.getElementById('c_type').value;
    if (!name || !contact) { showToast('Firma adı ve yetkili kişi zorunludur!', 'error'); return; }
    const newId = Math.max(...AppData.customers.map(c=>c.id), 0) + 1;
    AppData.customers.push({ id: newId, name, contact, phone, city, type });
    showToast('Müşteri başarıyla eklendi!');
    mobileNav('musteriler');
}

// Helpers
function getCustomerName(id) {
    const c = AppData.customers.find(x => x.id === id);
    return c ? c.name : 'Bilinmeyen Müşteri';
}
function getProductName(id) {
    const p = AppData.products.find(x => x.id === id);
    return p ? p.name : 'Bilinmeyen Ürün';
}

// TOAST BİLDİRİM SİSTEMİ
function showToast(message, type = 'success') {
    const existing = document.querySelector('.erp-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'erp-toast';
    toast.style.cssText = `
        position: fixed; bottom: 100px; left: 50%; transform: translateX(-50%);
        background: ${type === 'error' ? 'var(--red-neon)' : 'var(--green-neon)'};
        color: ${type === 'error' ? '#fff' : '#000'};
        padding: 14px 24px; border-radius: 100px; font-weight: 700; font-size: 0.9rem;
        z-index: 9999; box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        animation: toastIn 0.3s ease;
        white-space: nowrap; max-width: 90vw; text-align: center;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}
// 6. SATIN ALMA (Purchasing & Tedarik)
function renderPurchasing() {
    return `
        <div class="page-title">Satın Alma</div>
        
        <div class="flex-between mb-3">
            <div class="form-input" style="padding:12px 16px; margin:0; flex:1; display:flex; gap:12px; align-items:center;">
                <i data-feather="search" style="color:var(--text-tertiary); width:18px;"></i>
                <input type="text" placeholder="Tedarikçi Ara" style="background:transparent; border:none; color:#fff; outline:none; width:100%; font-size:0.9rem;">
            </div>
            <button class="btn btn-outline" style="width:auto; padding:12px 16px; margin-left:12px; border-radius:12px;">
                <i data-feather="filter" style="width:20px;"></i>
            </button>
        </div>

        <div class="section-title mb-2">Ödenecekler (Borçlar)</div>
        <div class="transaction-list mb-4">
            ${AppData.payables.map(p => `
                <div class="transaction-item">
                    <div class="tx-left">
                        <div class="tx-icon expense">
                            <i data-feather="truck"></i>
                        </div>
                        <div class="tx-details">
                            <span class="tx-title">${p.supplier}</span>
                            <span class="tx-subtitle">Vade: ${p.dueDate} &bull; ${p.type}</span>
                        </div>
                    </div>
                    <div class="tx-right text-right">
                        <span class="tx-amount text-danger">
                            ${formatCurrency(p.amount)}
                        </span>
                        <div style="margin-top:6px;">
                            <span class="badge ${p.status === 'Kritik' ? 'badge-danger' : 'badge-warning'}">${p.status}</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// 7. ÜRETİM & STOK (Production)
function renderProduction() {
    return `
        <div class="page-title">Üretim & Stok</div>
        
        <div class="metrics-grid mb-3">
            <div class="metric-card" style="padding:16px;">
                <div class="metric-title mb-1">Toplam Ürün</div>
                <div class="metric-value" style="font-size:1.6rem; color:var(--blue-neon);">${AppData.products.length}</div>
            </div>
            <div class="metric-card" style="padding:16px;">
                <div class="metric-title mb-1">Toplam Stok</div>
                <div class="metric-value" style="font-size:1.6rem; color:var(--green-neon);">${AppData.products.reduce((a,b)=>a+b.stock,0)}</div>
            </div>
        </div>

        <div class="section-title mb-2">Ürün Kataloğu</div>
        <div class="module-list mb-4">
            ${AppData.products.map(p => `
                <div class="module-item">
                    <div class="module-left">
                        <div class="module-icon" style="background:rgba(255,159,10,0.1); color:var(--orange-neon);">
                            <i data-feather="box"></i>
                        </div>
                        <div class="module-info">
                            <span class="module-title">${p.name}</span>
                            <span class="module-desc">${p.code} &bull; ${p.category}</span>
                        </div>
                    </div>
                    <div class="text-right">
                        <div class="bold" style="font-size:0.95rem;">${p.stock} Adet</div>
                        <div class="text-tertiary" style="font-size:0.75rem;">${formatCurrency(p.price)}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// 8. FİNANS VE KASA (Finance)
function renderFinance() {
    return `
        <div class="page-title">Finans & Kasa</div>

        <div class="hero-card mb-4" style="background: linear-gradient(135deg, #0A84FF 0%, #32D74B 100%);">
            <div class="hero-label">NET NAKİT DURUMU</div>
            <div class="hero-amount">₺387.500</div>
        </div>

        <div class="section-title mb-2">Hesap Bakiyeleri</div>
        <div class="module-list mb-4">
            <div class="module-item">
                <div class="module-left">
                    <div class="module-icon" style="color:var(--text-main);"><i data-feather="briefcase"></i></div>
                    <div class="module-info">
                        <span class="module-title">Merkez Kasa (Nakit)</span>
                        <span class="module-desc">TRY</span>
                    </div>
                </div>
                <div class="bold" style="font-size:1.05rem;">₺42.500</div>
            </div>
            <div class="module-item">
                <div class="module-left">
                    <div class="module-icon" style="color:var(--blue-neon);"><i data-feather="credit-card"></i></div>
                    <div class="module-info">
                        <span class="module-title">Garanti BBVA (Ticari)</span>
                        <span class="module-desc">TRY</span>
                    </div>
                </div>
                <div class="bold" style="font-size:1.05rem;">₺345.000</div>
            </div>
        </div>
    `;
}

// 9. PERSONEL VE İK
function renderHR() {
    return `
        <div class="flex-between mb-3">
            <div class="page-title" style="margin-bottom:0">Personel</div>
            <button class="btn btn-primary" onclick="mobileNav('add-employee')" style="width:auto; padding:10px 18px; border-radius:12px; font-size:0.85rem;">
                <i data-feather="user-plus" style="width:16px;"></i> Ekle
            </button>
        </div>
        
        <div class="module-list mb-4">
            ${AppData.employees.map(e => `
                <div class="module-item" style="cursor:pointer;" onclick="openEmployeeDetail(${e.id})">
                    <div class="module-left">
                        <div class="module-icon" style="background:rgba(50,215,75,0.1); color:var(--green-neon); border-radius:50%; font-weight:700;">
                            ${e.name.charAt(0)}
                        </div>
                        <div class="module-info">
                            <span class="module-title">${e.name}</span>
                            <span class="module-desc">${e.pos} &bull; ${e.dept}</span>
                        </div>
                    </div>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="badge ${e.role === 'Yönetici' ? 'badge-danger' : e.role === 'Muhasebe' ? 'badge-info' : 'badge-success'}">${e.role || 'Kullanıcı'}</span>
                        <button onclick="event.stopPropagation(); deleteEmployee(${e.id})" style="background:var(--red-bg); border:none; color:var(--red-neon); width:32px; height:32px; border-radius:8px; cursor:pointer; display:flex; align-items:center; justify-content:center;">
                            <i data-feather="trash-2" style="width:14px; height:14px;"></i>
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function openEmployeeDetail(id) {
    window._selectedEmployeeId = id;
    mobileNav('employee-detail');
}

function deleteEmployee(id) {
    if (!confirm('Bu personeli silmek istediğinize emin misiniz?')) return;
    AppData.employees = AppData.employees.filter(e => e.id !== id);
    showToast('Personel silindi.');
    loadPage('personel');
    feather.replace();
}

function renderAddEmployee() {
    return `
        <div class="flex-between mb-4">
            <button onclick="mobileNav('personel')" style="background:none; border:none; color:var(--text-secondary); cursor:pointer; display:flex; align-items:center; gap:8px; font-size:0.95rem;">
                <i data-feather="arrow-left" style="width:20px;"></i> Geri
            </button>
            <div class="page-title" style="margin-bottom:0; font-size:1.2rem;">Yeni Personel</div>
        </div>

        <div class="form-group">
            <label class="form-label">Ad Soyad</label>
            <input id="e_name" class="form-input" placeholder="Ad Soyad">
        </div>
        <div class="form-group">
            <label class="form-label">Departman</label>
            <input id="e_dept" class="form-input" placeholder="Örn: Üretim, Satış">
        </div>
        <div class="form-group">
            <label class="form-label">Pozisyon</label>
            <input id="e_pos" class="form-input" placeholder="Örn: Üretim Müdürü">
        </div>
        <div class="form-group">
            <label class="form-label">Sistem Rolü (Yetki)</label>
            <select id="e_role" class="form-select">
                <option value="Kullanıcı">Kullanıcı (Sadece Okuma)</option>
                <option value="Muhasebe">Muhasebe (Finans Erişimi)</option>
                <option value="Satış">Satış Temsilcisi</option>
                <option value="Yönetici">Yönetici (Tam Yetki)</option>
            </select>
        </div>
        <div class="form-group">
            <label class="form-label">Şifre</label>
            <input id="e_password" class="form-input" type="password" placeholder="Kullanıcı Şifresi (Örn: 123456)">
        </div>
        <div class="form-group">
            <label class="form-label">Maaş (₺)</label>
            <input id="e_salary" class="form-input" placeholder="Örn: 50000" type="number">
        </div>
        <button class="btn btn-success" onclick="addEmployee()">
            <i data-feather="check" style="width:18px;"></i> Kaydet
        </button>
    `;
}

function addEmployee() {
    const name = document.getElementById('e_name').value.trim();
    const dept = document.getElementById('e_dept').value.trim();
    const pos = document.getElementById('e_pos').value.trim();
    const role = document.getElementById('e_role').value;
    const password = document.getElementById('e_password').value.trim();
    const salary = parseFloat(document.getElementById('e_salary').value) || 0;
    
    if (!name || !dept || !pos) { 
        showToast('İsim, departman ve pozisyon zorunludur!', 'error'); 
        return; 
    }
    if (role !== 'Kullanıcı' && !password) {
         showToast('Satış, Muhasebe veya Yönetici rolleri için şifre zorunludur!', 'error'); 
         return;
    }

    const newId = Math.max(...AppData.employees.map(e=>e.id), 100) + 1;
    AppData.employees.push({ id: newId, name, dept, pos, role, password, salary, status: 'Aktif' });
    showToast('Personel başarıyla eklendi!');
    mobileNav('personel');
}

function renderEmployeeDetail(id) {
    const e = AppData.employees.find(x => x.id === id);
    if (!e) return `<div class="page-title">Personel Bulunamadı</div>`;
    const roles = ['Kullanıcı', 'Satış', 'Muhasebe', 'Yönetici'];
    return `
        <div class="flex-between mb-4">
            <button onclick="mobileNav('personel')" style="background:none; border:none; color:var(--text-secondary); cursor:pointer; display:flex; align-items:center; gap:8px; font-size:0.95rem;">
                <i data-feather="arrow-left" style="width:20px;"></i> Geri
            </button>
            <div class="page-title" style="margin-bottom:0; font-size:1.2rem;">Personel Detayı</div>
        </div>

        <div class="hero-card" style="padding:24px; margin-bottom:24px; background:linear-gradient(135deg,#1a1a2e,#16213e);">
            <div style="width:64px; height:64px; border-radius:50%; background:rgba(50,215,75,0.15); color:var(--green-neon); display:flex; align-items:center; justify-content:center; font-size:1.8rem; font-weight:800; margin-bottom:16px;">${e.name.charAt(0)}</div>
            <div style="font-size:1.3rem; font-weight:800; color:#fff;">${e.name}</div>
            <div style="color:rgba(255,255,255,0.6); font-size:0.85rem; margin-top:4px;">${e.pos} &bull; ${e.dept}</div>
            <div style="margin-top:12px;"><span class="badge badge-success">${e.status}</span></div>
        </div>

        <div class="section-title mb-2">Maaş Bilgisi</div>
        <div class="metric-card mb-3" style="padding:20px;">
            <span style="color:var(--text-secondary); font-size:0.8rem;">Aylık Brüt</span>
            <span class="metric-value" style="font-size:1.6rem; color:var(--green-neon);">${formatCurrency(e.salary)}</span>
        </div>

        <div class="section-title mb-2">Sistem Yetkisi</div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:32px;">
            ${roles.map(r => `
                <button onclick="setEmployeeRole(${e.id}, '${r}')" style="padding:14px; border-radius:14px; border: 2px solid ${e.role === r ? 'var(--green-neon)' : 'var(--border-strong)'}; background:${e.role === r ? 'rgba(50,215,75,0.1)' : 'var(--bg-surface)'}; color:${e.role === r ? 'var(--green-neon)' : 'var(--text-secondary)'}; font-weight:700; font-size:0.85rem; cursor:pointer; transition:all 0.2s;">
                    ${r}
                </button>
            `).join('')}
        </div>

        <button onclick="deleteEmployee(${e.id})" class="btn btn-danger">
            <i data-feather="trash-2" style="width:18px;"></i> Personeli Sil
        </button>
    `;
}

function setEmployeeRole(id, role) {
    const e = AppData.employees.find(x => x.id === id);
    if (!e) return;
    e.role = role;
    showToast(e.name + ' → ' + role + ' yetkisi verildi.');
    renderEmployeeDetail(id); // re-render same page
    window._selectedEmployeeId = id;
    loadPage('employee-detail');
    feather.replace();
}

// 10. AYARLAR (Settings)
function renderSettings() {
    return `
        <div class="page-title">Ayarlar</div>

        <div class="module-group">
            <div class="module-list">
                <div class="module-item">
                    <div class="module-left">
                        <div class="module-icon"><i data-feather="user"></i></div>
                        <div class="module-info">
                            <span class="module-title">Profilim</span>
                            <span class="module-desc">Kişisel bilgileri güncelle</span>
                        </div>
                    </div>
                    <i data-feather="chevron-right" class="module-arrow"></i>
                </div>
                <div class="module-item">
                    <div class="module-left">
                        <div class="module-icon"><i data-feather="lock"></i></div>
                        <div class="module-info">
                            <span class="module-title">Güvenlik</span>
                            <span class="module-desc">Şifre ve 2FA ayarları</span>
                        </div>
                    </div>
                    <i data-feather="chevron-right" class="module-arrow"></i>
                </div>
                <div class="module-item">
                    <div class="module-left">
                        <div class="module-icon" style="color:var(--red-neon);"><i data-feather="log-out"></i></div>
                        <div class="module-info">
                            <span class="module-title text-danger">Çıkış Yap</span>
                            <span class="module-desc">Oturumu güvenle kapat</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
