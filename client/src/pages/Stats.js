import { Container, Row, Col, Card } from "react-bootstrap"
import ElementsList from "../components/ElementsList"
import { observer } from "mobx-react-lite"
import { useContext, useEffect, useTransition } from "react"
import { Context } from ".."
import { fetchElements, fetchPType, fetchSType } from "../http/elementsAPI"
import jwt_decode from "jwt-decode"

import STypeBar from "../components/STypeBar"
import PTypeBar from "../components/PTypeBar"



const Stats = observer(() => {
    const { stats } = useContext(Context)
    stats.elements = []

    var steam_id = Object.getOwnPropertyDescriptor(jwt_decode(localStorage.getItem('token')), 'steam_id').value

    useEffect(() => {
        fetchPType().then(data => stats.setPType(data))
        // fetchSType().then(data => stats.setSType(data))
        fetchElements(steam_id, '', '')
            .then(data => stats.setElement(data.rows))
    }, [])

    useEffect(() => {
        fetchElements(steam_id, Object.values(stats.selectedPType)[0], stats.selectedSType).then(data => {
            stats.setElement(data.rows)
        })
    }, [stats.selectedPType, stats.selectedSType])


    return (
        <Row className="mt-2">
            <Col md={3} id='stype'>
                <STypeBar></STypeBar>
            </Col>
            <Col md={8}>
                <PTypeBar></PTypeBar>
                <ElementsList />
            </Col>
        </Row>

    )
})


export default Stats