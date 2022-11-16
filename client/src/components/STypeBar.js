import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { Context } from "../index"
import { Button, Card, Row } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';

const PTypeBar = observer(() => {
    const { stats } = useContext(Context)
    return (
        <ListGroup>
            {stats.stype.map(stype =>
                <ListGroup.Item
                    style={{ cursor: 'pointer' }}
                    key={Math.random()}
                    onClick={() => {stats.setSelectedSType(stype)}}
                    active={stype === stats.selectedSType}
                >
                    {Object.values(stype)}
                </ListGroup.Item>
            )}
        </ListGroup>
    )
})


export default PTypeBar