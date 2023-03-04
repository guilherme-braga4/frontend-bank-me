import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  console.log(session)
  if ("session", session) {
    console.log(session)
    return (
      <>
        Signed in as {session?.user?.token?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}