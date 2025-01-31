import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white flex flex-col items-center px-6 py-10">
      <header className="w-full max-w-5xl flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold">🚀 AI Prompt Hub</h1>
        <input type="text" placeholder="Search prompts..." className="px-4 py-2 rounded-md text-black w-64" />
      </header>
      
      <section className="text-center my-10">
        <h2 className="text-4xl font-extrabold mb-4">Find the Best AI Prompts</h2>
        <p className="text-gray-300">Explore, copy, and use high-quality prompts for ChatGPT, Midjourney, and more.</p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
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
    <Link href={href}>
      <div className="bg-gray-700 hover:bg-gray-600 text-center py-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105">
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
    </Link>
  );
}
