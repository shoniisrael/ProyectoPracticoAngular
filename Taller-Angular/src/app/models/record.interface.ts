export interface Record {
  id: string;
  createdTime: string;
  fields: {
    Name: string;
  };
}

export interface AirTableData {
  records: Record[];
}
