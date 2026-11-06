# Site da Cabeleireira

Site estático (HTML + CSS + JS), sem build. Funciona direto na Vercel.

## Estrutura

```
index.html
style.css
script.js
media/
  hero.jpg.jpeg
  perfil.jpg.jpeg
  foto1.jpg.jpeg ... foto19.jpg.jpeg
  video1.mp4.mp4
  video2.mp4.mp4
  video4.mp4.mp4
```

## O que editar

Tudo que muda fica no topo do `script.js` (objeto `CONFIG`): nome, WhatsApp, mensagem e Instagram.

## Dicas de mídia

- Mantenha os nomes e as extensões exatamente como listados acima; a página usa esses caminhos.
- Vídeos: use .mp4 (H.264), vertical, até ~15 MB cada. O GitHub bloqueia arquivos acima de 100 MB.
- Se os vídeos forem pesados, publique no YouTube/Instagram e use o link/embed.

## Publicar

1. Suba o projeto para o GitHub.
2. Na Vercel: Add New > Project > escolha o repositório > Deploy.
3. Cada `git push` na branch main atualiza o site automaticamente.
