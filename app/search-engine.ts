import { marketCatalogue } from "./market-catalogue";
import {
  marketConcepts,
  type MarketConcept,
} from "./market-concepts";

export type SearchableListing = {
  id: string;
  listingType?: string;
  category?: string;
  subcategory?: string;
  product?: string;
  productName?: string;
  description?: string;
  location?: string;
  condition?: string;
  availability?: string;
};

export type SearchResult<T> = {
  item: T;
  score: number;
  matchedWords: string[];
  matchedConcepts: string[];
};

export type CatalogueSearchResult = {
  name: string;
  type: "Goods" | "Services";
  category: string;
  subcategory?: string;
  href: string;
  keywords?: string[];
  score: number;
  matchedWords: string[];
};

export type ConceptSearchResult = MarketConcept & {
  score: number;
  matchedWords: string[];
};

function normalizeText(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function getWords(text: string) {
  return normalizeText(text)
    .split(/\s+/)
    .filter(Boolean);
}

function buildListingText(listing: SearchableListing) {
  return normalizeText(
    [
      listing.productName,
      listing.product,
      listing.category,
      listing.subcategory,
      listing.description,
      listing.location,
      listing.listingType,
      listing.condition,
      listing.availability,
    ]
      .filter(Boolean)
      .join(" ")
  );
}

function scoreTextMatch(
  queryWords: string[],
  searchableText: string
) {
  if (queryWords.length === 0) {
    return {
      score: 0,
      matchedWords: [],
    };
  }

  const matchedWords: string[] = [];
  let score = 0;

  for (const word of queryWords) {
    if (searchableText.includes(word)) {
      matchedWords.push(word);

      const exactWordPattern = new RegExp(
        `(^|\\s)${word}($|\\s)`
      );

      if (exactWordPattern.test(searchableText)) {
        score += 10;
      } else {
        score += 5;
      }
    }
  }

  if (matchedWords.length === queryWords.length) {
    score += 20;
  }

  return {
    score,
    matchedWords,
  };
}

/*
 * Finds concepts related to the user's search.
 *
 * Example:
 *
 * "boat"
 * → Watercraft
 *
 * "plumber"
 * → Plumbing
 *
 * "footballer"
 * → Footballers
 */
export function searchConcepts(
  query: string
): ConceptSearchResult[] {
  const queryWords = getWords(query);

  if (queryWords.length === 0) {
    return [];
  }

  const results: ConceptSearchResult[] = [];

  for (const concept of marketConcepts) {
    const conceptText = normalizeText(
      [
        concept.concept,
        concept.category,
        concept.subcategory,
        ...concept.relatedTerms,
      ]
        .filter(Boolean)
        .join(" ")
    );

    const match = scoreTextMatch(
      queryWords,
      conceptText
    );

    if (match.matchedWords.length > 0) {
      results.push({
        ...concept,
        score: match.score,
        matchedWords: match.matchedWords,
      });
    }
  }

  return results.sort(
    (a, b) => b.score - a.score
  );
}

export function searchListings<T extends SearchableListing>(
  listings: T[],
  query: string
): SearchResult<T>[] {
  const queryWords = getWords(query);

  if (queryWords.length === 0) {
    return listings.map((item) => ({
      item,
      score: 0,
      matchedWords: [],
      matchedConcepts: [],
    }));
  }

  const concepts = searchConcepts(query);

  const results: SearchResult<T>[] = [];

  for (const listing of listings) {
    const searchableText = buildListingText(listing);

    const directMatch = scoreTextMatch(
      queryWords,
      searchableText
    );

    let conceptScore = 0;
    const matchedConcepts: string[] = [];

    /*
     * If the listing belongs to a concept related to
     * the search, give it an additional relevance score.
     */
    for (const concept of concepts) {
      const listingConceptText = normalizeText(
        [
          listing.category,
          listing.subcategory,
          listing.productName,
          listing.product,
          listing.description,
        ]
          .filter(Boolean)
          .join(" ")
      );

      const conceptWords = getWords(
        [
          concept.concept,
          concept.category,
          concept.subcategory,
        ]
          .filter(Boolean)
          .join(" ")
      );

      const conceptMatch = conceptWords.some((word) =>
        listingConceptText.includes(word)
      );

      if (conceptMatch) {
        conceptScore += 15;
        matchedConcepts.push(concept.concept);
      }
    }

    const totalScore =
      directMatch.score + conceptScore;

    if (
      directMatch.matchedWords.length > 0 ||
      matchedConcepts.length > 0
    ) {
      results.push({
        item: listing,
        score: totalScore,
        matchedWords: directMatch.matchedWords,
        matchedConcepts,
      });
    }
  }

  return results.sort(
    (a, b) => b.score - a.score
  );
}

export function searchCatalogue(
  query: string
): CatalogueSearchResult[] {
  const queryWords = getWords(query);

  if (queryWords.length === 0) {
    return [];
  }

  const results: CatalogueSearchResult[] = [];

  for (const item of marketCatalogue) {
    const searchableText = normalizeText(
      [
        item.name,
        item.type,
        item.category,
        item.subcategory,
        ...(item.keywords || []),
      ]
        .filter(Boolean)
        .join(" ")
    );

    const match = scoreTextMatch(
      queryWords,
      searchableText
    );

    if (match.matchedWords.length > 0) {
      results.push({
        ...item,
        score: match.score,
        matchedWords: match.matchedWords,
      });
    }
  }

  return results.sort(
    (a, b) => b.score - a.score
  );
}

export function searchMarket<T extends SearchableListing>(
  listings: T[],
  query: string
) {
  return {
    listings: searchListings(listings, query),
    concepts: searchConcepts(query),
    catalogue: searchCatalogue(query),
  };
}