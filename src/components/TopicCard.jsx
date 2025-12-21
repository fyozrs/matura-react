import "../css/TopicCard.css"

function TopicCard({ topic }) {
    function onFavoriteClick() {
        alert("clicked!")
    }

    return <div className="topic-card">
        <div className="topic-overlay">
            <button className="favorite-btn" onClick={onFavoriteClick}>
                ♡
            </button>
        </div>
        <div className="topic-info">
            <h3>{topic.title}</h3>
        </div>
    </div>
}

export default TopicCard