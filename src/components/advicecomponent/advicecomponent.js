import { useState } from "react";
import { GetAdvice } from "../../Services/DataServices";
import { Button, Container, Row, Col } from 'react-bootstrap';
import './advice.css';

export default function Advice() {
    const [adviceReturn, setAdviceReturn] = useState({
        slip : {
           id : '0',
           advice : "This probably isn't the best idea." 
        }
    });
    
    return <div className="containerSpacing">
                <Container className="adviceContainer">
                    <Row>
                        <Col>
                            <h1 className="adviceId">ADVICE #{adviceReturn.slip.id}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 className="adviceText">"{adviceReturn.slip.advice}"</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="svgCol">
                            <svg className="desktopDivider" width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
                            <svg className="mobileDivider" width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="btnCol">
                            <Button className="adviceBtn" onClick={async () => {
                                setAdviceReturn(await GetAdvice());
                            }} variant="primary"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg></Button>
                        </Col>
                    </Row>
                </Container>
            </div>
}