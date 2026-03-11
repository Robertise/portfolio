import { blogs } from "../data/blogs";

/**
 * Find a blog by its slug
 * @param {string} slug - The blog slug
 * @returns {object|null} The blog object or null if not found
 */
export const getBlogBySlug = (slug) => {
  return blogs.find((blog) => blog.slug === slug) || null;
};

/**
 * Get all blogs
 * @returns {array} Array of all blog objects
 */
export const getAllBlogs = () => {
  return blogs;
};

/**
 * Get blogs by tag
 * @param {string} tag - The tag to filter by
 * @returns {array} Array of blogs with the specified tag
 */
export const getBlogsByTag = (tag) => {
  return blogs.filter((blog) => blog.tags.includes(tag));
};

/**
 * Get related blogs
 * @param {string} slug - The current blog slug
 * @param {number} count - Number of related blogs to return
 * @returns {array} Array of related blogs
 */
export const getRelatedBlogs = (slug, count = 3) => {
  const currentBlog = getBlogBySlug(slug);
  if (!currentBlog) return [];

  const related = blogs.filter((blog) => {
    if (blog.slug === slug) return false;
    return blog.tags.some((tag) => currentBlog.tags.includes(tag));
  });

  return related.slice(0, count);
};

/**
 * Load blog content from markdown file
 * @param {string} slug - The blog slug
 * @returns {Promise<string>} The blog content (markdown)
 */
