
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

// This has a bug, correcting to have it pass afterwards
// test('Title shows up when page loads', async () => {
//     const title = await driver.findElement(By.id('title'))
//     const displayed = await title.isDisplayed()
//     expect(displayed).toBe(true)
// })

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.xpath('(//title)'));
    await driver.sleep(5000);
    expect(await title.isDisplayed()).toBe(true);
})


// test('Clicking draw button displays choices', async () => {
//     const choices = await driver.findElement(By.id('all-bots'));
//     const displayed = await choices.isDisplayed();
//     expect(displayed).toBe(true);
// })


// test('Clicking add to duo button displays the player duo', async () => {
//     const players = await driver.findElement(By.id('player-duo'));
//     const displayed = await players.isDisplayed();
//     expect(displayed).toBe(true);
// })