import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wave } from "../components/wave"

import { MethodSection } from "../components/methodSection"
import { OfertaSection } from "../components/oferta-section"
import { PoznajNasSection } from "../components/poznajNasSection"
import { GabinetSection } from "../components/gabinetSection"
import { BottomWave } from "../components/bottom-wave"
import { PartnersSection } from "../components/partnerzySection"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Wave />
    <OfertaSection />
    <MethodSection />
    <PoznajNasSection />
    <GabinetSection />
    <PartnersSection />
    <BottomWave />
  </Layout>
)

export default IndexPage
