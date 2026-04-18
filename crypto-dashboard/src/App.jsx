import Test from "@/components/Test";
import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

function App() {
  const fetchCoins = async() => {

    const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
    
    if (!response.ok) {
      throw new Error("Error en la API");
    }

    const data = await response.json();
    console.log("DATA:", data);

    return data;
  };

  const {data, isLoading, isError, refetch} = useQuery ({
    queryKey: ["coins"],
    queryFn: fetchCoins,
    staleTime: 1000 * 60,
    retry: false,
    refetchInterval: 1000 * 30,
  });


  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (isError) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
    <button onClick={() => refetch()}>
      Actualizar datos
    </button>
    {
      data?.map((coin) => (
       
        <div key={coin.id}>
          <p>{coin.name}</p>
          <p>{coin.current_price}</p>
        </div>
      ))
    }
    </div>
  );
}

export default App;