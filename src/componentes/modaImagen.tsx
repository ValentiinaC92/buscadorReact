import React from "react";

export interface cargaState {}

// Interfaz props para recibir la data de imagenes
export interface DataImagen {
  datos: any;
  cerrarModal: any;
}

class ModalImagen extends React.Component<DataImagen, cargaState> {
  /**
   * Observables
   */
  // private observables: Subscription[] = [];

  constructor(props: any) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div
          className=" bg-card-bg bg-opacity-50  animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
          id="modal-id"
        >
          <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
          <div className="w-full max-w-lg max-h-screen p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white text-center ">
            <div
              className="flex flex-col w-full text-center text-pink-900 font-mono text-lg"
              style={{ textAlign: "center" }}
            >
              <span className="text-center">{this.props.datos.title}</span>
            </div>
            <div className="flex flex-col">
              <img
                className="w-full block mx-auto object-cover object-center rounded-t-lg shadow-md"
                style={{ maxHeight: "calc(106vh - 300px)" }}
                src={this.props.datos.images.fixed_height.url}
              />
            </div>
            <div className="flex flex-col w-full bg-gray-300 rounded-b-lg">
              <div className="flex flex-col w-full text-center text-gray-500 text-sm">
                Tipo: {this.props.datos.type}
              </div>
              <div className="flex flex-col w-full text-center text-gray-500 text-sm">
                Url: {this.props.datos.url}
              </div>
            </div>
            <div className="flex flex-col w-full text-center justify-center items-center">
              <button
                onClick={() => this.props.cerrarModal(false)}
                className="w-1/3 border border-teal-600 hover:bg-teal-400 hover:text-teal-800 rounded-lg py-1 text-black mt-2"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalImagen;
