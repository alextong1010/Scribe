import Translator from '../../components/translator';

export default function Home() {
  return (
    <main className= "bg-gradient-to-r from-blue-400 to-blue-500 h-screen flex flex-col justify-center items-center">
      <div >
        <h1 className="text-white text-6xl font-sans">Scribe</h1>
        <Translator />
      </div>
    </main>
    

  ); 
}
