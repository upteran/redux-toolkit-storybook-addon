import { Action } from "@reduxjs/toolkit";

export interface OnDispatchEvent {
  id: number;
  date: Date;
  action: Action;
  diff: string;
  prev: string;
  state: string;
}
