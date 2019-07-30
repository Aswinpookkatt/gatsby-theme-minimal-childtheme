import React from "react"
import { Styled } from "theme-ui"
import Layout from "../components/layout"

const PageTemplate = ({ pageContext }) => (
  <Layout>
    <Styled.h1>{pageContext.heading}</Styled.h1>
    <Styled.p>{pageContext.context}</Styled.p>

    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
)

export default PageTemplate
