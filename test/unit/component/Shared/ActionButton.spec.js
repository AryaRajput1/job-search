import {render, screen} from '@testing-library/vue'
import ActionButton from '@/components/Shared/ActionButton.vue'

describe('ActionButton.vue',()=>{
    it('should display the text',()=>{
        render(ActionButton, {
            props: {
                text: 'test',
                type:'primary'
            }
        })
        const button = screen.getByRole('button',{
            name:'test'
        })
        expect(button).toBeInTheDocument();
    })

    it('contains one of the several button style',()=>{
        render(ActionButton, {
            props: {
                text: 'test',
                type:'primary'
            }
        })
        const button = screen.getByRole('button',{
            name:'test'
        })
        expect(button).toHaveClass('primary');

    })
})