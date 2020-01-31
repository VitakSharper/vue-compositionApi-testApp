import {ref} from '@vue/composition-api'

export function useRecepies() {
    const recipes = ref([]);
    const current = ref(null);

    const addRecipe = recipe => {
        recipes.value.push(recipe);
    };
    const deleteRecipe = recipeId => {
        recipes.value = recipes.value.filter(r => r.id !== recipeId);
        current.value = null;
    };
    const selectRecipe = id => {
        current.value = recipes.value.find(r => r.id === id)
    };

    return {
        selectRecipe, deleteRecipe, addRecipe, current, recipes
    }
}
