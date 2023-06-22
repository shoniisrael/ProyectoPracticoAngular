import { User } from "./rides.interface";

export interface Client {
  user: User;
  total_rides: number;
  total_finished: number;
  home_location: string;
  work_location: string;
}
