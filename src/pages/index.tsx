import { Flex, Heading } from '@chakra-ui/react'
import Banner from '../components/Banner'
import Features from '../components/features'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Spacer from '../components/Spacer'

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Features />
      <Spacer />

      <Heading
       textAlign="center"
       fontWeight="500"
       mb={["5", "14"]}
       fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nesssa? <br /> Então escolha seu continente
      </Heading>

      <Slider />

    </Flex>
  )
}
