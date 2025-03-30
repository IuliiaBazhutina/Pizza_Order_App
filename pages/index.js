import LogIn from '@/components/form_login';
import Link from "next/link";


export default function Home() {
  return (
    <>
      <nav>
        <Link href='./ingredients'>Choose ingredients</Link>
      </nav>
      <div>
        <LogIn />
      </div>
    </>
  );
}


