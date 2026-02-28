export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "NeuroScale AI",
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sarah Johnson" },
        reviewBody: "NeuroScale transformed our analytics workflow completely.",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Michael Lee" },
        reviewBody: "Automation saved us dozens of hours every week.",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
