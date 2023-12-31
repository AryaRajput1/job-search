import { render, screen } from '@testing-library/vue'
import TheSubnav from '@/components/Navigation/TheSubnav.vue'


describe('TheSubnav', () => {
    describe('when user is on jobs page', () => {

        it('should display the jobs count', () => {
            const $route = {
                name:"JobResults"
            }
            render(TheSubnav, {
                global: {
                    mocks: {
                        $route
                    },
                    stubs: {
                        FontAwesomeIcon: true
                    }
                }
            })

            const jobCount = screen.getByText('1653')

            expect(jobCount).toBeInTheDocument();
        })
    })
    describe('when user is not on jobs page', () => {
        it('should not display the jobs count', () => {
            const $route = {
                name:"Home"
            }
            render(TheSubnav, {
                global: {
                    mocks:{
                    $route
                    },
                    stubs: {
                        FontAwesomeIcon: true
                    }
                }
            })

            const jobCount = screen.queryByText('1653')

            expect(jobCount).not.toBeInTheDocument();
        })
    })
})