import { Container } from "@chakra-ui/react"
import { getFrameMetadata } from "frog/next"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const frameTags = await getFrameMetadata(
    `${process.env.VERCEL_URL || "http://localhost:3000"}/api`
  )
  return {
    other: frameTags,
  }
}

export default function Home() {
  return <Container>Hello World</Container>
}
