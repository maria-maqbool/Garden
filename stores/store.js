import { create } from "zustand";

const initialState = [{ name: "plant1", color: "green" }];
export const useStateStore = create((set) => ({
  garden: initialState,
  addPlanter: (name, color, index) =>
    set((state) => {
      return { garden: [...state.garden, { name, color }], activeIndex: index };
    }),
  setPlantColor: (color) =>
    set((state) => {
      const updatedPlants = [...state.garden];
      updatedPlants[state.activeIndex] = {
        ...updatedPlants[state.activeIndex],
        color,
      };
      return {
        garden: updatedPlants,
      };
    }),
  activeIndex: 0,
  setActive: (index) => set(() => ({ activeIndex: index })),
  width: 20,
  height: 20,
  changeHeight: (height) => set(() => ({ height })),
  changeWidth: (width) => set(() => ({ width })),
}));
