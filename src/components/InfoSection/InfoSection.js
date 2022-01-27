import React from 'react';
import {Container} from '../../globalStyles';
import {
    Heading,
    Img,
    ImgWrapper,
    InfoColumn,
    InfoRow,
    InfoSec,
    Subtitle,
    TextWrapper,
    TopLine
} from './InfoSection.elements';

function InfoSection({
                         primary,
                         lightBg,
                         topLine,
                         lightTopLine,
                         lightText,
                         lightTextDesc,
                         headline,
                         description,
                         buttonLabel,
                         img,
                         alt,
                         imgStart,
                         start
                     }) {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                {/*<Link to='/sign-up'>*/}
                                {/*    <Button big fontBig primary={primary}>*/}
                                {/*        {buttonLabel}*/}
                                {/*    </Button>*/}
                                {/*</Link>*/}
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img.default} alt={alt}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    );
}

export default InfoSection;
