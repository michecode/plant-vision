import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Layout from '../../components/Layout';
import PlantPic from '../../components/PlantPic';

const Header = styled.h1`
  @media (min-width: 960px) {
    font-size: 80px;
    text-align: center;
    margin-top: 150px;
  }
  @media (max-width: 960px) {
    font-size: 50px;
  }
`;

const BelowHeader = styled.div`
  display: flex;
`;

const Grid = styled.div`
  display: grid;
  margin: 10px;
  grid-gap: 10px;
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
    width: 50%;
  }
`;

const Card = styled(Paper)`
  && {
    display: flex;
    background: var(--color-paper);
  }
`;

const Label = styled.p`
  font-size: 20px;
`;

const PicContainer = styled.div`
  display: flex;
  flex-grow: 1;
  @media (max-width: 700px) {
    display: none;
  }
`;

export default function Index() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content={`Learn, Alto, Plants, Tutorial, Guides, Watering, Sunlight, Light`}
        />
        <meta
          name="description"
          content={`Grow your understanding of plants and become a green thumb`}
        />
        <meta name="viewport" content="width=device.width, initial-scale=1.0" />
        <title>Learn - Alto</title>
      </Helmet>
      <Header>BECOME A GREEN THUMB</Header>
      <Header>This page is under construction!</Header>
      <BelowHeader>
      <Grid>
        <Card>
            <GlobeIcon />
          <Label>Light</Label>
        </Card>
        <Card>
            <GlobeIcon />
          <Label>Watering</Label>
        </Card>
        <Card>
            <GlobeIcon />
          <Label>Humidity</Label>
        </Card>
        <Card>
            <GlobeIcon />
          <Label>Propagation</Label>
        </Card>
        <Card>
            <GlobeIcon />
          <Label>Repotting</Label>
        </Card>
        <Card>
            <GlobeIcon />
          <Label>Pruning</Label>
        </Card>
        <Card>
            <GlobeIcon />
          <Label>Fertilizing</Label>
        </Card>
        <Card>
            <GlobeIcon />
          <Label>Pests</Label>
        </Card>
      </Grid>
      <PicContainer>
      <PlantPic id={"chamaedorea-elegans"} name={"Parlor Palm"}/>
      </PicContainer>
      </BelowHeader>
    </Layout>
  );
}

function GlobeIcon() {
  return(
  <svg
    width="72"
    height="72"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z"
      fill="currentColor"
      fill-rule="evenodd"
      clip-rule="evenodd"
    ></path>
    <path
      d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z"
      fill="currentColor"
      fill-rule="evenodd"
      clip-rule="evenodd"
    ></path>
    <path
      d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z"
      fill="currentColor"
      fill-rule="evenodd"
      clip-rule="evenodd"
    ></path>
    <path
      d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z"
      fill="currentColor"
      fill-rule="evenodd"
      clip-rule="evenodd"
    ></path>
  </svg>)
}
