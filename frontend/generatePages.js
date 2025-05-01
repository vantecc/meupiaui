const fs = require("fs");
const path = require("path");

const pages = [
  "Home",
  "Municipios",
  "PontosTuristicos",
  "Detalhes",
  "CadastroPonto",
  "Extras/Avaliacoes",
  "Extras/CadastroUsuario",
  "Extras/Favoritos",
  "Extras/Login",
  "Extras/Mapa"
];

const baseDir = path.join(__dirname, "src", "pages");

pages.forEach((page) => {
  const pagePath = path.join(baseDir, page);
  const indexPath = path.join(pagePath, "index.js");
  const stylePath = path.join(pagePath, "style.js");

  if (!fs.existsSync(pagePath)) {
    fs.mkdirSync(pagePath, { recursive: true });
    console.log(`📁 Pasta criada: ${page}`);
  }


  const componentName = page.split("/").pop();

  if (!fs.existsSync(indexPath)) {
    fs.writeFileSync(
      indexPath,
      `import React from 'react';\nimport { Container } from './style';\n\nconst ${componentName} = () => {\n  return <Container>${componentName} Page</Container>;\n};\n\nexport default ${componentName};\n`
    );
    console.log(`✅ index.js criado em: ${page}`);
  }

  if (!fs.existsSync(stylePath)) {
    fs.writeFileSync(
      stylePath,
      `import styled from 'styled-components';\n\nexport const Container = styled.div\`\n  padding: 20px;\n\`;`
    );
    console.log(`🎨 style.js criado em: ${page}`);
  }
});
