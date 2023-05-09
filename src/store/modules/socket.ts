// store/modules/socket.ts
import { defineStore } from 'pinia';

export interface SocketState {
  connected: boolean;
}

export const useSocketStore = defineStore('socket', {
  state: (): SocketState => ({
    connected: false,
  }),
  actions: {
    setConnected(connected: boolean) {
      this.connected = connected;
    },
  },
});
