import {
  Header,
  WelcomeHero,
  ListsTopics,
  HowItWorks,
  Explore,
  Reviews,
  Statitistics,
  Blog,
  Subscription,
  Footer,
} from "../../components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <WelcomeHero />
      <ListsTopics />
      <HowItWorks />
      <Explore />
      <Reviews />
      <Statitistics />
      <Blog />
      <Subscription />
      <Footer />
    </>
  );
}
