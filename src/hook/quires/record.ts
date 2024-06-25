import { addRecordAPI } from "@/service/record";
import { useMutation } from "@tanstack/react-query";

export function useAddRecord() {
  const { mutate: addRecord } = useMutation({
    mutationKey: ["addRecord"],
    mutationFn: addRecordAPI,
  });

  return { addRecord };
}
