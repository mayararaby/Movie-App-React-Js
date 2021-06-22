import './MovieDetailsRightSide.css'

export default function MovieDetailsRightSide({ RightCard }) {
    const NotReleased = "Not Released Yet"
    return (
        <div className="card mt-5 ml-3 mb-5">
            <div className="card-body">
                <span className="badge badge-info" style={RightCard.status=="Released"?
                    {backgroundColor:"#17a2b8"}: {backgroundColor:"#dc3545"}}>
                    Realise Date : 
                    {RightCard.status=="Released"?RightCard.release_date :NotReleased } 
                </span>
                <h5 className="title">
                overview
                </h5>
                <p className="card-body">{RightCard.overview}</p>
                <h5 className="title">
                Popularity : 
                </h5>
                <p className="card-body">{RightCard.popularity}</p>
                <h5 className="title">
                Revenue : 
                </h5>
                <p className="card-body">{RightCard.revenue} $ </p>
                <h5 className="title">
                Runtime : 
                </h5>
                <p className="card-body">{RightCard.runtime} Min </p>
            </div>
        </div>
    );
}
