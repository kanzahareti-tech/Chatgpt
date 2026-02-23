import { gql } from 'graphql-request';
import { graphqlClient } from './graphql-client';

export const GET_RECIPES = gql`
  query GetRecipes($first: Int, $after: String) {
    recipes(first: $first, after: $after) {
      edges {
        node { id title slug excerpt featuredImage { node { sourceUrl } } recipeFields { prepTime cookTime servings difficulty } recipeCategories { nodes { name slug } } }
        cursor
      }
      pageInfo { endCursor hasNextPage }
    }
  }
`;

export const GET_RECIPE = gql`
  query GetRecipe($slug: ID!) {
    recipe(id: $slug, idType: SLUG) {
      id
      title
      content
      excerpt
      featuredImage { node { sourceUrl } }
      recipeFields {
        prepTime
        cookTime
        servings
        difficulty
        ingredients { quantity unit item }
        steps { step }
        nutrition { calories protein carbs fat }
        tips { tip }
        variations { variation }
      }
      author { node { name } }
      recipeCategories { nodes { name slug } }
      recipeCuisines { nodes { name slug } }
    }
  }
`;

export async function fetchRecipes(variables: any) { return graphqlClient.request(GET_RECIPES, variables); }
export async function fetchRecipe(slug: string) { return graphqlClient.request(GET_RECIPE, { slug }); }
