import {Page} from '@playwright/test'

export class Test {

    constructor(public page:Page) {
        this.page = page
    }

    public async goto() {
        await this.page.goto('https://www.google.com')
    }
}