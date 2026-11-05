"use client";

import React, { useState } from "react";
import {
  Store,
  RefreshCw,
  Database,
  Globe,
  Palette,
  CheckCircle,
  ShoppingCart,
  Shield,
  Layers,
  ArrowRight,
} from "lucide-react";

export default function TenantSimulator() {
  const [activeTenant, setActiveTenant] = useState<"fashion" | "electronics">("fashion");
  const [cartCount, setCartCount] = useState(1);
  const [isSwitching, setIsSwitching] = useState(false);

  const tenantConfig = {
    fashion: {
      name: "LuxeAura Boutique",
      subdomain: "luxeaura.eazycart.io",
      dbName: "tenant_luxeaura_prod",
      themeName: "Rose Quartz & Champagne Silk",
      accentBg: "bg-rose-500",
      accentText: "text-rose-600",
      borderTone: "border-rose-200",
      badgeTone: "bg-rose-100 text-rose-800",
      currency: "EUR (€)",
      currencySymbol: "€",
      products: [
        { id: 1, name: "Tailored Italian Cashmere Coat", price: 340, stock: 12 },
        { id: 2, name: "Silk Crepe Evening Wrap", price: 120, stock: 24 },
        { id: 3, name: "Handcrafted Saddle Leather Bag", price: 280, stock: 7 },
      ],
      gateway: "Stripe EU Connect",
      storageBucket: "s3://eazycart-tenants/luxeaura/assets",
    },
    electronics: {
      name: "Voltify Electronics Hub",
      subdomain: "voltify.eazycart.io",
      dbName: "tenant_voltify_prod",
      themeName: "Cyber Indigo & Glacier Cyan",
      accentBg: "bg-cyan-600",
      accentText: "text-cyan-600",
      borderTone: "border-cyan-200",
      badgeTone: "bg-cyan-100 text-cyan-800",
      currency: "USD ($)",
      currencySymbol: "$",
      products: [
        { id: 101, name: "Pro Mechanical 75% Keyboard", price: 169, stock: 45 },
        { id: 102, name: "Active Noise-Cancelling Earbuds", price: 129, stock: 80 },
        { id: 103, name: "4K 144Hz Ultra-Wide Monitor", price: 549, stock: 15 },
      ],
      gateway: "Razorpay Enterprise",
      storageBucket: "s3://eazycart-tenants/voltify/assets",
    },
  };

  const current = tenantConfig[activeTenant];

  const handleSwitchTenant = (tenant: "fashion" | "electronics") => {
    if (tenant === activeTenant) return;
    setIsSwitching(true);
    setCartCount(0);
    setTimeout(() => {
      setActiveTenant(tenant);
      setIsSwitching(false);
    }, 300);
  };

  return (
    <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/80 shadow-lg mt-6">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/60">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">
              Live Interactive Tenant Simulator
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Switch tenants to see real-time theme injection, database connection swapping, and catalog isolation.
          </p>
        </div>

        {/* Tenant Switch Buttons */}
        <div className="flex items-center bg-slate-100/90 p-1 rounded-full border border-slate-200">
          <button
            onClick={() => handleSwitchTenant("fashion")}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
              activeTenant === "fashion"
                ? "bg-white text-rose-700 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            <span>Tenant A (Fashion)</span>
          </button>
          <button
            onClick={() => handleSwitchTenant("electronics")}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
              activeTenant === "electronics"
                ? "bg-white text-cyan-700 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            <span>Tenant B (Electronics)</span>
          </button>
        </div>
      </div>

      {/* Simulator Body */}
      <div className={`mt-5 transition-opacity duration-300 ${isSwitching ? "opacity-30" : "opacity-100"}`}>
        {/* Dynamic Architectural Metadata Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
          <div className="glass-subtle rounded-xl p-3">
            <span className="text-[10px] font-semibold text-slate-500 uppercase flex items-center gap-1">
              <Globe className="w-3 h-3 text-indigo-500" /> Subdomain Route
            </span>
            <div className="font-mono text-xs font-bold text-slate-900 mt-1 truncate">
              {current.subdomain}
            </div>
          </div>

          <div className="glass-subtle rounded-xl p-3">
            <span className="text-[10px] font-semibold text-slate-500 uppercase flex items-center gap-1">
              <Database className="w-3 h-3 text-purple-500" /> Isolated MySQL Database
            </span>
            <div className="font-mono text-xs font-bold text-slate-900 mt-1 truncate">
              {current.dbName}
            </div>
          </div>

          <div className="glass-subtle rounded-xl p-3">
            <span className="text-[10px] font-semibold text-slate-500 uppercase flex items-center gap-1">
              <Palette className="w-3 h-3 text-pink-500" /> Active Theme Injection
            </span>
            <div className="text-xs font-bold text-slate-900 mt-1 truncate">
              {current.themeName}
            </div>
          </div>

          <div className="glass-subtle rounded-xl p-3">
            <span className="text-[10px] font-semibold text-slate-500 uppercase flex items-center gap-1">
              <Shield className="w-3 h-3 text-emerald-500" /> Payment Gateway
            </span>
            <div className="text-xs font-bold text-slate-900 mt-1 truncate">
              {current.gateway}
            </div>
          </div>
        </div>

        {/* Mock Storefront Window */}
        <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
          {/* Storefront Nav */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
            <div className="flex items-center gap-2">
              <Store className={`w-5 h-5 ${current.accentText}`} />
              <span className="font-bold text-slate-900 text-sm">{current.name}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${current.badgeTone}`}>
                {current.currency}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                <ShoppingCart className="w-3.5 h-3.5 text-slate-500" />
                <span>Cart: <strong>{cartCount}</strong> items</span>
              </div>
            </div>
          </div>

          {/* Storefront Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {current.products.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200/80 p-3 bg-slate-50/60 hover:bg-white hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-slate-800 mb-1">{item.name}</div>
                  <div className="text-[11px] text-slate-500">In Stock: {item.stock} units</div>
                </div>
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100">
                  <span className={`font-mono font-bold text-sm ${current.accentText}`}>
                    {current.currencySymbol}{item.price}
                  </span>
                  <button
                    onClick={() => setCartCount((prev) => prev + 1)}
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg text-white ${current.accentBg} hover:opacity-90 transition-opacity`}
                  >
                    + Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Architecture Proof Footer */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
            <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Zero Cross-Tenant Leakage: Dynamic DB switch completed in 8.4ms</span>
            </div>
            <div className="font-mono text-slate-400">
              Storage: {current.storageBucket}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
