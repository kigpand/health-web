export type RoutineListType = {
  id: number;
  title: string;
  category: string;
  date: any;
  routine: RoutineDataType[];
  _id: string;
};

export type RoutineDataType = {
  kg: number;
  set: number;
  title: string;
  link?: string;
};

export type AddRoutineType = {
  title: string;
  category: string;
  routine: RoutineDataType[];
};

export type UpdateRoutineType = {
  id: number;
  title: string;
  category: string;
  routine: RoutineDataType[];
};
