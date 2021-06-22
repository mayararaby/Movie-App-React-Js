export default function MovieDetailsLeftCard({ LeftCard }) {
    return (
        <div className="card mt-5 ml-3">
            
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${LeftCard.poster_path}`} alt="Card image" />
            <div className="card-body text-center">
                <h4 className="card-title font-weight-bold">{LeftCard.title}</h4>
                <span className="badge badge-success" style={LeftCard.status=="Released"?{backgroundColor:"#28a745"}: {backgroundColor:"#dc3545"}}>{LeftCard.status}</span>
            </div>
        </div>
    );
}
