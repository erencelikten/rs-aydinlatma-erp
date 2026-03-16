from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from datetime import datetime
import random

app = FastAPI(title="RS Aydınlatma ERP API", version="1.0.0")

# CORS (Cross-Origin Resource Sharing) Ayarı
# Frontend (localhost:10006) üzerinden gelecek isteklere izin veriyoruz.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Geliştirme aşamasında her yerden erişime açık, canlıda kısıtlanmalı
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- MOCK VERİ MODELLERİ ---
class Order(BaseModel):
    id: str
    platform: str # Trendyol, N11, Hepsiburada
    customer_name: str
    product_name: str
    quantity: int
    total_price: float
    order_date: str
    status: str

class BankTransaction(BaseModel):
    id: str
    bank_name: str
    transaction_type: str # IN (Gelen), OUT (Giden)
    amount: float
    sender_receiver: str
    description: str
    date: str

# --- API ENDPOINT'LERİ (UÇ NOKTALAR) ---

@app.get("/")
def read_root():
    return {"message": "RS Aylınlatma ERP Backend API Çalışıyor 🚀"}

@app.get("/api/v1/trendyol/orders", response_model=List[Order])
def get_trendyol_orders():
    """Trendyol/Hepsiburada gibi pazaryerlerinden gelen SAHTE (Mock) siparişler"""
    mock_orders = [
        {
            "id": f"TY-{random.randint(100000, 999999)}",
            "platform": "Trendyol",
            "customer_name": "Ahmet Yılmaz",
            "product_name": "Eliza Modern Sarkıt Led Avize",
            "quantity": 2,
            "total_price": 4500.0,
            "order_date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "status": "Yeni"
        },
        {
            "id": f"N11-{random.randint(100000, 999999)}",
            "platform": "N11",
            "customer_name": "Ayşe Demir",
            "product_name": "Kelebek Yuvarlak Modern İthal Led Aplik",
            "quantity": 4,
            "total_price": 3200.0,
            "order_date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "status": "Hazırlanıyor"
        },
        {
            "id": f"HB-{random.randint(100000, 999999)}",
            "platform": "Hepsiburada",
            "customer_name": "Mehmet Can",
            "product_name": "Luxury Modern 5 Li Sıralı Sarkıt",
            "quantity": 1,
            "total_price": 5800.0,
            "order_date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "status": "Yeni"
        }
    ]
    return mock_orders

@app.get("/api/v1/bank/transactions", response_model=List[BankTransaction])
def get_bank_transactions():
    """Açık Bankacılık üzerinden gelen SAHTE (Mock) hesap hareketleri"""
    mock_transactions = [
        {
            "id": f"TRX-{random.randint(100000, 999999)}",
            "bank_name": "Garanti BBVA",
            "transaction_type": "IN",
            "amount": 28500.0,
            "sender_receiver": "Yılmaz Yapı Market",
            "description": "Avize Sevkiyat Ödemesi",
            "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        },
        {
            "id": f"TRX-{random.randint(100000, 999999)}",
            "bank_name": "Akbank",
            "transaction_type": "OUT",
            "amount": 12500.0,
            "sender_receiver": "Elektro-LED Malzemeleri Ltd.",
            "description": "Hammadde (Modul LED) Ödemesi",
            "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        }
    ]
    return mock_transactions
