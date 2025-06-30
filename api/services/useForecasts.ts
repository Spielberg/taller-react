import { useMutation } from "@tanstack/react-query";
import { Forecast, getForecasts } from "../requests/getForecasts";

export const useForecasts = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (data: Forecast) => void;
  onError?: (error: Error) => void;
}) => {
  return useMutation({
    mutationFn: ({
      cityKey,
      days,
    }: {
      cityKey: string,
      days: 1 | 5 | 10 | 15,
    }) => getForecasts(cityKey, days),
    onSuccess,
    onError,
  })
}