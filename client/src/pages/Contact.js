import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Contact = () =>{
    return(
        <Container className='d-flex' style={{alignItems:'center', justifyContent: 'center',}}>
            <h2 style={{margin:'250px'}}>Site owner: Piven Nikita<br/> 
            Telephone number: 8800553535 
            {/* <h6 style={{opacity: '0.05'}}>проще позвонить чем у кого-то занимать</h6> */}
            <br/>
            Email addres: <a href="mailto:pivennv@oiate.ru">pivennv@oiate.ru</a></h2>
                
       
        </Container>
    );
};


export default Contact;