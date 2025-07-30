import { create } from "zustand";

export const useAppStore = create((set) => ({
  knockedCount: 0,
  tableHandler: null,
  tableRef: null,
  canMovement: [0, 0, 0],
  winStatus: false,
  incrementKnockedCount: () =>
    set((state) => ({ knockedCount: state.knockedCount + 1 })),
  setInitialKnockCount: () => set((state) => ({ knockedCount: 0 })),
  setTableHandler: (handler) => set({ tableHandler: handler }),
  setTableRef: (ref) => set({ tableRef: ref }),
  setCanMovement: (value) => set({ canMovement: value }),
  setWin: (value) => set({ winStatus: value }),
}));
