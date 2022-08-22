import Head from 'next/head';
import Header from './../components/layout/Header/Header';
import { Flex, Box, Text } from 'rebass';
import styled from 'styled-components';
import Footer from './../components/layout/Footer/Footer';
import { FadeUp } from '../components/layout/Fade/Fade';

const paragraphStyles = {
    fontSize: '3rem',
    width: '120rem',
    mb: '8rem',
    fontWeight: 200,
    opacity: 0.7,
    lineHeight: '5rem'
};

export default function About() {
    return (
        <>
            <StyledAbout flexDirection="column" alignItems={"center"}>
                <Head>
                    <title>Decentraland Foundation</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header />
                <Flex flexDirection={"column"} width={"100%"} alignItems={"center"} pb={"30rem"}>
                    <Flex flexDirection={"column"} width={['90%', null, null, '160rem']} pt={"20rem"}>
                        <Flex flexDirection="column">
                            <FadeUp>
                                <Box className="rellax" as="img" src="/img/logo.svg" sx={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    objectFit: 'cover',
                                    width: '64rem',
                                    height: '64rem',
                                    // background: 'blue',
                                    objectPosition: 'left center',
                                    opacity: '0.05',
                                    transform: 'scale'
                                }}/>
                                <Text 
                                    fontSize={"8rem"} 
                                    as="h1"
                                    mb={"6rem"}
                                >About Us</Text>
                                <Text sx={paragraphStyles}>
                                    In 2015 the project to create the first ever decentralized virtual world, the Decentraland Platform, was started (“Decentraland”). <strong>
                                    Decentraland is a decentralized virtual reality platform powered by the Ethereum blockchain. Within Decentraland, users can create, experience, and monetize their content and applications.
                                    </strong>
                                </Text>
                                <Text sx={paragraphStyles}>
                                    From the very beginning, the spirit has been that decisions be made in a decentralized fashion. In February 2020, the Platform was finally launched and the source code of the Decentraland Explorer was made public under the Apache 2.0 License. This allows for any company or individual to tweak the client, making <a target="_blank" src="https://play.decentraland.org">https://play.decentraland.org</a> the reference client among a plethora of alternative clients that the community can create.
                                </Text>
                                <Text sx={paragraphStyles}>
                                Before the launch of Decentraland in February 2020 the  users community&apos;s took full control over the Platform. To this end and to coordinate protocol upgrades to LAND and Estates, the Decentraland DAO, a decentralized autonomous organization, was launched as a hub to all the important policy updates (the “DAO”). Until that moment, the Platform had used Agora, largely as a way to gauge the mood and aspirations of the community. But with the launch of the DAO, Decentraland users&apos; community (the “Community”) became the actual decision-maker.
                                </Text>
                                <Text sx={paragraphStyles}>
                                    All policies, infrastructure, content moderation and assets of Decentraland are kept secure and neutral by virtue of decentralization, and the DAO is the organ through which MANA and LAND holders have their say over Decentraland. Also, the ownership of the LAND, Estates, and other important smart contracts, has been migrated into the DAO, including the two contracts that own the Decentraland Marketplace.
                                </Text>
                                <Text sx={paragraphStyles}>
                                    Notwithstanding the above, the DAO lacks legal status so it cannot legally hold assets such as Decentraland’s intellectual property rights, trademarks, web domains, open source repositories and social media accounts, among others. For that reason, the Decentraland Foundation (the “Foundation”), a non-profit independent organ, was created. The Foundation can fulfill the above legal role as well as fostering the decentralization of the platform, along with the community of LAND and MANA holders. The Foundation has its own treasury with which it is able to take over operational functions.
                                </Text>
                            </FadeUp>
                        </Flex>
                    </Flex>
                </Flex>
            </StyledAbout>
            <Footer/>
        </>
    )
}

const StyledAbout = styled(Flex)``;