// Sentos Integration Service - Mock
const SentosService = {
    settings: {
        apiKey: localStorage.getItem('sentos_api_key') || '',
        apiSecret: localStorage.getItem('sentos_api_secret') || '',
        status: localStorage.getItem('sentos_status') || 'passive'
    },

    saveSettings(apiKey, apiSecret, status) {
        this.settings = { apiKey, apiSecret, status };
        localStorage.setItem('sentos_api_key', apiKey);
        localStorage.setItem('sentos_api_secret', apiSecret);
        localStorage.setItem('sentos_status', status);
        return true;
    },

    async syncProducts() {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Simulate syncing products from ERP to Sentos
                console.log("Syncing products to Sentos...");
                resolve({ success: true, count: AppData.products.length });
            }, 1500);
        });
    },

    async fetchOrders() {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Simulate fetching orders from Sentos (Marketplaces)
                console.log("Fetching orders from Sentos...");
                const mockOrders = [
                    { id: 'SNT-101', platform: 'Trendyol', total: 4500, status: 'Yeni' },
                    { id: 'SNT-102', platform: 'Hepsiburada', total: 1250, status: 'Yeni' }
                ];
                resolve({ success: true, orders: mockOrders });
            }, 1000);
        });
    }
};

window.SentosService = SentosService;
