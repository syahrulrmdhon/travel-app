import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle
} from "@ionic/react";
import "./ExploreContainer.css";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({}) => {
  const articles = [
    {
      image: "https://source.unsplash.com/VCJpIYAX_AU",
      title: "Bali is Beautiful",
      author: "Yessir",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequuntur at labore nisi vitae dolorum accusamus esse facilis eos incidunt",
    },
    {
      image: "https://source.unsplash.com/PSJ-B59f-LE",
      title: "Bali is Nice",
      author: "Yessir",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequuntur at labore nisi vitae dolorum accusamus esse facilis eos incidunt",
    },
    {
      image: "https://source.unsplash.com/YMnwxa1bYS0",
      title: "Bali is Amazing",
      author: "Yessir",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequuntur at labore nisi vitae dolorum accusamus esse facilis eos incidunt",
    },
    {
      image: "https://source.unsplash.com/umfRZ2Hb1OM",
      title: "Bali is Wonderful",
      author: "Yessir",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequuntur at labore nisi vitae dolorum accusamus esse facilis eos incidunt",
    },
  ];
  return (
    <div className="explore">
      <IonHeader>
        <IonToolbar>
        <form className="flex-form">
          <input type="search" placeholder="Explore something?" />
          <input type="submit" value="Search" />
        </form>
        </IonToolbar>
      </IonHeader>
      {articles.map((item, key) => (
        <IonCard key={key}>
          <img alt="articles" src={item.image} />
          <IonCardHeader>
            <IonCardTitle>{item.title}</IonCardTitle>
            <IonCardSubtitle>{item.author}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p>{item.content}</p>
            <IonButton> Read</IonButton>
          </IonCardContent>
        </IonCard>
      ))}
    </div>
  );
};

export default ExploreContainer;
