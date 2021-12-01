import React from "react"
import styled from "styled-components"
import CourseCard from "../../components/card/CourseCard"

const Detail = ({ id }) => {
  return (
    <TextWrapper>
      <CourseCard />
    </TextWrapper>
  )
}

export default Detail

const TextWrapper = styled.div``
