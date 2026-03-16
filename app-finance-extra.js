
// --- EKSTRA FİNANS MODÜLLERİ ---

// --- MODULE: GELİR-GİDER (INCOME/EXPENSE) ---
function renderIncomeExpense() {
    const totalIncome = AppData.sales.reduce((sum, s) => sum + s.amount, 0) +
        AppData.receivables.filter(r => r.status === 'Tahsil Edildi').reduce((sum, r) => sum + r.amount, 0);
    const totalExpense = AppData.expenses.reduce((sum, e) => sum + e.amount, 0);
    const netProfit = totalIncome - totalExpense;

    return `
        <div class="flex-between mb-2">
            <div>
                <h2>Gelir & Gider Tablosu</h2>
                <p class="text-muted">Detaylı nakit akış dökümü</p>
            </div>
            <div class="flex gap-1">
                <button class="btn btn-success" onclick="openModal('income')">Gelir Ekle</button>
                <button class="btn btn-danger" onclick="openModal('expense')">Gider Ekle</button>
            </div>
        </div>

        <div class="grid grid-3 mb-2">
             <div class="stat-card">
                <div class="stat-value text-success">${formatCurrency(totalIncome)}</div>
                <div class="stat-label">Toplam Gelir</div>
            </div>
             <div class="stat-card">
                <div class="stat-value text-danger">${formatCurrency(totalExpense)}</div>
                <div class="stat-label">Toplam Gider</div>
            </div>
             <div class="stat-card">
                <div class="stat-value ${netProfit >= 0 ? 'text-success' : 'text-danger'}">${formatCurrency(netProfit)}</div>
                <div class="stat-label">Net Kar/Zarar</div>
            </div>
        </div>

        <div class="grid grid-2">
            <div class="card">
                <div class="card-header"><h3>Gelirler (Satışlar)</h3></div>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Tarih</th><th>Müşteri</th><th>Ürün</th><th>Tutar</th><th>İşlem</th></tr></thead>
                        <tbody>
                            ${AppData.sales.map(s => `
                                <tr>
                                    <td>${formatDate(s.date)}</td>
                                    <td>${getCustomerName(s.customerId)}</td>
                                    <td>${getProductName(s.productId)}</td>
                                    <td class="text-success bold">+${formatCurrency(s.amount)}</td>
                                    <td><button class="btn btn-danger btn-sm" onclick="deleteItem('sale', ${s.id})">Sil</button></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header"><h3>Giderler</h3></div>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Tarih</th><th>Kategori</th><th>Açıklama</th><th>Tutar</th><th>İşlem</th></tr></thead>
                        <tbody>
                            ${AppData.expenses.map(e => `
                                <tr>
                                    <td>${formatDate(e.date)}</td>
                                    <td><span class="badge badge-warning">${e.category}</span></td>
                                    <td>${e.desc}</td>
                                    <td class="text-danger bold">-${formatCurrency(e.amount)}</td>
                                    <td><button class="btn btn-danger btn-sm" onclick="deleteItem('expense', ${e.id})">Sil</button></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// --- MODULE: MASRAFLAR (EXPENSES MANAGEMENT) ---
function renderExpenses() {
    return `
         <div class="flex-between mb-2">
            <div>
                <h2>Masraf Yönetimi</h2>
                <p class="text-muted">Personel, operasyon ve proje giderleri</p>
            </div>
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
