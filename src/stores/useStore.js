import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    imgSrc:'https://picsum.photos/800/500',
    participant:[]
  }),
  getters: {
    getImgSrc: (state) => state.imgSrc,
    getParticipant:(state) => state.participant
  },
  actions: {
    setImgSrc(url){
      this.imgSrc = url
    },
  },
});
