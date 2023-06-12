import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='' />
        <article>
          <div className='title'>
            <h2>Our Story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            tellus ante, consequat ac pharetra sit amet, elementum id ex. Nam
            fringilla facilisis diam eu tincidunt. Sed et porttitor mi.
            Pellentesque laoreet tristique ipsum sed porttitor. Pellentesque
            porttitor magna massa, at eleifend nibh eleifend ut. Phasellus vitae
            odio enim. Ut commodo pretium elit ac iaculis. Phasellus elit neque,
            viverra et tellus eu, vehicula dapibus nunc. Nullam dictum orci
            metus, eu aliquet libero iaculis ut. Fusce volutpat quis nunc in
            mollis. Proin pretium sapien eget ornare convallis. Quisque blandit
            elit at dictum venenatis. Donec mi neque, vehicula sed arcu nec,
            scelerisque tincidunt purus. Cras placerat at odio ac
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
