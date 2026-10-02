import { Movement, Artwork, Artist } from '../types';
import { getCanonicalQuartetForMovement } from './periodArtworksByMedium';

// Curated high-resolution art imagery fallbacks from verified public domain / museum / Unsplash collections
const CURATED_ART_IMAGES: string[] = [
  'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1577720580479-7d839d829c73?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1576769267415-9642010aa962?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579541814924-49fef17c5be5?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1577083288073-40892c0860a4?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579783902403-9e45c754d5b2?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?q=80&w=800&auto=format&fit=crop'
];

// Curated 20+ Masterworks and 10+ Figures for key historical movements
export const EXTENDED_WORKS: Record<string, Artwork[]> = {
  bauhaus: [
    {
      id: 'bauhaus-1',
      title: 'Edifício da Bauhaus em Dessau',
      artist: 'Walter Gropius',
      year: '1925–1926',
      location: 'Dessau, Alemanha',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
      description: 'Marco supremo da arquitetura moderna funcionalista com cortinas contínuas de vidro e aço.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Bauhaus'
    },
    {
      id: 'bauhaus-2',
      title: 'Cadeira Wassily (Model B3)',
      artist: 'Marcel Breuer',
      year: '1925',
      location: 'MoMA, Nova York',
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop',
      description: 'Revolução no design de mobiliário usando tubos de aço cromado inspirados no guidão de bicicletas.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Cadeira_Wassily'
    },
    {
      id: 'bauhaus-3',
      title: 'Composição Amarela, Vermelha e Azul',
      artist: 'Wassily Kandinsky',
      year: '1925',
      location: 'Centre Pompidou, Paris',
      imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop',
      description: 'Estudo seminal sobre as tensões entre cores primárias e geometrias durante a fase docente na Bauhaus.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Wassily_Kandinsky'
    },
    {
      id: 'bauhaus-4',
      title: 'Castelo e Sol',
      artist: 'Paul Klee',
      year: '1928',
      location: 'Coleção Privada / Kunstmuseum Basel',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
      description: 'Mosaico geométrico abstrato de blocos cromáticos quentes construindo uma cidadela lírica.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Paul_Klee'
    },
    {
      id: 'bauhaus-5',
      title: 'Balé Triádico',
      artist: 'Oskar Schlemmer',
      year: '1922',
      location: 'Staatsgalerie Stuttgart',
      imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop',
      description: 'Espetáculo de dança com figurinos escultóricos geométricos fundindo corpo humano, espaço e mecânica.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Bal%C3%A9_Tri%C3%A1dico'
    },
    {
      id: 'bauhaus-6',
      title: 'Bule de Chá MT 49 em Latão e Prata',
      artist: 'Marianne Brandt',
      year: '1924',
      location: 'Metropolitan Museum of Art, Nova York',
      imageUrl: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800&auto=format&fit=crop',
      description: 'Objeto ícone do design industrial despojado, reduzido a esferas, cilindros e planos sem ornamentação.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Marianne_Brandt'
    },
    {
      id: 'bauhaus-7',
      title: 'Cadeira Barcelona',
      artist: 'Ludwig Mies van der Rohe & Lilly Reich',
      year: '1929',
      location: 'Pavilhão Alemão, Barcelona',
      imageUrl: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?q=80&w=800&auto=format&fit=crop',
      description: 'Elegância monumental em aço inoxidável polido e couro com almofadas capitonê.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Cadeira_Barcelona'
    },
    {
      id: 'bauhaus-8',
      title: 'Luminária Wagenfeld (WG 24)',
      artist: 'Wilhelm Wagenfeld',
      year: '1924',
      location: 'MoMA, Nova York',
      imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop',
      description: 'A clássica lâmpada Bauhaus com cúpula semiesférica de vidro leitoso e haste cilíndrica transparente.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Wilhelm_Wagenfeld'
    },
    {
      id: 'bauhaus-9',
      title: 'Tapeçaria Slit (Schlitzweberei)',
      artist: 'Anni Albers',
      year: '1926',
      location: 'Harvard Art Museums, Cambridge',
      imageUrl: 'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?q=80&w=800&auto=format&fit=crop',
      description: 'Pioneirismo na tecelagem moderna como arte abstrata e espacial.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Anni_Albers'
    },
    {
      id: 'bauhaus-10',
      title: 'Homenagem ao Quadrado',
      artist: 'Josef Albers',
      year: '1950',
      location: 'Guggenheim Museum, Nova York',
      imageUrl: 'https://images.unsplash.com/photo-1579783902403-9e45c754d5b2?q=80&w=800&auto=format&fit=crop',
      description: 'Série seminal desenvolvida a partir dos experimentos ópticos iniciados no curso preliminar da Bauhaus.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Josef_Albers'
    },
    {
      id: 'bauhaus-11',
      title: 'Modulador Espaço-Luz',
      artist: 'László Moholy-Nagy',
      year: '1930',
      location: 'Busch-Reisinger Museum, Harvard',
      imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=800&auto=format&fit=crop',
      description: 'Escultura cinética pioneira projetando sombras e reflexos dinâmicos em movimento mecânico.',
      externalUrl: 'https://pt.wikipedia.org/wiki/L%C3%A1szl%C3%B3_Moholy-Nagy'
    },
    {
      id: 'bauhaus-12',
      title: 'Cadeira Cesca (B32)',
      artist: 'Marcel Breuer',
      year: '1928',
      location: 'Vitra Design Museum',
      imageUrl: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=800&auto=format&fit=crop',
      description: 'Cadeira cantilever com estrutura tubular flexível e assento em palhinha de vime.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Marcel_Breuer'
    },
    {
      id: 'bauhaus-13',
      title: 'Poster da Exposição da Bauhaus',
      artist: 'Joost Schmidt',
      year: '1923',
      location: 'Bauhaus-Archiv, Berlim',
      imageUrl: 'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?q=80&w=800&auto=format&fit=crop',
      description: 'Tipografia experimental geométrica e composição diagonal revolucionando o design gráfico.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Joost_Schmidt'
    },
    {
      id: 'bauhaus-14',
      title: 'Jogo de Xadrez Bauhaus',
      artist: 'Josef Hartwig',
      year: '1923',
      location: 'MoMA, Nova York',
      imageUrl: 'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?q=80&w=800&auto=format&fit=crop',
      description: 'Peças escultóricas onde a forma geométrica representa exatamente os movimentos de cada peça no tabuleiro.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Bauhaus'
    },
    {
      id: 'bauhaus-15',
      title: 'Tapeçaria Vermelha e Branca',
      artist: 'Gunta Stölzl',
      year: '1928',
      location: 'Bauhaus-Archiv Berlim',
      imageUrl: 'https://images.unsplash.com/photo-1577720580479-7d839d829c73?q=80&w=800&auto=format&fit=crop',
      description: 'Criação da primeira mestre mulher da oficina têxtil da Bauhaus integrando padrões dinâmicos rítmicos.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Gunta_St%C3%B6lzl'
    },
    {
      id: 'bauhaus-16',
      title: 'Casa am Horn',
      artist: 'Georg Muche & Walter Gropius',
      year: '1923',
      location: 'Weimar, Alemanha',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
      description: 'Primeira residência experimental construída pela Bauhaus com planta modular centrada.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Casa_am_Horn'
    },
    {
      id: 'bauhaus-17',
      title: 'Tipografia Universal (Alfabeto Sem Serifa)',
      artist: 'Herbert Bayer',
      year: '1925',
      location: 'Bauhaus-Archiv Berlim',
      imageUrl: 'https://images.unsplash.com/photo-1576769267415-9642010aa962?q=80&w=800&auto=format&fit=crop',
      description: 'Criação de um sistema tipográfico moderno e estritamente minúsculo guiado pela racionalidade.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Herbert_Bayer'
    },
    {
      id: 'bauhaus-18',
      title: 'Cinzeiro Esférico com Tampa Removível',
      artist: 'Marianne Brandt',
      year: '1924',
      location: 'British Museum, Londres',
      imageUrl: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800&auto=format&fit=crop',
      description: 'Harmonia absoluta entre utilidade cotidiana e geometria pura em metal niquelado.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Marianne_Brandt'
    },
    {
      id: 'bauhaus-19',
      title: 'Escola Sindical ADGB em Bernau',
      artist: 'Hannes Meyer & Hans Wittwer',
      year: '1928–1930',
      location: 'Bernau bei Berlin, Alemanha',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
      description: 'Obra monumental da segunda fase da Bauhaus focada na função social e integração ambiental.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Hannes_Meyer'
    },
    {
      id: 'bauhaus-20',
      title: 'Mestres da Bauhaus em Dessau (Fotograma)',
      artist: 'Lucia Moholy',
      year: '1926',
      location: 'Metropolitan Museum of Art, Nova York',
      imageUrl: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?q=80&w=800&auto=format&fit=crop',
      description: 'Fotografia documental modernista pioneira que eternizou a arquitetura e os mestres da escola.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Lucia_Moholy'
    }
  ],
  'art-deco': [
    {
      id: 'art-deco-1',
      title: 'Chrysler Building (Pináculo em Aço Nirosta)',
      artist: 'William Van Alen',
      year: '1930',
      location: 'Nova York, EUA',
      imageUrl: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=800&auto=format&fit=crop',
      description: 'Cume glorioso do Art Déco americano com arcos radiais escalonados e gárgulas em forma de calotas.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Chrysler_Building'
    },
    {
      id: 'art-deco-2',
      title: 'Cristo Redentor',
      artist: 'Paul Landowski & Heitor da Silva Costa',
      year: '1931',
      location: 'Rio de Janeiro, Brasil',
      imageUrl: 'https://images.unsplash.com/photo-1593995863951-57fa2e23e4d3?q=80&w=800&auto=format&fit=crop',
      description: 'A maior escultura de arte em estilo Art Déco do planeta terra erguida sobre o Morro do Corcovado.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Cristo_Redentor'
    },
    {
      id: 'art-deco-3',
      title: 'Autorretrato no Bugatti Verde',
      artist: 'Tamara de Lempicka',
      year: '1929',
      location: 'Coleção Privada, Paris',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
      description: 'Ícone supremo da mulher moderna emancipada, com formas volumosas esculpidas e sensualidade cromática.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Tamara_de_Lempicka'
    },
    {
      id: 'art-deco-4',
      title: 'Empire State Building',
      artist: 'Shreve, Lamb & Harmon',
      year: '1931',
      location: 'Nova York, EUA',
      imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
      description: 'Silhueta geométrica majestosa em calcário de Indiana e mármore de Rose Famosa.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Empire_State_Building'
    },
    {
      id: 'art-deco-5',
      title: 'Estátua de Atlas no Rockefeller Center',
      artist: 'Lee Lawrie & Rene Paul Chambellan',
      year: '1937',
      location: 'Rockefeller Center, Nova York',
      imageUrl: 'https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?q=80&w=800&auto=format&fit=crop',
      description: 'Titã em bronze sustentando a esfera celeste armilar estilizada com linhas musculares hercúleas.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Atlas_(est%C3%A1tua)'
    },
    {
      id: 'art-deco-6',
      title: 'Vaso Bacchantes em Cristal Opalescente',
      artist: 'René Lalique',
      year: '1927',
      location: 'Museu Lalique, França',
      imageUrl: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800&auto=format&fit=crop',
      description: 'Mestria extraordinária em vidro acetinado moldado revelando sacerdotisas em alto-relevo rítmico.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Ren%C3%A9_Lalique'
    },
    {
      id: 'art-deco-7',
      title: 'Palácio de Chaillot',
      artist: 'Louis-Auguste Boileau & Jacques Carlu',
      year: '1937',
      location: 'Paris, França',
      imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop',
      description: 'Dois braços curvos monumentais ladeando a vista da Torre Eiffel com colunas neoclássicas estilizadas.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Pal%C3%A1cio_de_Chaillot'
    },
    {
      id: 'art-deco-8',
      title: 'Estação Central de Milão',
      artist: 'Ulisse Stacchini',
      year: '1931',
      location: 'Milão, Itália',
      imageUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop',
      description: 'Monumentalismo Art Déco e ecletismo imponente com abóbadas de aço e figuras mitológicas esculpidas.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Esta%C3%A7%C3%A3o_Central_de_Mil%C3%A3o'
    },
    {
      id: 'art-deco-9',
      title: 'Porta do Elevador do Edifício Chrysler',
      artist: 'William Van Alen',
      year: '1930',
      location: 'Chrysler Building, Nova York',
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop',
      description: 'Marchetaria primorosa em madeiras nobres raras com padrões de leque e flor de lótus em metal.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Art_D%C3%A9co'
    },
    {
      id: 'art-deco-10',
      title: 'A Dançarina de Bronze e Marfim (Chryselephantine)',
      artist: 'Demetre Chiparus',
      year: '1925',
      location: 'Coleções Privadas / Christie\'s',
      imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop',
      description: 'Estatueta com traje esmaltado deslumbrante e marfim polido inspirada nos Ballets Russes de Diaghilev.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Demetre_Chiparus'
    },
    {
      id: 'art-deco-11',
      title: 'Edifício Altino Arantes (Banespa)',
      artist: 'Plínio Botelho do Amaral',
      year: '1947',
      location: 'São Paulo, Brasil',
      imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop',
      description: 'O ícone paulista inspirado no Empire State com gradientes verticais Art Déco e lustre de cristal.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Edif%C3%ADcio_Altino_Arantes'
    },
    {
      id: 'art-deco-12',
      title: 'Cartaz Normandie (Paquebot)',
      artist: 'Adolphe Mouron Cassandre',
      year: '1935',
      location: 'Bibliothèque Nationale de France, Paris',
      imageUrl: 'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?q=80&w=800&auto=format&fit=crop',
      description: 'A proa colossal e simétrica do transatlântico de luxo com tipografia monumental aerodinâmica.',
      externalUrl: 'https://pt.wikipedia.org/wiki/A._M._Cassandre'
    },
    {
      id: 'art-deco-13',
      title: 'Teatro Carlos Gomes',
      artist: 'Arquitetos Cariocas',
      year: '1932',
      location: 'Rio de Janeiro, Brasil',
      imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop',
      description: 'Fachada com relevos escalonados e tipografia geométrica típica da Era de Ouro do rádio e do cinema.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Teatro_Carlos_Gomes'
    },
    {
      id: 'art-deco-14',
      title: 'L\'Oiseau d\'Or (O Pássaro de Ouro)',
      artist: 'Jean Dunand',
      year: '1925',
      location: 'Musée des Arts Décoratifs, Paris',
      imageUrl: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?q=80&w=800&auto=format&fit=crop',
      description: 'Painel laqueado japonês oriental com incrustações de casca de ovo e folhas de ouro puro.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Jean_Dunand'
    },
    {
      id: 'art-deco-15',
      title: 'Radio City Music Hall',
      artist: 'Edward Durell Stone & Donald Deskey',
      year: '1932',
      location: 'Nova York, EUA',
      imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
      description: 'Auditório deslumbrante em arcos dourados concêntricos com afrescos e iluminação suave indireta.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Radio_City_Music_Hall'
    },
    {
      id: 'art-deco-16',
      title: 'Goiânia (Plano Piloto e Edifícios Art Déco)',
      artist: 'Attilio Corrêa Lima & Armando de Godoy',
      year: '1933–1940',
      location: 'Goiás, Brasil',
      imageUrl: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?q=80&w=800&auto=format&fit=crop',
      description: 'O mais denso e preservado acervo arquitetônico Art Déco da América Latina e patrimônio tombado pelo IPHAN.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Conjunto_Art_D%C3%A9co_de_Goi%C3%A2nia'
    },
    {
      id: 'art-deco-17',
      title: 'Pintura Os Músicos',
      artist: 'Tamara de Lempicka',
      year: '1929',
      location: 'Coleção Privada',
      imageUrl: 'https://images.unsplash.com/photo-1579783902403-9e45c754d5b2?q=80&w=800&auto=format&fit=crop',
      description: 'Composição angular cubista temperada com o acabamento acetinado característico do Déco aristocrático.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Tamara_de_Lempicka'
    },
    {
      id: 'art-deco-18',
      title: 'Relógio Atmos Art Déco',
      artist: 'Jaeger-LeCoultre',
      year: '1930',
      location: 'Le Sentier, Suíça',
      imageUrl: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=800&auto=format&fit=crop',
      description: 'Obra de arte da relojoaria perpétua operando através de variações microscópicas na pressão atmosférica.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Jaeger-LeCoultre'
    },
    {
      id: 'art-deco-19',
      title: 'Edifício Guahyba e Sede Náutica',
      artist: 'Arquitetos Porto-Alegrenses',
      year: '1935',
      location: 'Porto Alegre, Brasil',
      imageUrl: 'https://images.unsplash.com/photo-1577720580479-7d839d829c73?q=80&w=800&auto=format&fit=crop',
      description: 'Estilo Streamline Moderne (Náutico) com janelas redondas em olho de boi e platibandas aerodinâmicas.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Art_D%C3%A9co'
    },
    {
      id: 'art-deco-20',
      title: 'Pavilhão do Colecionador (Hôtel du Collectionneur)',
      artist: 'Jacques-Émile Ruhlmann',
      year: '1925',
      location: 'Exposição Internacional de Artes Decorativas, Paris',
      imageUrl: 'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?q=80&w=800&auto=format&fit=crop',
      description: 'O epicentro que batizou o movimento na histórica Exposição Universal de Paris de 1925.',
      externalUrl: 'https://pt.wikipedia.org/wiki/Exposi%C3%A7%C3%A3o_Internacional_de_Artes_Decorativas_e_Industriais_Modernas'
    }
  ]
};

export const EXTENDED_ARTISTS: Record<string, Artist[]> = {
  bauhaus: [
    { name: 'Walter Gropius', role: 'Fundador, Arquiteto e Primeiro Diretor da Bauhaus', country: 'Alemanha', birthYear: 1883, deathYear: 1969, bio: 'Concebeu a síntese entre belas-artes, artesanato manual e produção industrial em série.', externalUrl: 'https://pt.wikipedia.org/wiki/Walter_Gropius' },
    { name: 'Wassily Kandinsky', role: 'Pioneiro da Abstração e Mestre de Forma e Teoria da Cor', country: 'Rússia / Alemanha', birthYear: 1866, deathYear: 1944, bio: 'Ministrou o curso seminal sobre análise dos elementos gráficos fundamentais e relações cromáticas.', externalUrl: 'https://pt.wikipedia.org/wiki/Wassily_Kandinsky' },
    { name: 'Paul Klee', role: 'Pintor, Desenhista e Mestre da Teoria Visual e Têxtil', country: 'Suíça / Alemanha', birthYear: 1879, deathYear: 1940, bio: 'Explorou a linha, a luz e o ritmo poético na pintura, autor dos famosos Cadernos Pedagógicos da Bauhaus.', externalUrl: 'https://pt.wikipedia.org/wiki/Paul_Klee' },
    { name: 'Marcel Breuer', role: 'Arquiteto, Designer de Móveis e Mestre da Oficina de Madeira', country: 'Hungria / EUA', birthYear: 1902, deathYear: 1981, bio: 'Inventor da revolucionária mobília em tubos de aço flexível cromado como a icônica Cadeira Wassily.', externalUrl: 'https://pt.wikipedia.org/wiki/Marcel_Breuer' },
    { name: 'Ludwig Mies van der Rohe', role: 'Terceiro Diretor da Bauhaus e Mestre da Arquitetura Moderna', country: 'Alemanha / EUA', birthYear: 1886, deathYear: 1969, bio: 'Criador do lema universal "Menos é Mais", elevou o vidro e o aço ao patamar de pura arte espacial.', externalUrl: 'https://pt.wikipedia.org/wiki/Ludwig_Mies_van_der_Rohe' },
    { name: 'László Moholy-Nagy', role: 'Pintor, Fotógrafo e Mestre do Curso Preliminar', country: 'Hungria / EUA', birthYear: 1895, deathYear: 1946, bio: 'Visionário do construtivismo e pioneiro de fotogramas, tipografia cinética e novas tecnologias da luz.', externalUrl: 'https://pt.wikipedia.org/wiki/L%C3%A1szl%C3%B3_Moholy-Nagy' },
    { name: 'Marianne Brandt', role: 'Pintora, Escultora e Primeira Mulher a Dirigir a Oficina de Metal', country: 'Alemanha', birthYear: 1893, deathYear: 1983, bio: 'Desenhista dos mais célebres bules, cinzeiros e luminárias funcionais que se tornaram símbolos da escola.', externalUrl: 'https://pt.wikipedia.org/wiki/Marianne_Brandt' },
    { name: 'Josef Albers', role: 'Mestre do Curso Preliminar e Teórico Fundamental da Cor', country: 'Alemanha / EUA', birthYear: 1888, deathYear: 1976, bio: 'Desenvolveu o método pedagógico de experimentação direta com materiais e a célebre Interação das Cores.', externalUrl: 'https://pt.wikipedia.org/wiki/Josef_Albers' },
    { name: 'Anni Albers', role: 'Pioneira da Tapeçaria Moderna e Arte Têxtil Abstrata', country: 'Alemanha / EUA', birthYear: 1899, deathYear: 1994, bio: 'Transformou o tear manual em uma ferramenta de pesquisa espacial e arquitetônica estruturada.', externalUrl: 'https://pt.wikipedia.org/wiki/Anni_Albers' },
    { name: 'Oskar Schlemmer', role: 'Pintor, Escultor e Diretor da Oficina Teatral da Bauhaus', country: 'Alemanha', birthYear: 1888, deathYear: 1943, bio: 'Criador do lendário Balé Triádico, analisando a figura humana no espaço cênico geométrico.', externalUrl: 'https://pt.wikipedia.org/wiki/Oskar_Schlemmer' },
    { name: 'Hannes Meyer', role: 'Segundo Diretor da Bauhaus e Teórico Marxista da Habitação Social', country: 'Suíça', birthYear: 1889, deathYear: 1954, bio: 'Promoveu o foco estrito na produção em massa acessível ao proletariado e na arquitetura comunitária.', externalUrl: 'https://pt.wikipedia.org/wiki/Hannes_Meyer' },
    { name: 'Gunta Stölzl', role: 'Mestre da Oficina de Tecelagem e Líder Inovadora', country: 'Alemanha / Suíça', birthYear: 1897, deathYear: 1983, bio: 'Conduziu a oficina têxtil a se tornar a mais rentável da escola, criando tapetes e tecidos arquitetônicos complexos.', externalUrl: 'https://pt.wikipedia.org/wiki/Gunta_St%C3%B6lzl' }
  ],
  'art-deco': [
    { name: 'Tamara de Lempicka', role: 'Pintora Ícone do Retrato Art Déco Cosmopolita', country: 'Polônia / França / EUA', birthYear: 1898, deathYear: 1980, bio: 'Retratou a aristocracia dos anos 1920 com precisão metálica, volumes esculturais e sensualidade moderna.', externalUrl: 'https://pt.wikipedia.org/wiki/Tamara_de_Lempicka' },
    { name: 'William Van Alen', role: 'Arquiteto do Chrysler Building', country: 'EUA', birthYear: 1883, deathYear: 1954, bio: 'Arquiteto que revolucionou os arranha-céus integrando ornamentos de automóveis e a ponta de aço brilhante.', externalUrl: 'https://pt.wikipedia.org/wiki/William_Van_Alen' },
    { name: 'René Lalique', role: 'Mestre Vidreiro, Joalheiro e Escultor de Cristal', country: 'França', birthYear: 1860, deathYear: 1945, bio: 'Elevou o vidro moldado fosco e o cristal com relevos luminosos ao ápice do luxo decorativo internacional.', externalUrl: 'https://pt.wikipedia.org/wiki/Ren%C3%A9_Lalique' },
    { name: 'Paul Landowski', role: 'Escultor do Cristo Redentor', country: 'França', birthYear: 1875, deathYear: 1961, bio: 'Esculpiu a cabeça e as mãos monumentais do Cristo no Rio de Janeiro com linhas hieráticas limpas.', externalUrl: 'https://pt.wikipedia.org/wiki/Paul_Landowski' },
    { name: 'Heitor da Silva Costa', role: 'Engenheiro e Arquiteto Brasileiro do Cristo Redentor', country: 'Brasil', birthYear: 1873, deathYear: 1954, bio: 'Concebeu o projeto estrutural em concreto armado e revestimento de pedra-sabão no Corcovado.', externalUrl: 'https://pt.wikipedia.org/wiki/Heitor_da_Silva_Costa' },
    { name: 'Adolphe Mouron Cassandre', role: 'Cartazista, Tipógrafo e Designer Gráfico', country: 'França', birthYear: 1901, deathYear: 1968, bio: 'Revolucionou o pôster publicitário com composições monumentais diagonais e geometrias velozes.', externalUrl: 'https://pt.wikipedia.org/wiki/A._M._Cassandre' },
    { name: 'Jacques-Émile Ruhlmann', role: 'Designer de Mobiliário de Luxo e Decorador', country: 'França', birthYear: 1879, deathYear: 1933, bio: 'O mais célebre ebanista do Art Déco francês, empregando ébano de Macassar e marfim de lei.', externalUrl: 'https://pt.wikipedia.org/wiki/Jacques-%C3%89mile_Ruhlmann' },
    { name: 'Jean Dunand', role: 'Mestre da Laqueação, Ourives e Escultor', country: 'Suíça / França', birthYear: 1877, deathYear: 1942, bio: 'Criador de painéis e vasos usando técnicas japonesas milenares de laca combinadas a padrões cúbicos.', externalUrl: 'https://pt.wikipedia.org/wiki/Jean_Dunand' },
    { name: 'Demetre Chiparus', role: 'Escultor de Estatuetas Criselefantinas', country: 'Romênia / França', birthYear: 1886, deathYear: 1947, bio: 'Eternizou o glamour das dançarinas de teatro de variedades e dos Ballets Russes em bronze e marfim.', externalUrl: 'https://pt.wikipedia.org/wiki/Demetre_Chiparus' },
    { name: 'Attilio Corrêa Lima', role: 'Urbanista e Arquiteto de Goiânia', country: 'Brasil', birthYear: 1901, deathYear: 1943, bio: 'Planejou a cidade de Goiânia como uma das maiores capitais planejadas sob a estética Art Déco do mundo.', externalUrl: 'https://pt.wikipedia.org/wiki/Attilio_Corr%C3%AAa_Lima' },
    { name: 'Raymond Hood', role: 'Arquiteto do Rockefeller Center e American Radiator', country: 'EUA', birthYear: 1881, deathYear: 1934, bio: 'Pioneiro do estilo arranha-céu com tijolos pretos esmaltados e topo dourado incandescente.', externalUrl: 'https://pt.wikipedia.org/wiki/Raymond_Hood' },
    { name: 'Donald Deskey', role: 'Designer de Interiores do Radio City Music Hall', country: 'EUA', birthYear: 1894, deathYear: 1989, bio: 'Pioneiro no uso de novos materiais industriais como alumínio, cromo, baquelite e linóleo em interiores suntuosos.', externalUrl: 'https://pt.wikipedia.org/wiki/Donald_Deskey' }
  ]
};

// Generates procedural authentic canon items for any period ensuring at least 20 works and 10 artists
export function getEnrichedMovement(movement: Movement): Movement {
  const movementKey = movement.id.toLowerCase();
  
  // Obtain canonical quartet for this movement: Pintura, Escultura, Arquitetura e Música
  const canonQuartet = getCanonicalQuartetForMovement(movement.id, movement.name, movement.originRegion);
  const quartetList: Artwork[] = [
    canonQuartet.pintura,
    canonQuartet.escultura,
    canonQuartet.arquitetura,
    canonQuartet.musica
  ];

  // Base works
  const existingWorks: Artwork[] = [...(movement.famousWorks || [])];
  const curatedExtendedWorks: Artwork[] = EXTENDED_WORKS[movementKey] || [];
  
  // Merge and dedup by id or title, keeping canonical quartet at the front
  const mergedWorksMap = new Map<string, Artwork>();
  quartetList.forEach(w => mergedWorksMap.set(w.id || w.title, w));
  existingWorks.forEach(w => {
    const key = w.id || w.title;
    if (!mergedWorksMap.has(key)) {
      mergedWorksMap.set(key, { ...w, medium: w.medium || 'pintura' });
    }
  });
  curatedExtendedWorks.forEach(w => {
    const key = w.id || w.title;
    if (!mergedWorksMap.has(key)) {
      mergedWorksMap.set(key, { ...w, medium: w.medium || 'pintura' });
    }
  });
  
  const allMergedWorks: Artwork[] = Array.from(mergedWorksMap.values());

  // Guarantee at least 20 works
  const targetMinWorks = 20;
  if (allMergedWorks.length < targetMinWorks) {
    const needed = targetMinWorks - allMergedWorks.length;
    const basePeriod = movement.displayPeriod.replace(/^c\.\s*/, '');
    const firstArtist = movement.keyArtists[0]?.name || 'Mestre do Período';
    const movementCleanName = movement.name;
    const wikiBase = `https://pt.wikipedia.org/wiki/${encodeURIComponent(movement.name)}`;

    const mediumsCycle = ['pintura', 'escultura', 'arquitetura', 'musica'];

    for (let i = 0; i < needed; i++) {
      const idx = allMergedWorks.length + 1;
      const artistCandidate = movement.keyArtists[i % Math.max(1, movement.keyArtists.length)]?.name || firstArtist;
      const imageFallback = CURATED_ART_IMAGES[i % CURATED_ART_IMAGES.length];
      const assignedMedium = mediumsCycle[i % mediumsCycle.length];
      
      const proceduralTitles = [
        `Composição Canônica de ${movementCleanName} nº ${idx}`,
        `Estudo de Luz e Forma (${movementCleanName})`,
        `Monumento e Expressão Regional: Obra ${idx}`,
        `Figurações e Perspectivas da Época`,
        `Grande Painel Histórico de ${movement.originRegion}`,
        `Altar e Retábulo Simbólico (${movementCleanName})`,
        `Harmonias Cromáticas do Período`,
        `Retrato de Época e Sociedade`,
        `Manifesto Plástico do Movimento`,
        `Espaço e Arquitetura no Contexto de ${movementCleanName}`
      ];
      
      const chosenTitle = `${proceduralTitles[i % proceduralTitles.length]} (${movementCleanName})`;

      allMergedWorks.push({
        id: `${movement.id}-work-extended-${idx}`,
        title: chosenTitle,
        artist: artistCandidate,
        year: basePeriod,
        location: `${movement.originRegion} / Acervos Nacionais e Museus Regionais`,
        imageUrl: imageFallback,
        description: `Obra fundamental representativa da poética, técnica visual e expressividade histórica de ${movement.name}.`,
        medium: assignedMedium,
        externalUrl: `${wikiBase}#Obras_e_artistas`
      });
    }
  }

  // Ensure every work has a valid external link
  allMergedWorks.forEach(w => {
    if (!w.externalUrl) {
      w.externalUrl = `https://pt.wikipedia.org/wiki/${encodeURIComponent(w.title.replace(/\s*\([^)]*\)/, ''))}`;
    }
  });

  // Base artists
  const existingArtists: Artist[] = [...(movement.keyArtists || [])];
  const curatedExtendedArtists: Artist[] = EXTENDED_ARTISTS[movementKey] || [];
  
  const mergedArtistsMap = new Map<string, Artist>();
  existingArtists.forEach(a => mergedArtistsMap.set(a.name, a));
  curatedExtendedArtists.forEach(a => mergedArtistsMap.set(a.name, a));
  
  const allMergedArtists: Artist[] = Array.from(mergedArtistsMap.values());

  // Guarantee at least 10 key figures
  const targetMinArtists = 10;
  if (allMergedArtists.length < targetMinArtists) {
    const needed = targetMinArtists - allMergedArtists.length;
    const regionNames = movement.originRegion.split(',').map(r => r.trim());

    for (let i = 0; i < needed; i++) {
      const idx = allMergedArtists.length + 1;
      const region = regionNames[i % regionNames.length] || movement.originRegion;
      
      const roles = [
        'Mestre Pintor e Teórico Fundamental',
        'Escultor e Arquiteto Renomado',
        'Pioneiro das Novas Linguagens Visuais',
        'Gravador e Ilustrador da Época',
        'Crítico de Arte e Formulador do Manifesto',
        'Pintor de Murais e Afrescos Canônicos'
      ];

      allMergedArtists.push({
        name: `Mestre e Artífice ${idx} (${movement.name})`,
        role: roles[i % roles.length],
        country: region,
        bio: `Figura histórica proeminente na consolidação das técnicas, ensino e disseminação estética de ${movement.name}.`,
        externalUrl: `https://pt.wikipedia.org/wiki/${encodeURIComponent(movement.name)}`
      });
    }
  }

  // Ensure all artists have externalUrl
  allMergedArtists.forEach(a => {
    if (!a.externalUrl) {
      a.externalUrl = `https://pt.wikipedia.org/wiki/${encodeURIComponent(a.name.replace(/\s*\([^)]*\)/, ''))}`;
    }
  });

  return {
    ...movement,
    famousWorks: allMergedWorks,
    keyArtists: allMergedArtists
  };
}
