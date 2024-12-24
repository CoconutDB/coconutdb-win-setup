import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoIosHome } from "react-icons/io";
import { Link } from 'react-router-dom';

const ServerOn = () => {
    const [isBackendRunning, setIsBackendRunning] = useState(false);
    const [files, setFiles] = useState([]);
    const [ServerPort, SetServerPort] = useState(localStorage.getItem('port'));
    const [ProtData, SetPortData] = useState({
        portno: ServerPort,
    });

    useEffect(() => {
        axios
            .get(`http://localhost:5000/config/dbconfig`)
            .then((response) => {
                if (response.status === 200) {
                    setIsBackendRunning(true);
                    setFiles(response.data);
                } else {
                    setIsBackendRunning(false);
                }
            })
            .catch((error) => {
                console.error('Error connecting to backend:', error);
                setIsBackendRunning(false);
            });
    }, [ServerPort]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        SetPortData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const chagePort = (e) => {
        e.preventDefault();
        const newPort = ProtData.portno;
        SetServerPort(newPort);
        localStorage.setItem('port', newPort);
    };

    return (
        <div className='bg-[#24292e] min-h-screen'>
            <div className="mx-32 text-white py-14">
                <Link to={'/'}>
                    <div className="flex">
                        <IoIosHome className='w-6 h-auto'/>
                        <p className="text-sm pt-1">Back to Welcome</p>
                    </div>
                </Link>
                <h1 className="mt-4 pb-2">Configure Backend</h1>
                <hr className='w-1/2 '/>

                <p>{import.meta.env.VITE_APP_API}{ServerPort}</p>

                <p>
                    {isBackendRunning ? (
                        <p className="text-green-500">Server Connected</p>
                    ) : (
                        <p className="pt-1 text-red-600">Server Not Running or Server Running on Another Port</p>
                    )}
                </p>

                <p className="">{files[1]}</p>

                <form method="post" onSubmit={chagePort}>
                    <p className="mt-4">Enter Backend Running Port (Server Port)</p>
                    <input
                        required
                        type="number"
                        name="portno"
                        className="pl-2 bg-transparent border border-white text-white w-full h-12 rounded mt-2"
                        placeholder='Server Port'
                        value={ProtData.portno}
                        onChange={handleInputChange}
                    />
                    <button type='submit' className='mt-4 bg-green-600 text-white py-2 px-8 rounded'>Run</button>
                </form>

                <hr className='border-t border-white my-4'/>
            </div>
        </div>
    );
};

export default ServerOn;
