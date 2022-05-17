import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import LayoutBox from 'components/layout/LayoutBox/LayoutBox';
import Hero from 'components/layout/Hero/Hero';
import Heading from 'components/common/Heading/Heading'
import Button from 'components/common/Button/Button'
import Text from 'components/common/Text/Text'
import Box from 'components/common/Box/Box'
import Header from 'components/layout/Header/Header'
import Footer from 'components/layout/Footer/Footer'
import TopBar from 'components/layout/TopBar/TopBar';

import { NewsMock } from 'utils/ui_constants';

export default function Home() {
  return (
    <StyledHome>
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
            <Box className="hero-content-wrapper">
              <Heading className={'heading'} size={1}>
                Decentraland <br/>Foundation
              </Heading>
              <Text className={'sub-heading'}>
                We foster the decentralization of Decentraland, along with the Decentraland community, and hold intellectual property assets.
              </Text>
              <Button>Go to Decentraland.org</Button>
            </Box>
          }
          heroSecondaryContent={
            <Box className="image-box">
                <Image src="/img/heroGraphic.svg" layout="responsive" width={586} height={820} priority alt="Decentraland Foundation"/>
            </Box>
          }
        />
      </Header>
      <main>
        <LayoutBox width={'main'}>
          <Box className="breakdown">
            <Text strong textAlign={'center'} fontSize={'4rem'}>
              Brief History of the Foundation / Decentraland, Decentraland DAO and MANA. 
            </Text>
            <Text textAlign={'center'}>
              Brief History of the Foundation / Decentraland, Decentraland DAO and MANA. Brief History of the Foundation / Decentraland, Decentraland DAO and MANA. Brief History of the Foundation / Decentraland, Decentraland DAO and MANA. 
            </Text>
          </Box>
        </LayoutBox>
        <LayoutBox className="news" width={'padded'}>
          <Heading size={4} className="news-heading">Find out about the latest updates of the Decentraland Foundation</Heading>
          <Box className="news-list" flexDirection="row" justifyContent="space-between">
            {NewsMock.map((news, index) => (
              <Box width="45rem" className="news-item" flexDirection={'column'}>
                <Box className="thumbnail">
                  <Image src={news.imageUrl} width={300} height={180} alt="Decentraland Foundation News Thumbnail"/>
                </Box>
                <Heading className="news-item-heading" size={6}>{news.title}</Heading>
                <Text className="description">{news.details}</Text>
                <Link href={news.href}>Read more</Link>
              </Box>
            ))}
          </Box>
        </LayoutBox>
        <LayoutBox width={'main'}>
          <Box className="breakdown">
            <Heading textAlign={'center'} size={4}>
              Reach out to the foundation 
            </Heading>
            <Text textAlign={'center'}>
             Here we will have links to mail address and social media channels
            </Text>
          </Box>
        </LayoutBox>
      </main>
      <Footer/>
      <div className="lower-bar"/>
    </StyledHome>
  )
}

const StyledHome = styled.header`
  .homepage-hero {
    .hero-content-wrapper {
      max-width: 80rem;
      padding-left: 10rem;
      padding-top: 10rem;
    }
    .heading {
      margin-bottom: 3rem;
    }
    .image-box {
      padding-top: 5rem;
      width: 70rem;
      height: 100%;
    }
  }
  main {
    .breakdown {
      margin: 20rem auto 20rem;
      width: 120rem;
    }
    .news {
      margin-bottom: 20rem;
      .news-heading {
        max-width: 100rem;
      }
      .news-item {
        padding: 3rem;
        border: 1px solid ${props => props.theme.borderColor};
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
        }
      }
    }
  }
  .lower-bar {
    height: 1rem;
    background: ${props => props.theme.primary};
  }
`;
