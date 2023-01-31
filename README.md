# OG Image Generator
![product](https://user-images.githubusercontent.com/117131814/215409961-f3b4f5ad-8a70-4ad8-88ad-60febb851828.png)

## Demo
Example:

| Query           | Desc                                                          | Example                                                                  |
|-----------------|---------------------------------------------------------------|--------------------------------------------------------------------------|
| img             | Image product                                                 | https://cdn.gramedia.com/uploads/items/9786230029783_Jujutsukaisen_5.jpg |
| writer          | Writer product name                                           | Gege Akutami                                                             |
| title           | Product name                                                  | Jujutsu Kaisen 05                                                        |
| isDiscount      | If product is discount, put 'true' if not 'false'             | true                                                                     |
| actualPrice     | Actual price product                                          | Rp. 40.000                                                               |
| discountedPrice | If product is discount, put the discounted price if not empty | Rp. 30.000                                                               |
| discount        | If product is discount, put the discount value if not empty   | 25 %                                                                     |
| publisher       | Publisher name                                                | Elex Media Komputindo                                                    |


## Introductions
Generate OG Image dynamically based on the product slug passed in the query url.

Using [Next JS](https://nextjs.org/) as base and [Vercel/OG](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation) to generate HTML, CSS and JS, (you can even use Tailwind) to create or generate images.

This project can also be used as a separate service, which is only for generating OG images.

The benefit is that a preview image of a product can provide more information, for example the price of the product and its discount. 
Comparison:

Without custom image:

![Screen Shot 2023-01-30 at 14 47 34](https://user-images.githubusercontent.com/117131814/215419817-bfa81ea7-94ce-48a4-8846-5ccaedb9a6a9.png)

With custom generated image:

![Screen Shot 2023-01-30 at 14 48 59](https://user-images.githubusercontent.com/117131814/215419849-ba26cfba-de6d-4e53-95f1-ecdb32425c71.png)

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
