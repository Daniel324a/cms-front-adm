import React from "react";

export const DeleteProductModal = () => {
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title text-dark" id="exampleModalLabel">
            Eliminar Producto
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          ¿Estas Seguro?
          <br />
          Esta acción es irreversible...
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Cerrar
          </button>
          <button type="button" className="btn btn-danger">
            Si, eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
