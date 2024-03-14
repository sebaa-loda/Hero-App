import { heroes } from "../data/heroes"




export const getHeroByName = ( name = '') => {
  
  name = name.toLocaleLowerCase().trim()

  if( name.lenght === 0) return []

  return heroes.filter(
    hero => hero.superhero.toLocaleLowerCase().includes(name)
  )

}