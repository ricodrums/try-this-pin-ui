import { defineStore } from 'pinia';
import { Pin } from 'src/components/models';

const defaultPin: Pin = {id: 1, value: '2580', hasBeenTried: false};
const defaultPinList: Pin[] = []

export const usePinStore = defineStore('pin', {
  state: () => ({
    pinList: defaultPinList,
    selectedPin: defaultPin,
  }),

  getters: {
    getPinList: (state) => state.pinList,
    getSelectedPin: (state) => state.selectedPin,
    getNextPin: (state) => state.pinList.find((pin: Pin) => !pin.hasBeenTried) || defaultPin
  },

  actions: {
    setSelectedPin (newSelectedPin: Pin) {
      this.selectedPin = newSelectedPin;
    },
    setNewPinList(newPinList: Pin[]) {
      this.pinList = newPinList;
    }
  }
});
//  018000416181 L-V 8-5; s 7-12