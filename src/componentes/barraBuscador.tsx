import React from "react";

export interface BuscadorState {}

/**
 * Interface de los parametros que recibirá el componente
 */
export interface BuscadorProps {
  textoBuscador: string;
  handleChange: any;
  handleKeyDown: any;
  getImages: any;
}

class BarraBuscador extends React.Component<BuscadorProps, BuscadorState> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="flex flex-row w-full pb-2 ml-2">
          <div className="flex items-center justify-center w-full pt-4">
            <div className="flex border-2 border-gray-200 rounded-lg ">
              <input
                type="text"
                className="px-4 py-2 w-96 rounded-lg"
                placeholder="Buscar..."
                value={this.props.textoBuscador}
                onChange={this.props.handleChange}
                onKeyDown={this.props.handleKeyDown}
              />
              <button
                onClick={this.props.getImages}
                className="px-4 py-2 text-white bg-green-600 border-l rounded-r-lg flex flex-row "
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BarraBuscador;
