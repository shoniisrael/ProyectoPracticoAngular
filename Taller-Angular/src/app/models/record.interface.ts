export interface Driver {
  name: string;
  orders: number;
  income: number;
  phone: string;
  ID: number;
}
export interface Record {
  id: string;
  createdTime: string;
  fields: Driver;
}

export interface AirTableData {
  records: Record[];
}
