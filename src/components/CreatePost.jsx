import { useState } from 'react';
import { client } from '../utils/sanityClient';

const BlogPostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    seoTitle: '',
    slug: '',
    metaDescription: '',
    keywords: [],
    publishedAt: '',
    mainImage: null,
    body: '',
    author: '',
    categories: [],
    relatedPosts: [],
    difficultyLevel: '',
    focusKeyphrase: '',
    tags: [],
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle File Upload for Images
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageData = new FormData();
    imageData.append('file', file);
    imageData.append('upload_preset', 'your_upload_preset'); // If using a service like Cloudinary

    try {
      const response = await client.assets.upload('image', file);
      setFormData((prev) => ({ ...prev, mainImage: { _type: 'image', asset: { _ref: response._id } } }));
    } catch (error) {
      console.error('Image upload failed', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      _type: 'post',
      title: formData.title,
      slug: { _type: 'slug', current: formData.slug },
      seoTitle: formData.seoTitle,
      metaDescription: formData.metaDescription,
      keywords: formData.keywords,
      publishedAt: formData.publishedAt,
      mainImage: formData.mainImage,
      body: formData.body,
      author: { _type: 'reference', _ref: formData.author },
      categories: formData.categories.map((category) => ({ _type: 'reference', _ref: category })),
      relatedPosts: formData.relatedPosts.map((post) => ({ _type: 'reference', _ref: post })),
      difficultyLevel: formData.difficultyLevel,
      focusKeyphrase: formData.focusKeyphrase,
      tags: formData.tags,
    };

    try {
      await client.create(newPost);
      setMessage('Blog post created successfully!');
    } catch (error) {
      console.error('Error creating blog post:', error);
      setMessage('Failed to create blog post.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
      <input type="text" name="seoTitle" placeholder="SEO Title" onChange={handleChange} />
      <input type="text" name="slug" placeholder="Slug" onChange={handleChange} required />
      <textarea name="metaDescription" placeholder="Meta Description" onChange={handleChange} />
      <input type="text" name="keywords" placeholder="Keywords (comma-separated)" onChange={(e) => setFormData((prev) => ({ ...prev, keywords: e.target.value.split(',') }))} />
      <input type="datetime-local" name="publishedAt" onChange={handleChange} required />
      <input type="file" onChange={handleImageUpload} />
      <textarea name="body" placeholder="Blog Content" onChange={handleChange} required />
      <input type="text" name="focusKeyphrase" placeholder="Focus Keyphrase" onChange={handleChange} required />
      <select name="difficultyLevel" onChange={handleChange}>
        <option value="">Select Difficulty</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
      <button type="submit">Publish Blog Post</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default BlogPostForm;

