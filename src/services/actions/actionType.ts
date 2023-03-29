import { constructor } from "./constructor"
import { TaddIngredients } from "./ingredient"
import { TgetIngredients } from "./ingredients"
import { modal } from "./modals"
import { order } from "./order"
import { userReg } from "./user"
import { wsConectType } from "./wsConect"


export type TActions =
  modal
  | TgetIngredients
  | constructor
  | order
  | userReg
  | wsConectType
  | TaddIngredients
