import type { NextPage } from 'next';
import Link from "next/link";
//all characters
interface Characters{
  results:Character[]
}
//one character
 interface Character {
     id: number;
     name: string;
 }
interface Props{
  characters: Characters
}

const Home: NextPage<Props> = ({ characters }) => {
  return (
    <div>
      <h1>Rick And Morty Characters</h1>
      <ol>
      {characters?.results.length
        ? characters?.results.map((n) => (
            <Link href={`/character/${n.id}`} key={n.id}>
              <li>
              <p className="ListName">{n.name}</p>
              </li>
            </Link>
          ))
        : null}
      </ol>
    </div>
  );
};


export const getStaticProps = async()=>{
   const res = await fetch("https://rickandmortyapi.com/api/character/");
   const data = await res.json();

   return{ props:{ characters: data } }
}
export default Home;

