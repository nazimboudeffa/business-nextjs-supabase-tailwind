function Product (props) {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src="/images/stock/erik-mclean-aielvGxZB0g-unsplash.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Go!</button>
                </div>
            </div>
        </div>
    )
}

export default Product