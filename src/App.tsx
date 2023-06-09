import React from "react";
import Buscador from "./aplicaciones/buscador";

/**
 * Component principal de la aplicación
 */
export class App extends React.Component {
  render() {
    return (
      <div>
        <Buscador />
      </div>
    );
  }
}

export default App;
