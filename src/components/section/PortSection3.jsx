"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PortSection3() {
  useEffect(() => {
    const workImg = document.querySelectorAll(".work__inner a");

    gsap.registerPlugin(ScrollTrigger);

    gsap.defaults({ ease: "none", duration: 2 });
    const portAni2 = gsap.timeline();
    portAni2
      .set(workImg, { y: "100vh" })
      .staggerTo(workImg, 2, { y: "-100vh" }, 1.5);

    ScrollTrigger.create({
      animation: portAni2,
      trigger: "#portSection3",
      start: "top top",
      end: "+=8000",
      scrub: 1,
      pin: true,
      // anticipatePin: true,
      markers: false,
      onUpdate: (self) => {
        let progress = self.progress.toFixed(3);
        // console.log("onUpdate", self.progress.toFixed(3));
        if (progress > 0.653) {
          document.querySelector("#portSection3").classList.add("bg__white");
          document.querySelector("#portSection3").style.color = "black";
        } else if (progress < 0.653 && progress > 0) {
          document.querySelector("#portSection3").classList.remove("bg__white");
          document.querySelector("#portSection3").style.color = "white";
        }
      },
      onEnter: () => {
        workImg.forEach((e) => {
          e.addEventListener("mouseover", () => {
            e.querySelector("p").classList.add("active");
            document.querySelector("#portSection3 h3").style.filter =
              "blur(20px)";
          });
          e.addEventListener("mouseleave", () => {
            e.querySelector("p").classList.remove("active");
            document.querySelector("#portSection3 h3").style.filter =
              "blur(0px)";
          });
        });
      },
      onLeave: () => {
        document.querySelector("#horizontality").style.opacity = "1";
      },
      onEnterBack: () => {
        document.querySelector("#horizontality").style.opacity = "0";
      },
    });
  }, []);
  return (
    <section id="portSection3" className="section__item bg__black">
      <h2 className="blind">포트폴리오 세 번째 영역</h2>
      <div className="container">
        <h3>
          By<em>ScriptCoding</em>
        </h3>
        <div className="work__inner">
          <a
            href="https://dlgnsrb227.github.io/web2023/javascript/mouse/mouseEffect01.html"
            target="_blank"
            className="work__left work__left1"
          >
            <div className="img__box">
              <Image
                src="/assets/images/mouseEffect01.png"
                width={500}
                height={700}
                alt="마우스이펙트 이미지"
              />
            </div>
            <span>
              Mouse <em>Effect</em>
            </span>
            <p className="chosun">
              Javascript & gsap를 사용하여 마우스의 움직임에 따른
              <br />
              효과를 만들었습니다.
            </p>
          </a>
          <a
            href="https://dlgnsrb227.github.io/web2023/javascript/parallax/parallaxEffect01.html"
            className="work__right work__right1"
            target="_blank"
          >
            <div className="img__box">
              <Image
                src="/assets/images/parallaxEffect01.png"
                width={500}
                height={700}
                alt="패럴랙스이펙트 이미지"
              />
            </div>
            <span>
              Parallax <em>Effect</em>
            </span>
            <p className="chosun">
              Javascript & gsap를 이용하여 스크롤에 따른
              <br />
              효과를 만들었습니다.
            </p>
          </a>
          <a
            href="https://hoong-game.web.app/"
            className="work__left work__left2"
            target="_blank"
          >
            <div className="img__box">
              <Image
                src="/assets/images/gameEffect01.png"
                width={500}
                height={700}
                alt="게임이펙트 이미지"
              />
            </div>
            <span>
              Game <em>Effect</em>
            </span>
            <p className="chosun">
              Javascript를 사용하여 뮤직플레이어, 게임플레이어
              <br />
              효과를 만들었습니다.
            </p>
          </a>
          <a
            href="https://dlgnsrb227.github.io/web2023/javascript/quiz/quizEffect01.html"
            className="work__right work__right2"
            target="_blank"
          >
            <div className="img__box">
              <Image
                src="/assets/images/quizEffect01.png"
                width={500}
                height={700}
                alt="퀴즈이펙트 이미지"
              />
            </div>
            <span>
              Quiz <em>Effect</em>
            </span>
            <p className="chosun">
              Javascript를 사용하여 주관식, 객관식, CBT형식의
              <br />
              퀴즈효과를 만들었습니다.
            </p>
          </a>
          <a
            href="https://dlgnsrb227.github.io/web2023/javascript/slider/sliderEffect01.html"
            className="work__left work__left3"
            target="_blank"
          >
            <div className="img__box">
              <Image
                src="/assets/images/slideEffect01.png"
                width={500}
                height={700}
                alt="슬라이드이펙트 이미지"
              />
            </div>
            <span>
              Slide <em>Effect</em>
            </span>
            <p className="chosun">
              Javascript & jQuery를 사용하여 좌, 우, fade, 썸네일 방식의
              <br />
              화면전환 효과를 만들었습니다.
            </p>
          </a>
          <a
            href="https://hoongsite-react01.netlify.app"
            className="work__right work__right3"
            target="_blank"
          >
            <div className="img__box">
              <Image
                src="/assets/images/webstandard__01.png"
                width={500}
                height={700}
                alt="웹표준코딩사이트 이미지"
              />
            </div>
            <span>
              Web Standard <em>Site</em>
            </span>
            <p className="chosun">
              React를 사용하여 만든 사이트입니다.
              <br />
              웹표준을 준수하여 코딩했습니다.
            </p>
          </a>
          <a
            href="https://hoongsite2023-vue01.netlify.app"
            className="work__left work__left4"
            target="_blank"
          >
            <div className="img__box">
              <Image
                src="/assets/images/webstandard__02.png"
                width={500}
                height={700}
                alt="웹표준코딩사이트 이미지"
              />
            </div>
            <span>
              Web Standard <em>Site</em>
            </span>
            <p className="chosun">
              Vue를 사용하여 만든 사이트입니다.
              <br />
              웹표준을 준수하여 코딩했습니다.
            </p>
          </a>
          <a
            href="https://hoongsite-next01.netlify.app"
            className="work__right work__right4"
            target="_blank"
          >
            <div className="img__box">
              <Image
                src="/assets/images/webstandard__03.png"
                width={500}
                height={700}
                alt="웹표준코딩사이트 이미지"
              />
            </div>
            <span>
              Web Standard <em>Site</em>
            </span>
            <p className="chosun">
              Next를 사용하여 만든 사이트입니다.
              <br />
              웹표준을 준수하여 코딩했습니다.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
