import React from 'react';
import { X, BookOpen, Layers, Database, FolderTree, Layout, Sparkles, ShieldAlert, CheckCircle, Compass, Rocket } from 'lucide-react';

interface TechnicalDocModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechnicalDocModal: React.FC<TechnicalDocModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-auto text-slate-100 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                Plano Técnico, Arquitetura & Análise do Projeto
              </h2>
              <p className="text-xs text-slate-400">
                Plataforma "Timeline dos Movimentos Artísticos" – Especificação Completa para GitHub Pages & React/Vite
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-8 text-sm leading-relaxed text-slate-300">
          
          {/* SECTION 1: CONCEITO */}
          <section className="space-y-3 p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
            <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
              <Compass className="w-5 h-5" />
              1. Análise do Conceito
            </h3>
            <p>
              O projeto <strong>Timeline dos Movimentos Artísticos</strong> visa transformar o estudo da história da arte em uma experiência espacial e visual imersiva. Tradicionalmente, linhas do tempo artísticas são estritamente lineares (unidimensionais), isolando movimentos ocidentais em sequência. O diferencial crítico deste projeto é a <strong>bidimensionalidade cartesiana (Canvas 2D)</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li><strong>Eixo X (Horizontal - Cronologia):</strong> Permite navegar do Paleolítico (c. 40.000 a.C.) até a Generative & AI Art contemporânea.</li>
              <li><strong>Eixo Y (Vertical - Camadas Culturais & Regionais):</strong> Permite comparar simultaneamente o que acontecia em diferentes países (Brasil, Itália, França, Japão, Egito, etc.) e explorar 9 facetas temáticas (Arte, Política, Sociedade, Música, Arquitetura, Tecnologia, Religião, Economia, Filosofia).</li>
            </ul>
          </section>

          {/* SECTION 2: ARQUITETURA DE INFORMAÇÃO */}
          <section className="space-y-3 p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
            <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
              <Layers className="w-5 h-5" />
              2. Arquitetura de Informação
            </h3>
            <p>
              A informação é hierarquizada em 4 níveis encadeados:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Nível Macro (Eras Históricas):</strong> 10 grandes eras demarcadas visualmente na barra superior do tempo.</li>
              <li><strong>Nível Principal (Linha dos Movimentos Artísticos):</strong> Trilha central contendo cartões dos movimentos estilísticos mundiais com vetores de influência direcionada (grafos de precedência).</li>
              <li><strong>Nível Regional (Trilhas de Países e Continentes):</strong> Trilhas horizontais paralelas dedicadas a nações específicas, evitando o eurocentrismo.</li>
              <li><strong>Nível Micro (Facetas Contextuais):</strong> Decomposição em 9 subcamadas paralelas para explicar as causas sociopolíticas e tecnológicas de cada surgimento artístico.</li>
            </ol>
          </section>

          {/* SECTION 3: ESTRUTURA DE DADOS */}
          <section className="space-y-3 p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
            <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
              <Database className="w-5 h-5" />
              3. Proposta de Estrutura de Dados (TypeScript / JSON)
            </h3>
            <p>
              A aplicação utiliza tipagem rigorosa em TypeScript separando dados de interface, garantindo facilidade de expansão e compatibilidade total com compilação estática para o <strong>GitHub Pages</strong>:
            </p>
            <pre className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-300 overflow-x-auto">
{`interface Movement {
  id: string;
  name: string;
  eraId: EraId;
  startYear: number;
  endYear: number;
  displayPeriod: string;
  originRegion: string;
  visualCharacteristics: string[];
  historicalContext: string;
  keyArtists: Artist[];
  famousWorks: Artwork[];
  influences: string[]; // IDs antecessores
  influenced: string[]; // IDs sucessores
  color: string;
  quote?: string;
  summary: string;
  tags: string[];
}

interface RegionalContextEntry {
  id: string;
  regionId: RegionId;
  eraId: EraId;
  startYear: number;
  endYear: number;
  facets: Partial<Record<ContextCategory, string>>;
}`}
            </pre>
          </section>

          {/* SECTION 4: ESTRUTURA DE PASTAS */}
          <section className="space-y-3 p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
            <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
              <FolderTree className="w-5 h-5" />
              4. Estrutura de Pastas Modular do Projeto
            </h3>
            <pre className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-300 overflow-x-auto">
{`/src
  /data               <- Datasets modulares expansíveis em TS/JSON
    eras.ts           <- Definção das 10 Eras Históricas
    movements.ts      <- Acervo de 35+ movimentos artísticos
    regions.ts        <- Lista de regiões e continentes
    regionalContexts.ts <- Registros contextuais das 9 facetas por país
  /components
    Navbar.tsx        <- Header com troca de modos, filtros e busca
    TimelineCanvas.tsx<- Motor principal de Canvas 2D com Pan & Zoom
    Minimap.tsx       <- Mapa espacial 2D de orientação
    MovementModal.tsx <- Card expandido com galerias, influências e comparações
    ComparativeView.tsx<- Matriz comparativa lado a lado por país
    LinearTimelineView.tsx <- Linha sequencial acessível
    ExplorerView.tsx  <- Índice de busca de obras e artistas
  /types.ts           <- Modelagem de dados global
  App.tsx             <- Gerenciamento de estado principal
  main.tsx            <- Entrypoint Vite/React`}
            </pre>
          </section>

          {/* SECTION 5: CANVAS ENGINE */}
          <section className="space-y-3 p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
            <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
              <Layout className="w-5 h-5" />
              5. Canvas Navegável (Pan, Zoom & Escala Temporal)
            </h3>
            <p>
              O motor do canvas 2D utiliza uma transformação matricial de coordenadas `translate3d(x, y, 0) scale(zoom)`. Devido à enorme disparidade temporal entre os 35.000 anos do Paleolítico e os últimos 100 anos do século XX/XXI, implementamos uma <strong>escala temporal adaptativa por trechos</strong> (`yearToX`):
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li><strong>Pré-História (-40.000 a -3.000):</strong> Escala condensada para evitar espaços vazios estéreis.</li>
              <li><strong>Século XIX e XX (1850 a 1945):</strong> Escala expandida para acomodar a alta densidade de movimentos de vanguarda (Cubismo, Surrealismo, Bauhaus, etc.).</li>
              <li><strong>Minimap Integrado:</strong> Exibe a posição do viewport do usuário sobre a linha macro de 40.000 anos em tempo real.</li>
            </ul>
          </section>

          {/* SECTION 6: ANÁLISE CRÍTICA */}
          <section className="space-y-4 p-5 rounded-2xl bg-slate-950/80 border border-rose-900/60 bg-rose-950/10">
            <h3 className="text-lg font-bold text-rose-400 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5" />
              6. Análise Crítica de Desafios Técnicos & Soluções Práticas
            </h3>
            
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <h4 className="font-bold text-amber-300 text-sm mb-1">⚠️ 1. Risco de Sobrecarga e Performance DOM</h4>
                <p className="text-xs text-slate-300">
                  <strong>Problema:</strong> Renderizar centenas de cards HTML com imagens e subcamadas simultaneamente no canvas pode causar quedas de framerate ao arrastar e aplicar zoom.
                  <br />
                  <strong>Solução Aplicada:</strong> Utilização de `will-change: transform`, renderização por camada física leve e CSS GPU acceleration (`translate3d`), garantindo 60 FPS fluídos.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <h4 className="font-bold text-amber-300 text-sm mb-1">⚠️ 2. Complexidade Histórica e Imprecisão de Datas</h4>
                <p className="text-xs text-slate-300">
                  <strong>Problema:</strong> Movimentos artísticos antigos não possuem datas rígidas exatas de início e fim.
                  <br />
                  <strong>Solução Aplicada:</strong> Utilização de intervalos aproximados (`displayPeriod` ex: "c. 1600 – 1750") acompanhados de resumos contextuais dinâmicos.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <h4 className="font-bold text-amber-300 text-sm mb-1">⚠️ 3. Compatibilidade com Deploy Estático (GitHub Pages)</h4>
                <p className="text-xs text-slate-300">
                  <strong>Problema:</strong> Projetos com servidores backend atrelados exigem infraestrutura paga e perdem a facilidade de hospedagem no GitHub Pages.
                  <br />
                  <strong>Solução Aplicada:</strong> Arquitetura 100% Client-Side em React/Vite com datasets pré-compilados em TypeScript/JSON, funcionando de forma gratuita e sem servidor ativo.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 7: MVP vs ROADMAP */}
          <section className="space-y-3 p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
            <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              7. MVP Entregue vs. Roadmap de Versões Futuras
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <h4 className="font-bold text-emerald-400 text-sm flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" /> MVP Concluído na V1.0:
                </h4>
                <ul className="list-disc pl-4 space-y-1 text-slate-300">
                  <li>35+ movimentos artísticos mapeados do Paleolítico à AI Art.</li>
                  <li>Navegação em Canvas 2D Infinito com Pan & Zoom.</li>
                  <li>Subcamadas por País e 9 facetas contextuais (Arte, Política, Música, Arquitetura...).</li>
                  <li>Matriz Comparativa lado a lado por país.</li>
                  <li>Drawer com obras de arte, imagens, artistas e grafos de influência.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <h4 className="font-bold text-indigo-400 text-sm flex items-center gap-1">
                  <Sparkles className="w-4 h-4" /> V2.0 Roadmap Futuro:
                </h4>
                <ul className="list-disc pl-4 space-y-1 text-slate-300">
                  <li>Páginas permalink dedicadas para cada artista e obra (`/obra/mona-lisa`).</li>
                  <li>Importador/Exportador em JSON para colaboradores comunitários.</li>
                  <li>Modo áudio-guia com síntese de voz e trilhas sonoras da época.</li>
                  <li>Integração com acervos abertos de museus (Metropolitan, Louvre, Rijksmuseum APIs).</li>
                </ul>
              </div>
            </div>
          </section>

        </div>

        {/* Footer Close */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow-lg"
          >
            Entendido, Voltar à Aplicação
          </button>
        </div>

      </div>
    </div>
  );
};
