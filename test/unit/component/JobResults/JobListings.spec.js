import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";

import JobListings from "@/components/JobResults/JobListings.vue";
import axios from "axios";

vi.mock("axios");
describe("JobListings.vue", () => {
  const createRoute = (queryParams) => {
    return {
      query: {
        page: "1",
        ...queryParams,
      },
    };
  };
  const renderJobListing = ($route) => {
    render(JobListings, {
      global: {
        mocks: {
          $route,
        },
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
  };
  it("should fetch jobs", () => {
    axios.get.mockResolvedValue({ data: [] });
    const route = createRoute();
    renderJobListing(route);
    expect(axios.get).toHaveBeenCalled("https://localhost:3000/jobs");
  });

  it("create a joblisting for each job and display max 10 jobs", async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    const route = createRoute();
    renderJobListing(route);
    const joblist = await screen.findAllByRole("listitem");
    expect(joblist).toHaveLength(10);
  });
  describe("when params doesnt have page number",()=>{
    it("should display  page 1", async () => {
        const queryParams = {page:undefined}
        const route = createRoute(queryParams);
        renderJobListing(route);
        const page = screen.getByText("Page 1");
        expect(page).toBeInTheDocument();
    })
  })
  describe("when params have page number",()=>{
    it("should display  page 1", async () => {
        const queryParams = {page:"3"}
        const route = createRoute(queryParams);
        renderJobListing(route);
        const page = screen.getByText("Page 3");
        expect(page).toBeInTheDocument();
    })
  })
  describe("when user is on first page",()=>{
    it("should not display previous page link", async () => {
        axios.get.mockResolvedValue({ data: Array(15).fill({}) });
        const route = createRoute();
        renderJobListing(route);
        await screen.findAllByRole('listitem');
        const previousPage = screen.queryByRole
        ("link",{
            name:/previous/i
        });
        expect(previousPage).not.toBeInTheDocument();
    })
    it("should  display next page link", async () => {
        axios.get.mockResolvedValue({ data: Array(15).fill({}) });
        const route = createRoute();
        renderJobListing(route);
        await screen.findAllByRole('listitem');
        const nextPage = screen.queryByRole
        ("link",{
            name:/next/i
        });
        expect(nextPage).toBeInTheDocument();
    })
  })
  describe("when user is on last page",()=>{
    it("should  display previous page link", async () => {
        axios.get.mockResolvedValue({ data: Array(15).fill({}) });
        const route = createRoute({page:"2"});
        renderJobListing(route);
        await screen.findAllByRole('listitem');
        const previousPage = screen.queryByRole
        ("link",{
            name:/previous/i
        });
        expect(previousPage).toBeInTheDocument();
    })
    it("should not display next page link", async () => {
        axios.get.mockResolvedValue({ data: Array(15).fill({}) });
        const route = createRoute({page:"2"});
        renderJobListing(route);
        await screen.findAllByRole('listitem');
        const nextPage = screen.queryByRole
        ("link",{
            name:/next/i
        });
        expect(nextPage).not.toBeInTheDocument();
    })
  })
});
