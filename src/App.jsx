import { useState } from "react";
import Comment from "./components/Comment";
import EnTete from "./components/EnTete";
import "./App.css";

export default function App() {
  const exempleDB = [
    {
      id: 1,
      nom: "Dupont",
      postNom: "Jean",
      comment:
        "C'est un excellent produit ! J'ai été agréablement surpris par la qualité et le design. Le service client est également très réactif et professionnel. Je recommande vivement ce produit à tous ceux qui sont intéressés.",
      status: true,
    },
    {
      id: 2,
      nom: "Martin",
      postNom: "Pierre",
      comment:
        "Service client très réactif. J'ai eu un petit souci avec ma commande, mais ils ont répondu rapidement et ont résolu mon problème en un rien de temps. Je suis très satisfait de leur service.",
      status: false,
    },
    {
      id: 3,
      nom: "Leroy",
      postNom: "Julie",
      comment:
        "Livraison rapide, je suis satisfaite. Le produit est arrivé en parfait état et correspond exactement à la description. Je suis très contente de mon achat et je vais certainement commander à nouveau sur ce site.",
      status: true,
    },
    {
      id: 4,
      nom: "Moreau",
      postNom: "Sophie",
      comment:
        "Je recommande ce site à mes amis. Non seulement ils ont une grande variété de produits, mais leur service client est également excellent. J'ai eu une expérience très positive avec eux.",
      status: true,
    },
    {
      id: 5,
      nom: "Petit",
      postNom: "Luc",
      comment:
        "J'ai été très impressionné par la qualité du produit que j'ai reçu. Il est bien conçu, facile à utiliser et fonctionne parfaitement. Je suis très satisfait de mon achat et je le recommande vivement à tous ceux qui sont à la recherche d'un produit de qualité.",
      status: false,
    },
    {
      id: 6,
      nom: "Garnier",
      postNom: "François",
      comment:
        "Le produit est arrivé à temps et en parfait état. J'ai été impressionné par la qualité du produit et le service client. Je recommande vivement ce produit à tous ceux qui sont intéressés.",
      status: false,
    },
    {
      id: 7,
      nom: "Lefevre",
      postNom: "Martine",
      comment:
        "J'ai été très satisfait de mon achat. Le produit est de haute qualité et le service client est excellent. Je recommande vivement ce produit à tous ceux qui sont à la recherche d'un produit de qualité.",
      status: false,
    },
    {
      id: 8,
      nom: "Roux",
      postNom: "Nicolas",
      comment:
        "J'ai été très impressionné par la qualité du produit et le service client. Je recommande vivement ce produit à tous ceux qui sont intéressés. Le produit est arrivé à temps et en parfait état.",
      status: false,
    },
    {
      id: 9,
      nom: "Vincent",
      postNom: "Marie",
      comment:
        "Le produit est de haute qualité et le service client est excellent. J'ai été très satisfait de mon achat et je le recommande vivement à tous ceux qui sont à la recherche d'un produit de qualité.",
      status: false,
    },
    {
      id: 10,
      nom: "Lemoine",
      postNom: "Claude",
      comment:
        "J'ai été très impressionné par la qualité du produit et le service client. Le produit est arrivé à temps et en parfait état. Je recommande vivement ce produit à tous ceux qui sont intéressés.",
      status: false,
    },
  ];

  const [data, setData] = useState([...exempleDB]);
  const likes = data.filter((e) => (e.status == true ? e : null));

  function handleDataLike(i) {
    setData(
      data.map((e) => (e.id === i ? { ...e, status: !e.status } : { ...e }))
    );
  }

  function handleDataDelete(i) {
    setData(data.filter((e) => e.id !== i));
  }

  return (
    <div
      style={{
        width: "84%",
        padding: "8%",
      }}
    >
      <EnTete nbr={data.length} like={likes.length} />
      {data.map((e) => (
        <Comment
          key={e.id}
          data={e}
          handleStatus={() => handleDataLike(e.id)}
          suppression={() => handleDataDelete(e.id)}
        />
      ))}
    </div>
  );
}
