import React from 'react';

export default function ActorResults(props) {
    if (props.error !== null) {
        return <h1>An error occurred, try again later or check your internet connection.</h1>;
    }
    if (props.data === null) {
        return <h1>Search Actors</h1>;
    }
    if (props.data !== null && props.error === null) {
        if (props.data.length === 0) {
            return (
                <div className="no-results-search">
                    <h1>We couldn't find anything that matches your search. Maybe try something else?</h1>
                </div>
            );
        }
        else {
            var listItem = props.data.map((element) => {
                return (
                    <li key={element.person.id} className="list-item">
                        <div className="link-container">

                            <a href={element.person.url} className="link">{element.person.name}</a>
                        </div>
                        <div>
                            {element.person.image ? (<img src={element.person.image.medium} alt={element.person.name} />
                            ) : (<div className="missing-img-div"><img src="" alt="" /></div>)}
                            <a className="url" href={element.person.url} >More details</a>
                           
                        </div>

                    </li>
                )
            });
        }
    }
    return (
        <ul className="list-container">
            {listItem}
        </ul>
    );
} 
