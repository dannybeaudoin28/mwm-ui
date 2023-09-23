import { useEffect } from "react";
import Content from "../../components/content/Content";

const Home = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <Content />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;