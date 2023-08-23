import {render,screen} from '@testing-library/vue'
import { RouterLinkStub } from '@vue/test-utils';

import JobListing from '@/components/JobResults/JobListing.vue';

describe('JobListing.vue', () => {
    const createJob = (jobProps={}) => {
       return {
            title: 'test',
            organization: 'test',
            ...jobProps,
        }

    }
    const renderJobListing =(jobProps)=>{
        render(JobListing, {
            global:{
                stubs:{
                  RouterLink:RouterLinkStub  
                }
            },
            propsData: {
                job: {
                    ...jobProps
                }
            }
        });
    }
    it('renders job title', () => {
        const jobProps = createJob({title: 'SE'});
        renderJobListing(jobProps);
        const title = screen.getByText('SE');

        expect(title).toBeInTheDocument();
    })
    it('renders job organization', () => {
        const jobProps = createJob({organization: 'SE'});
        renderJobListing(jobProps);

        const organization = screen.getByText('SE');

        expect(organization).toBeInTheDocument();
    })
    it('renders job locations', () => {
        const jobProps = createJob({locations: ['india']});
        renderJobListing(jobProps);

        const location = screen.getByText('india');

        expect(location).toBeInTheDocument();
    })
    it('renders job qualification', () => {
        const jobProps = createJob({minimumQualifications: ['SQL']});
        renderJobListing(jobProps);

        const qualification = screen.getByText('SQL');

        expect(qualification).toBeInTheDocument();
    })


})