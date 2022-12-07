import Head from "next/head";
import DontHave from "../Components/DontHave";
import FinalHomeText from "../Components/FinalHomeText";
import Form from "../Components/Form";
import HowItWorks from "../Components/HowItWorks";
import ListItems from "../Components/ListItems";
import TopContentHome from "../Components/TopContentHome";

export default function Home() {
  const firstList = {
    title: "Stay tapped in to insider info on startup ideas that work $$$",
    items: [
      "✋ Handpicked exploding startup ideas",
      "⭐ Trending playbooks + niches",
      "🧬 100+ hrs of valid new research",
      "🤖 Top tech used to track juicy info ",
      "🔥 Secret sauce you can’t get anywhere",
      "😀 Simple and easy to understand",
    ],
  };
  const secondList = {
    title: "What’s in it for you?",
    items: [
      "🚨 Early signals on what’s popping off",
      "📈 Learn why its booming (with real data)",
      "💰 How you can secure the bag",
      "🚀 Launch plan (startup costs + roadmap)",
      "🔑 Keys to win with high profit",
      "❌ Risks to watch out for",
      "🙌 Save time on planning + research",
    ],
  };
  return (
    <div>
      <Head>
        <title>The pipeline</title>
        <meta name="description" content="The pipeline" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopContentHome />
      <DontHave />
      <ListItems title={firstList.title} items={firstList.items} />
      <HowItWorks />
      <div className="mt-12 md:mt-[10rem]">
        <ListItems title={secondList.title} items={secondList.items} />
      </div>
      <FinalHomeText />
      <div className="mt-4 md:mt-[4rem]">
        <Form buttontext={"tap in 💰"} />
      </div>
      <p className="font-medium text-center text-[0.9rem] mt-[3rem] pb-[2rem] md:pb-[4rem]">
        Don’t lose your “next big thing” to someone else. #FOMOmademedoit
      </p>

      {/* <iframe
        src="https://embeds.beehiiv.com/80bf0c42-dc7f-49cc-a7ae-451c6dc72855?slim=true"
        data-test-id="beehiiv-embed"
        frameBorder="0"
        scrolling="no"
        X-frame="none"
      ></iframe> */}
    </div>
  );
}
