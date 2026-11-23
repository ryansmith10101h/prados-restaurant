"use client";

import { useState } from "react";
import { formatPrice } from "@/lib/utils";
import { Plus, Check, EyeOff, Trash2, Edit2 } from "lucide-react";

type Item = {
  id: string;
  category: string;
  name: string;
  price: number;
  available: boolean;
};

const initialItems: Item[] = [
  { id: "1", category: "STARTERS", name: "Crispy Peppered Calamari", price: 9500, available: true },
  { id: "2", category: "STARTERS", name: "Smoked Goat Meat Asun Tartlets", price: 8500, available: true },
  { id: "3", category: "MAINS", name: "Prados Signature Jollof Feast", price: 14000, available: true },
  { id: "4", category: "MAINS", name: "Slow-Braised Oxtail with Yam Puree", price: 24000, available: true },
  { id: "5", category: "GRILLS", name: "Prime Lamb Chops in Suya Spice Crust", price: 32000, available: true },
  { id: "6", category: "COCKTAILS", name: "The Magodo Sunset", price: 8000, available: true },
];

export default function AdminMenuPage() {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [filter, setFilter] = useState("ALL");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newCategory, setNewCategory] = useState("MAINS");
  const [newPrice, setNewPrice] = useState("");

  const toggleAvailability = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, available: !item.available } : item
      )
    );
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newPrice) return;

    const newItem: Item = {
      id: Date.now().toString(),
      name: newName,
      category: newCategory,
      price: parseFloat(newPrice),
      available: true,
    };

    setItems([newItem, ...items]);
    setNewName("");
    setNewPrice("");
    setShowAddForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl text-cream-100">Menu & Price Management</h1>
          <p className="text-xs text-charcoal-400 mt-1">
            Update pricing, mark items 86'd / unavailable, or introduce seasonal specials
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="btn-primary text-xs py-2.5 px-4"
        >
          <Plus size={14} />
          Add Menu Item
        </button>
      </div>

      {/* Add Item Drawer/Form */}
      {showAddForm && (
        <form onSubmit={handleAddItem} className="bg-charcoal-900 border border-gold-500/30 rounded-lg p-6 space-y-4">
          <h3 className="font-display text-base text-cream-100">Create New Menu Offering</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="label-field">Dish / Beverage Name</label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="e.g. Grilled Tiger Prawns"
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="label-field">Category</label>
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="input-field"
              >
                <option value="STARTERS">STARTERS</option>
                <option value="MAINS">MAINS</option>
                <option value="GRILLS">GRILLS</option>
                <option value="SIDES">SIDES</option>
                <option value="DESSERTS">DESSERTS</option>
                <option value="COCKTAILS">COCKTAILS</option>
                <option value="DRINKS">DRINKS</option>
              </select>
            </div>
            <div>
              <label className="label-field">Price (₦)</label>
              <input
                type="number"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
                placeholder="15000"
                className="input-field"
                required
              />
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="btn-secondary text-xs py-2 px-4"
            >
              Cancel
            </button>
            <button type="submit" className="btn-primary text-xs py-2 px-4">
              Save Item
            </button>
          </div>
        </form>
      )}

      {/* Items Table */}
      <div className="bg-charcoal-900 border border-charcoal-800 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-charcoal-800 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-400">
            Total Items: {items.length}
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-charcoal-950 text-charcoal-400 uppercase tracking-wider border-b border-charcoal-800">
              <tr>
                <th className="py-3 px-6">Item</th>
                <th className="py-3 px-6">Category</th>
                <th className="py-3 px-6">Price</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6 text-right">Toggle Availability</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal-800">
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-charcoal-800/40">
                  <td className="py-3.5 px-6 font-semibold text-cream-100">{item.name}</td>
                  <td className="py-3.5 px-6 text-charcoal-400">{item.category}</td>
                  <td className="py-3.5 px-6 font-bold text-gold-400">{formatPrice(item.price)}</td>
                  <td className="py-3.5 px-6">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        item.available
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-charcoal-800 text-charcoal-500"
                      }`}
                    >
                      {item.available ? "Available" : "Sold Out (86'd)"}
                    </span>
                  </td>
                  <td className="py-3.5 px-6 text-right">
                    <button
                      onClick={() => toggleAvailability(item.id)}
                      className={`text-xs px-3 py-1.5 rounded transition-colors ${
                        item.available
                          ? "bg-charcoal-800 text-charcoal-300 hover:text-white"
                          : "bg-gold-500 text-charcoal-950 font-semibold"
                      }`}
                    >
                      {item.available ? "Mark Sold Out" : "Mark Available"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
