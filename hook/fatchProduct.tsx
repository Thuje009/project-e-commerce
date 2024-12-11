import { IProduct } from "@/util/type";

// Server-side rendering function
export async function FatchProductSSR(): Promise<{ products: IProduct[] }> {
  try {
    // Direct server-side fetch without client-side network request
    const response = await fetch('http://localhost:3000/api/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Ensures fresh data on each request
      // OR use next.revalidate for periodic revalidation
      // next: { revalidate: 60 } // Revalidate every 60 seconds
    });

    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.statusText}`);
    }

    const data: { products: IProduct[] } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return { products: [] }; // Return empty array instead of throwing
  }
}

// Alternative for App Router (Recommended)
export async function FatchProductServerComponent(): Promise<{ products: IProduct[] }> {
  try {
    const res = await fetch('http://localhost:3000/api/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',

    });

    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }

    return res.json();
  } catch (error) {
    console.error("Server Component Fetch Error:", error);
    return { products: [] };
  }
}