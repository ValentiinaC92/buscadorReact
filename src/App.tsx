import React from "react";
import Buscador from "./aplicaciones/buscador";

/**
 * Component principal de la aplicación
 */
export class App extends React.Component {
  render() {
    return (
      <div className="absolute w-full h-full inset-0 overflow-hidden">
        <Buscador />
      </div>
    );
  }
}

export default App;
