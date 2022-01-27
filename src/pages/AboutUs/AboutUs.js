import React from 'react';
import {
    FooterContainer,
    FooterSubHeading, FooterSubscription,
    FooterSubText,
    Form,
    FormInput
} from "../../components/Footer/Footer.elements";
import {Button} from "../../globalStyles";

const AboutUs = () => {
    return (
        <>
            <FooterContainer style={{backgroundColor: 'white', color: '#1c2237'}}>
                <FooterSubscription>
                    <FooterSubHeading style={{color: '#1c2237'}}>
                        About US
                    </FooterSubHeading>
                    <FooterSubText style={{color: '#1c2237'}}>Elite Quests was founded in 2015 with a goal to provide
                        cost effective and quality IT
                        solutions to various clients all over the world. EliteQuests specializes in following
                        services:</FooterSubText>
                    <FooterSubHeading style={{color: '#1c2237'}}>
                        Who are we?
                    </FooterSubHeading>
                    <FooterSubText style={{color: '#1c2237'}}>We are a Global IT Services Company with focuses in Staff
                        Augmentation and Fixed
                        Priced
                        Solutions in order to save you time and money. We are based out of Maryland but have the ability
                        to
                        work globally. We have clients all over the United States and the common theme from them is that
                        we
                        provide Quality Services at an affordable price. </FooterSubText>
                    <FooterSubHeading style={{color: '#1c2237'}}>Service Offerings:</FooterSubHeading>
                        <FooterSubText style={{color: '#1c2237'}}>
                            • Temporary/Contract Staffing
                            • Temporary – To – Direct Staffing
                            • Direct Placement Staffing
                            • Fixed Priced Project Solutions
                            • Off Shore Solutions
                            • Training
                            • Project Management
                        </FooterSubText>

                    <FooterSubHeading>
                        <FooterSubText>

                        </FooterSubText>
                    </FooterSubHeading>
                    {/*<FooterSubscription>*/}
                    {/*    <FooterSubHeading>*/}
                    {/*        Join our exclusive membership to receive the latest news and trends*/}
                    {/*    </FooterSubHeading>*/}
                    {/*    <FooterSubText>You can unsubscribe at any time.</FooterSubText>*/}
                    {/*    <Form>*/}
                    {/*        <FormInput name='email' type='email' placeholder='Your Email'/>*/}
                    {/*        <Button fontBig>Subscribe</Button>*/}
                    {/*    </Form>*/}
                    {/*</FooterSubscription>*/}
                </FooterSubscription>
            </FooterContainer>
        </>
    );
}

export default AboutUs;
