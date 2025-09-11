import fs from 'fs';
import path from 'path';

const postsDir = path.join(process.cwd(), 'src/posts');

function getNextId() {
  const files = fs.readdirSync(postsDir);
  const ids = files
    .map(file => {
      try {
        const content = fs.readFileSync(path.join(postsDir, file), 'utf-8');
        const match = content.match(/id:\s*'(\d+)'/);
        return match ? parseInt(match[1], 10) : null;
      } catch {
        return null;
      }
    })
    .filter(Boolean);
  const maxId = Math.max(0, ...ids);
  return String(maxId + 1).padStart(3, '0');
}

const now = new Date();
const date = now.toISOString().split('T')[0]; // YYYY-MM-DD
const visual_date = now.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

const id = getNextId();

const template = `export const meta = {
  title: 'Um novo post',
  date: '${date}',
  visual_date: '${visual_date}',
  context: \`Escreva aqui o conteúdo do seu post\`,
  published: false,
  tags: ['exemplo', 'exemplo2'],
  id: '${id}',
}

# Novo post

Conteúdo inicial do post...
`;

const filename = path.join(postsDir, `blank.mdx`);

fs.writeFileSync(filename, template);

console.log(`Post criado com ID ${id}: ${filename}`);
