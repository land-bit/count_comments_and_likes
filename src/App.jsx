import Comment from "./components/Comment";
import EnTete from "./components/EnTete";

export default function App() {
  const exempleDB = [
    {
      nom: "Dupont",
      postNom: "Jean",
      comment:
        "C'est un excellent produit ! J'ai été agréablement surpris par la qualité et le design. Le service client est également très réactif et professionnel. Je recommande vivement ce produit à tous ceux qui sont intéressés.",
      status: false,
    },
    {
      nom: "Martin",
      postNom: "Pierre",
      comment:
        "Service client très réactif. J'ai eu un petit souci avec ma commande, mais ils ont répondu rapidement et ont résolu mon problème en un rien de temps. Je suis très satisfait de leur service.",
      status: false,
    },
    {
      nom: "Leroy",
      postNom: "Julie",
      comment:
        "Livraison rapide, je suis satisfaite. Le produit est arrivé en parfait état et correspond exactement à la description. Je suis très contente de mon achat et je vais certainement commander à nouveau sur ce site.",
      status: false,
    },
    {
      nom: "Moreau",
      postNom: "Sophie",
      comment:
        "Je recommande ce site à mes amis. Non seulement ils ont une grande variété de produits, mais leur service client est également excellent. J'ai eu une expérience très positive avec eux.",
      status: false,
    },
    {
      nom: "Petit",
      postNom: "Luc",
      comment:
        "J'ai été très impressionné par la qualité du produit que j'ai reçu. Il est bien conçu, facile à utiliser et fonctionne parfaitement. Je suis très satisfait de mon achat et je le recommande vivement à tous ceux qui sont à la recherche d'un produit de qualité.",
      status: false,
    },
    {
      nom: "Garnier",
      postNom: "François",
      comment:
        "Le produit est arrivé à temps et en parfait état. J'ai été impressionné par la qualité du produit et le service client. Je recommande vivement ce produit à tous ceux qui sont intéressés.",
      status: false,
    },
    {
      nom: "Lefevre",
      postNom: "Martine",
      comment:
        "J'ai été très satisfait de mon achat. Le produit est de haute qualité et le service client est excellent. Je recommande vivement ce produit à tous ceux qui sont à la recherche d'un produit de qualité.",
      status: false,
    },
    {
      nom: "Roux",
      postNom: "Nicolas",
      comment:
        "J'ai été très impressionné par la qualité du produit et le service client. Je recommande vivement ce produit à tous ceux qui sont intéressés. Le produit est arrivé à temps et en parfait état.",
      status: false,
    },
    {
      nom: "Vincent",
      postNom: "Marie",
      comment:
        "Le produit est de haute qualité et le service client est excellent. J'ai été très satisfait de mon achat et je le recommande vivement à tous ceux qui sont à la recherche d'un produit de qualité.",
      status: false,
    },
    {
      nom: "Lemoine",
      postNom: "Claude",
      comment:
        "J'ai été très impressionné par la qualité du produit et le service client. Le produit est arrivé à temps et en parfait état. Je recommande vivement ce produit à tous ceux qui sont intéressés.",
      status: false,
    },
  ];

  return (
    <div
      style={{
        width: "84%",
        padding: "8%",
      }}
    >
      <EnTete />
      {exempleDB.map((e, i) => (
        <Comment key={i} data={e} />
      ))}
    </div>
  );
}
