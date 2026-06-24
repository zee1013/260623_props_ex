import "../App.css"
function ProductModal({product, onClose}){
    const {title, price, category, image} = product
    return(
        <>
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close" onClick={onClose}>x</button>
                <img src={image} alt={title} />
                <div className="modal-content">
                    <span className="category">{category}</span>
                    <h2>{title}</h2>
                    <p className="price">{price.toLocaleString()}원</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default ProductModal