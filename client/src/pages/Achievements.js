import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap"
import AchievementList from "../components/AchievementList"
import { observer } from "mobx-react-lite"
import { useContext, useEffect, useTransition } from "react"
import { Context } from ".."
import { fetchAchievements } from "../http/elementsAPI"
import jwt_decode from "jwt-decode"


const Achievements = observer(() => {
    const { stats } = useContext(Context)
    stats.elements = []
    var steam_id = Object.getOwnPropertyDescriptor(jwt_decode(localStorage.getItem('token')), 'steam_id').value
    fetchAchievements(steam_id)
        .then(data => stats.setElement(data))
    return (
        <Row className="mt-2">
            <Col md={1}>
            </Col>
            <Col md={10}>
                <AchievementList></AchievementList>
            </Col>
            <Col md={1}></Col>
        </Row>
    )
})


export default Achievements