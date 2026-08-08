export async function getPoppinsFonts() {
  const [regular, bold] = await Promise.all([
    fetch(
      'https://cdn.jsdelivr.net/fontsource/fonts/poppins@latest/latin-400-normal.ttf'
    ).then((res) => res.arrayBuffer()),
    fetch(
      'https://cdn.jsdelivr.net/fontsource/fonts/poppins@latest/latin-700-normal.ttf'
    ).then((res) => res.arrayBuffer()),
  ]);

  return [
    {
      name: 'Poppins',
      data: regular,
      style: 'normal' as const,
      weight: 400 as const,
    },
    {
      name: 'Poppins',
      data: bold,
      style: 'normal' as const,
      weight: 700 as const,
    },
  ];
}
