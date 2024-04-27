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
  _id: string;
};
