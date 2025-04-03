export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    // Blog Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter the title of the blog post. Should incorporate SEO keywords like cybersecurity jobs or career progression.',
      validation: Rule => Rule.required().min(10).max(70).warning('Optimal title length is 10-70 characters.'),
    },
    // Unique Slug
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Auto-generated unique URL identifier based on the title.',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: input =>
          input
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .slice(0, 96),
      },
      validation: Rule => Rule.required(),
    },
    // SEO Title
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Custom title for SEO (search engine results). Use main keywords such as "6-months training in cybersecurity jobs" or "Postgraduate Payment Security Program".',
      validation: Rule => Rule.max(60).warning('SEO Titles should not exceed 60 characters.'),
    },
    // Meta Description
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'Brief summary for search engines (e.g., "Discover cybersecurity job opportunities and career progression through our 6-month hands-on program").',
      validation: Rule => Rule.max(160).warning('Meta Descriptions should not exceed 160 characters.'),
    },
    // Keywords
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      description: 'Add keywords users may search for, e.g., "cybersecurity job market", "internships", "career progression".',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: Rule => Rule.required(),
    },
    // Publish Date
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'Date and time the blog post was published.',
      validation: Rule => Rule.required(),
    },
    // Main Image
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      description: 'Featured image for the blog post. Optimize with alt text for SEO.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Add descriptive alt text, e.g., "Student learning during the 6-month cybersecurity training".',
          validation: Rule => Rule.max(100).warning('Keep alt text under 100 characters.'),
        },
      ],
    },
    // Content Body
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      description: 'Main blog content. Use keywords naturally and include subheadings like "Why Cybersecurity as a Career?".',
    },

    {
      name: "reactions",
      type: "object",
      title: "Emoji Reactions",
      fields: [
        { name: "Like", type: "number", title: "👍", initialValue: 0, validation: (Rule) => Rule.min(0) },
        { name: "Fire", type: "number", title: "🔥", initialValue: 0, validation: (Rule) => Rule.min(0) },
        { name: "Love", type: "number", title: "😍", initialValue: 0, validation: (Rule) => Rule.min(0) },
        { name: "Thinking", type: "number", title: "🤔", initialValue: 0, validation: (Rule) => Rule.min(0) },
        { name: "Clap", type: "number", title: "👏", initialValue: 0, validation: (Rule) => Rule.min(0) },
        { name: "Happy", type: "number", title: "😊", initialValue: 0, validation: (Rule) => Rule.min(0) },
      ],
    },
    
    // Author Reference
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      description: 'Select the author of the blog post.',
      to: { type: 'author' },
      validation: Rule => Rule.required(),
    },
    // Categories
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      description: 'Categorize the blog post (e.g., Career Guidance, Cybersecurity Training).',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    // Related Posts
    {
      name: 'relatedPosts',
      title: 'Related Posts',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'post' } }],
      description: 'Link to related posts for boosting engagement and internal linking.',
      validation: Rule => Rule.max(3).warning('You can select up to 3 related posts.'),
    },

    // Difficulty Level
    {
      name: 'difficultyLevel',
      title: 'Difficulty Level',
      type: 'string',
      description: 'Indicate the difficulty level of the blog content.',
      options: {
        list: [
          { title: 'Beginner', value: 'beginner' },
          { title: 'Intermediate', value: 'intermediate' },
          { title: 'Advanced', value: 'advanced' },
        ],
        layout: 'radio',
      },
    },
    // Focus Keyphrase
    {
      name: 'focusKeyphrase',
      title: 'Focus Keyphrase',
      type: 'string',
      description: 'Main keyword/phrase this post should rank for (e.g., "Cybersecurity jobs", "internships").',
      validation: Rule => Rule.required(),
    },
    // Social Sharing Image
    {
      name: 'socialShareImage',
      title: 'Social Share Image',
      type: 'image',
      description: 'Custom image optimized for social media (1200x630px recommended).',
      options: {
        hotspot: true,
      },
    },
    // Tags
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      description: 'Add descriptive tags such as "Sectheta", "Cybersecurity Jobs", "Career Advice".',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    // Structured Data (Search Enhancements)
    {
      name: 'structuredData',
      title: 'Structured Data (Schema Markup)',
      type: 'object',
      fields: [
        {
          name: 'type',
          title: 'Type',
          type: 'string',
          description: 'Schema type (e.g., BlogPosting, Article).',
          options: {
            list: [
              { title: 'BlogPosting', value: 'BlogPosting' },
              { title: 'Article', value: 'Article' },
            ],
          },
        },
        {
          name: 'readingTime',
          title: 'Reading Time (Minutes)',
          type: 'number',
          description: 'Estimated reading time.',
        },
      ],
    },
  ],

  // Preview Settings
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      author: 'author.name',
      mainImage: 'mainImage',
    },
    prepare(selection) {
      const { title, author, mainImage } = selection;
      return {
        title,
        subtitle: `by ${author || 'Unknown Author'}`,
        media: mainImage,
      };
    },
  },
};
