import { useCoins } from "@/hooks/useCoins";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const { data, isLoading, isError, error } = useCoins(search);

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar crypto"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />

      {data?.map((coin) => (
        <div key={coin.id}>
          <p>{coin.name}</p>
          <p>{coin.current_price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;