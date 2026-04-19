import { useQuery } from "@tanstack/react-query";

const fetchCoins = async (search) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${search}`
  );

  if (!response.ok) {
    throw new Error("Error en la API");
  }

  return response.json();
};

export const useCoins = (search) => {
  return useQuery({
    queryKey: ["coins", search],
    queryFn: () => fetchCoins(search),
    staleTime: 1000 * 60,
    retry: false,
    refetchInterval: 1000 * 30,
    enabled: !!search,
  });
};