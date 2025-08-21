const modules = import.meta.glob('./*.mdx', { eager: true });

export const posts = Object.entries(modules).map(([path, mod]) => {
  const slug = path.slice(2).replace(/\.mdx$/, '');
  return {
    path,
    meta: {
      ...mod.meta, 
      slug,        
    },
    Component: mod.default,
  };
});

posts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));