# Mavia Consultoria — Landing Page

Landing page institucional desenvolvida para a **Mavia Consultoria**, escritório de consultoria em processos financeiros, a partir de uma proposta comercial em PDF fornecida pela cliente.

🔗 **Demo:** [[seuusuario.github.io/mavia-consultoria-landing](https://github.com/pedrodev2024-ship-it/mavia-consultoria-landing)](#)

## Contexto

A cliente já possuía identidade visual (logo) e uma proposta comercial em PDF, mas nenhuma presença digital. O objetivo foi transformar o conteúdo da proposta — gargalos identificados, escopo de serviços e forma de atuação — em uma página que comunique credibilidade e clareza para os clientes finais dela.

## Decisões de design

- **Paleta**: verde-escuro e dourado, extraídos diretamente do logo da marca.
- **Tipografia**: `Fraunces` (serifada, para títulos) + `Inter` (corpo) + `IBM Plex Mono` (rótulos e dados) — reforça o universo "financeiro/ledger" do negócio.
- **Elemento de assinatura**: um card estilo *ledger* no topo da página, com barras que animam ao carregar, referenciando o ícone de gráfico do logo.
- **Conteúdo**: os "gargalos identificados" do PDF (contas a pagar, contas a receber, gerencial) viraram a seção de serviços.
- Dados comerciais sensíveis da proposta original (valores, chave Pix) foram **propositalmente omitidos** da versão pública.

## Stack

- HTML5 + CSS3 puro (sem frameworks)
- Totalmente responsivo
- Scroll reveals via `IntersectionObserver`
- Suporte a `prefers-reduced-motion`

## Como rodar localmente

```bash
git clone https://github.com/seuusuario/mavia-consultoria-landing.git
cd mavia-consultoria-landing
# abra index.html no navegador
```

## Autor

Feito por **Pedro Henrique** — [LinkedIn](https://www.linkedin.com/in/pedro-henrique-9a08703a5/) · [GitHub](https://github.com/pedrodev2024-ship-it)
