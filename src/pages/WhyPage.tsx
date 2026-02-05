import { useState, useEffect } from "react";
import { Heart, AlertCircle, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";
import ValentineButton from "@/components/ValentineButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import valentineCat from "@/assets/valentine-cat.png";
import gauravPhoto from "@/assets/gaurav-photo.jpeg";
import gauravReveal from "@/assets/gaurav-reveal.jpeg";
import vibha1 from "@/assets/vibha-1.jpeg";
import vibha2 from "@/assets/vibha-2.jpeg";
import vibha3 from "@/assets/vibha-3.jpeg";
import vibha4 from "@/assets/vibha-4.jpeg";

const WhyPage = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const navigate = useNavigate();
  
  const collagePhotos = [vibha1, vibha2, vibha3, vibha4];

  return (
    <div className="min-h-screen valentine-gradient flower-pattern relative overflow-hidden">
      <FloatingHearts />

      <div className="relative z-10">
        {/* Hero section with man on knees */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
          <div className="text-center opacity-0 animate-fade-in-up">
            <h1 className="font-script text-4xl md:text-6xl text-foreground mb-4">
              Because...
            </h1>
            <p className="font-poppins text-xl md:text-2xl text-valentine-deep mb-8">
              Someone really wants to be with you! 💕
            </p>
          </div>

          {/* Man with flowers image */}
          <div
            className="relative opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-valentine-pink via-valentine-rose to-valentine-pink rounded-full blur-xl opacity-40 animate-pulse-heart" />
            <img
              src={valentineCat}
              alt="Cute cat asking to be your valentine"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl drop-shadow-2xl animate-bounce-soft"
            />
          </div>

          <p
            className="font-script text-2xl md:text-3xl text-valentine-deep mt-8 text-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Please scroll down... 🥺
          </p>

          {/* Scroll indicator */}
          <div
            className="mt-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            <div className="flex flex-col items-center gap-2 animate-bounce-soft">
              <Heart className="w-8 h-8 text-valentine-pink fill-valentine-pink" />
              <div className="w-0.5 h-12 bg-valentine-pink/50 rounded-full" />
            </div>
          </div>
        </section>

        {/* Photo Collage Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
          <div className="text-center mb-12 opacity-0 animate-fade-in-up">
            <h2 className="font-script text-4xl md:text-6xl text-foreground mb-4">
              Because I really like her 💕
            </h2>
            <p className="font-poppins text-lg text-valentine-deep">
              Look at this cutie! 🥰
            </p>
          </div>

          {/* Photo Carousel */}
          <div 
            className="w-full max-w-sm md:max-w-md opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-valentine-pink via-valentine-rose to-valentine-pink rounded-3xl blur-xl opacity-50 animate-pulse-heart" />
              
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                    stopOnInteraction: false,
                  }),
                ]}
                className="relative w-full"
              >
                <CarouselContent>
                  {collagePhotos.map((photo, index) => (
                    <CarouselItem key={index}>
                      <div className="relative p-2">
                        <div className="relative overflow-hidden rounded-2xl border-4 border-primary shadow-2xl bg-valentine-soft">
                          <img
                            src={photo}
                            alt={`Beautiful photo ${index + 1}`}
                            className="w-full h-[400px] md:h-[500px] object-contain transition-transform duration-700 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-valentine-deep/20 to-transparent" />
                          
                          {/* Floating hearts on each slide */}
                          <Heart className="absolute top-4 right-4 w-8 h-8 text-heart-red fill-heart-red animate-pulse-heart" />
                          <Heart 
                            className="absolute bottom-4 left-4 w-6 h-6 text-valentine-pink fill-valentine-pink animate-bounce-soft"
                            style={{ animationDelay: "0.5s" }}
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                <CarouselPrevious className="left-2 bg-primary/80 border-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" />
                <CarouselNext className="right-2 bg-primary/80 border-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" />
              </Carousel>
              
              {/* Slide indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {collagePhotos.map((_, index) => (
                  <Heart 
                    key={index}
                    className="w-4 h-4 text-valentine-pink fill-valentine-pink animate-pulse-heart"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="mt-12 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex flex-col items-center gap-2 animate-bounce-soft">
              <p className="font-script text-xl text-valentine-deep">Keep scrolling... 💕</p>
              <Heart className="w-8 h-8 text-valentine-pink fill-valentine-pink" />
              <div className="w-0.5 h-12 bg-valentine-pink/50 rounded-full" />
            </div>
          </div>
        </section>

        {/* Photo section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
          <div className="text-center opacity-0 animate-fade-in-up">
            <h2 className="font-script text-3xl md:text-5xl text-foreground mb-4">
              Look who's asking! 💕
            </h2>
            <p className="font-poppins text-lg md:text-xl text-valentine-deep mb-8">
              This is who you are saying yes to...
            </p>
          </div>

          {/* Main photo */}
          <div
            className="relative opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="absolute -inset-6 bg-gradient-to-r from-valentine-pink via-accent to-valentine-pink rounded-3xl blur-lg opacity-50 animate-pulse-heart" />
            <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-primary">
              <img
                src={gauravPhoto}
                alt="The one asking to be your valentine"
                className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-xl mx-auto"
              />
              <p className="font-script text-2xl md:text-3xl text-valentine-deep text-center mt-4">
                How can you say no to this face? 🥺💕
              </p>
            </div>
          </div>

          {/* Hidden reveal card */}
          <div
            className="relative mt-12 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="relative w-64 h-80 md:w-72 md:h-96">
              {/* The hidden image */}
              <img
                src={gauravReveal}
                alt="Surprise reveal"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
              
              {/* Cover card that hides the image */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-valentine-pink via-valentine-rose to-valentine-deep rounded-2xl shadow-xl border-2 border-primary cursor-pointer flex flex-col items-center justify-center gap-4 transition-opacity duration-500 ${
                  isRevealed ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
                onClick={() => {
                  setIsRevealed(true);
                  setTimeout(() => setIsRevealed(false), 5000);
                }}
              >
                <Eye className="w-12 h-12 text-primary-foreground animate-pulse-heart" />
                <p className="font-script text-xl md:text-2xl text-primary-foreground text-center px-4">
                  Still not convinced? 🤔
                </p>
                <p className="font-poppins text-sm text-primary-foreground/80 text-center px-4">
                  Click here to see more... 👀
                </p>
                <Heart className="w-6 h-6 text-primary-foreground fill-primary-foreground animate-bounce-soft" />
              </div>
            </div>
          </div>
        </section>

        {/* Final section with obligation and button */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
          {/* Obligation box */}
          <div
            className="relative mb-10 max-w-lg mx-auto opacity-0 animate-fade-in-up"
          >
            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-primary">
              <div className="flex items-center justify-center gap-3 mb-4">
                <AlertCircle className="w-7 h-7 text-valentine-rose" />
                <h3 className="font-poppins font-bold text-lg md:text-xl text-foreground">
                  Important Notice!
                </h3>
              </div>

              <div className="bg-secondary/60 rounded-xl p-4 text-center">
                <p className="font-poppins text-base md:text-lg text-foreground leading-relaxed">
                  ⚠️ If you click <span className="font-bold text-valentine-rose">YES</span>, you are officially obliged to be with{" "}
                  <span className="font-bold text-valentine-deep">Gaurav</span>
                </p>
                <div className="mt-4 space-y-1">
                  <p className="font-poppins font-semibold text-valentine-deep">
                    📅 From: 14th February, 1:00 PM
                  </p>
                  <p className="font-poppins font-semibold text-valentine-deep">
                    📅 To: 15th February, 5:00 PM
                  </p>
                </div>
                <p className="font-script text-xl text-heart-red mt-4">
                  No excuses accepted! 💝
                </p>
              </div>
            </div>

            {/* Decorative hearts */}
            <Heart className="absolute -top-3 -left-3 w-6 h-6 text-heart-red fill-heart-red animate-wiggle" />
            <Heart
              className="absolute -top-3 -right-3 w-6 h-6 text-valentine-pink fill-valentine-pink animate-wiggle"
              style={{ animationDelay: "0.3s" }}
            />
          </div>

          {/* Big YES button */}
          <div
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <ValentineButton
              variant="big"
              onClick={() => navigate("/celebration")}
            >
              YES, I Accept!
            </ValentineButton>
          </div>

          <p
            className="font-script text-xl text-valentine-deep mt-6 text-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Click it... you know you want to! 💕
          </p>

          {/* Bottom decoration */}
          <div
            className="mt-12 flex gap-3 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            {[...Array(7)].map((_, i) => (
              <Heart
                key={i}
                className="w-5 h-5 text-valentine-pink fill-valentine-pink animate-pulse-heart"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyPage;
