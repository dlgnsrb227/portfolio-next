"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function MyWorks() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll(".portpage__image").forEach((e) => {
      e.addEventListener("mouseover", () => {
        e.classList.add("active");
      });
      e.addEventListener("mouseout", () => {
        e.classList.remove("active");
      });
    });

    gsap.to("#portpageSection2", {
      ease: "none",
      x: "-280vw",
      scrollTrigger: {
        trigger: "#horizontal",
        start: "top top",
        end: "+=5000",
        scrub: 0.5,
        pin: true,
        onUpdate: (self) => {
          let progress = self.progress.toFixed(3);
          console.log(progress);
        },
      },
    });
  }, []);
  return (
    <main id="main">
      <section id="portpageSection1" class="section__item bg__black">
        <h2 class="blind">작업결과물 첫 번째 영역</h2>
        <div class="container">
          <h3>Script Work</h3>
        </div>
      </section>
      <main id="horizontal">
        <section id="portpageSection2" class="section__item bg__black">
          <h2 class="blind">작업결과물 두 번째 영역</h2>
          <div class="portpage__inner">
            <span>Look around my script works.</span>
            <div class="portpage__image">
              <div class="image__inner">
                <Image
                  width={500}
                  height={300}
                  src="/assets/images/portpage__img01.png"
                  alt="마우스이펙트 이미지"
                />
              </div>
              <p>Mouse Effects</p>
              <a href="#" class="chosun">
                완성화면
              </a>
              <a href="#" class="chosun">
                소스보기
              </a>
            </div>
            <div class="portpage__image">
              <div class="image__inner">
                <Image
                  width={500}
                  height={300}
                  src="/assets/images/portpage__img01.png"
                  alt="패럴랙스이펙트 이미지"
                />
              </div>
              <p>Parallax Effects</p>
              <a href="#" class="chosun">
                완성화면
              </a>
              <a href="#" class="chosun">
                소스보기
              </a>
            </div>
            <div class="portpage__image">
              <div class="image__inner">
                <Image
                  width={500}
                  height={300}
                  src="/assets/images/portpage__img01.png"
                  alt="게임이펙트 이미지"
                />
              </div>
              <p>Game Effects</p>
              <a
                href="https://hoong-game.web.app/"
                target="_blank"
                class="chosun"
              >
                완성화면
              </a>
              <a
                href="https://github.com/dlgnsrb227/game2023"
                target="_blank"
                class="chosun"
              >
                소스보기
              </a>
            </div>
            <div class="portpage__image">
              <div class="image__inner">
                <Image
                  width={500}
                  height={300}
                  src="/assets/images/portpage__img01.png"
                  alt="퀴즈이펙트 이미지"
                />
              </div>
              <p>Quiz Effects</p>
              <a href="#" class="chosun">
                완성화면
              </a>
              <a href="#" class="chosun">
                소스보기
              </a>
            </div>
            <div class="portpage__image">
              <div class="image__inner">
                <Image
                  width={500}
                  height={300}
                  src="/assets/images/portpage__img01.png"
                  alt="슬라이드이펙트 이미지"
                />
              </div>
              <p>Slide Effects</p>
              <a href="#" class="chosun">
                완성화면
              </a>
              <a href="#" class="chosun">
                소스보기
              </a>
            </div>
          </div>
          <div class="portpage__inner">
            <span>Look around my script works.</span>
            <div class="portpage__image">
              <div class="image__inner">
                <Image
                  width={500}
                  height={300}
                  src="/assets/images/portpage__img01.png"
                  alt="마우스이펙트 이미지"
                />
              </div>
              <p>React Site</p>
              <a href="#" class="chosun">
                완성화면
              </a>
              <a href="#" class="chosun">
                소스보기
              </a>
            </div>
            <div class="portpage__image">
              <div class="image__inner">
                <Image
                  width={500}
                  height={300}
                  src="/assets/images/portpage__img01.png"
                  alt="패럴랙스이펙트 이미지"
                />
              </div>
              <p>Vue Site</p>
              <a href="#" class="chosun">
                완성화면
              </a>
              <a href="#" class="chosun">
                소스보기
              </a>
            </div>
            <div class="portpage__image">
              <div class="image__inner">
                <Image
                  width={500}
                  height={300}
                  src="/assets/images/portpage__img01.png"
                  alt="게임이펙트 이미지"
                />
              </div>
              <p>Next Site</p>
              <a href="#" class="chosun">
                완성화면
              </a>
              <a href="#" class="chosun">
                소스보기
              </a>
            </div>
            <div class="portpage__image">
              <div class="image__inner">
                <Image
                  width={500}
                  height={300}
                  src="/assets/images/portpage__img01.png"
                  alt="퀴즈이펙트 이미지"
                />
              </div>
              <p>React Site</p>
              <a href="#" class="chosun">
                완성화면
              </a>
              <a href="#" class="chosun">
                소스보기
              </a>
            </div>
            <div class="back__image">
              <Link href="/">
                <Image
                  width={500}
                  height={300}
                  src="/assets/images/circle__back.png"
                  alt="메인으로 돌아가기 이미지"
                />
                <Image
                  width={500}
                  height={300}
                  src="/assets/images/arrow02.png"
                  alt="메인으로 돌아가기 이미지"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </main>
  );
}
