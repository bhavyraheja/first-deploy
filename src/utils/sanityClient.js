import { createClient } from "@sanity/client"

export const client = createClient({
  projectId: "r98l410r", // Replace with your actual Project ID
  dataset: "production", // Replace with your dataset
  apiVersion: "2025-03-19", // Use today's date for the Sanity API
  token: import.meta.env.VITE_SANITY_TOKEN || "", // Replace with your Sanity API token if needed
  useCdn: false, // Set to `true` if you want CDN for faster queries in production
})

