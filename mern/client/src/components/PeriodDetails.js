const PeriodDetails = ({period}) =>{
    return (
        <div className="period-details">
            <p>length : {period.length}</p>
            <p>mood : {period.mood}</p>
        </div>
    )
}

export default PeriodDetails