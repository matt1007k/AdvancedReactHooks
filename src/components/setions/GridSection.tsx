import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import SectionRow from "../rows/SectionRow"

function GridSection(props) {
  const { sections } = props
  return (
    <Wrapper>
      <Title>20 topics</Title>
      <Description>
        All techniques are explained step-by-step, in a beginner-friendly format
        so that you can easily follow in a cohesive way.
      </Description>
      <Grid>
        {sections.map((section, index) => (
          <Link to={`/${section.slug}`} key={index}>
            <SectionRow
              index={index + 1}
              title={section.title}
              description={section.description}
              timestamp={section.duration}
            />
          </Link>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default GridSection

const Wrapper = styled.section`
  position: relative;
  display: grid;
  max-width: 1234px;
  margin: 0 auto;
  text-align: center;
  gap: 12px;
  padding: 0 20px;
`
const Title = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 130%;
  text-transform: uppercase;
  color: #fff;
`
const Description = styled.p`
  max-width: 460px;
  font-size: 13px;
  line-height: 130%;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 auto;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 8px;
  width: 100%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.6);
  border: o.5px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(34, 79, 169, 0.3);
  border-radius: 20px;
`
