import { render, screen } from '@testing-library/vue'
import TheSubnav from '@/components/Navigation/TheSubnav.vue'


describe('TheSubnav', () => {
    describe('when user is on jobs page', () => {

        it('should display the jobs count', () => {
            render(TheSubnav, {
                data() {
                    return {
                        onJobResultPage: true,
                    }
                },
                global: {
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
            render(TheSubnav, {
                data() {
                    return {
                        onJobResultPage: false,
                    }
                }
                ,
                global: {
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