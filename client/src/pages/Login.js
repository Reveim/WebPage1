import React, { useContext, useState } from 'react';
import { Card, Container, Form, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { login } from '../http/userAPI';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import {useNavigate} from 'react-router-dom'
import { STATS_ROUTE } from '../utils/consts';


const Login = observer(() => {
    const { user } = useContext(Context)
    const [steam_id, setSteam_Id] = useState('')
    const navigate = useNavigate()

    const click = async () => {
        try {
        let data
        data = await login(steam_id)
        user.setSteam_Id(steam_id)
        user.setUser(user)
        user.setIsAuth(true)
        navigate(STATS_ROUTE)
    }catch (e) {
        alert(e.response.message)
    }
}
    return (
    <Container
        className='d-flex'
        style={{ height: window.innerHeight - 54, justifyContent: 'center', alignItems: 'center' }}
    >
        <Card style={{
            width: 600, height: 250,
            background: '#343A40'
        }} className="p-5">
            <h2 className='m-auto align-self-top' style={{ color: "lime" }}>Authorization</h2>
            <Form className='d-flex flex-column' style={{}}>
                <Form.Control
                    className='mt-3'
                    placeholder="Enter your steam id..."
                    onChange={e => setSteam_Id(e.target.value)}
                />
                <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                    <div className='align-self-end mb-2' style={{ color: 'yellow' }}>
                        Log in to veiw your stats!
                    </div>
                    <Button
                        variant='dark'
                        style={{ color: "Yellow" }}
                        onClick={click}
                    >
                        Enter
                    </Button>
                </Row>

            </Form>
        </Card>

    </Container>
)
})


export default Login