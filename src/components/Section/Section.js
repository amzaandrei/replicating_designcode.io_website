import React from 'react'
import styled from 'styled-components'
import Wave from '../Wave/Wave'

const SectionGroup = styled.div`
    position: relative;
    background: url(${props => props.backgroud_img});
    height: 720px;
    background-size: cover;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;

    @media (max-width: 720px){
        height: 820px;
    }

`
const SectionLogo = styled.img`
    align-self: end;
    width: 120px;
    margin: 0 auto;
`

const SectionTitle = styled.h3`
    color: white;
    font-size: 60px;
    line-height: 1.2;
    margin: 0;
    
    @media (max-width: 720px){
        margin: 0 auto;
        font-size: 40px;
    }
`

const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    margin: 0 40px;
    grid-gap: 20px;
    grid-template-rows: auto 100%;

    @media (max-width: 720px){
        grid-template-columns: 1fr;
    }
    // 
`

const SectionText = styled.p`
    color: white;
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg);
`

const Section = props => (
    <SectionGroup backgroud_img={props.image}>
        <WaveTop><Wave /></WaveTop>
        <WaveBottom><Wave /></WaveBottom>
        <SectionLogo src={props.logo}/>
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
    </SectionGroup>
)

export default Section