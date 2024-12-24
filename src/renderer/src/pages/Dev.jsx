import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Collections from '../components/Collections';


const Dev = () => {
    const [SeverOn, SetSeverOn] = useState('');
    const [files, setFiles] = useState([]);
    const [fileTest, SetFilesText] = useState('');

    useEffect(() => {
        // Using axios for making the API call
        axios.get('http://localhost:5000/config/isServerOn')
            .then(response => {
                SetSeverOn(response.data.Result);
            })
            .catch(error => {
                console.error('Error fetching message:', error);
            });
    }, []);

    useEffect(() => {

        axios
          .get(`http://localhost:5000/config/dbconfig`)
          .then((response) => {
            if (response.status === 200) {
              setFiles(response.data); 
              SetFilesText('Collection Found')
            } else {
              SetFilesText('No Collection Found')
            }
          })
          .catch((error) => {
            console.error('Error connecting to backend:', error);
          });
    }, []); 

    return (
        <div className='bg-[#24292e] min-h-screen'>
            <div className="mx-32 text-white py-16">
                <div className="">
                    <h1 className="">Server Status: 
                        {
                            SeverOn ? 
                                <span className='text-green-600 font-semibold'> Online</span>
                            :
                                <span className='text-red-600 font-semibold'> Offline</span>
                        }
                    </h1>
                    <h1 className="">Server Running Port: 
                        {
                            SeverOn ? 
                                <span className='text-green-600 font-semibold'> 5000</span>
                            :
                                <span className='text-red-600 font-semibold'> Please Run the Backend Server</span>
                        }
                    </h1>
                    <p className="">(Please Run your Backend Server on Port 5000)</p>
                </div>

                <hr className='my-4'/>

                <div className="">
                    <h1 className="">{fileTest}</h1>

                    <div className="">
                        <Collections files={files} />
                    </div>
                </div>
            </div>

            <div className="text-center text-sm">
                v1.0.0-beta1 23 December 2024 | Developed and Maintained by <span className='text-blue-500'>JehanKandy</span>
            </div>
        </div>
    );
};

export default Dev;
