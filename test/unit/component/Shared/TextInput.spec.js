import {render,screen} from '@testing-library/vue'
import  userEvent from '@testing-library/user-event'

import TextInput from '@/components/shared/TextInput.vue'

describe('TextInput.vue', () => {
    it('checks that user enter the input',async () => {
        const {emitted}=render(TextInput,{
            props:{
                modelValue:"",
            }
        })
        const input=screen.getByRole('textbox');
        await userEvent.type(input,"NYC");
        const inputText = emitted()["update:modelValue"];
        expect(inputText).toEqual([["N"],["NY"],["NYC"]]);
    })
})