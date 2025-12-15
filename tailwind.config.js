// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Certifique-se de que os caminhos para seus arquivos estão corretos
    './src/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {
    extend: {
      colors: {
        // --- CORES ESSENCIAIS PARA RESOLVER O ERRO ---
        'background': 'hsl(var(--background))', // Note: Usando 'hsl(var(--...))' para maior compatibilidade se oklch falhar
        'foreground': 'hsl(var(--foreground))', 
        'border': 'hsl(var(--border))', // Essencial para o erro anterior (border-border)
        'ring': 'hsl(var(--ring))',     // Essencial para o erro anterior (outline-ring/50)

        // --- ADICIONE TODAS AS OUTRAS CORES AQUI ---
        'primary': 'hsl(var(--primary))',
        'secondary': 'hsl(var(--secondary))',
        'muted': 'hsl(var(--muted))',
        'accent': 'hsl(var(--accent))',
        'destructive': 'hsl(var(--destructive))',
        'card': 'hsl(var(--card))',
        'popover': 'hsl(var(--popover))',
        'input': 'hsl(var(--input))',
        
        // Exemplo de como você adicionaria as cores de sidebar/chart
        'sidebar': 'hsl(var(--sidebar))',
        // 'chart-1': 'hsl(var(--chart-1))', 
        // ...
      },
      // Se você estiver usando as configurações de fonte do /lib/fonts.ts:
      // fontFamily: {
      //   'geist-sans': ['var(--font-geist-sans)'],
      //   // ...
      // }
    },
  },
  plugins: [
    // Se você usa o tw-animate-css como plugin (e não CSS puro), ele deve vir aqui.
    // require('tailwindcss-animate'), 
  ],
};