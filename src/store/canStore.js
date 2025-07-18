import { create } from "zustand";

export const useCanStore = create((set) => ({
  knockedCount: 0,
  showWinCardStatus: false,
  incrementKnockedCount: () =>
    set((state) => ({ knockedCount: state.knockedCount + 1 })),
  setInitialKnockCount: () => set((state) => ({ knockedCount: 0 })),
}));
