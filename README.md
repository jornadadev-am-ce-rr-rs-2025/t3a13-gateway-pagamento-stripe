# 🛒 Router Avançado com Integração Stripe

Projeto de e-commerce moderno com **React Router v7**, **Vite** e integração segura de pagamentos via **Stripe** utilizando **Netlify Functions** para backend serverless.

## 🎯 O que foi aplicado nesta aula

Exploramos a integração completa com o **Stripe** para processamento de pagamentos, implementando uma arquitetura segura e profissional:

### ✨ Principais Tecnologias

- **React Router v7** - Roteamento avançado e dinâmico
- **Stripe** - Processamento seguro de pagamentos
- **Netlify Functions** - Backend serverless sem necessidade de servidor dedicado
- **Variáveis de Ambiente** - Proteção de chaves sensíveis
- **Bootstrap 5** - UI responsiva e moderna
- **Vite** - Build tool ultra-rápido

## 🏗️ Arquitetura

```
Frontend (React + Router)
         ↓
    Netlify Functions (Backend Serverless)
         ↓
    Stripe API (Processamento de Pagamentos)
```

## 📋 Estrutura do Projeto

```
├── src/
│   ├── pages/
│   │   ├── checkout/       # Página de checkout
│   │   ├── sucesso/        # Página de sucesso
│   │   ├── error/          # Página de erro
│   │   └── produto/        # Detalhes do produto
│   ├── routes/             # Configuração das rotas
│   ├── components/         # Componentes reutilizáveis
│   └── App.jsx             # App principal
│
├── netlify/
│   └── functions/
│       └── checkout/       # Function serverless do Stripe
│
├── .env.example            # Variáveis de ambiente exemplo
└── vite.config.js          # Configuração do build
```

## 🔑 Variáveis de Ambiente

### Configuração Local

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Chave secreta do Stripe (obtém em https://dashboard.stripe.com/apikeys)
STRIPE_KEY=sk_live_xxxxxxxxxxxxx

# ID de preço do Stripe (obtém no dashboard: Products > Prices)
STRIPE_PRICE_ID=price_xxxxxxxxxxxxx

# URL do site (usado para URLs de sucesso/cancelamento)
SITE_URL=http://localhost:5173
```

### Configuração em Produção (Netlify)

1. Acesse seu projeto no Netlify
2. Vá para **Site settings** → **Build & deploy** → **Environment**
3. Adicione as variáveis:
   - `STRIPE_KEY` (chave secreta Stripe)
   - `STRIPE_PRICE_ID` (ID do preço)
   - `SITE_URL` (sua URL de produção)

## 🚀 Como Usar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

## 💳 Fluxo de Pagamento

1. **Usuário acessa a página de checkout**
   - React Router renderiza a página `/checkout`

2. **Clica no botão "Pagar com Stripe"**
   - Frontend faz requisição para Netlify Function

3. **Netlify Function processa o pedido**
   - Recebe a chave `STRIPE_KEY` via variável de ambiente
   - Cria uma sessão de checkout com Stripe
   - Retorna a URL da sessão

4. **Frontend redireciona para Stripe Checkout**
   - Usuário insere dados de pagamento de forma segura

5. **Após pagamento bem-sucedido**
   - Stripe redireciona para `/sucesso`
   - Página confirma o pagamento

6. **Em caso de cancelamento**
   - Redireciona para `/error`
   - Permite ao usuário tentar novamente

## 🔐 Segurança

### Por que usar Netlify Functions?

- ✅ **Chaves nunca expostas ao frontend** - Mantém `STRIPE_KEY` segura no servidor
- ✅ **Sem credenciais no código** - Usa variáveis de ambiente
- ✅ **Sem necessidade de gerenciar servidor** - Serverless gerenciado pela Netlify
- ✅ **Escalabilidade automática** - Cresce conforme a demanda

### Recomendações de Segurança

```javascript
// ✅ BOM - Usar variáveis de ambiente
const STRIPE_KEY = process.env.STRIPE_KEY

// ❌ NUNCA - Hardcoding de chaves
const STRIPE_KEY = "sk_live_xxxxxxx"
```

## 🛠️ Funcionalidade Principal

### Checkout Function

Localizado em `netlify/functions/checkout/checkout.mjs`:

```javascript
import Stripe from "stripe"

const STRIPE_KEY = process.env.STRIPE_KEY
const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID
const SITE_URL = process.env.SITE_URL || "http://localhost:5173"

const stripe = new Stripe(STRIPE_KEY)

export default async () => {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "brl",
            product_data: {
              name: "Apple Pencil - Generico"
            },
            unit_amount: 4500, // R$ 45,00
          },
          quantity: 1
        },
        {
          price: STRIPE_PRICE_ID,
          quantity: 1
        }
      ],
      success_url: `${SITE_URL}/sucesso`,
      cancel_url: `${SITE_URL}/error`
    })

    return new Response(JSON.stringify({ url: session.url }))
  } catch (error) {
    return new Response(error.toString(), { status: 500 })
  }
}
```

## 📱 Páginas Implementadas

| Página | Rota | Descrição |
|--------|------|-----------|
| Home | `/` | Listagem de produtos |
| Produto | `/produto/:idProduto` | Detalhes do produto |
| Checkout | `/checkout` | Formulário de pagamento |
| Sucesso | `/sucesso` | Confirmação de pagamento |
| Erro | `/error` | Tratamento de cancelamento |

## 🧪 Testando Pagamentos

Use as **chaves de teste do Stripe**:

- **Cartão válido**: `4242 4242 4242 4242`
- **Data de expiração**: Qualquer data futura (ex: 12/25)
- **CVC**: Qualquer 3 dígitos (ex: 123)

⚠️ **Nunca use cartões reais em ambiente de teste!**

## 📚 Recursos Úteis

- [Documentação Stripe](https://stripe.com/docs)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)
- [React Router v7](https://reactrouter.com)
- [Guia de Variáveis de Ambiente](https://vitejs.dev/guide/env-and-mode.html)

## 🎓 Conceitos Aprendidos

### Router Avançado
- Roteamento dinâmico com parâmetros
- Navegação programática
- Layout pai-filho

### Serverless
- Functions sem necessidade de servidor dedicado
- Escalabilidade automática
- Ambiente gerenciado

### Segurança
- Proteção de chaves sensíveis
- Variáveis de ambiente
- Separação de responsabilidades (frontend/backend)

### Integração de APIs
- Requisições assíncronas
- Tratamento de erros
- Redirecionamento seguro

## 🚀 Deploy

### Netlify

1. Conecte seu repositório GitHub
2. Defina as variáveis de ambiente
3. Build automático na cada push
4. Acesse seu domínio!

```bash
# Deploy manual
npm run build
netlify deploy --prod
```

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais.

---

**Desenvolvido com ❤️ na Jornada Dev**

Explore, aprenda e construa aplicações seguras e modernas! 🚀
