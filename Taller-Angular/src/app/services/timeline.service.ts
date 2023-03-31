import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export interface ITimeLineData{
  title:String,
  descripcion:String
  Date:Date
}
export class TimelineService {
  timeLine:ITimeLineData[]
  constructor() { 
    this.timeLine=[]
  }
  addTimeLineData(timeLineData:ITimeLineData){
    this.timeLine.push(timeLineData)
  }
  get getTimeLineData(){
     return this.timeLine
  }
}
