import { PropTypes } from 'prop-types';


export function Post ({ titulo, paragrafo, }) {

    return (
        <div>
            <li>
                <h2>{titulo} </h2>
                <p> {paragrafo} </p>
            </li>
            
        </div>
    )
}

PropTypes.Post = {
    title: PropTypes.string.isRequired,
    descriptions: PropTypes.string.isRequired
}




