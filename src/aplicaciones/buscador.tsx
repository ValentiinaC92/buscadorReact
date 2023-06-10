import React from "react";
import Loader from "../componentes/Loader";
import ModalImagen from "../componentes/modaImagen";
import BarraBuscador from "../componentes/barraBuscador";

export interface BuscadorState {
  searchText: string;
  datos: any[];
  loader: boolean;
  modal: boolean;
  ImgSeleccionada: any;
  cerrarModal: string;
}

class Buscador extends React.Component<{}, BuscadorState> {
  constructor(props: any) {
    super(props);

    this.state = {
      searchText: "",
      datos: [],
      loader: false,
      modal: false,
      ImgSeleccionada: [],
      cerrarModal: "",
    };

    this.getImages = this.getImages.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.cerrarModal = this.cerrarModal.bind(this);
    this.abrirModal = this.abrirModal.bind(this);
  }

  /**
   * Evento para obtener la data de imagenes segun la busqueda realizada
   */
  private getImages(): void {
    if (this.state.searchText !== "") {
      this.setState({ loader: true });
      const apiKey = "pX5srDmQSWBu1gfra9XbPx6ASeYBSWGf";
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${this.state.searchText}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ datos: data.data });
          this.setState({ loader: false });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      this.setState({ datos: [] });
    }
  }

  /**
   * Evento para buscar con el boton en el buscador
   *
   * @param event evento onChange
   */
  private handleChange(event: any) {
    this.setState({ searchText: event.target.value });
  }

  /**
   * Evento que se ejecuta para escribir en el buscador
   * @param event evento onKeyDown
   */
  private handleKeyDown(event: any) {
    if (event.key === "Enter") {
      this.getImages();
    }
  }

  /**
   * Evento para abrir modal
   */
  private abrirModal(valorM: any, item: any) {
    let valor = valorM ? false : true;
    this.setState({ modal: valor, ImgSeleccionada: item });
  }

  /**
   * Evento para cerrar modal
   */
  private cerrarModal() {
    this.setState({ modal: false });
  }

  render() {
    return (
      <>
        {this.state.loader ? <Loader /> : ""}
        {this.state.modal ? (
          <ModalImagen
            datos={this.state.ImgSeleccionada}
            cerrarModal={this.cerrarModal}
          />
        ) : (
          ""
        )}
        <BarraBuscador
          textoBuscador={this.state.searchText}
          handleChange={this.handleChange}
          handleKeyDown={this.handleKeyDown}
          getImages={this.getImages}
        />
        <div
          className="flex flex-row w-full px-3 overflow-auto"
          style={{ maxHeight: "calc(106vh - 120px)" }}
        >
          <div className="-m-1 flex flex-wrap md:-m-2 px-3">
            {this.state.datos.map((imag: any, index: any) => (
              <div
                key={index}
                className="flex w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-1 md:p-2"
                onClick={() => this.abrirModal(this.state.modal, imag)}
              >
                <img
                  className="block mx-auto h-full object-cover object-center rounded-lg shadow-md"
                  src={imag.images.fixed_height.url}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Buscador;
