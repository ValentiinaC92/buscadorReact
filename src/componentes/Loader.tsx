import React from "react";

export interface LoaderState {
  agregarCarga: boolean;
}

class Loader extends React.Component<{}, LoaderState> {
  constructor(props: any) {
    super(props);

    this.state = {
      agregarCarga: false,
    };
  }

  render() {
    return (
      <div>
        <div
          className={`main-modal modal bg-black bg-opacity-75 fixed w-full h-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster`}
        >
          <div className="flex text-center items-center justify-center w-full h-full">
            <div className="flex-row text-center space-x-1 text-lg text-white">
              <div className="text-center w-full">
                <p className="w-full text-center">
                  <svg
                    fill="none"
                    className="w-16 h-16 animate-spin inline-block"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
                      fill="currentColor"
                      fillRule="evenodd"
                    />
                  </svg>
                </p>
              </div>

              <div className="w-full">Cargando ...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;
