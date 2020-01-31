import {computed, reactive} from '@vue/composition-api'

export function useForm(props) {

    const valid = computed(() => {
        return form.title.trim() && form.description.trim()
    });

    const form = reactive({
        title: '',
        description: ''
    });
    const onSubmit = () => {
        const recipe = {
            title: form.title.trim(),
            description: form.description.trim(),
            id: Date.now().toString()
        };
        form.title = form.description = '';
        props.onAdd(recipe);
    };

    return {
        valid, form, onSubmit
    }

}
