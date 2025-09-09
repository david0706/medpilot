import React from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { cn } from "@/lib/utils";
import { GridLineHorizontal, GridLineVertical } from "./grid-lines";
// import { SkeletonOne } from "./skeletons/first";
import { MedicalCardStack } from "./medical-card-stack";
import { DictationDemo } from "./dictation-demo"
import { SkeletonFour } from "./skeletons/fourth";
import { SkeletonThree } from "./skeletons/third";

export const Features = () => {
  const features = [
    {
      title: "Choisissez un modèle de CR",
      description:
        "Accédez à votre bibliothèque personnalisée ou importez vos modèles existants.",
      skeleton: <MedicalCardStack />,
      className:
        "col-span-1 lg:col-span-4 border-b border-r dark:border-neutral-800",
    },
    {
      title: "Dictez votre rapport",
      description:
        "Mode IA ou Recco : dictez à votre rythme avec le niveau d'assistance qui vous convient.",
        skeleton: <DictationDemo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Recevez un CR parfaitement formatté",
      description:
        "En quelques secondes, votre dictée devient un compte rendu structuré et corrigé, prêt à être validé par vos soins.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 border-r dark:border-neutral-800",
    },
    {
      title: "Envoyez en 1 clic vers votre RIS/PACS",
      description:
        "Copiez-Collez votre CR. Notre algorithme s'occupe du bon formattage vers votre RIS/PACS.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 overflow-hidden lg:overflow-visible">
      <Heading as="h2">Comment fonctionne MedPilot</Heading>
      <Subheading className="text-center ">
      Notre intelligence artificielle transforme votre dictée en compte rendu structuré et validé, vous permettant de rester pleinement concentré sur l'analyse des images, le diagnostic et votre patient.
      </Subheading>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
        <GridLineHorizontal
          style={{
            top: 0,
            left: "-10%",
            width: "120%",
          }}
        />

        <GridLineHorizontal
          style={{
            bottom: 0,
            left: "-10%",
            width: "120%",
          }}
        />

        <GridLineVertical
          style={{
            top: "-10%",
            right: 0,
            height: "120%",
          }}
        />
        <GridLineVertical
          style={{
            top: "-10%",
            left: 0,
            height: "120%",
          }}
        />
      </div>
    </div>
  );
};

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Heading as="h3" size="sm" className="text-left">
      {children}
    </Heading>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Subheading className="text-left max-w-sm mx-0 lg:text-sm my-2">
      {children}
    </Subheading>
  );
};
