export interface StoreUpdate {
  type: string,
  key?: string,
  value?: string
}

export type StoreAction = StoreUpdate
