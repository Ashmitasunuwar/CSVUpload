import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Table from './components/Table';
import { FileUploader } from "react-drag-drop-files";
function App() {
    const fileTypes = ['CSV'];
    const [data, setData] = useState([]);
    const [url, setUrl] = useState();
    useEffect(() => {
        console.log("efff ", data)
    }, [data])
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        console.log("set table ", file)
        Papa.parse(file, {
            header: true,
            complete: (results) => {
                setData(results.data);
            },
        })
    }

    const handleChangeUrl = (e) => {
        console.log(e.target.value)
        setUrl(e.target.value);
    }

    const handleurl = () => {
        fetch(url, {
            headers: { "content-type": "text/csv;charset=UTF-8" },
        })
            .then(res => res.text()) // Gets the response and returns it as a blob
            .then(blob => {
                // Here's where you get access to the blob
                Papa.parse(blob, {
                    header: true,
                    complete: (results) => {
                        console.log("1111 ", results.data)
                        setData(results.data);
                    },
                })
                //console.log("111 ", blob)
            });
    }
    //  /Users/ashmita/Desktop/JavaScript/reactTask/users.csv

    return (
        <div className="App">

            <div style={{ border: '2px dashed', textAlign: 'center' }} onDragOver={(event) => { console.log('drag over'); event.preventDefault(); }}
                onDrop={(event) => {
                    console.log('droped', event.dataTransfer.files);
                    event.preventDefault();
                    Array.from(event.dataTransfer.files).map(async (file) => {
                        let text = await file.text();
                        Papa.parse(file, {
                            header: true,
                            complete: (results) => {
                                console.log('result', results)
                                setData(results.data);
                            },
                        })
                    })
                }} >
                <input type='file' accept='.csv' onChange={handleFileUpload} />
                <h2>or drag and drop it here</h2>
                <div>
                    <h4> upload from URl
                    </h4>
                    <div>
                        <input type='text' value={url} onChange={handleChangeUrl} />
                        <button onClick={handleurl} >upload </button>
                    </div>
                </div>

            </div>

            {data.length ? <Table data={data} /> : null}
        </div>
    )
}

export default App;
