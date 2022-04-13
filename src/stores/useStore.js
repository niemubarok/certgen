import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    imgSrc:'',
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
    clearImgSrc(){
      this.imgSrc = ''
    },
    setParticipant(data){
      this.participant.push(data)
    }
  },
});
