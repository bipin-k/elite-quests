import React from 'react';
import {
    FooterContainer,
    FooterSubHeading, FooterSubscription,
    FooterSubText,
    Form,
    FormInput
} from "../../components/Footer/Footer.elements";
import { Button } from "../../globalStyles";
import { Container } from '../../globalStyles';
import { InfoSec } from '../../components/InfoSection/InfoSection.elements';

const AboutUs = () => {
    return (
        <>
            {/* <InfoSec lightBg='false'>
                <Container> */}
            <FooterContainer style={{ backgroundColor: '#101522', color: '#f7f8fa' }}>
                <FooterSubscription>
                    <FooterSubHeading style={{ color: '#f7f8fa' }}>
                        About US
                    </FooterSubHeading>
                    <FooterSubText style={{ color: '#f7f8fa' }}>Elite Quests was founded in 2015 with a goal to provide
                        cost effective and quality IT
                        solutions to various clients all over the world. EliteQuests specializes in following
                        services:</FooterSubText>
                    <FooterSubHeading style={{ color: '#f7f8fa' }}>
                        Who are we?
                    </FooterSubHeading>
                    <FooterSubText style={{ color: '#f7f8fa' }}>We are a Global IT Services Company with focuses in Staff
                        Augmentation and Fixed
                        Priced
                        Solutions in order to save you time and money. We are based out of Maryland but have the ability
                        to
                        work globally. We have clients all over the United States and the common theme from them is that
                        we
                        provide Quality Services at an affordable price. </FooterSubText>
                    <FooterSubHeading style={{ color: '#f7f8fa' }}>Service Offerings:</FooterSubHeading>
                    <FooterSubText style={{ color: '#f7f8fa' }}>
                        <ul>
                            <li style={{ textAlign: 'left' }}>Temporary/Contract Staffing</li>
                            <li style={{ textAlign: 'left' }}>Off Shore Solutions</li>
                            <li style={{ textAlign: 'left' }}>Project Management</li>
                            <li style={{ textAlign: 'left' }}>Fixed Priced Project Solutions</li>
                            <li style={{ textAlign: 'left' }}>Direct Placement Staffing</li>
                            <li style={{ textAlign: 'left' }}>Temporary To Direct Staffing</li>
                        </ul>
                    </FooterSubText>

                    <FooterSubHeading>
                        <FooterSubText>

                        </FooterSubText>
                    </FooterSubHeading>
                </FooterSubscription>
            </FooterContainer>
            {/* </Container>
            </InfoSec> */}

            <FooterContainer style={{ backgroundColor: '#101522', color: '#f7f8fa' }}>
            </FooterContainer>

        </>
    );
}

export default AboutUs;
