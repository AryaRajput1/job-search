import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/Navigation/MainNav.vue'
import UserEvent from '@testing-library/user-event'
import { RouterLinkStub } from '@vue/test-utils'

describe('MainNav', () => {
  it('should show the company name', () => {
    render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub
        }
      }
    });
    const companyName = screen.getByText("Job Careers")
    expect(companyName).toBeInTheDocument();
  })

  it('should show the navigation links', () => {
    render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      }
    });
    const navigationItems = screen.getAllByRole('listitem');
    const navigationItemsText = navigationItems.map(item => item.textContent)

    expect(navigationItemsText).toEqual(['Teams', 'Location', 'Life at Job Careers', 'Students', 'Jobs'])

  })

  describe('when user logs in', () => {
    it('should Log in', async () => {
      render(MainNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        }
      });
      let profileImage = screen.queryByRole('img', {
        name: /User Profile Image/i
      })

      expect(profileImage).not.toBeInTheDocument();
      const signInButton = screen.queryByRole('button', {
        name: /Sign In/i
      })
      await UserEvent.click(signInButton);
      profileImage = screen.queryByRole('img', {
        name: /User Profile Image/i
      })
      expect(profileImage).toBeInTheDocument();
    })
  })
})