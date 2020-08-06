import React from "react"
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wave } from "../components/wave"

import { MethodSection } from "../components/methodSection"
import { OfertaSection } from "../components/oferta-section"
import { PoznajNasSection } from "../components/poznajNasSection"
import { GabinetSection } from "../components/gabinetSection"
import { BottomWave } from "../components/bottom-wave"
import { PartnersSection } from "../components/partnerzySection"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />
    <Wave image={data.wave.childImageSharp.fluid} />
    <OfertaSection
      pourazowe={data.pourazowe.childImageSharp.fluid}
      kregoslup={data.kregoslup.childImageSharp.fluid}
      reumatyczne={data.reumatyczne.childImageSharp.fluid}
    />
    <MethodSection
      elektroterapia={data.elektroterapia.childImageSharp.fixed}
      ultradzwieki={data.ultradzwieki.childImageSharp.fixed}
      swiatlo={data.swiatlo.childImageSharp.fixed}
      kinesiology={data.kinesiology.childImageSharp.fixed}
      taping={data.taping.childImageSharp.fixed}
      masaz={data.masaz.childImageSharp.fixed}
      techniki={data.techniki.childImageSharp.fixed}
    />
    <PoznajNasSection
      bartek={data.bartek.childImageSharp.fixed}
      lila={data.lila.childImageSharp.fixed}    
    />
    <GabinetSection
      biuro={data.gabinet.childImageSharp.fluid}
    />
    <PartnersSection
      siwy={data.siwy.childImageSharp.fixed}
      cnm={data.cnm.childImageSharp.fixed}
      ks={data.ks.childImageSharp.fixed}    
    />
    <BottomWave />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    wave: file(relativePath: { eq: "burzynscy.png"}) {
      childImageSharp {
        fluid(maxWidth: 480) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pourazowe: file(relativePath: { eq: "stany-pourazowy.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 345) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kregoslup: file(relativePath: { eq: "bole-kregoslupa.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 345) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reumatyczne: file(relativePath: { eq: "choroby-reumatyczne.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 345) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    elektroterapia: file(relativePath: { eq: "elektroterapia.jpg" }) {
      childImageSharp {
        fixed(height: 88) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ultradzwieki: file(relativePath: { eq: "ultradzwieki.jpg"}) {
      childImageSharp {
        fixed(height: 88) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    swiatlo: file(relativePath: { eq: "terapia-swiatlem.jpg"}) {
      childImageSharp {
        fixed(height: 88) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    kinesiology: file(relativePath: { eq: "kinesiology-taping.jpg"}) {
      childImageSharp {
        fixed(height: 88) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    taping: file(relativePath: { eq: "taping-sztywny.jpg"}) {
      childImageSharp {
        fixed(height: 88) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    masaz: file(relativePath: { eq: "masaz.jpg"}) {
      childImageSharp {
        fixed(height: 88) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    techniki: file(relativePath: { eq: "techniki-osteopatyczne.jpg"}) {
      childImageSharp {
        fixed(height: 88) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    bartek: file(relativePath: { eq: "bartosz-burzynski-new.jpg"}) {
      childImageSharp {
        fixed(width: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    lila: file(relativePath: { eq: "lilianna-jaworska-new.jpg"}) {
      childImageSharp {
        fixed(width: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    gabinet: file(relativePath: { eq: "biuro.png"}) {
      childImageSharp {
        fluid(maxHeight: 550) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    siwy: file(relativePath: { eq: "siwy.png"}) {
      childImageSharp {
        fixed(height: 120) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    cnm: file(relativePath: { eq: "cnm.jpg"}) {
      childImageSharp {
        fixed(height: 120) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ks: file(relativePath: { eq: "kspolonia.jpg"}) {
      childImageSharp {
        fixed(height: 120) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;