import fs from 'fs';
import path from 'path';

const postsDir = path.join(process.cwd(), 'src/posts');
const imagesDir = path.join(process.cwd(), 'public/images');

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

import Tags from '../components/ui/Tags.jsx'
import Figure from '../components/ui/Figure.jsx'

<Tags tags={meta.tags} />

<p>{meta.context}</p>

<Figure 
  src="/images/${id}/banner.png" 
  alt="Banner" 
  caption="print do firefox" 
/>
`;

const filename = path.join(postsDir, `post-${id}.mdx`);
fs.writeFileSync(filename, template);

const postImageDir = path.join(imagesDir, id);
if (!fs.existsSync(postImageDir)) {
  fs.mkdirSync(postImageDir, { recursive: true });
}
const bannerPath = path.join(postImageDir, 'banner.png');
if (!fs.existsSync(bannerPath)) {
  fs.writeFileSync(bannerPath, '');
}

console.log(`Post criado com ID ${id}: ${filename}`);
console.log(`Diretório de imagens criado em: ${postImageDir}`);
