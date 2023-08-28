import { Page } from "@playwright/test";

export class Base {

    constructor(public page: Page) {
        this.page = page;
    }


    public async go(url:string) {
        await this.page.goto(url)
    }
}