import { useParams } from "react-router";

const FullPosting = (props) => {
    const { id } = useParams();

    return (
        <h1>{id}</h1>
    );
};

export default FullPosting;
