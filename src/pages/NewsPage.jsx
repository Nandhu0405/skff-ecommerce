import React, { useState } from 'react';
import { NEWS_ARTICLES } from '../data/mockData';
import { Newspaper, Calendar, Clock, ArrowRight, X } from 'lucide-react';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = ['ALL', 'Innovation', 'Company News', 'Industry Insights', 'Product Updates'];

  const filteredNews = NEWS_ARTICLES.filter((article) => {
    if (selectedCategory === 'ALL') return true;
    return article.category === selectedCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FDF2F4] via-[#FDFBF7] to-[#FCEBE1] p-8 md:p-12 rounded-3xl border border-[#F0E1E4] text-center max-w-4xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#D92550] bg-white px-3 py-1 rounded-full border border-[#F9D5E1]">
          Industry Journal
        </span>
        <h1 className="font-serif-skff text-3xl md:text-5xl font-bold text-[#1F2421]">
          News & Olfactive Insights
        </h1>
        <p className="text-xs md:text-sm text-[#555A6E] leading-relaxed max-w-2xl mx-auto">
          Stay informed on breakthroughs in flavor microencapsulation, sensory trends, regulatory updates, and global company developments.
        </p>
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-[#D92550] text-white shadow-xs'
                : 'bg-white border border-gray-200 text-[#555A6E] hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* News Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredNews.map((article) => (
          <div
            key={article.id}
            className="bg-white border border-[#F0E1E4] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#F9D5E1] transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#D92550] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/80">
                  {article.category}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-[11px] text-[#8A90A3]">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                </div>

                <h3 className="font-serif-skff font-bold text-xl text-[#1F2421] group-hover:text-[#D92550] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-[#555A6E] leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => setActiveArticle(article)}
                className="text-xs font-bold text-[#D92550] hover:underline flex items-center gap-1.5"
              >
                Read Full Article <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Article Modal Reader */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white border border-gray-200 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
            <div className="relative h-56 bg-gray-900">
              <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-full object-cover opacity-90" />
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 p-2 bg-black/60 text-white rounded-full hover:bg-black"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="bg-[#D92550] text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full">
                  {activeArticle.category}
                </span>
                <h2 className="font-serif-skff text-2xl font-bold mt-1 text-white">{activeArticle.title}</h2>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-xs text-[#555A6E] leading-relaxed">
              <div className="flex items-center gap-4 text-[11px] text-[#8A90A3] border-b pb-3">
                <span>Published: {activeArticle.date}</span>
                <span>Reading Time: {activeArticle.readTime}</span>
              </div>

              <p className="font-semibold text-sm text-[#2D3142]">{activeArticle.summary}</p>
              <p>{activeArticle.content}</p>
              <p>
                For further technical inquiries or to request whitepapers regarding this topic, please contact the SKFF Corporate Communications desk at press@skff.com.
              </p>
            </div>

            <div className="p-4 bg-gray-50 border-t flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="bg-[#D92550] text-white px-5 py-2 rounded-full text-xs font-bold"
              >
                Close Reader
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
