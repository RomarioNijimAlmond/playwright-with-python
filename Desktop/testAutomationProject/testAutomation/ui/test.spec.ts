import { test } from "@playwright/test";
import { Base } from "./Base";

test.describe('test', async() => {
    

    test.only('fetch', async({page}) => {
        let base = new Base(page);
        await base.go('https://www.google.com')    
    })
})