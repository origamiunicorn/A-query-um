import React from "react";
import { Row, Col, Table } from 'react-materialize';
import CarouselContainer from './Carousel';
import AliasModal from './AliasModal';

const commFish = (communityFish) => {
    if (communityFish === true) {
        return "Yes";
    } else {
        return "No";
    }
};

const reefSafe = (reef) => {
    if (reef === null) {
        return "N/A";
    } else if (reef === true) {
        return "Yes";
    } else {
        return "No";
    }
};

function FishDetail(props) {
    const { fish } = props;

    const findInches = (parseInt(fish.maxSizeCM) / 2.54).toFixed(2);
    const findGallons = (parseInt(fish.minTankSizeL) / 3.785).toFixed(0);

    const splitTemp = fish.tempRangeC.split("-");
    const makeFah = splitTemp.map((temp) => {
        return ((parseInt(temp) * 9 / 5) + 32).toFixed(0);
    });
    const joinFah = makeFah.join("-");

    return (
        <>
            <AliasModal aliases={fish.aliases} />
            <h5><em>{fish.scientificName}</em></h5>

            <CarouselContainer images={fish.images} />

            <Row>
                <Col>
                    <p>
                        {fish.description}
                    </p>
                    <Table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Type:</strong></td>
                                <td>
                                    {fish.type}</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Maximum Size:</strong></td>
                                <td>
                                    {fish.maxSizeCM} cm ({findInches} in)</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Lifespan:</strong></td>
                                <td>
                                    {fish.lifespan}</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Diet:</strong></td>
                                <td>
                                    {fish.diet}</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Minimum Tank Size:</strong></td>
                                <td>
                                    {fish.minTankSizeL} Litres ({findGallons} Gallons)</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Temperature Range:</strong></td>
                                <td>
                                    {fish.tempRangeC}°C ( {joinFah}°F )</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Aggression Level:</strong></td>
                                <td>
                                    {fish.aggroLevel}</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Community Fish:</strong></td>
                                <td>
                                    {commFish(fish.communityFish)}</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Reef Safe:</strong></td>
                                <td>
                                    {reefSafe(fish.reefSafe)}</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Notes:</strong></td>
                                <td>
                                    {fish.notes}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </>
    );
}

export default FishDetail;