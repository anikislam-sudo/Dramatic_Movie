
import { atom } from 'recoil'
import { Movie } from '../utills/Typing'


export const modalState = atom({
  key: 'modalState',
  default: false,
})

export const movieState = atom<Movie | null>({
  key: 'movieState',
  default: null,
})