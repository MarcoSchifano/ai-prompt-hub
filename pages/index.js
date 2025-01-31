import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-6">AI Prompt Hub</h1>
      <p className="text-lg text-gray-300 mb-8">Find and explore the best AI prompts for ChatGPT, Midjourney, and more.</p>
      
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <CategoryCard href="/prompts/copywriting" title="Copywriting" />
        <CategoryCard href="/prompts/marketing" title="Marketing" />
        <CategoryCard href="/prompts/design" title="Design" />
        <CategoryCard href="/prompts/coding" title="Coding" />
        <CategoryCard href="/prompts/seo" title="SEO" />
        <CategoryCard href="/prompts/midjourney" title="Midjourney" />
      </div>
    </div>
  );
}

function CategoryCard({ href, title }) {
  return (
    <Link href={href}>
      <div className="bg-gray-800 hover:bg-gray-700 text-center py-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300">
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
    </Link>
  );
}
