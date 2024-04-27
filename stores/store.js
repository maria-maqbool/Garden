import { create } from 'zustand'

const useGardenStore = create((set) => ({
  width: 20,
  height: 20,
  changeHeight: (height) => set(() => ({ height: height })),
  changeWidth: (width) => set(() => ({ width: width })),
}))
export default useGardenStore;
