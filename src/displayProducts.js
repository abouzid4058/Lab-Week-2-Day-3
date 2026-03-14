import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

function DisplayProducts(props) {
  const { products, handleAdd, handleSubtract } = props;

  // useState hook 1: controls modal show/hide
  const [show, setShow] = useState(false);
  // useState hook 2: stores the product to display in the modal
  const [showImge, setShowImge] = useState({});

  // Handlers for modal
  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setShow(true);
    setShowImge(product);
  };

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-row border-bottom py-3 px-4 d-flex align-items-center">
          {/* Product name (top-left) */}
          <div className="product-info">
            <div className="product-desc mb-2">{product.desc}</div>
            <div className="d-flex align-items-center">
              {/* Clickable product image opens modal */}
              <img
                src={product.image}
                alt={product.desc}
                width="80"
                height="80"
                className="product-img me-4"
                onClick={() => handleShow(product)}
                style={{ cursor: "pointer", objectFit: "cover" }}
              />

              {/* Add / Subtract buttons */}
              <div className="d-flex align-items-center me-3">
                <button
                  className="btn-icon me-2"
                  onClick={() => handleAdd(product)}
                >
                  <FontAwesomeIcon icon={faPlusCircle} className="fa-lg text-secondary" />
                </button>
                <button
                  className="btn-icon"
                  onClick={() => handleSubtract(product)}
                >
                  <FontAwesomeIcon icon={faMinusCircle} className="fa-lg text-secondary" />
                </button>
              </div>

              {/* Quantity display */}
              <div className="qty-box">
                <div className="qty-label">Quantity</div>
                <input
                  type="text"
                  readOnly
                  value={product.qty}
                  className="qty-input text-center"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Modal (lightbox) - shown when product image is clicked */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{showImge.desc}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={showImge.image}
            width="350"
            alt={showImge.desc}
            className="mx-5"
          />
          <p className="mt-3">
            <span className="text-dark fw-bold">Ratings:</span> {showImge.ratings}/5
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DisplayProducts;
