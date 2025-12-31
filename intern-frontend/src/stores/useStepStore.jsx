import { create } from "zustand";

const useStepStore = create((set) => ({
  step: 1,
  increase: () => set((state) => ({ step: state.step + 1 })),
  decrease: () => set((state) => ({ step: state.step - 1 })),
  setStep: (newStep) => set(() => ({ step: newStep })),
}));

export default useStepStore;
