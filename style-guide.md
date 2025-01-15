# Paleta de Cores para Portfólio de Desenvolvedor Web

## Cores Definidas

### CSS HEX
```css
--white: #ffffffff;
--eerie-black: #1b1b1dff;
--tomato: #ff6347ff;
--silver: #b2b2b2ff;
```

### CSS HSL
```css
--white: hsla(0, 0%, 100%, 1);
--eerie-black: hsla(240, 4%, 11%, 1);
--tomato: hsla(9, 100%, 64%, 1);
--silver: hsla(0, 0%, 70%, 1);
```

### SCSS HEX
```scss
$white: #ffffffff;
$eerie-black: #1b1b1dff;
$tomato: #ff6347ff;
$silver: #b2b2b2ff;
```

### SCSS HSL
```scss
$white: hsla(0, 0%, 100%, 1);
$eerie-black: hsla(240, 4%, 11%, 1);
$tomato: hsla(9, 100%, 64%, 1);
$silver: hsla(0, 0%, 70%, 1);
```

### SCSS RGB
```scss
$white: rgba(255, 255, 255, 1);
$eerie-black: rgba(27, 27, 29, 1);
$tomato: rgba(255, 99, 71, 1);
$silver: rgba(178, 178, 178, 1);
```

### SCSS Gradient
```scss
$gradient-top: linear-gradient(0deg, #ffffffff, #1b1b1dff, #ff6347ff, #b2b2b2ff);
$gradient-right: linear-gradient(90deg, #ffffffff, #1b1b1dff, #ff6347ff, #b2b2b2ff);
$gradient-bottom: linear-gradient(180deg, #ffffffff, #1b1b1dff, #ff6347ff, #b2b2b2ff);
$gradient-left: linear-gradient(270deg, #ffffffff, #1b1b1dff, #ff6347ff, #b2b2b2ff);
$gradient-top-right: linear-gradient(45deg, #ffffffff, #1b1b1dff, #ff6347ff, #b2b2b2ff);
$gradient-bottom-right: linear-gradient(135deg, #ffffffff, #1b1b1dff, #ff6347ff, #b2b2b2ff);
$gradient-top-left: linear-gradient(225deg, #ffffffff, #1b1b1dff, #ff6347ff, #b2b2b2ff);
$gradient-bottom-left: linear-gradient(315deg, #ffffffff, #1b1b1dff, #ff6347ff, #b2b2b2ff);
$gradient-radial: radial-gradient(#ffffffff, #1b1b1dff, #ff6347ff, #b2b2b2ff);
```

---

## Aplicação de Cores

### $white (#ffffff)
**Usos:**
- Fundo principal para páginas, garantindo clareza e foco no conteúdo.
- Texto em contraste com fundos escuros (e.g., títulos sobre fundo `$eerie-black`).
- Ícones ou bordas sutis para um design limpo.

### $eerie-black (#1b1b1d)
**Usos:**
- Fundo para seções específicas (e.g., rodapé ou barra de navegação superior).
- Texto principal quando o fundo for claro (como `$white` ou `$silver`).
- Destaques minimalistas, como linhas divisórias ou caixas de conteúdo.

### $tomato (#ff6347)
**Usos:**
- Botões de chamada para ação (e.g., "Veja meu trabalho", "Contato").
- Links interativos no menu ou no corpo do texto para chamar atenção.
- Elementos de destaque, como ícones ou gráficos importantes.
- Feedback visual, como estados "hover" de botões ou bordas de formulário focado.

### $silver (#b2b2b2)
**Usos:**
- Texto secundário (e.g., descrições, subtítulos ou metadados).
- Bordas finas em elementos de interface (e.g., caixas de entrada, divisores).
- Fundo alternativo para cartões ou seções discretas.
- Ícones não interativos ou desabilitados.

---

## Exemplo de Aplicação em Componentes

### Header/NavBar
- **Fundo:** `$eerie-black (#1b1b1d)`
- **Links de menu:** `$white (#ffffff)`
- **Links de menu hover:** `$tomato (#ff6347)`

### Seções de Conteúdo
- **Fundo:** `$white (#ffffff)` (geral), `$eerie-black (#1b1b1d)` (destaques ou rodapé)
- **Títulos:** `$eerie-black (#1b1b1d)` (em fundo claro), `$white (#ffffff)` (em fundo escuro)
- **Texto secundário:** `$silver (#b2b2b2)`

### Botões
- **Fundo:** `$tomato (#ff6347)`
- **Texto:** `$white (#ffffff)`
- **Hover:** Fundo `$eerie-black (#1b1b1d)` com texto `$tomato (#ff6347)`

### Links
- **Padrão:** `$tomato (#ff6347)`
- **Hover:** Sublinhado ou mudança para `$eerie-black (#1b1b1d)`

### Rodapé
- **Fundo:** `$eerie-black (#1b1b1d)`
- **Texto principal:** `$white (#ffffff)`
- **Links:** `$tomato (#ff6347)` com hover `$silver (#b2b2b2)`
