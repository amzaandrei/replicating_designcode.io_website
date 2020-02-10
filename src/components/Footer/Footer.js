import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    background: #F1F3F5;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
    
`
const LinkGroup = styled.div`
    width: 500px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;

    a{
        transition: 0.8s;
        color: #3436e7;
    }
    a:hover{
        color: black;
    }
`
const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
`
const Button = styled.button`
    background: linear-gradient(182.24deg, #9851E0 0%, #3436e7 100%);
    box-shadow: 0 10px 20px rgba(101,41,255, 0.15);
    border-radius: 30px;
    color: white;
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    font-size: 24px;
    justify-self: center;
    transition: 0.8s cubic-bezier(0.2,0.8,0.2, 1);

    &:hover{
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        transform: translateY(-3px);
    }
`
const Copyright = styled.div`
    color: #486791;
    max-width: 520px;
    margin: 0 auto;
    padding: 0 20px;
`

const Footer = ({data, children}) => (
    <FooterGroup>
        <Text>I am very to have you as a guess right inside my website!!!</Text>
        <Button>Tweet</Button>
        <LinkGroup>
            {data.allContentfulLink.edges.map(edge => (
            <a href={edge.node.url} style={{'text-decoration': 'none'}}>{edge.node.title}</a>
            ))}
        </LinkGroup>
        <Copyright>{children}</Copyright>
    </FooterGroup>
)

export default Footer