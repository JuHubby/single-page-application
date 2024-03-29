// // const { default: axios } = require("axios");
// import axios from 'axios';
// import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';
// import axios, {isCancel, AxiosError} from 'axios';
// import axios, {isCancel, AxiosError} from 'axios';
// const axios = require('axios');
// console.log(axios.isCancel('something'));
// const axios = require('axios/dist/browser/axios.cjs');

function App(){
    const [data, setData] = React.useState(null);        
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        async function getData() {
            // const axios = require('axios');
            // console.log(axios.isCancel('something'));
            const response = await fetch('./books.json');
            const json     = await response.json();
            setData(json);
            setLoaded(true);

        }
        getData();
    },[])
    console.log('loaded:', loaded, 'data:', data);

    return (<>
        <div className="container">
            <h1>React Components</h1>
            {loaded && data.books.map((book,i) => 
                <mit-book key={i}
                    title={book.title} 
                    subtitle={book.subtitle}
                    author={book.author}
                    publisher={book.publisher}
                    description={book.description}
                />
            )}
        </div>        
    </>);   
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
