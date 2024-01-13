import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className={"mx-auto w-full flex flex-col justify-center items-center"}>
      <h2 className={"text-6xl font-bold text-primary-500 dark:text-primary-400 mb-4"}>Not Found</h2>
      <Image
        src="/images/404/404.png"
        alt="404"
        width={400}
        height={400}
        className={"mb-4 h-auto w-1/2"}
      />
      <Link href="/">Return Home</Link>
    </div>
  )
};