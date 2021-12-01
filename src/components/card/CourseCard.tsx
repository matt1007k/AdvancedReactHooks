import React from "react"
import styled from "styled-components"
import Circles from "../animations/Circles"

function CourseCard(props) {
  const { illustration } = props
  return (
    <Wrapper className="courseCard">
      <AnimationWrapper>
        <Circles />
      </AnimationWrapper>
      <Illustration src={illustration} alt="illustration" />
    </Wrapper>
  )
}

export default CourseCard

const Wrapper = styled.div`
  position: relative;
  max-width: 360px;
  width: 100%;
  height: 480px;
  background: linear-gradient(200.42deg, #ff8570 13.57%, #f9504a 98.35%);
  border-radius: 20px;
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.25);
  display: grid;
  justify-content: center;
  align-content: center;
`
const Illustration = styled.img`
  width: 300px;
`
const AnimationWrapper = styled.div`
  position: absolute;
  width: 360px;
  overflow: hidden;
  padding-top: 30px;
  mix-blend-mode: overlay;
`
