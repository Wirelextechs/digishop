import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface AppState {
  cart: CartItem[];
  user: any | null; // Placeholder for user session
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  setUser: (user: any) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      cart: [],
      user: null,
      addToCart: (item) =>
        set((state) => {
          const existing = state.cart.find((i) => i.id === item.id);
          if (existing) {
            return {
              cart: state.cart.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return { cart: [...state.cart, { ...item, quantity: 1 }] };
        }),
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((i) => i.id !== id),
        })),
      clearCart: () => set({ cart: [] }),
      setUser: (user) => set({ user }),
    }),
    {
      name: 'digishop-storage', // name of the item in the storage (must be unique)
    }
  )
);
