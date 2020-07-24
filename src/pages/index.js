import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wave } from "../components/wave"

import { MethodSection } from "../components/methodSection"
import { OfertaSection } from "../components/oferta-section"
import { PoznajNasSection } from "../components/poznajNasSection"
import { BottomWave } from "../components/bottom-wave"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Wave />
    <OfertaSection />
    <MethodSection />
    <PoznajNasSection />
    <BottomWave />
  </Layout>
)

export default IndexPage
