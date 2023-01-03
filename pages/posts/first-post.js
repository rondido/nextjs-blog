import Link from "next/link";
import Head from "next/head";
import Layout from "../../compoenents/layout";
import { useEffect } from "react";
import { Router, useRouter } from "next/router";

export default function FirstPost() {
  const router = useRouter();
  useEffect(() => {
    router.push("/posts/first-post/?count=10", undefined, { shallow: true });
  }, []);
  useEffect(() => {
    alert(router.query.counter);
  }, [router.query.counter]);
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
