import * as fb from 'firebase'


class Ad {
  constructor (title, description, ownerId, imageSrc='', promo = false, id = null) {
  this.title = title
  this.description = description
  this.ownerId = ownerId
  this.imageSrc = imageSrc
  this.promo = promo
  this.id = id
  }
}

export default {
    state: {
        ads: [
            // {
            //   title: "First ad",
            //   description: "Hello i am description",
            //   promo: false,
            //   imageSrc: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
            //   id: "123"
            // },
            // {
            //   title: "Second ad",
            //   description: "Hello i am description",
            //   promo: true,
            //   imageSrc: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
            //   id: "1234"
            // },
            // {
            //   title: "Third ad",
            //   description: "Hello i am description",
            //   promo: true,
            //   imageSrc: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
            //   id: "12345"
            // }
          ]
    },
    mutations: {
      createAd (state, payload) {
        state.ads.push(payload)

      },
      loadAds (state, payload) {
        state.ads = payload
      }
    },
    actions: {
      async createAd ({commit, getters}, payload) {
        commit('clearError')
        commit('setLoading',true)

        try {
          const newAd = new Ad(
            payload.title,
            payload.description,
            getters.user.id,
            payload.imageSrc,
            payload.promo
            )


          const fbValSet = await fb.database().ref('ads').push(newAd)
          
          commit('setLoading', false)
          commit('createAd', {
            ...newAd,
            id: fbValSet.key
          })
        } catch (error) {
          commit('setError', error.message)
          commit('setLoading', false)
          throw error
        }
      },
      async fetchAds ({commit}) {
        commit('clearError')
        commit('setLoading', true)

        const resultAds = []

        try {

          const fbValGet = await fb.database().ref('ads').once('value')
          const ads = fbValGet.val()
          Object.keys(ads).forEach(key => {
            const ad = ads[key]
            resultAds.push(
              new Ad(ad.title, ad.description, ad.ownerId, ad.imageSrc, ad.promo, key)
            )
          })
          commit('loadAds', resultAds)
          commit('setLoading', false)
        } catch (error) {
          commit('setError', error.messege)
          commit('setLoading', false)
          throw error
        }
      }
    },
    getters:{
        ads (state) {
            return state.ads
        },
        promoAds (state) {
            return state.ads.filter(ad =>{
                return ad.promo === true
            })

        },
        myAds (state) {
            return state.ads
        },
        adById (state) {
          return adId => {
            return state.ads.find(ad => ad.id === adId)
          }
        }
    }
}