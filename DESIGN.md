# Design System & Identidade Visual — Laço & Papel

> **Documento Oficial de Especificações de Design (DESIGN.md)**  
> Papelaria Personalizada, Convites Especiais, Embalagens Afetivas & Kits Pegue e Monte.

---

## 1. Visão Geral & Essência da Marca

- **Nome da Marca:** Laço & Papel
- **Slogan / Assinatura:** *"Transformando momentos especiais em detalhes inesquecíveis."*
- **Segmento:** Papelaria personalizada artesanal e corporativa, convites refinados, kits para festas e lembrancinhas de afeto.
- **Modelo de Operação:** Ateliê 100% online / digital com entregas para todo o Brasil.
- **Tom de Voz & Personalidade:** Romântico, acolhedor, artesanal, refinado, minucioso e delicado.

---

## 2. Paleta de Cores (Color Tokens)

A paleta equilibra tons metálicos quentes de dourado artesanal com bases neutras em off-white e marrom quente para leitura confortável.

| Token | Nome / Papel | HEX | Uso / Descrição |
|---|---|---|---|
| `color-primary` | Dourado Oficial | `#A87524` | Botões principais (CTAs), títulos de destaque, bordas e destaques nobres |
| `color-primary-light` | Ouro Acetinado / Foil | `#D4AF37` | Acentos luminosos, arabescos, micro-ícones e detalhes de brilho |
| `color-primary-dark` | Dourado Envelhecido | `#8B5E1B` | Estados de hover em botões, sombras quentes e traços finos |
| `color-background` | Off-white Papel Fino | `#FBF8F1` | Fundo principal da página e das seções estruturais |
| `color-surface` | Papel Cartão Puro | `#FFFFFF` | Fundo de cartões de produtos, modais, formulários e depoimentos |
| `color-surface-dim` | Champanhe Suave | `#F4EFE6` | Destaques sutis de containers secundários, badges e separadores |
| `color-text-main` | Marrom Café Profundo | `#4C4032` | Tipografia de leitura contínua, parágrafos e títulos de produtos |
| `color-text-muted` | Castanho Acinzentado | `#7A6F62` | Descrições secundárias, legendas, metadados e notas de rodapé |
| `color-border` | Borda Dourada Suave | `#E8DCC8` | Divisores delicados, molduras de fotos e contornos de cartões |

---

## 3. Guia Tipográfico (Typography Hierarchy)

A arquitetura tipográfica baseia-se na regra clássica de **três famílias complementares** para preservar elegância sem poluição visual.

### 3.1 Famílias Oficiais (Google Fonts)

1. **Primária / Serifada — Cormorant Garamond**
   - **Uso:** Nome da marca (*"Laço & Papel"*), cabeçalhos principais (`h1`, `h2`), títulos de categorias e cartões de agradecimento.
   - **Pesos:** Medium (500), SemiBold (600), Bold (700).
   - **Características:** Serifas finas de alto contraste, toque editorial nobre e clássico.

2. **Manuscrita / Assinatura Emocional — Allura** *(Alternativas: Parisienne, Great Vibes)*
   - **Uso:** Slogan, frases de acolhimento (*"Transformando momentos..."*, *"Obrigada por escolher..."*, *"Faça já seu orçamento!"*).
   - **Regra:** Usar estritamente em frases curtas e títulos de apoio para não comprometer a legibilidade.

3. **Auxiliar / Sem Serifa — Montserrat Light & Regular** *(Alternativa: Raleway)*
   - **Uso:** Corpo de texto (`p`), especificações de gramatura, preços, itens de FAQ, botões de ação e rodapé.
   - **Pesos:** Light (300) e Regular (400) para leitura; Medium (500) e SemiBold (600) para rótulos em caixa alta.
   - **Características:** Geometria limpa, excelente renderização em telas mobile e contraste harmônico com as serifas.

### 3.2 Escala Tipográfica (Type Scale)

- **Display / H1 (Hero Title):** `Cormorant Garamond` • 32px – 40px • Line-height: 1.15 • Weight: 600
- **Script Accent (Subtítulo Emocional):** `Allura` • 24px – 28px • Line-height: 1.3 • Weight: 400
- **H2 (Seções de Portfólio):** `Cormorant Garamond` • 24px – 28px • Line-height: 1.25 • Weight: 600
- **H3 (Títulos de Produto / Cards):** `Cormorant Garamond` • 20px – 22px • Line-height: 1.3 • Weight: 600
- **Body Large / Lead:** `Montserrat` • 14px – 15px • Line-height: 1.6 • Weight: 300 / 400
- **Body Regular:** `Montserrat` • 13px – 14px • Line-height: 1.6 • Weight: 300
- **Caption / Overline / Badges:** `Montserrat` • 10px – 11px • Uppercase • Letter-spacing: +0.12em • Weight: 600
- **CTA Button Text:** `Montserrat` • 13px – 14px • Weight: 600 • Letter-spacing: +0.05em

---

## 4. Elementos Gráficos & Ícones de Apoio

- **Símbolo / Ícone:** Laço artesanal ilustrado em traço dourado com corações decorativos e monograma `L & P`.
- **Divisores (Dividers):** Pequenos corações dourados flanqueados por linhas pontilhadas ou arabescos botânicos sutis.
- **Cantos & Molduras:** Molduras finas (0.5px a 1px) com detalhes ornamentais nos cantos (estilo papelaria fina européia).
- **Ícones de Navegação e Categorias:**
  - Sacolas personalizadas (Ícone de sacola com alça de fita).
  - Kit Pegue e Monte (Ícone de caixa de presente / origami).
  - Mini Tags (Ícone de etiqueta artesanal).
  - Convites em Geral (Ícone de envelope com lacre de cera).

---

## 5. Componentes & Padrões de Interface (UI Components)

### 5.1 Botões de Ação (CTAs)
- **Primário (Chamar no WhatsApp):**
  - Fundo: gradiente sutil de Dourado Nobre (`#A87524` a `#8B5E1B`) ou sólido `#A87524`.
  - Texto: Branco (`#FFFFFF`) ou Off-white (`#FBF8F1`), Montserrat 600, centralizado com ícone de balão de mensagem.
  - Arredondamento: `rounded-xl` (12px) ou cantos nobres chanfrados.
  - Sombra: `shadow-md` dourada e suave (`rgba(168, 117, 36, 0.25)`).

- **Secundário / Link de Orçamento:**
  - Estilo texto com linha fina ou botão contornado (ghost) com borda dourada (`#A87524`) e texto marrom.

### 5.2 Cartões de Produtos & Mostruário
- **Container:** Fundo branco (`#FFFFFF`), bordas ultra-finas em `#E8DCC8`, raio de 16px (`rounded-2xl`).
- **Imagem de Destaque:** Proporção 16:9 ou 4:3, com cantos superiores arredondados e acabamento de fotografia suave e luz natural.
- **Pílula de Categoria:** Tag superior translúcida com texto em caixa alta e mini-ícone temático.

### 5.3 Seção "Como Criamos Juntos" (Passo a Passo)
- Marcadores numéricos redondos em dourado claro com numeração em tom marrom.
- Título descritivo em `Cormorant Garamond` seguido por breve instrução em `Montserrat Light`.

### 5.4 Seção de FAQ (Acordeão)
- Linhas com separadores sutis, pergunta em `Cormorant Garamond` (ou `Montserrat Medium`), seta de expansão fina em dourado.

---

## 6. Boas Práticas de Aplicação

1. **Evitar Preto Puro:** Nunca utilizar `#000000` em textos ou ícones; utilizar sempre o marrom nobre `#4C4032` para manter o calor e a sutileza da marca.
2. **Uso Moderado da Cursiva:** A fonte `Allura` nunca deve ser aplicada em blocos de texto corrido ou botões de conversão; seu papel é puramente poético e de ênfase afetiva.
3. **Equilíbrio de Espaços:** Utilizar respiro generoso (paddings confortáveis de 16px a 24px) para reforçar a sensação de papel nobre e ateliê de alta costura em papelaria.
