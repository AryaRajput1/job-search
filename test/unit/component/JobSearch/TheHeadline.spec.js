import { render, screen } from "@testing-library/vue"
import { nextTick } from "vue";

import TheHeadline from "@/components/JobSearch/TheHeadline.vue";

describe("TheHeadline", () => {
    beforeEach(()=>{
        vi.useFakeTimers();
    })
    afterEach(()=>{
        vi.useRealTimers();
    })
    it("displays the introductory action", () => {
        render(TheHeadline);
        const heading = screen.getByRole(
            "heading", {
            name: /build for everyone/i
        })
        expect(heading).toBeInTheDocument();
    })

    it("changes action at a consistent interval", () => {
        const mock = vi.fn();

        vi.stubGlobal('setInterval', mock);
        render(TheHeadline);

        expect(mock).toHaveBeenCalled();
    })

    it("swap action after interval", async () => {
        render(TheHeadline);
        vi.advanceTimersToNextTimer();
        await nextTick()
        const heading = screen.getByRole(
            "heading", {
            name: /create for everyone/i
        })

        expect(heading).toBeInTheDocument();
    })
    it("removes the interval when components disappear", () =>{
        const mock = vi.fn();
        vi.stubGlobal('clearInterval', mock);
        const {unmount}=render(TheHeadline);
        unmount();
        expect(mock).toHaveBeenCalled();
    })
})