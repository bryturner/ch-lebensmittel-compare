// compares two products and the similarity of thier titles
const compareTwoProductTitles = (first, second) => {
   if (first === second) return 1;
   if (first.length < 2 || second.length < 2) return 0;

   let firstBigrams = new Map();
   for (let i = 0; i < first.length - 1; i++) {
      const bigram = first.substring(i, i + 2);
      const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) + 1 : 1;

      firstBigrams.set(bigram, count);
   }

   let intersectionSize = 0;
   for (let i = 0; i < second.length - 1; i++) {
      const bigram = second.substring(i, i + 2);
      const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) : 0;

      if (count > 0) {
         firstBigrams.set(bigram, count - 1);
         intersectionSize++;
      }
   }
   return (2.0 * intersectionSize) / (first.length + second.length - 2);
};

// compares an array of products based on their titles with the title of a selected product. Returns all products that have over a 15% match
export const compareProducts = (products, selectedProduct) => {
   const bestMatchingProducts = [];
   const selectedProductTitle = selectedProduct;

   products
      .map((product) => {
         const compareProductTitle = product.title;

         const similarityRating = compareTwoProductTitles(
            selectedProductTitle,
            compareProductTitle
         );
         return { similarityRating: similarityRating, product: product };
      })
      .sort((a, b) => b.similarityRating - a.similarityRating)
      .forEach((product) => {
         // returns products with 15%+ match
         if (product.similarityRating > 0.15) {
            bestMatchingProducts.push(product.product);
         }
      });

   return bestMatchingProducts;
};

export const searchProducts = (products, searchQuery) => {
   const queriedProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(searchQuery.toLowerCase());
   });
   return queriedProducts;
};
