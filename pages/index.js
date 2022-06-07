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

import { NewsMock } from 'utils/ui_constants';
import Marquee from 'react-fast-marquee';
import theme from './../utils/theme';

export default function Home() {
  return (
    <StyledHome flexDirection={"column"}>
      <Head>
        <title>Decentraland Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        beforeNavbar={
          <TopBar href="/">
            Are you interested in joining the Decentraland Foundation?
          </TopBar>
        }
      >
        <Hero 
          className={'homepage-hero'}
          heroContent={
            <Box className="hero-content-wrapper" width={"80rem"} pl={"10rem"}>
              <Heading className={'heading'} size={1}>
                Decentraland <br/>Foundation
              </Heading>
              <Text className={'sub-heading'} sx={{lineHeight: '5rem', mb: '4rem', fontSize: '3rem', fontWeight: '200'}}>
                We foster the decentralization of Decentraland, along with the Decentraland community, and hold intellectual property assets.
              </Text>
              <Button href="https://decentraland.org/">Go to Decentraland.org</Button>
            </Box>
          }
          heroSecondaryContent={
            <Box className="image-box">
                <Image src="/img/heroGraphic.svg" layout="responsive" width={586} height={820} priority alt="Decentraland Foundation"/>
            </Box>
          }
        />
      </Header>
      <Flex as="main" flexDirection={"column"} alignItems={"center"}>
        <Flex flexDirection={"column"} width={['90%', '90%', '180rem']}>
          <Box className="breakdown" dataAos="fade-up">
            <Text as="strong" textAlign={'center'} fontSize={'4rem'} mb={'4rem'} display={"block"} lineHeight={"7rem"}>
              Brief History of the Foundation / Decentraland, Decentraland DAO and MANA. 
            </Text>
            <Text textAlign={'center'} fontWeight={'200'} lineHeight="6rem" fontSize={"2.5rem"}>
              The Decentraland Foundation is a private foundation with no commercial purposes. It was incorporated under the laws of Panama on April 20, 2020 and has its statutory seat in Panama City. The main object of the Foundation is holding the intellectual property assets of the Decentraland platform, and acting along with, and for the benefit of, the MANA and LAND communities at large, to foster the already achieved decentralization of Decentraland. 
            </Text>
            <Link href="/about" mt={"6rem"} display={"block"} textAlign={"center"} fontSize={"2.5rem"} color={theme.primary} sx={{
                transition: '0.25s ease-in-out all',
                px: '2rem',
                height: '6rem',
                borderRadius: '0.75rem',
                lineHeight: '6rem',
                width: 'fit-content',
                mx: 'auto',
                '&:hover': {
                  background: theme.readMoreButtonBackground
                }
              }}>
              Read more about the foundation
            </Link>
          </Box>
          <Flex width={"100%"} className="ip-assets" flexDirection={"row"} sx={{position: 'relative'}}>
            <Flex flexDirection={"column"} width={["50%"]}>
              <Text as="h3" fontSize={'6rem'} mb={'4rem'}>
                IP Assets
              </Text>
              <Text fontSize={"2.5rem"} lineHeight={"5rem"} fontWeight={"200"} mb={"2rem"}>
                Due to the DAO’s lack of legal status, the Decentraland Foundation holds IP assets of the Decentraland platform including trademarks, software and copyright for the benefit of the community and in that capacity the Foundation undertakes actions against infringement.
              </Text>
              <Text fontSize={"2.5rem"} lineHeight={"5rem"} fontWeight={"200"} mb={"6rem"}>
                Among others, the Decentraland Foundation acting for the benefit of the Decentraland community as a whole, holds the intellectual property rights over the DCL Client, the Desktop Client, the SDK 5.0, the Marketplace (<Link sx={{color: theme.primary}} href="https://market.decentraland.org" target={"_blank"}>https://market.decentraland.org</Link>), the Builder, the Blog, Events, Agora, Forum, the Land Manager, the Command Line Interface, DAO, the Developers’ Hub, the Rewards tool which, with any other features, tools and/or materials made available from time to time by the Foundation. It also holds the IP over the Decentraland name and logo, among other IP assets.
              </Text>
              <Button type="secondary" href="/">Read More</Button>
            </Flex>
            <Box className="graphic" width={["80rem"]} sx={{
              position: 'absolute',
              top: '-20rem',
              right: 0
            }}>
              <Image src="/img/IPAssetsGraphic.svg" alt="IP Assets" width={484} height={614} />
            </Box>
          </Flex>
        </Flex>
        <Flex className="partners-marquee" flexDirection={"column"} width={['90%', '90%', '180rem']}>
          <Heading size={5} textAlign="center">We work together with all these organizations to protect IP Assets</Heading>
          {/* <Marquee gradient={false} speed={100}>
            <Image src="/img/marqueeLogos.svg" alt="Partner logos" width={1000} height={150} />
          </Marquee>
          <Marquee gradient={false} speed={100} direction="right">
            <Image src="/img/marqueeLogos.svg" alt="Partner logos" width={1000} height={150} />
          </Marquee>
          <Marquee gradient={false} speed={100}>
            <Image src="/img/marqueeLogos.svg" alt="Partner logos" width={1000} height={150} />
          </Marquee> */}
        </Flex>
        <Flex id="news" className="news" flexDirection={"column"} width={['90%', '90%', '180rem']}>
          <Text as="h4" className="news-heading" fontSize={"6rem"} mb={"6rem"}>
            Find out about the latest updates of the Decentraland Foundation
          </Text>

          <Flex className="news-list" flexDirection="row" mx={"-2rem"} justifyContent={"center"}>
            {NewsMock.map((news, index) => (
              <Flex width="45rem" className="news-item" flexDirection={'column'} key={index} mx={"2rem"}>
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
        <Flex flexDirection={"column"} width={['90%', '90%', '180rem']} id={"contact"}>
          <Box className="breakdown">
            <Heading textAlign={'center'} size={4}>
              Reach out to the foundation 
            </Heading>
            <Text textAlign={'center'} fontSize="2rem" opacity={0.7}>
             Here we will have links to mail address and social media channels
            </Text>
          </Box>
        </Flex>
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
    .image-box {
      /* padding-top: 5rem; */
      margin-right: 15rem;
      width: 60rem;
      height: 100%;
    }
  }
  main {
    .breakdown {
      margin: 20rem auto 20rem;
      width: 120rem;
    }
    .ip-assets {
      margin-bottom: 40rem;
    }
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
          font-weight: 600;
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
