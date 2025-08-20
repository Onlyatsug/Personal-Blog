const modules = import.meta.glob('./*.mdx', { eager: true });

export const posts = Object.entries(modules).map(([path, mod]) => {
  return {
    path,
    meta: mod.meta || {},
    Component: mod.default,
  };
});
