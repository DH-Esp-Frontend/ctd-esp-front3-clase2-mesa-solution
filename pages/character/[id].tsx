import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Character{
  id:number,
  name:string,
  image:string,
  status:string,
  origin:Origin,
  gender:string,
  location:Location
}
interface Origin{ name:string };
interface Location{ name:string, url:string };

const Character = () =>{
  const [ character, setCharcater ] = useState< Character | null >();
  const {query} = useRouter();
  const { id } = query;

const fetchData = async() =>{
  const urlWithIdQuery = `https://rickandmortyapi.com/api/character/${id}`;
  const res = await fetch(urlWithIdQuery);
  const data = await res.json();
  
  setCharcater(data);
}

useEffect(()=>{
  fetchData()
},[])

if(!character)return "Loading...";

  return (
    <div className="container">
      <div className="cards">
        <div className="CharacterCard__name-container">
          <img className="CharacterCard" src={character?.image} alt={`IMG-${character?.name}`} />
          <p>Name: {character?.name}</p>
          <p>Origin: {character?.origin?.name}</p>
          <p>Gender: {character?.gender}</p>
          <p>Location: {character?.location?.name}</p>
        </div>
      </div>
    </div>
  );
}


export default Character;

