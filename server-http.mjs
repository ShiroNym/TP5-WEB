import http from "node:http";

const host = "localhost";
const port = 8000;

import fs from "node:fs/promises";

async function requestListener(request, response) {
  response.setHeader("Content-Type", "text/html");
  const urlParts = request.url.split("/").filter(Boolean);
  const route = urlParts[0] || "index.html";

  switch (route) {
    case "":
    case "index.html": {
      try {
        const contents = await fs.readFile("index.html", "utf8");
        response.setHeader("Content-Type", "text/html");
        response.writeHead(200);
        response.end(contents);
      } catch {
        response.writeHead(500, { "Content-Type": "text/plain" });
        response.end("Erreur interne du serveur : index.html introuvable");
      }
      break;
    }
    case "random": {
      const nb = Number.parseInt(urlParts[1], 10);
      if (!Number.isNaN(nb) && nb > 0) {
        const numbers = Array.from({ length: nb }, () => Math.floor(Math.random() * 100));
        const html = `<!DOCTYPE html><html><body><ul>${numbers.map(n => `<li>${n}</li>`).join("")}</ul></body></html>`;
        response.setHeader("Content-Type", "text/html");
        response.writeHead(200);
        response.end(html);
      } else {
        response.writeHead(400, { "Content-Type": "text/plain" });
        response.end("Paramètre invalide pour /random/:nb");
      }
      break;
    }
    default: {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("Page non trouvée");
      break;
    }
  }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

console.log("NODE_ENV =", process.env.NODE_ENV);
