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
  Sparkles,
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
      themeName: "Rose Quartz & Iridescent Silk",
      accentBg: "glass-inset glass-lilac",
      accentText: "text-[var(--ink-soft)]",
      borderTone: "border-[var(--glass-border)]",
      badgeTone: "glass-inset text-[var(--ink)]",
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
      accentBg: "glass-inset  ",
      accentText: "text-[var(--ink-soft)]",
      borderTone: "border-[var(--glass-border)]",
      badgeTone: "glass-inset text-[var(--ink)]",
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
    <div className="crystal-card rounded-3xl p-5 sm:p-6 border border-white/95 mt-6">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--glass-border)]">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full glass-inset animate-ping" />
            <span className="text-xs font-black uppercase tracking-wider text-[var(--ink)] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[var(--ink-soft)]" />
              Live Interactive Tenant Simulator
            </span>
          </div>
          <p className="text-xs text-[var(--ink-soft)] mt-0.5 font-medium">
            Switch tenants to see real-time theme injection, database connection swapping, and catalog isolation.
          </p>
        </div>

        {/* Tenant Switch Buttons */}
        <div className="flex flex-wrap items-center glass-inset p-1 rounded-full border border-white/90">
          <button
            onClick={() => handleSwitchTenant("fashion")}
            className={`text-xs font-bold px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
              activeTenant === "fashion"
                ? "glass-selected text-[var(--ink)]  scale-102"
                : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
            }`}
          >
            <span className="w-2 h-2 rounded-full glass-inset" />
            <span>Tenant A (Fashion)</span>
          </button>
          <button
            onClick={() => handleSwitchTenant("electronics")}
            className={`text-xs font-bold px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
              activeTenant === "electronics"
                ? "glass-selected text-[var(--ink)]  scale-102"
                : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
            }`}
          >
            <span className="w-2 h-2 rounded-full glass-inset" />
            <span>Tenant B (Electronics)</span>
          </button>
        </div>
      </div>

      {/* Simulator Body */}
      <div className={`mt-5 transition-opacity duration-300 ${isSwitching ? "opacity-30" : "opacity-100"}`}>
        {/* Dynamic Architectural Metadata Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
          <div className="glass-inset rounded-2xl p-3 border border-white/80">
            <span className="text-[10px] font-bold text-[var(--ink-soft)] uppercase flex items-center gap-1">
              <Globe className="w-3 h-3 text-[var(--ink-soft)]" /> Subdomain Route
            </span>
            <div className="font-mono text-xs font-black text-[var(--ink)] mt-1 truncate">
              {current.subdomain}
            </div>
          </div>

          <div className="glass-inset rounded-2xl p-3 border border-white/80">
            <span className="text-[10px] font-bold text-[var(--ink-soft)] uppercase flex items-center gap-1">
              <Database className="w-3 h-3 text-[var(--ink-soft)]" /> Isolated DB
            </span>
            <div className="font-mono text-xs font-black text-[var(--ink)] mt-1 truncate">
              {current.dbName}
            </div>
          </div>

          <div className="glass-inset rounded-2xl p-3 border border-white/80">
            <span className="text-[10px] font-bold text-[var(--ink-soft)] uppercase flex items-center gap-1">
              <Palette className="w-3 h-3 text-[var(--ink-soft)]" /> Theme Injection
            </span>
            <div className="text-xs font-black text-[var(--ink)] mt-1 truncate">
              {current.themeName}
            </div>
          </div>

          <div className="glass-inset rounded-2xl p-3 border border-white/80">
            <span className="text-[10px] font-bold text-[var(--ink-soft)] uppercase flex items-center gap-1">
              <Shield className="w-3 h-3 text-[var(--ink-soft)]" /> Gateway
            </span>
            <div className="text-xs font-black text-[var(--ink)] mt-1 truncate">
              {current.gateway}
            </div>
          </div>
        </div>

        {/* Mock Storefront Window */}
        <div className="rounded-3xl border border-white/95 glass-inset p-5 backdrop-blur-xl">
          {/* Storefront Nav */}
          <div className="flex items-center justify-between pb-3 border-b border-[var(--glass-border)] mb-4">
            <div className="flex items-center gap-2">
              <Store className={`w-5 h-5 ${current.accentText}`} />
              <span className="font-extrabold text-[var(--ink)] text-sm">{current.name}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${current.badgeTone}`}>
                {current.currency}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-[var(--ink)] glass-inset px-3 py-1 rounded-full border border-white/90">
                <ShoppingCart className="w-3.5 h-3.5 text-[var(--ink-soft)]" />
                <span>Cart: <strong>{cartCount}</strong> items</span>
              </div>
            </div>
          </div>

          {/* Storefront Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {current.products.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-white/90 p-3.5 glass-inset hover:border-[var(--bg-4)] hover: transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-extrabold text-[var(--ink)] mb-1">{item.name}</div>
                  <div className="text-[11px] text-[var(--ink-soft)] font-medium">In Stock: {item.stock} units</div>
                </div>
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-[var(--glass-border)]">
                  <span className={`font-mono font-black text-sm ${current.accentText}`}>
                    {current.currencySymbol}{item.price}
                  </span>
                  <button
                    onClick={() => setCartCount((prev) => prev + 1)}
                    className={`text-[11px] font-bold px-3 py-1 rounded-xl text-[var(--ink)] ${current.accentBg} hover:opacity-90  transition-all hover:scale-105 active:scale-95`}
                  >
                    + Add
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Architecture Proof Footer */}
          <div className="mt-4 pt-3 border-t border-[var(--glass-border)] flex flex-wrap items-center justify-between text-[11px] text-[var(--ink-soft)] gap-2">
            <div className="flex items-center gap-1.5 text-[var(--ink)] font-bold">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Zero Cross-Tenant Leakage: Dynamic DB switch completed in 8.4ms</span>
            </div>
            <div className="font-mono text-[var(--ink-soft)] font-semibold">
              Storage: {current.storageBucket}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
