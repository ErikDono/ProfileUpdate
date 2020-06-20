import React, { useState, useEffect } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Portfolio from "./Portfolio"
import NavLink from "react-bootstrap/NavLink";
import { HashRouter } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom'

const ExampleToast = ({ children }) => {
    const [show, toggleShow] = useState(true);

    return (
        <>
            {!show && <Button onClick={() => toggleShow(true)}>Thanks for visiting</Button>}
            <Toast show={show} onClose={() => toggleShow(false)}>
                <Toast.Header>
                    <strong className="mr-auto"></strong>
                </Toast.Header>
                <Toast.Body>{children}</Toast.Body>
            </Toast>
        </>
    );
};

export const Block = (props) =>
    <HashRouter>
        <ul class="navbar-nav ml-auto">
            <div class="btn-toolbar justify-content-between " role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group" role="group" aria-label="First group">
                    <button type="button" id='portBtn' class="btn btn-secondary"><NavLink to="/Portfolio">Portfolio</NavLink></button>

                    <button type="button" id='perBtn' class="btn btn-secondary">Personal Links</button>

                    <button type="button" id='contBtn' class="btn btn-secondary">Contact Me</button>

                    <button type="button" id='abtBtn' class="btn btn-secondary">About Me</button >

                    <button type="button" id="linkBtn" class="btn btn-secondary"><a
                        href="https://www.linkedin.com/in/erik-donovan-174a6877/" target="_blank" title="LinkedIn"
                        class="btn btn-sm"><img class='siteImg' src="../assets/linkedin.png" /></a></button>

                    <button type="button" id='faceBtn' class="btn btn-secondary"><a
                        href="https://www.facebook.com/erik.donovan.33?ref=bookmarks" target="_blank" title="Facebook"
                        class="btn btn-sm"><img class="siteImg" src="../assets/fbImg.png" /></a></button>

                    <button type="button" id='gitBtn' class="btn btn-secondary"><a href="https://github.com/ErikDono"
                        target="_blank" title="GitHub" class="btn  btn-sm"><img class="siteImg"
                            src="../assets/gitImg.png" /></a></button>
                </div >
            </div >
        </ul >
        
        {/* <BrowserRouter path="/Portfolio" component={Portfolio} /> */}
    </HashRouter>


export const Navi = (props) =>
    <Container>
        <Jumbotron >
            <Nav>
                <ExampleToast>
                    This is a work in progress! I just started react, and am trying to get bootstrap to work. This is a construction site, so please be mindful of where you're stepping!
        <span role="img" aria-label="tada">
                        🎉
        </span>

                </ExampleToast>
                <Block />
            </Nav>
        </Jumbotron >
    </Container>

export default Navi;