# OG Image Generator
![product juju](https://user-images.githubusercontent.com/117131814/215652792-e0ed802f-4fed-4edf-8c54-ad819460c05c.png)

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

Example URL:
- [Sebuah seni untuk bersikap bodoh](https://og-image-gramedia-production.up.railway.app/api/og/product?img=https://upload.wikimedia.org/wikipedia/commons/4/4b/Sebuah-seni-untuk-bersikap-bodoh-amat.jpg&writer=Mark%20Manson&title=Sebuah%20Seni%20untuk%20Bersikap%20Bodo%20Amat%20(edisi%20handy)&isDiscount=true&actualPrice=Rp.%2078.000&discountedPrice=Rp.%2058.500&discount=25%20%&publisher=Gramedia%20Widiasarana%20Indonesia)

- [Jujutsu Kaisen 05](https://og-image-gramedia-production.up.railway.app/api/og/product?img=https://cdn.gramedia.com/uploads/items/9786230029783_Jujutsukaisen_5.jpg&writer=Gege%20Akutami&title=Jujutsu%20Kaisen%2005&isDiscount=true&actualPrice=Rp.%2040.000&discountedPrice=Rp.%2030.000&discount=25%20%&publisher=Elex%20Media%20Komputindo)

## Introductions
Generate OG Image dynamically based on the query in the url.

Using [Next JS](https://nextjs.org/) as base and [Vercel/OG](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation) to generate HTML, CSS and JS, (you can even use Tailwind) to create or generate images.

This project can also be used as a separate service, which is only for generating OG images.

The benefit is that a preview image of a product can provide more information, for example the price of the product and its discount. 
Comparison:

Without custom image:

![Screen Shot 2023-01-30 at 14 47 34](https://user-images.githubusercontent.com/117131814/215419817-bfa81ea7-94ce-48a4-8846-5ccaedb9a6a9.png)

With custom generated image:

![Screen Shot 2023-01-31 at 10 09 29](https://user-images.githubusercontent.com/117131814/215653335-eded2ebf-5246-4ba5-b1db-059c50063d35.png)

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
