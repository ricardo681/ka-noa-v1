# Ka Noa — UI Kit: Homepage

Recriação em alta fidelidade da home institucional da Ka Noa, baseada no sistema definido em `colors_and_type.css` e nos doodles em `assets/doodles/`.

## Estrutura

- `index.html` — entrypoint, carrega todos os componentes e monta o App
- `styles.css` — estilos consolidados da home (importa `colors_and_type.css`)
- `Buttons.jsx` — `<KNButton variant="primary|secondary">` e `<KNGhost>`
- `Header.jsx` — header sticky com nav, logo central, ações (busca/conta/sacola)
- `Hero.jsx` — display headline + lede + CTA, com selo "Edição Limitada" giratório
- `Marquee.jsx` — faixa rolante de palavras-âncora separadas por doodles
- `Manifesto.jsx` — bloco escuro com manifesto + estatísticas do ateliê
- `CollectionGrid.jsx` — grid de 6 produtos com tratamento editorial
- `DoodleGrid.jsx` — galeria 8×3 dos 24 doodles, hover terracota
- `Newsletter.jsx` — captação de e-mail minimal
- `Footer.jsx` — 4 colunas + assinatura gigante "KA NOA"

## Comportamento

- Header fica transparente sobre o hero, ganha backdrop blur ao rolar.
- Hero usa **placeholders** com hatch dashed onde imagens reais devem entrar — flag para o cliente fornecer fotografia.
- Marquee roda em 40s lineares, infinito.
- Collection grid: hover dá leve zoom no doodle (não na imagem — porque é placeholder; substituir lógica para imagem real).
- Newsletter aceita e-mail e mostra "Obrigado. Até a próxima estação."

## Placeholders deixados intencionalmente

- **Imagem do hero** — foto editorial fullbleed da peça-âncora da coleção
- **Fotos de produto no grid** — substituir os doodles de fundo por fotos reais 3:4

Esses lugares estão visualmente marcados (background creme + doodle + label "[Imagem editorial]") para facilitar o briefing fotográfico.
