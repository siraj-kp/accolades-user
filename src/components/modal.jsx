const Modal = ({ show, onClose, title, showFooter, children }) => {
  return (
    <div
      style={{ display: show ? "block" : "none" }}
      className="modal"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-black" id="exampleModalLabel">
              {title}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body ">{children}</div>
          {showFooter && (
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                onClick={onClose}
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
