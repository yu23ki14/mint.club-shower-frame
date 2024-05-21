import { Container } from "@chakra-ui/react"
import { getFrameMetadata } from "frog/next"
import type { Metadata } from "next"
import { APP_URL } from "./config"

export async function generateMetadata(): Promise<Metadata> {
  const frameTags = await getFrameMetadata(`${APP_URL}/api`)
  return {
    other: frameTags,
  }
}

export default function Home() {
  return <Container>Hello World</Container>
}
