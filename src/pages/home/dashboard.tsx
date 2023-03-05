import { signOut } from "next-auth/react"

const Dashboard = ({ session }) => {
  return ( 
    <>
      <h1>Welcome {session?.user?.name}</h1>
      <button onClick={() => signOut()}>Sign out</button>
    </>
   );
}
 
export default Dashboard;