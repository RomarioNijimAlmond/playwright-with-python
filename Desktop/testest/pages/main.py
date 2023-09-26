from pages.base_page import BasePage
from playwright.sync_api import Page

class Main(BasePage):
    
    _get_started_locator = '[class="getStarted_Sjon"]'

    def __init__(self,page:Page):
        super().__init__(page)

    def something(self, url):
        self.goto(url)

    def click_link(self):
        self.click(self._get_started_locator)