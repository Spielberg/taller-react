import { useQuery } from "@tanstack/react-query";
import { getCities } from "../requests/getCities";

export const useCities = (limit: 50 | 100 | 150) => {
  return useQuery({
    queryKey: ['cities', limit],
    queryFn: () => getCities(limit),
  })
}