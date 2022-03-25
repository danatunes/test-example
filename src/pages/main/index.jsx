import React, {useEffect} from 'react';
import {useWebsites} from "../../hooks/useWebsites";
import {useNavigate} from "react-router-dom";

const Main = () => {

    const navigate = useNavigate();

    const {error, loading, data} = useWebsites();

    const token = localStorage.getItem("access_token")

    useEffect(() => {
        if (token === null) {
            navigate("/login")
        }
    }, [])

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <p>main
            {
                data &&
                data.viewer.sites.map((site) => (
                    <p>{site.host}</p>
                ))
            }
        </p>
    )
};

export default Main;