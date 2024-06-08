export type RoutineListType = {
  category: string;
  id: number;
  title: string;
  routine: RoutineDataType[];
  _id: string;
};

export type RoutineDataType = {
  kg: number;
  set: number;
  title: string;
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
