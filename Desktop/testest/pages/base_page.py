from playwright.sync_api import Page
from enums.Enums import ApplicationUrl

class BasePage:

    def __init__(self, page:Page) -> None:
        self.page = page

    def goto(self, url: ApplicationUrl):
        self.page.goto(url.value)

    def click(self, locator):
        if isinstance(locator, str):
         self.page.locator(locator).click()
        else:
         locator.click()

    def fill_text(self, locator, text:str):
        self.page.locator(locator).fill(text)

    def get_inner_text(self, locator):
        return self.page.locator(locator).inner_text()

    def get_input_value(self, locator):
        return self.page.locator(locator).input_value()
    
    def get_current_url(self):
        url = self.page.url
        return url
    
    def get_order_of_items(self, locator):
        arr:list = []
        items = self.page.locator(locator).all()
        for i in range(len(items)):
            item_inner_text = items[i].inner_text()
            arr.append(item_inner_text)
            return arr