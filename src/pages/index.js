import Image from "next/image";

export default function Home() {
  return (
      <div className="text-center">
        <h1 className="text-center mt-5">Hello Rigo!</h1>
        <p>
          <Image src='/images/rigo-baby.jpeg' alt='4geeks' width={300} height={254} />
        </p>
        <a href="#" className="btn btn-success">
          If you see this green button... bootstrap is working...
        </a>
        <p>
          Made by{" "}
          <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
          love!
        </p>
      </div>
  )
}
