import Translator from '../../components/translator';

export default function Home() {
  return (
    // Make a basic homepage with a title saying "Scribe, we need to center it and make it bigger"
    // Make the background color scheme a slightly blue gradient
    // Make the text color white
    // Make the font a sans-serif font
    <main className= "bg-gradient-to-r from-blue-400 to-blue-500 h-screen flex flex-col justify-center items-center">
      <div >
        <h1 className="text-white text-6xl font-sans">Scribe</h1>
        <Translator />
      </div>
    </main>
    

  ); 
}
