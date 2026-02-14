'use client'; 
import { useState, useEffect } from 'react';
import { fetchPosts } from '../../services/api.service';
interface Post {
  id: number;
  title: string;
}
export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    getPosts();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Posts from NestJS Backend</h1>
      
      <div className="w-full max-w-md">
        {posts.map((post) => (
          <div key={post.id} className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800 rounded mb-2">
            <span className="text-lg">{post.title}</span>
          </div>
        ))}
      </div>
    </main>
  );
}