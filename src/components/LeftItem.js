
const LeftItem = ({ item }) => { 
    return () => {
        <div className="left-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </div>
    }
}

export default LeftItem;