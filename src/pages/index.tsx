import { useSession, getSession, signOut } from "next-auth/react"

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    console.log(session)
    return (
      <div>
        Signed in as {session?.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
}