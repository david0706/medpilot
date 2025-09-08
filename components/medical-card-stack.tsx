"use client";
import { CardStack } from "@/components/ui/card-stack";

export function MedicalCardStack() {
  return (
    <div className="h-full w-full flex items-center justify-center py-8">
      <CardStack items={MEDICAL_REPORTS} />
    </div>
  );
}

const MEDICAL_REPORTS = [
  {
    id: 0,
    name: "",
    designation: "",
    content: (
      <div className="h-full flex flex-col">
        <h2 className="text-2xl font-bold text-center mb-8">IRM GENOU DROIT</h2>
        
        <div className="space-y-4 text-left">
          <div>
            <h3 className="font-bold mb-1">INDICATION:</h3>
            <p className="text-sm">Bilan</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-1">TECHNIQUE:</h3>
            <p className="text-sm">Séquences réalisées : DP Fat Sat dans les trois plans, T1 sagittal, T2 coronal et axial.</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-1">RÉSULTATS:</h3>
            <div className="text-sm space-y-3">
              <div>
                <p className="font-semibold">Structures osseuses</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>Absence d'anomalie de signal médullaire</li>
                  <li>Intégrité des contours osseux</li>
                  <li>Pas de fracture ni de contusion osseuse</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold">Cartilages articulaires :</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>Cartilage fémoro-tibial : épaisseur conservée, signal homogène</li>
                  <li>Absence de chondropathie significative</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold">Ménisques</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>Ménisque médial : morphologie et signal normaux, sans fissure</li>
                  <li>Ménisque latéral : aspect normal, sans lésion</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold">Ligaments :</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>LCA et LCP : continuité préservée, signal et épaisseur normaux</li>
                  <li>LLI et LLE : intégrité conservée</li>
                  <li>Appareil extenseur : intact</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold">Structures synoviales :</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>Absence d'épanchement articulaire significatif</li>
                  <li>Pas d'épaississement synovial</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-1">CONCLUSION:</h3>
            <p className="text-sm">IRM du genou droit sans anomalie décelable. Structures ménisco-ligamentaires intactes. Absence de pathologie cartilagineuse ou osseuse.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    name: "",
    designation: "",
    content: (
      <div className="h-full flex flex-col">
        <h2 className="text-2xl font-bold text-center mb-8">IRM CÉRÉBRALE</h2>
        
        <div className="space-y-4 text-left">
          <div>
            <h3 className="font-bold mb-1">INDICATION:</h3>
            <p className="text-sm">Céphalées chroniques. Recherche de pathologie intracrânienne.</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-1">TECHNIQUE:</h3>
            <p className="text-sm">Séquences T1, T2, FLAIR, diffusion et T1 gadolinium.</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-1">RÉSULTATS:</h3>
            <div className="text-sm space-y-3">
              <div>
                <p className="font-semibold">Parenchyme cérébral :</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>Absence de processus expansif intra ou extra-axial</li>
                  <li>Pas d'anomalie de signal de la substance blanche ou grise</li>
                  <li>Ventricules de taille et morphologie normales</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold">Espaces péri-cérébraux :</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>Espaces sous-arachnoïdiens de taille normale</li>
                  <li>Absence de collection extra-axiale</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold">Structures de la ligne médiane :</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>Corps calleux de morphologie normale</li>
                  <li>Tronc cérébral sans particularité</li>
                  <li>Cervelet d'aspect normal</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold">Après injection :</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>Absence de prise de contraste pathologique</li>
                  <li>Perméabilité normale des sinus veineux</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-1">CONCLUSION:</h3>
            <p className="text-sm">IRM cérébrale normale. Absence d'anomalie morphologique ou de prise de contraste pathologique.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    name: "",
    designation: "",
    content: (
      <div className="h-full flex flex-col">
        <h2 className="text-2xl font-bold text-center mb-8">SCANNER THORACIQUE</h2>
        
        <div className="space-y-4 text-left">
          <div>
            <h3 className="font-bold mb-1">INDICATION:</h3>
            <p className="text-sm">Dyspnée. Bilan.</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-1">TECHNIQUE:</h3>
            <p className="text-sm">Acquisition hélicoïdale sans et avec injection de produit de contraste iodé.</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-1">RÉSULTATS:</h3>
            <div className="text-sm space-y-3">
              <div>
                <p className="font-semibold">Parenchyme pulmonaire :</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>Absence de foyer de condensation alvéolaire</li>
                  <li>Pas de nodule ou masse suspecte</li>
                  <li>Absence d'anomalie interstitielle</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold">Médiastin :</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>Cœur de taille normale</li>
                  <li>Absence d'adénopathie médiastinale significative</li>
                  <li>Gros vaisseaux de calibre normal</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold">Plèvre :</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>Absence d'épanchement pleural</li>
                  <li>Pas d'épaississement pleural</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold">Paroi thoracique :</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>Structures osseuses sans anomalie</li>
                  <li>Parties molles de densité normale</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-1">CONCLUSION:</h3>
            <p className="text-sm">Scanner thoracique normal. Absence d'anomalie pleuropulmonaire ou médiastinale.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    name: "",
    designation: "",
    content: (
      <div className="h-full flex flex-col">
        <h2 className="text-2xl font-bold text-center mb-8">ÉCHOGRAPHIE ABDOMINALE</h2>
        
        <div className="space-y-4 text-left">
          <div>
            <h3 className="font-bold mb-1">INDICATION:</h3>
            <p className="text-sm">Douleurs abdominales. Bilan.</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-1">TECHNIQUE:</h3>
            <p className="text-sm">Exploration par voie sus et sous-costale avec sonde convexe.</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-1">RÉSULTATS:</h3>
            <div className="text-sm space-y-3">
              <div>
                <p className="font-semibold">Foie :</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>Taille normale, contours réguliers</li>
                  <li>Échostructure homogène</li>
                  <li>Absence de lésion focale</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold">Voies biliaires :</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>Vésicule biliaire alithiasique, parois fines</li>
                  <li>Voies biliaires intra et extra-hépatiques non dilatées</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold">Pancréas :</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>Taille et échostructure normales</li>
                  <li>Wirsung non dilaté</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold">Rate :</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>Taille normale (10 cm)</li>
                  <li>Échostructure homogène</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold">Reins :</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>Taille et différenciation cortico-médullaire normales</li>
                  <li>Absence de dilatation pyélo-calicielle</li>
                  <li>Pas de lithiase visible</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-1">CONCLUSION:</h3>
            <p className="text-sm">Échographie abdominale normale. Absence d'anomalie hépatobiliaire, pancréatique ou rénale.</p>
          </div>
        </div>
      </div>
    ),
  },
];