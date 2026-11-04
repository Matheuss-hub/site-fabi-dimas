# Site da Cabeleireira

Site estático (HTML + CSS + JS), sem build. Funciona direto na Vercel.

## Estrutura

```
index.html
style.css
script.js
media/
  hero.jpg        (foto principal do topo)
  perfil.jpg      (foto dela)
  foto1.jpg ... foto6.jpg   (galeria)
  video1.mp4 ... video3.mp4 (vídeos)
  video1-capa.jpg ...       (capa de cada vídeo, opcional)
```

## O que editar

Tudo que muda fica no topo do `script.js` (objeto `CONFIG`): nome, WhatsApp, mensagem, Instagram e endereço.

## Dicas de mídia

- Fotos: use .jpg com até ~300 KB cada (comprima em squoosh.app).
- Vídeos: use .mp4 (H.264), vertical, até ~15 MB cada. O GitHub bloqueia arquivos acima de 100 MB.
- Se os vídeos forem pesados, publique no YouTube/Instagram e use o link/embed.

## Publicar

1. Suba o projeto para o GitHub.
2. Na Vercel: Add New > Project > escolha o repositório > Deploy.
3. Cada `git push` na branch main atualiza o site automaticamente.
