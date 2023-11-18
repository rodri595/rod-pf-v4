import Main from "@/components/Main";
import Hero from "@/sections/Hero";
import Content from "@/sections/Content";
export default function Home() {
  return (
    <Main>
      <Hero />
      <Content />
      <div
        className="aic"
        style={{
          height: "1000px",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <div
          // data-cursor-stick=".stick-me"
          className="stick-me aic anim scale10 "
          data-cursor-text="Why not ! 😎"
          data-cursor="-brand"
        >
          Why me ?🤔
        </div>
        <h1>Home</h1>
      </div>
    </Main>
  );
}
