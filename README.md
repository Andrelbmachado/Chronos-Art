# Chronos Art 🏛️→🖼️→💻

**Uma linha do tempo interativa da história da arte — da pintura rupestre à arte com IA.**

Arraste, dê zoom e atravesse dezenas de milhares de anos de arte num único canvas. Clique em um movimento para ver contexto histórico, artistas, características e obras de pintura, escultura, arquitetura e música do período.

> 🦖 **Easter egg:** no início da régua (antes da Pré-História), continue arrastando para trás e segure — a linha do tempo entra no **Modo Dinossauros** (Mesozoico).

---

## ✨ O que já existe

| Recurso | Onde está no código |
|---|---|
| Canvas da linha do tempo com arrastar, zoom (roda do mouse, pinça, botões `+` / `−` / reset) e marco do Ano 0 | `src/components/TimelineCanvas.tsx` |
| Minimapa clicável/arrastável, minimizável | `src/components/Minimap.tsx` |
| Painel lateral do movimento: resumo, características, artistas, carrossel de obras, filtro por meio (🎨 pintura, escultura, arquitetura, música), links externos, movimentos conectados | `src/components/MovementModal.tsx` |
| Painel redimensionável (arrastar a borda), fecha com `Esc`, largura salva no navegador | `MovementModal.tsx` + `App.tsx` |
| Busca com autocompletar por nome, período, região de origem, artista e tags | `src/components/Navbar.tsx` |
| Tema claro/escuro (salvo no navegador) | `App.tsx` / `Navbar.tsx` |
| Faixas de contexto regional (bandeiras + fatos de arte por região e época) | `TimelineCanvas.tsx` + `src/data/regionalContexts.ts` |
| Modo Dinossauros, com painel de detalhes por espécie | `TimelineCanvas.tsx` + `DinosaurDetailDrawer.tsx` |
| Layout responsivo (desktop, iPad, celular retrato/paisagem, toque) | `App.tsx` e componentes |

### Conteúdo atual (`src/data/`)

| Arquivo | Conteúdo |
|---|---|
| `eras.ts` | 10 eras, da Pré-História à Arte Digital & Contemporânea |
| `movements.ts` | 44 movimentos com artistas, obras, influências e tags |
| `periodArtworksByMedium.ts` | Obras canônicas por período em pintura, escultura, arquitetura e música |
| `movementExtendedDetails.ts` | Enriquecimento dos movimentos exibido no painel |
| `regions.ts` | 14 regiões e 9 categorias de contexto |
| `regionalContexts.ts` | 45 entradas de contexto regional por período |
| `dinosaurs.ts` | 13 dinossauros e as eras do Mesozoico |

> ⚠️ Os dados estão em **checagem de fatos** — há erros conhecidos listados no [PLANO.md](PLANO.md#fase-1--checagem-de-fatos).

---

## 🚧 Planejado (ainda **não** existe)

- **Filtros de região/categoria na interface** — hoje as regiões e categorias ativas são fixas em `App.tsx`. *(planejado)*
- **Outras visões** (linear, comparativa, explorador, documentação técnica) — os componentes `LinearTimelineView`, `ComparativeView`, `ExplorerView`, `FilterBar`, `DinosaurMode` e `TechnicalDocModal` existem em `src/components/`, mas **não estão ligados** ao app. *(planejado)*
- **Recursos com IA (Gemini)** — `@google/genai` está nas dependências e `GEMINI_API_KEY` no `.env.example`, mas nenhum código usa a API. *(planejado)*
- Fonte (museu/catálogo) para cada obra, versão em inglês, CI e deploy. *(planejado — ver [PLANO.md](PLANO.md))*

---

## 🚀 Rodar localmente

Requisitos: Node.js 20+ (ou Bun — há `bun.lock`).

```bash
npm install
npm run dev       # http://localhost:3000
```

| Script | O que faz |
|---|---|
| `npm run dev` | Servidor Vite na porta 3000 (`--host=0.0.0.0`, acessível na rede local) |
| `npm run build` | Build de produção em `dist/` |
| `npm run preview` | Serve o build localmente |
| `npm run lint` | Checagem de tipos (`tsc --noEmit`) |

Não é preciso `.env` para rodar hoje (a chave Gemini ainda não é usada).

## 🧱 Stack

React 19 · TypeScript · Vite 6 · Tailwind CSS 4 · Motion · lucide-react. Todo o conteúdo é estático, em TypeScript, sem backend.

## 🗂️ Estrutura

```
src/
├── App.tsx            # estado global: busca, tema, movimento selecionado, largura do painel
├── components/        # Navbar, TimelineCanvas, Minimap, MovementModal, ...
├── data/              # eras, movimentos, obras, regiões, contextos, dinossauros
├── assets/images/     # imagens das obras de destaque
└── types.ts           # tipos de domínio (Movement, Artwork, Region, ...)
```

## 🤝 Contribuir

O jeito mais útil de ajudar agora é **corrigir dados**: escolha um item da [Fase 1 do PLANO.md](PLANO.md#fase-1--checagem-de-fatos), edite o arquivo em `src/data/`, rode `npm run lint` e abra um PR citando a fonte.

---

> README revisado em 21/10/2026 contra o código da branch `docs/readme-plano`. Tudo marcado como **planejado** ainda não existe no código.
