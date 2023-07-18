const LocationInfo = ({ location }) => {
 
    return (
        <article>
            <ul className="form">
           
                <li className="info"><span>Nombre:</span><br />
                    <span>{location?.name}</span></li>
                <br />
                <li className="info"><span>Tipo:</span><br />
                    <span>{location?.type}</span></li>
                <br />
                <li className="info"><span>Dimension:</span><br />
                    <span>{location?.dimension}</span></li>
                <br />
                <li className="info"><span>Población:</span><br />
                    <span>{location?.residents.length}</span></li>

            </ul>
        </article>
    )
}

export default LocationInfo