import { useState, useEffect } from 'react';
import { Flower2, Coffee, Clock, Mail, Heart, Sparkles } from 'lucide-react';

function App() {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    "O mesmo Deus que me refez, vai refazer você também.",
    "O tempo não destrói, ele revela.",
    "Envelhecer é florescer em sabedoria."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const books = [
    {
      title: "O Tempo que Mora em Mim",
      excerpt: "O espelho não é um juiz, é um amigo que reflete histórias.",
      image: "https://raw.githubusercontent.com/juliocamposmachado/O-Tempo-que-Mora-em-Mim/refs/heads/main/src/wow.png?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "A Mulher Que Eu Fui, A Mulher Que Eu Sou",
      excerpt: "Cada cicatriz é uma flor que nasceu do tempo.",
      image: "https://raw.githubusercontent.com/juliocamposmachado/O-Tempo-que-Mora-em-Mim/refs/heads/main/src/mmm.png?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Quando o Tempo Vira Poesia",
      excerpt: "Nas linhas do rosto, leio poemas de vida vivida.",
      image: "https://images.pexels.com/photos/4057659/pexels-photo-4057659.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const testimonials = [
    "Marcela escreve o que toda mulher sente, mas nem sempre consegue dizer.",
    "Cada página me abraçou — é como conversar com uma amiga.",
    "Suas palavras são bálsamo para a alma feminina."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 overflow-hidden gap-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-rose-300">
            <Flower2 size={80} />
          </div>
          <div className="absolute bottom-20 right-20 text-pink-300">
            <Flower2 size={100} />
          </div>
          <div className="absolute top-1/3 right-1/4 text-amber-200">
            <Coffee size={60} />
          </div>
          <div className="absolute bottom-1/3 left-1/4 text-rose-200">
            <Clock size={70} />
          </div>
        </div>

        {/* Texto principal */}
        <div className="max-w-2xl text-center md:text-left z-10 fade-in">
          <Sparkles className="inline-block text-amber-400 mb-4" size={40} />
          <h1 className="title-font text-5xl md:text-7xl font-bold text-rose-900 mb-6 leading-tight">
            O Tempo Mora em Mim
          </h1>
          <p className="title-font text-2xl md:text-3xl text-rose-700 mb-8 italic">
            As Palavras que Curam o Espelho e o Coração
          </p>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl leading-relaxed">
            Uma jornada poética pela alma feminina, guiada pelas palavras de Marcela França
          </p>
          <button className="bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white px-10 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Adquira o livro agora
          </button>
        </div>

        {/* Capa do Livro */}
        <a
          href="https://raw.githubusercontent.com/juliocamposmachado/O-Tempo-que-Mora-em-Mim/refs/heads/main/src/www.png"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white p-4 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 z-10"
        >
          <div className="w-64 h-100 rounded-md overflow-hidden"> <img src="https://raw.githubusercontent.com/juliocamposmachado/O-Tempo-que-Mora-em-Mim/refs/heads/main/src/ebook%20marcela.jpg" alt="Capa do livro O Tempo que Mora em Mim" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" /> </div>

          {/* QR Code posicionado no canto inferior direito */}
  <img
    src="https://raw.githubusercontent.com/juliocamposmachado/O-Tempo-que-Mora-em-Mim/refs/heads/main/src/www.png"
    alt="QR Code de pagamento"
    className="absolute bottom-20 right-2 w-16 h-16 rounded-sm shadow-md"
  />


          
        </a>
      </section>



{/* About Section */}
<section className="py-20 px-6 bg-white/50">
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="flex justify-center">
        <div className="relative">
          {/* Círculo com gradiente contendo a foto */}
          <div className="w-72 h-72 rounded-full bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center shadow-xl overflow-hidden">
            <img
              src="https://raw.githubusercontent.com/juliocamposmachado/O-Tempo-que-Mora-em-Mim/refs/heads/main/src/image%20(5).png" // Substitua pelo link da foto
              alt="Marcela França — jornalista, mulher e eterna aprendiz do tempo"
              className="w-full h-full object-cover" // Preenche o círculo
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-amber-400 rounded-full p-3">
            <Flower2 size={32} className="text-white" />
          </div>
        </div>
      </div>
      <div className="fade-in">
        <h2 className="title-font text-4xl font-bold text-rose-900 mb-6">
             Sobre a Autora
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>Sou Marcela França — jornalista, mulher e eterna aprendiz do tempo.</p>
                <p>Escrevo como quem conversa com uma amiga, sobre as dores e belezas de envelhecer, amar e recomeçar.</p>
                <p className="italic text-rose-700">
                  Minhas palavras nascem do silêncio, da fé e das cicatrizes que o tempo transformou em flores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="title-font text-5xl font-bold text-center text-rose-900 mb-16">
            Os Livros
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="title-font text-2xl font-bold text-rose-900 mb-4">{book.title}</h3>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">"{book.excerpt}"</p>
                  <div className="space-y-3">
                    <button className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg font-medium transition-colors duration-300">
                      Comprar agora
                    </button>
                    <button className="w-full border-2 border-rose-300 text-rose-700 hover:bg-rose-50 py-3 rounded-lg font-medium transition-colors duration-300">
                      Ler amostra gratuita
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-rose-100 via-pink-100 to-amber-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="title-font text-4xl font-bold text-rose-900 mb-12">Trechos que Acolhem</h2>
          <div className="relative h-32 flex items-center justify-center">
            {quotes.map((quote, index) => (
              <p
                key={index}
                className={`signature-font text-3xl text-rose-800 absolute transition-opacity duration-1000 px-6 ${
                  currentQuote === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                "{quote}"
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="title-font text-4xl font-bold text-center text-rose-900 mb-16">Depoimentos das Leitoras</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-rose-400 fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Flower2 className="text-rose-400 mb-4" size={32} />
                <p className="text-gray-700 italic leading-relaxed">"{testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-gradient-to-br from-rose-200 via-pink-200 to-amber-100">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="inline-block text-amber-500 mb-6" size={48} />
          <h2 className="signature-font text-5xl md:text-6xl text-rose-900 mb-8">
            Que cada linha deste livro te lembre: o tempo mora em você.
          </h2>
          <button className="bg-rose-600 hover:bg-rose-700 text-white px-12 py-5 rounded-full text-xl font-medium shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            Adquira agora seu exemplar
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 bg-white/80">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="inline-block text-rose-500 mb-4" size={48} />
          <h3 className="title-font text-3xl font-bold text-rose-900 mb-4">
            Receba cartas poéticas de Marcela no seu e-mail
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-6 py-4 rounded-full border-2 border-rose-200 focus:border-rose-400 focus:outline-none"
            />
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-medium transition-colors duration-300">
              Inscrever-se
            </button>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="py-12 px-6 bg-rose-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="signature-font text-4xl mb-2">Com carinho,</p>
          <p className="signature-font text-5xl text-rose-300">Marcela França</p>
          <p className="text-rose-200 mt-2">Jornalista, mulher e eterna aprendiz do tempo</p>

          <div className="flex justify-center gap-6 mb-8 mt-6">
            <Flower2 className="text-rose-300" size={24} />
            <Coffee className="text-rose-300" size={24} />
            <Clock className="text-rose-300" size={24} />
            <Heart className="text-rose-300" size={24} />
          </div>

          <div className="border-t border-rose-700 pt-8 mt-8 text-rose-200 text-sm">
            <p className="mb-2">Desenvolvido por Julio Campos Machado</p>
            <p className="mb-1">juliocamposmachado@gmail.com</p>
            <p>WhatsApp: +55 11 97060-3441 | +55 11 99294-6628</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
