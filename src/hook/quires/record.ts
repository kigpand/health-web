import { addRecordAPI, getRecord } from "@/service/record";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";

export function useRecord(count: number) {
  const { data: record, isSuccess: recordSuccess } = useSuspenseQuery({
    queryKey: ["record", count],
    queryFn: () => getRecord(count),
  });

  return { record, recordSuccess };
}

export function useAddRecord() {
  const { mutate: addRecord } = useMutation({
    mutationKey: ["addRecord"],
    mutationFn: addRecordAPI,
  });

  return { addRecord };
}
