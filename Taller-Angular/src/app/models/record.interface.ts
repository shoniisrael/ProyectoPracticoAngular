export interface Fields {
  name: string;
  orders: number;
  income: number;
  phone: string;
  ID: number;
  startLocation: string;
  finishLocation: string;
  userName: string;
  userPhone: string;
  userImageSrc: string;
  carConfort: string;
}
export interface Record {
  id: string;
  createdTime: string;
  fields: Fields;
}

export interface AirTableData {
  records: Record[];
}
