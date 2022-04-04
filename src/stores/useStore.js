import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    imgSrc:'https://picsum.photos/800/500'
  }),
  getters: {
    getImgSrc: (state) => state.imgSrc
  },
  actions: {
    setImgSrc(url){
      this.imgSrc = url
    },
  },
});
