import { create } from "zustand";

const useGardenStore = create((set) => ({
  width: 20,
  height: 20,
  qunatity: 2,
  color: 'green',
  setColor :(color) => set(() => ({ color: color })),
  setQuantity: (quantity) => set(() => ({ quantity: quantity })),
  changeHeight: (height) => set(() => ({ height: height })),
  changeWidth: (width) => set(() => ({ width: width })),
}));
export default useGardenStore;
