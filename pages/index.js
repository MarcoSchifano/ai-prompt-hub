export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-extrabold mb-6">AI Prompt Hub</h1>
      <p className="text-lg mb-8">Find and explore the best AI prompts for ChatGPT, Midjourney, and more.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <CategoryCard href="/prompts/copywriting" title="✍️ Copywriting" />
        <CategoryCard href="/prompts/marketing" title="📈 Marketing" />
        <CategoryCard href="/prompts/design" title="🎨 Design" />
        <CategoryCard href="/prompts/coding" title="💻 Coding" />
        <CategoryCard href="/prompts/seo" title="🔍 SEO" />
        <CategoryCard href="/prompts/midjourney" title="🖼️ Midjourney" />
      </div>
    </div>
  );
}

function CategoryCard({ href, title }) {
  return (
    <a href={href} className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-xl font-bold">{title}</h3>
    </a>
  );
}
