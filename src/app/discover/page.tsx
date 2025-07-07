// app/page.tsx
import { useSession } from "next-auth/react";

export default function Discover() {
  const { data: session, status } = useSession();
      console.log(session)
    return ( 
    <>
        <h1>hfhfdhhf</h1>
    </>
)
}