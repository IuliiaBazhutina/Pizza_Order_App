import List from "@/components/list";
import { useContext, useState } from "react";
import { UserContext } from "@/components/form_login";
import Link from "next/link";

export default function Home() {
  //   const { name } = useContext(UserContext);

  return (
    <>
      <nav>
        <Link href="/">Home</Link>
      </nav>
      <div>
        <h2>Please click ingredients which you want to add to your pizza:</h2>
        <List />
      </div>
    </>
  );
}
