// src/pages/Cabins.jsx

import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
    useEffect(function () {
        getCabins().then((data) => console.log(data));
    }, []);

    return (
        <Row type="horizontal">
            <Heading as="h1">All Cabins</Heading>
            <p>TEST</p>
        </Row>
    );
}

export default Cabins;
