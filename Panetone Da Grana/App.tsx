import React, { useState, useRef } from 'react';
import { 
  Star, 
  CheckCircle2, 
  BookOpen, 
  DollarSign, 
  Gift, 
  Heart, 
  Clock, 
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ChefHat
} from 'lucide-react';
import { Button } from './components/ui/Button';
import { Section } from './components/Section';

// ==================================================================================
// 🔴 LOCAL PARA COLOCAR AS IMAGENS DOS PRINTS 🔴
// ==================================================================================
// Substitua as URLs abaixo pelos links das suas imagens hospedadas (ex: imgur, postimages, etc)
// Mantenha a estrutura, trocando apenas o texto entre aspas em 'imagemUrl'.

const printsDoWhatsapp = [
  {
    id: 1,
    nome: "Mari",
    lugar: "Minas Gerais",
    // COLOQUE O LINK DA IMAGEM 1 ABAIXO
    imagemUrl: "https://i.ibb.co/d07FBB6k/Mari.png", 
  },
  {
    id: 2,
    nome: "Jéssica",
    lugar: "São Paulo",
    // COLOQUE O LINK DA IMAGEM 2 ABAIXO
    imagemUrl: "https://i.ibb.co/gLnwTvvM/Jessica.png",
  },
  {
    id: 3,
    nome: "Lurdes",
    lugar: "Rio de Janeiro",
    // COLOQUE O LINK DA IMAGEM 3 ABAIXO
    imagemUrl: "https://i.ibb.co/r20rLyMz/Lurdes.png",
  },
  {
    id: 4,
    nome: "Antônio",
    lugar: "Bahia",
    // COLOQUE O LINK DA IMAGEM 4 ABAIXO
    imagemUrl: "https://i.ibb.co/gFm39TnB/Antonio.png",
  },
  {
    id: 5,
    nome: "Ricardo",
    lugar: "Paraná",
    // COLOQUE O LINK DA IMAGEM 5 ABAIXO
    imagemUrl: "https://i.ibb.co/8HSrf6j/Ricardo.png",
  }
];
// ==================================================================================

// --- Sub-components ---

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-christmas-gold text-center transform transition duration-300 hover:scale-105 hover:-translate-y-1">
    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
      <Icon className="w-8 h-8 text-christmas-gold" />
    </div>
    <h3 className="text-xl font-bold text-christmas-red mb-3">{title}</h3>
    <p className="text-christmas-stone leading-relaxed font-medium">{description}</p>
  </div>
);

const WhatsappCard = ({ data }: { data: typeof printsDoWhatsapp[0] }) => (
  <div className="bg-white p-4 rounded-2xl shadow-lg border border-orange-200 flex flex-col h-full mx-auto max-w-[320px]">
    {/* Cabeçalho do Card */}
    <div className="flex flex-col items-center mb-4 border-b border-orange-100 pb-3">
      <div className="flex text-christmas-gold mb-2">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
      </div>
      <p className="font-bold text-lg text-christmas-stone">{data.nome}</p>
      <p className="text-sm text-gray-500">{data.lugar}</p>
    </div>
    
    {/* Área da Imagem (Print) */}
    <div className="flex-grow bg-gray-100 rounded-lg overflow-hidden border border-gray-200 relative aspect-[9/16]">
      <img 
        src={data.imagemUrl} 
        alt={`Depoimento de ${data.nome}`} 
        className="w-full h-full object-cover md:object-contain"
      />
    </div>
  </div>
);

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-orange-200 last:border-0">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none hover:bg-orange-50/50 transition-colors px-4 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-bold text-christmas-stone pr-4">{question}</span>
        {isOpen ? <ChevronUp className="text-christmas-gold flex-shrink-0 w-8 h-8" /> : <ChevronDown className="text-gray-400 flex-shrink-0 w-8 h-8" />}
      </button>
      {isOpen && (
        <div className="pb-6 px-4 text-xl text-gray-700 leading-relaxed animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToPurchase = () => {
    const element = document.getElementById('oferta');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340; // Largura do card + gap aproximado
      const currentScroll = scrollRef.current.scrollLeft;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen font-sans text-christmas-stone overflow-x-hidden">
      
      {/* HEADER SECTION */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        {/* Top Warning Bar - Clean & Readable */}
        <div className="bg-christmas-red text-white text-center py-3 px-4">
          <p className="text-base md:text-lg font-bold flex items-center justify-center gap-2">
            <span></span>
            <span>ATENÇÃO: Oferta por tempo limitado!</span>
            <span></span>
          </p>
        </div>
        
        {/* Main Logo Bar */}
        <div className="py-4 px-4 md:px-8 max-w-6xl mx-auto flex items-center justify-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-2 rounded-full">
              <ChefHat className="w-8 h-8 text-christmas-gold" />
            </div>
            <span className="text-2xl md:text-3xl font-extrabold text-christmas-red tracking-tight">
              Panetone Da Grana
            </span>
          </div>
          <div className="hidden md:block text-green-700 font-semibold text-lg">
            Guia Completo para Iniciantes
          </div>
        </div>
      </header>

      {/* Hero Section - Cleaned Up */}
      <div className="relative bg-white border-b border-orange-100">
        <div className="max-w-6xl mx-auto pt-12 pb-20 px-4 md:px-8 md:flex items-center gap-16">
          
          <div className="md:w-1/2 z-10">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 font-bold px-4 py-2 rounded-full mb-8 text-sm md:text-base border border-green-200">
              <CheckCircle2 className="w-5 h-5" />
              Método Passo a Passo para Iniciantes
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-christmas-red mb-6 leading-tight tracking-tight">
              Faça Panetones Macios, Molhadinhos e <span className="text-christmas-gold underline decoration-4 underline-offset-4">Inesquecíveis</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed font-medium">
              Não precisa de equipamentos caros nem experiência. Encante sua família ou faça uma renda extra neste Natal.
            </p>
            
            <div className="flex flex-col gap-4">
              <Button onClick={scrollToPurchase} className="shadow-xl shadow-green-100 py-6 text-2xl w-full md:w-auto animate-pulse-scale">
                Quero Aprender Agora
              </Button>
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-gray-500 mt-2">
                <p className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-600" /> Compra Segura
                </p>
                <p className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-600" /> Acesso Imediato
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0">
            {/* Image - Straight and Clean for better visibility */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <img 
                src="https://i.ibb.co/bgchxmsk/Design-sem-nome-2.png" 
                alt="Panetone caseiro perfeito fatiado" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-6 backdrop-blur-sm border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <DollarSign className="w-8 h-8 text-green-700" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900">Oportunidade de Renda</p>
                    <p className="text-gray-600">Lucre até R$ 3.000 neste Natal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Pain Points Section - High Legibility */}
      <Section className="bg-orange-50">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-christmas-red mb-12">
          Você já passou por isso no Natal?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {[
            "Comprou panetones caros e secos no mercado que ninguém gostou.",
            "Quis presentear a família mas o dinheiro estava curto.",
            "Tentou fazer uma receita da internet e a massa ficou dura.",
            "Precisa de dinheiro extra mas não sabe o que vender."
          ].map((pain, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-5 border-l-8 border-christmas-red">
              <div className="w-10 h-10 flex-shrink-0 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-700 font-black text-xl">✕</span>
              </div>
              <p className="text-xl font-medium text-gray-800">{pain}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center bg-white p-8 md:p-12 rounded-2xl shadow-md border-2 border-christmas-gold/20 max-w-4xl mx-auto">
          <p className="text-2xl font-bold text-christmas-stone leading-relaxed">
            Imagine o cheirinho de panetone assando na sua casa e os elogios que você vai receber.
          </p>
          <p className="text-2xl font-bold text-green-700 mt-4 bg-green-50 inline-block px-4 py-2 rounded-lg">
             Com esse Ebook, isso é simples e garantido!
          </p>
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-christmas-gold font-black text-sm md:text-base">O Método Completo</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-christmas-red mt-3">
            Veja o que você vai aprender
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={BookOpen}
            title="Massas Perfeitas"
            description="Aprenda a fazer a massa que deixa o panetone úmido e macio por dias. Tudo explicado passo a passo."
          />
          <FeatureCard 
            icon={Gift}
            title="Recheios Gourmet"
            description="Do tradicional frutas cristalizadas ao Chocotone trufado que vende muito rápido."
          />
          <FeatureCard 
            icon={DollarSign}
            title="Como Vender"
            description="Técnicas simples para oferecer aos vizinhos, amigos e no WhatsApp sem ter vergonha."
          />
          <FeatureCard 
            icon={CheckCircle2}
            title="Embalagens"
            description="Como embalar seus panetones para que pareçam presentes caros, gastando pouco."
          />
        </div>
      </Section>

      {/* Social Proof - NEW CAROUSEL */}
      <Section className="bg-white border-t border-orange-100 overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-christmas-stone mb-4">
          Quem faz, recomenda!
        </h2>
        <p className="text-center text-gray-500 text-lg mb-10">
          Deslize para o lado para ver os resultados das alunas
        </p>
        
        <div className="relative max-w-5xl mx-auto px-2 md:px-12">
          {/* Navigation Buttons (Desktop/Tablet) */}
          <button 
            onClick={() => scrollCarousel('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-christmas-gold text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition hidden md:block"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button 
            onClick={() => scrollCarousel('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-christmas-gold text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition hidden md:block"
            aria-label="Próximo"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Carousel Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory scroll-smooth hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {printsDoWhatsapp.map((item) => (
              <div key={item.id} className="min-w-[85%] md:min-w-[320px] snap-center">
                <WhatsappCard data={item} />
              </div>
            ))}
          </div>
          
          {/* Visual Indicator (Mobile) */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            <span className="text-sm text-gray-400 font-medium">← Arraste para ver mais →</span>
          </div>
        </div>
      </Section>

      {/* Author/Authority Section */}
      <Section className="bg-christmas-red text-white rounded-3xl my-8 mx-4 md:mx-auto shadow-2xl overflow-hidden">
        <div className="md:flex items-center">
          <div className="md:w-1/3 p-6 md:pl-8 md:py-8 flex items-center justify-center">
             <img 
                src="https://i.ibb.co/4R1FkVLY/Design-sem-nome-1.png" 
                alt="Autora confeiteira sorrindo na cozinha" 
                className="w-full h-auto rounded-2xl shadow-xl border-4 border-white/20"
              />
          </div>
          <div className="md:w-2/3 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-4 text-orange-200">
              <Heart className="fill-current w-6 h-6" />
              <span className="font-bold text-lg uppercase tracking-wide">Feito com carinho</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Para você fazer em casa</h3>
            <p className="text-xl leading-relaxed mb-6 text-orange-50 font-medium">
              Olá! Reuni neste livro digital meus mais de 20 anos de experiência na cozinha. 
              <br/><br/>
              Meu objetivo não é usar termos difíceis. Eu quero que você, na sua cozinha simples, consiga fazer panetones deliciosos iguais aos das melhores padarias.
            </p>
          </div>
        </div>
      </Section>

      {/* Offer / CTA Section */}
      <div id="oferta" className="bg-orange-50 py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-christmas-gold">
          <div className="bg-christmas-green text-white text-center py-6">
            <p className="text-xl md:text-2xl font-black uppercase tracking-wider">Oferta Especial de Lançamento</p>
          </div>
          <div className="p-8 md:p-16 text-center">
            <h3 className="text-3xl md:text-5xl font-extrabold text-christmas-stone mb-4">
              Panetone Da Grana
            </h3>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 font-medium">
              Receitas + Guia de Vendas + Etiquetas para Imprimir
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10 bg-orange-50 p-6 rounded-xl inline-flex mx-auto">
              <div className="text-christmas-red line-through text-2xl font-semibold opacity-80">De R$ 97,00</div>
              <div className="text-green-700 font-black text-6xl">Por R$19,90</div>
            </div>

            <p className="text-green-700 font-bold text-lg mb-8 flex items-center justify-center gap-2">
              <Clock className="w-6 h-6" />
              Acesso imediato no seu celular ou computador
            </p>

            <div className="space-y-6 max-w-lg mx-auto">
              <Button onClick={() => window.location.href = "https://www.ggcheckout.com/checkout/v2/ZA39Rsb9xDYk6GCV6Xcg"} className="w-full text-2xl md:text-3xl py-8 shadow-xl animate-pulse-scale font-black">
                  QUERO APRENDER!
              </Button>
              <div className="text-base text-gray-500 font-medium bg-gray-50 p-4 rounded-lg">
                <p>🔒 Pagamento Único • Sem mensalidades</p>
                <p>Aceitamos PIX e Cartão de Crédito</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-8 text-center border-t border-gray-200">
            <div className="flex justify-center items-center gap-3 mb-3">
              <ShieldCheck className="w-10 h-10 text-christmas-gold" />
              <span className="font-black text-2xl text-christmas-stone">Garantia de 7 Dias</span>
            </div>
            <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
              Se você não gostar das receitas por qualquer motivo, nós devolvemos 100% do seu dinheiro. Sem perguntas e sem letras miúdas.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-christmas-red mb-12">
          Dúvidas Frequentes
        </h2>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden">
          <FaqItem 
            question="Eu nunca fiz pão ou bolo, vou conseguir?" 
            answer="Com certeza! O guia foi criado pensando justamente em quem está começando. As receitas são passo a passo, tudo muito bem explicado." 
          />
          <FaqItem 
            question="Como eu recebo o livro?" 
            answer="Assim que o pagamento for confirmado, você recebe um e-mail com um link. É só clicar e o livro abre no seu celular, tablet ou computador na mesma hora." 
          />
          <FaqItem 
            question="Preciso de batedeira profissional?" 
            answer="Não! Ensino técnicas para fazer a massa na mão (sova manual) que ficam perfeitas. Você usa os utensílios que já tem na sua cozinha." 
          />
          <FaqItem 
            question="É seguro colocar meu cartão?" 
            answer="Sim, utilizamos uma plataforma de pagamento 100% segura. Seus dados estão protegidos e não temos acesso aos números do seu cartão." 
          />
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-christmas-stone text-orange-50 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-6">
             <ChefHat className="w-8 h-8 text-christmas-gold" />
             <h4 className="text-2xl font-extrabold">Panetone Da Grana</h4>
          </div>
          <p className="mb-10 text-gray-400 text-lg">Transformando o Natal de centenas de famílias através da culinária artesanal.</p>
          <div className="flex flex-wrap justify-center gap-8 mb-10 text-base text-gray-400 font-medium underline">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Fale Conosco</a>
          </div>
          <p className="text-sm text-gray-600">
            &copy; 2024 Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}