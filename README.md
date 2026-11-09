# Portfólio — Lucas Aguiar

Site pessoal desenvolvido para os checkpoints CP2 e CP3. As páginas são estáticas e usam HTML, CSS e JavaScript, sem dependências de instalação.

## Páginas

- `index.html` — apresentação
- `curriculo.html` — currículo
- `formulario.html` — formulário com validação no navegador
- `multimidia.html` — conteúdo de áudio e vídeo
- `graficos.html` — exemplos de Canvas e SVG

O botão de tema em cada página salva a preferência no `localStorage`. O formulário mostra o resultado da validação, mas não envia dados: é necessário configurar um serviço de backend para receber mensagens.

## Publicar no GitHub Pages

1. Crie um repositório GitHub vazio, sem README, licença ou `.gitignore` inicial.
2. Na pasta deste projeto, inicialize o Git, conecte o repositório e envie a branch principal:

   ```bash
   git init
   git add .
   git commit -m "Preparar portfólio para entrega CP3"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
   ```

3. Crie e envie a tag de entrega:

   ```bash
   git tag cp3-entrega
   git push origin cp3-entrega
   ```

4. No GitHub, abra **Settings > Pages**, escolha **Deploy from a branch**, selecione `main` e `/ (root)`, e salve.
5. Aguarde a publicação e confira, em uma janela anônima, as cinco páginas, a navegação, os arquivos de mídia e a URL com HTTPS.

Se o repositório remoto já tiver commits, clone-o e copie os arquivos deste projeto para a pasta clonada antes de fazer o commit inicial.
