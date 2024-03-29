import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { Flex, Box, Text, Link } from 'rebass';
import Hero from 'components/layout/Hero/Hero';
import Heading from 'components/common/Heading/Heading'
import Button from 'components/common/Button/Button'
import Header from 'components/layout/Header/Header'
import Footer from 'components/layout/Footer/Footer'
import TopBar from 'components/layout/TopBar/TopBar';
import { FadeUp } from '../components/layout/Fade/Fade';

import { NewsMock } from 'utils/ui_constants';
import Marquee from 'react-fast-marquee';
import theme from './../utils/theme';

export default function Home() {
  return (
    <StyledHome flexDirection={"column"}>
      <Head>
        <title>Decentraland Foundation</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header
        beforeNavbar={
          <TopBar href="https://jobs.lever.co/Decentraland">
            Are you interested in joining the Decentraland Foundation?
          </TopBar>
        }
      >
        <Hero 
          className={'homepage-hero'}
          heroContent={
            <Flex 
              className="hero-content-wrapper" 
              width={['90%', null, null, '80rem']}
              mx={'auto'}
              sx={{
                position: 'relative',
                zIndex: 2
              }}
            >
              <Flex 
                width={['100%', '50%', '50%', '80rem']} 
                mr={'auto'} 
                pl={[0, null,  null,'10rem']} 
                height={['auto', 'calc(100vh - 10rem)', 'calc(100vh - 40rem)', 'auto']}
                flexDirection={['column']}
                justifyContent={['center', 'auto', 'auto']}
              >
                <Text as="h1" className={'heading'} sx={{
                  fontSize: ['6rem', '8rem', '9rem'],
                  whiteSpace: 'nowrap',
                  textShadow: '0 0 1rem rgba(0,0,0,0.5)'
                }}>
                  The Decentraland <br/>Foundation
                </Text>
                <Text className={'sub-heading'} sx={{lineHeight: '4rem', mb: '4rem', fontSize: '2.5rem', fontWeight: '200', opacity: 0.7}}>
                  The Foundation is responsible for encouraging the decentralization of Decentraland, supporting the development of the platform, and most importantly, for enabling the Decentraland community to flourish and to create opportunities for them to grow. The Foundation also holds the intellectual property assets of Decentraland.
                </Text>
                <Button href="https://decentraland.org/">
                  Go to Decentraland.org
                </Button>
              </Flex>
            </Flex>
          }
          heroSecondaryContent={
            <Box 
              className="image-box" 
              sx={{
                position: [null, 'absolute', 'absolute', 'relative'],
                right: '0',
                mr: ['0', '15rem'],
                width: ['40rem', '50rem', '60rem'],
                height: ['55rem', '100%'],
                top: ['0', 1/2, 'calc(50% - 35rem)', 0],
                right: ['-25%', '-15%'],
                zIndex: 1
              }}
            >
                <Image src="/img/heroGraphic.svg" layout="responsive" width={586} height={820} priority alt="Decentraland Foundation"/>
            </Box>
          }
        />
      </Header>
      <Flex as="main" flexDirection={["column"]} alignItems={"center"}>
        <FadeUp>
          <Flex 
            flexDirection={"column"} 
            width={['90%', null, null, '127rem']} 
            mx={'auto'}
            mt={['10rem', '10rem', '30rem']}
            mb={['20rem', '20rem', 0]}
          >
            <Box className="breakdown" dataAos="fade-up" mb={['8rem', '20rem', '30rem', '20rem']}>
              <Text as="strong" textAlign={'center'} fontSize={'4rem'} mb={'4rem'} display={"block"} lineHeight={"7rem"}>
                The History of the Foundation, Decentraland, the Decentraland DAO, and of MANA
              </Text>
              <Text sx={{
                opacity: '0.7',
                textAlign: 'center',
                fontWeight: 200,
                lineHeight: '6rem',
                fontSize: '2.5rem'
              }}>
                The Decentraland Foundation is a private foundation with no commercial purposes. It was incorporated under the laws of Panama on April 20, 2020 and has its statutory seat in Panama City. The main object of the Foundation is holding the intellectual property assets of the Decentraland platform, and acting along with, and for the benefit of, the Decentraland community, to promote the already achieved decentralization of Decentraland. 
              </Text>
              <Link href="/about" mt={"6rem"} display={"block"} textAlign={"center"} fontSize={"2.5rem"} color={theme.primary} sx={{
                  transition: '0.25s ease-in-out all',
                  px: '2rem',
                  height: '6rem',
                  borderRadius: '0.75rem',
                  lineHeight: '6rem',
                  width: 'fit-content',
                  mx: 'auto',
                  background: theme.readMoreButtonBackground
                }}>
                Read more about the Foundation
              </Link>
            </Box>
            <Flex width={['90%', null, '123rem', '140rem']} className="ip-assets" flexDirection={["column-reverse", "row", "row"]} sx={{position: 'relative', mb: ['8rem', '32rem'], mx: 'auto'}}>
              <Flex flexDirection={"column"} sx={{'p' : {opacity: 0.7}}} width={["100%", "100%", "50%"]}>
                <Text as="h3" fontSize={'6rem'} mb={'4rem'}>
                  IP Assets
                </Text>
                <Text as={'p'} fontSize={"2rem"} lineHeight={"4rem"} fontWeight={"200"} mb={"2rem"}>
                  Due to the DAO’s legal status, the Decentraland Foundation holds IP assets of the Decentraland platform. This includes trademarks, software, social media and copyrights which are held and protected for the benefit of the Decentraland community. In that capacity the Foundation undertakes actions against infringement.
                </Text>
                <Text as={'p'} fontSize={"2rem"} lineHeight={"4rem"} fontWeight={"200"} mb={"6rem"}>
                  Among others, the Decentraland Foundation, acting for the benefit of the Decentraland community as a whole, holds the intellectual property rights of: the Decentraland Client, the Desktop Client, the SDK 5.0, the Marketplace (<Link sx={{color: theme.primary, fontWeight: 400}} href="https://market.decentraland.org" target={"_blank"}>https://market.decentraland.org</Link>), the Builder, the Blog, Events, Agora, the Forum, the Land Manager, the Command Line Interface, the Decentraland DAO, the Developers Hub, the Rewards tool which, with any other features, tools and/or materials made available from time to time by the Foundation. The Foundation also holds the IP over the Decentraland name and logo, social media accounts, among other IP assets.
                </Text>
                <Button type="secondary" href="/">Read More</Button>
              </Flex>
              <Box className="graphic rellax" width={["100%", "50%", "50%"]} sx={{
                position: ['relative', 'relative', 'absolute'],
                top:['-30rem', '0', '-20rem'],
                right: ['0', '0', '-20rem']
              }}>
                <Box as="img" src="/img/IPAssetsGraphic.svg" alt="IP Assets" width={[320, 420, 484]} height={614} />
              </Box>
            </Flex>
          </Flex>
        </FadeUp>
        {/* <Flex className="partners-marquee" flexDirection={"column"} width={['90%', '90%', '180rem']}> */}
          {/* <Heading size={5} textAlign="center">We work together with all these organizations to protect IP Assets</Heading> */}
          {/* <Marquee gradient={false} speed={100}>
            <Image src="/img/marqueeLogos.svg" alt="Partner logos" width={1000} height={150} />
          </Marquee>
          <Marquee gradient={false} speed={100} direction="right">
            <Image src="/img/marqueeLogos.svg" alt="Partner logos" width={1000} height={150} />
          </Marquee>
          <Marquee gradient={false} speed={100}>
            <Image src="/img/marqueeLogos.svg" alt="Partner logos" width={1000} height={150} />
          </Marquee> */}
        {/* </Flex> */}
        <Flex id="news" className="news" flexDirection={"column"} width={['90%', null, null, '180rem']}>
          <Text as="h4" className="news-heading" fontSize={["3.8rem", "6rem"]} mb={"6rem"}>
            Discover what’s new in Decentraland on the Blog
          </Text>

          <Flex className="news-list" flexDirection={["column","row"]} mx={["0", "-2rem"]} justifyContent={"center"}>
            {NewsMock.map((news, index) => (
              <Flex width="45rem" className="news-item" flexDirection={'column'} key={index} mx={["auto", "2rem"]} mb={["2rem", "0"]}>
                <Box className="thumbnail">
                  <Image src={news.imageUrl} width={300} height={180} alt="Decentraland Foundation News Thumbnail"/>
                </Box>
                <Heading className="news-item-heading" size={6}>{news.title}</Heading>
                <Text className="description">{news.details}</Text>
                <Link mt={"auto"} href={news.href}>Read more</Link>
              </Flex>
            ))}
          </Flex>
        </Flex>
        {/* <Flex flexDirection={"column"} width={['90%', '90%', '180rem']} id={"contact"}>
          <Box className="breakdown">
            <Heading textAlign={'center'} size={4}>
              Reach out to the foundation 
            </Heading>
            <Text textAlign={'center'} fontSize="2rem" opacity={0.7}>
             Here we will have links to mail address and social media channels
            </Text>
          </Box>
        </Flex> */}
      </Flex>
      <Footer/>
      <div className="lower-bar"/>
    </StyledHome>
  )
}

const StyledHome = styled(Flex)`
  .homepage-hero {
    flex-grow: 1;
    justify-content: center;
    .heading {
      margin-bottom: 3rem;
    }
  }
  main {
    .news {
      margin-bottom: 20rem;
      .news-heading {
        max-width: 100rem;
      }
      .news-item {
        padding: 3rem;
        background: ${props => props.theme.cardBackground};
        box-shadow: 0 1rem 2rem hsla(0,0%,0%,0.1);
        border-radius: 1rem;
        .news-item-heading {
          margin-bottom: 1rem;
        }
        .thumbnail {
          margin-bottom: 2rem;
        }
        .description {
          font-size: 2rem;
          line-height: 4rem;
          margin-bottom: 4rem;
        }
        a {
          font-size: 2rem;
          color: ${props => props.theme.primary};
          display: inline-block;
          height: 5rem;
          line-height: 5rem;
          padding: 0 2rem;
          width: fit-content;
          border-radius: 0.5rem;
          font-weight: 500;
          background: ${props => props.theme.readMoreButtonBackground};
          &:hover {
          }
          /* display: none; */
        }
      }
    }
    .partners-marquee {
      margin-bottom: 20rem;
      .marquee {
        margin: 0;
        .marquee-image-wrapper {
          opacity: 0.5;
        }
      }
    }
  }
  .lower-bar {
    height: 1rem;
    background: ${props => props.theme.primary};
  }
`;
