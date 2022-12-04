const Card = ({ character = "" }) => {
    const { url, title, albumId } = character;
    return (
        <div className="col-md-4 mb-2">
            <div className="card">
                <img
                    src={url}
                    alt={`imagen-${albumId}`}
                    className="card-img-top"
                />
                <div className="card-body">
                    <h5>{title}</h5>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );

};


export default Card;
