import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export const GridFeatures = () => {
  const features = [
    {
      title: "Vocabulaire médical",
      description:
        "15 000+ termes médicaux reconnus. Abréviations, dosages, anatomie - tout est compris",
      icon: <IconTerminal2 />,
    },
    {
      title: "Gain de temps prouvé",
      description:
        "3x plus rapide qu'une saisie classique. Finissez vos CR pendant les examens",
      icon: <IconEaseInOut />,
    },
    {
      title: "Multi-spécialités",
      description:
        "IRM, Scanner, Radio, Écho - modèles adaptés à chaque modalité d'imagerie",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Sécurité HDS",
      description: "Hébergement santé certifié, chiffrement bout-en-bout, 100% conforme RGPD",
      icon: <IconCloud />,
    },
    {
      title: "Dr Vox à vos côtés",
      description: "Un Assistant IA qui comprend vos demandes",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Collaboration d'équipe",
      description:
        "Partagez vos modèles avec vos confrères. Harmonisez vos pratiques",
      icon: <IconHelp />,
    },
    {
      title: "100% mains libres",
      description:
        "Conçu pour fonctionner sans clavier ni souris",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Support dédié 24/7",
      description: "Équipe dédiée disponible 24/7 par email ou sur WhatsApp",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200" />
        <span className="group-hover:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted dark:text-muted-dark max-w-xs mx-auto relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
