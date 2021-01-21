import React from 'react';

import bloga from '../../../assets/blog-1.jpg';
import blogb from '../../../assets/blog-2.jpg';
import blogc from '../../../assets/blog-3.jpg';
import { Container, Description, Blog, BlogCard, BlogCardBody, Date, Title, Caption, StyledButton } from './Styles';

const Index = () => {
  return (
    <Container>
      <Description>
        <span></span>
        <p>Blog</p>
      </Description>

      <Blog>
        <BlogCard>
          <figure>
            <img src={bloga} />
          </figure>
          <BlogCardBody>
            <Date>January 2021</Date>
            <Title>2020 at a glance: yearly review</Title>
            <Caption>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, fugiat vero?</Caption>
            <StyledButton>
              <a>Read more</a>
              <span>&rarr;</span>
            </StyledButton>
          </BlogCardBody>
        </BlogCard>
        <BlogCard>
          <figure>
            <img src={blogb} />
          </figure>
          <BlogCardBody>
            <Date>January 2021</Date>
            <Title>2020 at a glance: yearly review</Title>
            <Caption>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, fugiat vero?</Caption>
            <StyledButton>
              <a>Read more</a>
              <span>&rarr;</span>
            </StyledButton>
          </BlogCardBody>
        </BlogCard>
        <BlogCard>
          <figure>
            <img src={blogc} />
          </figure>
          <BlogCardBody>
            <Date>January 2021</Date>
            <Title>2020 at a glance: yearly review</Title>
            <Caption>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, fugiat vero?</Caption>
            <StyledButton>
              <a>Read more</a>
              <span>&rarr;</span>
            </StyledButton>
          </BlogCardBody>
        </BlogCard>

      </Blog>

    </Container>
   );
}

export default Index;