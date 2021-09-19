import React from "react";
import { Box } from "@mui/system";
import PokemonTable from "./components/PokemonTable";

const App = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
    >
      <Box width={800}>
        <PokemonTable />
      </Box>
    </Box>
  );
};

export default App;
